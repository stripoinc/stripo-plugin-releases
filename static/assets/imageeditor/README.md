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
