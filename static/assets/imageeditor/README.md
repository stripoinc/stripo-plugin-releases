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
