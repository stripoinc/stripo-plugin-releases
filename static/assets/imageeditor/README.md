## Changes in scripts.min.js for Ui Editor
document.querySelector => (document.querySelector("ui-editor") || document.querySelector("ue-root")).shadowRoot.querySelector
<br/>
document.querySelectorAll => (document.querySelector("ui-editor") || document.querySelector("ue-root")).shadowRoot.querySelectorAll
<br/>
window.Pixie => window.EditorPixie
<br/>
pixieWebpackJsonp => editorPixieWebpackJsonp
<br/>
pixie-editor => ui-pixie-editor

## Teardown after `removeEditor()` (ED-9728)

The bundled Angular 7/Fabric lifecycle needs more than `appModule.destroy()`.
The readable changes beside `Cp.addToWindow`, `GD.initPixie` and
`GD.destroyEditor` in `scripts.min.js`:

- Dispose the canvas through the vendor canvas tool's `fabric().dispose()`.
  Fabric otherwise keeps its bound resize listener on `window`, retaining the
  canvas and the entire detached editor shadow tree.
- Retain and destroy the zoom tool's Hammer pinch manager, unsubscribe the
  canvas resize subscription, and remove the keybinding service's exact document
  handlers. Disposing Fabric alone leaves these independent global listeners.
- Unregister this module's component roots from its own TestabilityRegistry.
- Remove the exact stabilizer installed by that registry and restore the prior
  property descriptors for the three global Testability functions, only while
  those globals still point to Pixie's functions. Host registrations survive.
- Destroy the vendor's own platform and clear the module, platform and injector
  references, including its private Angular platform singleton and NGXS
  SelectFactory's static store/config. Repeated teardown is a no-op.
- Register destruction hooks for dynamically resolved `providedIn: 'root'`
  services in Angular 7's `Ka` injector path. Its static module destroy list
  otherwise omits them, leaving CDK viewport resize/orientation listeners alive.
- Unsubscribe the bootstrap error observer and ApplicationRef's microtask
  observer when destroying the vendor module/application. Otherwise an orphaned
  NgZone can retain the destroyed injector and its DOM through these observers.
- Clear host lifecycle callbacks from the vendor settings during teardown.
- Fix CDK BreakpointObserver's listener ownership: each `fromEventPattern`
  subscription returns its own MediaQueryList callback as its removal token.
  The original shared variable removed only the latest listener when several
  subscribers observed the same query, retaining closed tooltip/animation views.

Keep these changes when replacing the vendor bundle. The regression scenario in
`ui-editor-ui/e2e/tests/plugin-controls/plugin-pixie-editor.spec.ts` uses the real bundle and
three init/open/remove cycles in one page. It forces Chromium GC and checks that
WeakRefs to every closed editor/global-container/Pixie root are cleared, while
host Testability hooks survive. The final cycle closes Pixie before removing the
editor. Mocked vendor unit tests cannot prove this.

Host cleanup also matters: static subscriber destroy subscriptions must complete
after their first notification, and a destroyed shared subscription must release
its source and replayed event. Otherwise a dispatcher ReplaySubject can retain
the last DOM event and its detached iframe, even after vendor cleanup succeeds.
## Changes in styles.min.css for Ui Editor
pixie-editor => ui-pixie-editor

## CSP: removed `unsafe-eval` requirement (ED-7987)
`scripts.min.js` is additionally patched by `scripts/patch-imageeditor-csp.js`
(the `REPLACEMENTS` array there is the authoritative list of changes) so the
image editor works under a strict `script-src` **without** `'unsafe-eval'`.
In short: the NGXS config flip to its CSP-safe selector path, Angular JIT
reflector accessors → closures, and the core-js global-object probe →
`globalThis`.

`npm run csp:check-invariants` (part of `ci:static-checks`) verifies the
committed blob still carries every replacement. **A new vendor build will be
re-minified with different identifiers, so the script's anchors will NOT match
— a vendor update requires redoing the eval-call-site analysis**
(`docs/csp-unsafe-eval-ED-7987.md`) and updating the script's anchors, not just
re-running it.

Still present but **dead** for Pixie's feature set (do not require `unsafe-eval` at
runtime): core-js `Function#bind` polyfill fallback, fabric.js `_initClipping` /
`Pattern` string-form deserialisation, NGXS `new Function` fast path (unreachable
after the config flip). Verified by e2e (`plugin-pixie-editor.spec.ts`) passing under
a strict-CSP reverse proxy with zero `Function`/`eval` calls during open
(see `ui-editor-ui/docs/csp-unsafe-eval-ED-7987.md`).
