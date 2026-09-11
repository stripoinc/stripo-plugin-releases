(function(){var e=class e{constructor(t,n){if(n!==e){e.validatedClasses.has(n)||this.validateImplementation(t,n);let r=e.validationErrors.get(n);if(r&&r.length>0)throw Error(`${n.name} has validation errors:
${r.map(e=>`  - ${e}`).join(`
`)}`)}}validateImplementation(t,n){let r=[],i=n.name,a=Object.getPrototypeOf(this);t.forEach(e=>{if(typeof this[e]!=`function`){r.push(`Method ${e}() is not defined`);return}a[e]===n.prototype[e]&&r.push(`Method ${e}() must be implemented (currently using base class error-throwing implementation)`)}),e.validatedClasses.add(n),r.length>0?(e.validationErrors.set(n,r),console.error(`[${i} Validation] ${i} validation failed:`,r)):typeof process<`u`&&process.env.NODE_ENV===`development`&&console.log(`[${i} Validation] \u2705 ${i} validated successfully`)}destroy(){}};e.validatedClasses=new Set,e.validationErrors=new Map;var t=e,n=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}isEnabled(){return!0}canBeSavedAsModule(){return!1}getContextActionsIds(){}getCustomRenderer(){}getUniqueBlockClassname(){return`esd-${this.getId()}`}onDocumentInit(){}onSelect(e){}onCopy(e){}onDelete(e){}onCreated(e){}onDocumentChanged(e){}getBlockCompositionType(){return`BLOCK`}shouldDisplayQuickAddIcon(){return!1}shouldDisplayInBlocksPanel(){return!0}allowInnerBlocksSelection(){return!0}allowInnerBlocksDND(){return!0}isNestedImageResizeEnabled(){return!0}allowInteractWithAMPWhenSelected(){return!0}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}getTemplateStyles(){return``}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}getSettingsPanelTitleHtml(){return``}getDescription(){throw Error(`Method getDescription() must be implemented by the subclass`)}};n.REQUIRED_METHODS=[`getId`,`getTemplate`,`getIcon`,`getName`,`getDescription`];var r=n,i=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getPreviewHtml(e){}getPreviewInnerHtml(e){throw Error(`Method getPreviewInnerHtml() must be implemented by the subclass`)}};i.REQUIRED_METHODS=[`getPreviewInnerHtml`];var a=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getLabel(){throw Error(`Method getLabel() must be implemented by the subclass`)}onClick(e){throw Error(`Method onClick() must be implemented by the subclass`)}};a.REQUIRED_METHODS=[`getId`,`getIcon`,`getLabel`,`onClick`];var o=`esd-block-button`,s=`esd-block-text`,c=`esd-block-image`,l=`esd-structure`,u=`esd-block-video`,d=`esd-block-social`,f=`esd-block-banner`,p=`esd-block-timer`,m=`esd-block-menu`,h=`esd-block-html`,g=`esd-block-spacer`,ee=`esd-container-frame`,te=`esd-stripe`,ne=`esd-amp-form`,re=(e=>(e.BUTTON=`.${o}`,e.TEXT=`.${s}`,e.IMAGE=`.${c}`,e.STRUCTURE=`.${l}`,e.VIDEO=`.${u}`,e.SOCIAL=`.${d}`,e.BANNER=`.${f}`,e.TIMER=`.${p}`,e.MENU=`.${m}`,e.HTML=`.${h}`,e.SPACER=`.${g}`,e.CONTAINER=`.${ee}`,e.STRIPE=`.${te}`,e.FORM=`.${ne}`,e))(re||{}),_={name:`name`,disabled:`disabled`},ie={..._,caption:`caption`,icon:`icon`},ae={..._,caption:`caption`},oe={..._,minValue:`min-value`,maxValue:`max-value`,step:`step`},se={..._,placeholder:`placeholder`,minDate:`min-date`},v={..._,text:`text`,hint:`hint`},ce={..._,type:`type`,icon:`icon`},le={..._,buttons:`buttons`},y={..._,searchable:`searchable`,multiSelect:`multi-select`,placeholder:`placeholder`,items:`items`},ue={...y,addCustomFontOption:`add-custom-font-option`},de={..._,text:`text`,value:`value`},fe={..._,text:`text`,hint:`hint`,icon:`icon`,value:`value`},pe={..._,buttons:`buttons`},me={..._,text:`text`,hint:`hint`,icon:`icon`,value:`value`},b={..._,placeholder:`placeholder`},x={DEFAULT:_,BUTTON:ie,CHECKBOX:ae,CHECK_BUTTONS:pe,COLOR:_,COUNTER:oe,DATEPICKER:se,LABEL:v,MESSAGE:ce,RADIO_BUTTONS:le,SELECTPICKER:y,FONT_FAMILY_SELECT:ue,SWITCHER:_,TEXT:b,RICH_TEXT:{...b,hasMergeTagIcon:`has-merge-tag-icon`,maxLength:`max-length`,singleLine:`single-line`},TEXTAREA:{..._,resizable:`resizable`,placeholder:`placeholder`},ICON:{..._,img:`img`,src:`src`,title:`title`,imageClass:`image-class`,hint:`hint`,disabled:`disabled`,isActive:`is-active`,visibility:`visibility`,transform:`transform`},CHECK_ITEM:fe,SELECT_ITEM:de,RADIO_ITEM:me,NESTED_CONTROL:{..._,controlId:`control-id`},EXPANDABLE:{..._,expanded:`expanded`},ORDERABLE:{..._,icon:`icon`,position:`position`},ORDERABLE_ITEM:{..._},ORDERABLE_ICON:{..._,icon:`icon`},REPEATABLE:{..._},DRAGGABLE_BLOCK:{..._,blockId:`block-id`},AMP_FORM_SERVICE_PICKER:{..._},MULTIPLE_SELECT:{..._,placeholder:`placeholder`}},S=(e=>(e.BUTTON=`UE-BUTTON`,e.CHECKBOX=`UE-CHECKBOX`,e.CHECK_BUTTONS=`UE-CHECK-BUTTONS`,e.COLOR=`UE-COLOR`,e.COUNTER=`UE-COUNTER`,e.DATEPICKER=`UE-DATEPICKER`,e.LABEL=`UE-LABEL`,e.MESSAGE=`UE-MESSAGE`,e.RADIO_BUTTONS=`UE-RADIO-BUTTONS`,e.SELECTPICKER=`UE-SELECT`,e.SWITCHER=`UE-SWITCHER`,e.TEXT=`UE-TEXT`,e.RICH_TEXT=`UE-RICH-TEXT`,e.TEXTAREA=`UE-TEXTAREA`,e.CHECK_ITEM=`UE-CHECK-ITEM`,e.RADIO_ITEM=`UE-RADIO-ITEM`,e.SELECT_ITEM=`UE-SELECT-ITEM`,e.ICON=`UE-ICON`,e.MERGETAGS=`UE-MERGETAGS`,e.FONT_FAMILY_SELECT=`UE-FONT-FAMILY-SELECT`,e.NESTED_CONTROL=`UE-NESTED-CONTROL`,e.EXPANDABLE=`UE-EXPANDABLE`,e.EXPANDABLE_HEADER=`UE-EXPANDABLE_HEADER`,e.EXPANDABLE_CONTENT=`UE-EXPANDABLE_CONTENT`,e.ORDERABLE=`UE-ORDERABLE`,e.ORDERABLE_ITEM=`UE-ORDERABLE-ITEM`,e.ORDERABLE_ICON=`UE-ORDERABLE-ICON`,e.REPEATABLE=`UE-REPEATABLE`,e.DRAGGABLE_BLOCK=`UE-DRAGGABLE-BLOCK`,e.AMP_FORM_SERVICE_PICKER=`UE-AMP-FORM-SERVICE-PICKER`,e.MULTIPLE_SELECT=`UE-MULTIPLE_SELECT`,e.SCROLLABLE=`UE-SCROLLABLE-CONTAINER`,e.POPUP_PANEL=`UE-POPUP-PANEL`,e))(S||{}),C=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}isVisible(e){return!0}onRender(){}onDestroy(){}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onTemplateNodeUpdated(e){}onDocumentChanged(e){}getElementLockCategory(){return`content`}};C.REQUIRED_METHODS=[`getId`,`getTemplate`];var w=C,he=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getTabIndex(){throw Error(`Method getTabIndex() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}isEnabled(){return!0}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onDocumentChanged(){}onRender(){}onDestroy(){}};he.REQUIRED_METHODS=[`getId`,`getIcon`,`getName`,`getTemplate`,`getTabIndex`];var T=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getTabIndex(){throw Error(`Method getTabIndex() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}isEnabled(){return!0}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onRender(){}onDocumentChanged(){}};T.REQUIRED_METHODS=[`getId`,`getIcon`,`getName`,`getTemplate`,`getTabIndex`];var ge=T,E=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerBlockControls(e){throw Error(`Method registerBlockControls() must be implemented by the subclass`)}};E.REQUIRED_METHODS=[`registerBlockControls`];var _e=E,ve=class e{constructor(t,n){this.tabId=t,this.controls=n.map(e.normalizeControl)}getTabId(){return this.tabId}getLabel(){return this.label}getControlsIds(){return this.controls.map(e=>e.id)}getControls(){return this.controls}withLabel(e){return this.label=e,this}addControl(t,n){let r=e.normalizeControl(t);return n<0?this.controls.unshift(r):n>this.controls.length?this.controls.push(r):this.controls.splice(n,0,r),this}deleteControl(e){let t=this.controls.findIndex(t=>t.id===e);t!==-1&&this.controls.splice(t,1)}static normalizeControl(e){if(typeof e==`string`)return{id:e};if(!e.id)throw Error(`SettingsPanelTabControlConfig.id is required`);return{...e,id:e.id}}},ye=class{constructor(e){this.uiElements=[],this.controls=[],this.contextActions=[],this.blocks=[],this.generalPanelTabs=[],this.modulesPanelTabs=[],this.i18n=e?.i18n,this.styles=e?.styles,this.previewStyles=e?.previewStyles,this.uiElements=e?.uiElements??[],this.uiElementTagRegistry=e?.uiElementTagRegistry,this.controls=e?.controls??[],this.settingsPanelRegistry=e?.settingsPanelRegistry,this.contextActions=e?.contextActions??[],this.blocks=e?.blocks??[],this.generalPanelTabs=e?.generalPanelTabs??[],this.modulesPanelTabs=e?.modulesPanelTabs??[],this.externalSmartElementsLibrary=e?.externalSmartElementsLibrary,this.externalImageLibrary=e?.externalImageLibrary,this.externalImageLibraryTab=e?.externalImageLibraryTab,this.externalAiAssistant=e?.externalAiAssistant,this.externalDisplayConditionsLibrary=e?.externalDisplayConditionsLibrary,this.externalVideoLibrary=e?.externalVideoLibrary,this.blocksPanel=e?.blocksPanel,this.iconsRegistry=e?.iconsRegistry,this.id=Math.random().toString(36).substring(2)}getI18n(){return this.i18n}getStyles(){return this.styles}getPreviewStyles(){return this.previewStyles}getUiElements(){return this.uiElements}getUiElementTagRegistry(){return this.uiElementTagRegistry}getControls(){return this.controls}getSettingsPanelRegistry(){return this.settingsPanelRegistry}getContextActions(){return this.contextActions}getBlocks(){return this.blocks}getId(){return this.id}getExternalSmartElementsLibrary(){return this.externalSmartElementsLibrary}getExternalImageLibrary(){return this.externalImageLibrary}getExternalImageLibraryTab(){return this.externalImageLibraryTab}getExternalAiAssistant(){return this.externalAiAssistant}getExternalDisplayConditionsLibrary(){return this.externalDisplayConditionsLibrary}getExternalVideoLibrary(){return this.externalVideoLibrary}getBlocksPanel(){return this.blocksPanel}getIconsRegistry(){return this.iconsRegistry}getGeneralPanelTabs(){return this.generalPanelTabs}getModulesPanelTabs(){return this.modulesPanelTabs}},be=class{constructor(){this.styles=[],this.uiElements=[],this.controls=[],this.contextActions=[],this.blocks=[],this.generalPanelTabs=[],this.modulesPanelTabs=[]}withLocalization(e){return this.i18n=e,this}withStyles(e){return this.styles=[e],this}addStyles(e){return this.styles.push(e),this}withPreviewStyles(e){return this.previewStyles=e,this}addContextAction(e){return this.contextActions.push(e),this}addUiElement(e){return this.uiElements.push(e),this}withUiElementTagRegistry(e){return this.uiElementTagRegistry=e,this}addControl(e){return this.controls.push(e),this}withSettingsPanelRegistry(e){return this.settingsPanelRegistry=e,this}withExternalSmartElementsLibrary(e){return this.externalSmartElementsLibrary=e,this}withExternalImageLibrary(e){return this.externalImageLibrary=e,this}withExternalImageLibraryTab(e){return this.externalImageLibraryTab=e,this}withExternalAiAssistant(e){return this.externalAiAssistant=e,this}withExternalDisplayCondition(e){return this.externalDisplayConditionsLibrary=e,this}withExternalVideosLibrary(e){return this.externalVideoLibrary=e,this}withBlocksPanel(e){return this.blocksPanel=e,this}addBlock(e){return this.blocks.push(e),this}withIconsRegistry(e){return this.iconsRegistry=e,this}addGeneralPanelTab(e){return this.generalPanelTabs.push(e),this}addModulesPanelTab(e){return this.modulesPanelTabs.push(e),this}build(){return new ye({i18n:this.i18n,styles:this.styles.map(e=>e.trim()).join(`
`),uiElements:this.uiElements,uiElementTagRegistry:this.uiElementTagRegistry,controls:this.controls,settingsPanelRegistry:this.settingsPanelRegistry,contextActions:this.contextActions,blocks:this.blocks,externalSmartElementsLibrary:this.externalSmartElementsLibrary,externalImageLibrary:this.externalImageLibrary,previewStyles:this.previewStyles,externalAiAssistant:this.externalAiAssistant,externalDisplayConditionsLibrary:this.externalDisplayConditionsLibrary,externalVideoLibrary:this.externalVideoLibrary,blocksPanel:this.blocksPanel,iconsRegistry:this.iconsRegistry,externalImageLibraryTab:this.externalImageLibraryTab,generalPanelTabs:this.generalPanelTabs,modulesPanelTabs:this.modulesPanelTabs})}},xe=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openAiAssistant(e){throw Error(`Method openAiAssistant() must be implemented by the subclass`)}};xe.REQUIRED_METHODS=[`openAiAssistant`];var Se=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getCategoryName(){throw Error(`Method getCategoryName() must be implemented by the subclass`)}openExternalDisplayConditionsDialog(e,t,n){throw Error(`Method openExternalDisplayConditionsDialog() must be implemented by the subclass`)}getIsContextActionEnabled(){throw Error(`Method getIsContextActionEnabled() must be implemented by the subclass`)}getContextActionIndex(){throw Error(`Method getContextActionIndex() must be implemented by the subclass`)}};Se.REQUIRED_METHODS=[`getCategoryName`,`openExternalDisplayConditionsDialog`];var Ce=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openImageLibrary(e,t,n){throw Error(`Method openImageLibrary() must be implemented by the subclass`)}};Ce.REQUIRED_METHODS=[`openImageLibrary`];var D=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}openImageLibraryTab(e,t,n){throw Error(`Method openImageLibraryTab() must be implemented by the subclass`)}};D.REQUIRED_METHODS=[`getName`,`openImageLibraryTab`];var O=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openSmartElementsLibrary(e,t){throw Error(`Method openSmartElementsLibrary() must be implemented by the subclass`)}};O.REQUIRED_METHODS=[`openSmartElementsLibrary`];var k=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openExternalVideosLibraryDialog(e,t,n){throw Error(`Method openExternalVideosLibraryDialog() must be implemented by the subclass`)}};k.REQUIRED_METHODS=[`openExternalVideosLibraryDialog`];var A=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerIconsSvg(e){throw Error(`Method registerIconsSvg() must be implemented by the subclass`)}};A.REQUIRED_METHODS=[`registerIconsSvg`];var we=A,Te=class{constructor(e){this.hidden=!1,this.key=e}withParams(e){return this.params=e,this}asHidden(e=!0){return this.hidden=e,this}isHidden(){return this.hidden}getValue(){return{key:this.key,params:this.params}}},j=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}onRender(e){throw Error(`Method onRender() must be implemented by the subclass`)}onDestroy(){}getValue(){}setValue(e){}onAttributeUpdated(e,t){}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}};j.REQUIRED_METHODS=[`onRender`,`getId`,`getTemplate`];var M=j,Ee=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerUiElements(e){throw Error(`Method registerUiElements() must be implemented by the subclass`)}};Ee.REQUIRED_METHODS=[`registerUiElements`];var De=`/*Widgets Panel*/
.widgets-panel-item .widget-icon {
    display: block;
    width: 100%;
}

.widgets-panel-item .widgets-hovered-icon {
    position: relative;
    display: block;
    width: 100%;
    height: 95px;
    border-radius: 10px;
    overflow: hidden;
    vertical-align: top;
}

.widgets-panel-item .widgets-hovered-icon::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    pointer-events: none;
}

.widgets-panel-item .widgets-hovered-icon__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.widgets-panel-item .widgets-hovered-icon__image--default {
    opacity: 1;
}

.widgets-panel-item .widgets-hovered-icon__image--hover {
    opacity: 0;
}

.widgets-panel-item .widgets-hovered-icon--hover-ready:hover .widgets-hovered-icon__image--default,
.widgets-panel-item .widgets-hovered-icon--hover-ready:focus-within .widgets-hovered-icon__image--default {
    opacity: 0;
}

.widgets-panel-item .widgets-hovered-icon--hover-ready:hover .widgets-hovered-icon__image--hover,
.widgets-panel-item .widgets-hovered-icon--hover-ready:focus-within .widgets-hovered-icon__image--hover {
    opacity: 1;
}

.widgets-panel-item .block-thumb {
    padding: 0;
    overflow: hidden;
    border-radius: 10px;
}

.widgets-panel {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.widgets-panel-content {
    flex: 1;
    overflow: hidden;
}

.widgets-panel-content .ue-scrollable-content {
    padding: 0 20px;
}

.widgets-panel-content ue-ui-form {
    margin-top: 2px;
}

/*Zeplin: widget caption — 12px, #787878, centered under the tile*/
.widgets-panel-item .info-wrapper {
    display: flex;
    justify-content: center;
    margin: 12px 0 20px;
    padding: 0;
}

.widgets-panel-item .info-wrapper ue-label .label {
    font-size: 12px;
    line-height: 16px;
    color: hsla(var(--ue-font-color_h, 0),
            var(--ue-font-color_s, 0%),
            var(--ue-font-color_l, 33.33%),
            0.85);
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.widgets-panel-item .widget-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 20px;
}

.widgets-panel-filter-container {
    margin-top: 0;
    padding: 0 15px 15px;
}

.widgets-panel-separator {
    padding-top: 1px;
    margin: 0 -20px;
}

/*Widget categories*/
.widgets-nav-header--empty {
    display: none;
}

.widgets-category-section {
    padding: 0 20px;
    margin: 0 -20px;
    border-top: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

/*Zeplin: category header — a 36px row, 14px regular #555555, chevron in a 20px box after the text*/
.widgets-nav-header__button {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    min-height: 36px;
    padding: 0;
    border: 0;
    background: none;
    color: hsla(var(--ue-font-color_h, 0),
            var(--ue-font-color_s, 0%),
            var(--ue-font-color_l, 33.33%),
            var(--ue-font-color_t, 1));
    font: inherit;
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    cursor: pointer;
}

.widgets-nav-header__arrow {
    flex: none;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 20px;
}

.widgets-nav-header:not(.widgets-nav-header--back) .widgets-nav-header__arrow {
    order: 1;
    transform: rotate(-90deg);
}

.widgets-nav-header__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.widgets-nav-header__button:hover {
    color: hsla(var(--ue-font-color_h, 0),
            var(--ue-font-color_s, 0%),
            var(--ue-font-color_l, 33.33%),
            var(--ue-font-color_t, 1));
}

/*Zeplin: the opened-category header sticks to the top with a hairline below.
  The sticky sits on the ue-extension-input wrapper: the header itself is as tall as the wrapper,
  so sticking the header inside it would give it no room to stick.*/
.widgets-panel-content ue-extension-input:has(> .widgets-nav-header--back:not(.widgets-nav-header--empty)) {
    /*custom elements default to inline, and position:sticky does not apply to inline boxes*/
    display: block;
    position: sticky;
    top: 0;
    /*above the widget tiles: .widgets-panel-item carries the editor's position:relative + z-index:1*/
    z-index: 2;
}

.widgets-nav-header--back {
    margin: 0 -20px;
    padding: 0 20px;
    background: hsla(var(--ue-option-panel-background-color_h, 0),
            var(--ue-option-panel-background-color_s, 0%),
            var(--ue-option-panel-background-color_l, 100%),
            var(--ue-option-panel-background-color_t, 1));
}

.widgets-nav-header--back .widgets-nav-header__button {
    gap: 12px;
}

/*Zeplin: main list row — 140x95 tiles, 15px gap, horizontal scroll*/
.widgets-category-row {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0 -20px;
    padding: 0 20px;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}

.widgets-category-row::-webkit-scrollbar {
    height: 4px;
}

.widgets-category-row::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: transparent;
}

.widgets-category-row:hover {
    scrollbar-color: var(--ue-input-hover-color, rgba(0, 0, 0, 0.1)) transparent;
}

.widgets-category-row:hover::-webkit-scrollbar-thumb {
    background: var(--ue-input-hover-color, rgba(0, 0, 0, 0.1));
}

.widgets-category-row>ue-ui-form {
    flex: 0 0 auto;
    width: 140px;
}

.widgets-category-row .widgets-panel-item .info-wrapper {
    margin: 12px 0 8px;
}

/*Full-width list: inside an opened category (the back header carries a label) or for an unlabeled group*/
.widgets-panel:has(.widgets-nav-header--back:not(.widgets-nav-header--empty)) .widgets-category-row,
.widgets-category-row--full {
    display: block;
    overflow: visible;
    margin: 0;
    padding: 12px 0 0;
}

.widgets-panel:has(.widgets-nav-header--back:not(.widgets-nav-header--empty)) .widgets-category-row>ue-ui-form,
.widgets-category-row--full>ue-ui-form {
    width: auto;
}

/*Zeplin: opened category and unlabeled group — full-width 21:10 tiles*/
.widgets-panel:has(.widgets-nav-header--back:not(.widgets-nav-header--empty)) .widgets-panel-item .widgets-hovered-icon,
.widgets-category-row--full .widgets-panel-item .widgets-hovered-icon {
    height: auto;
    aspect-ratio: 21 / 10;
}

.widgets-panel:has(.widgets-nav-header--back:not(.widgets-nav-header--empty)) .widgets-panel-item .info-wrapper,
.widgets-category-row--full .widgets-panel-item .info-wrapper {
    margin: 12px 0 24px;
}

.widgets-panel:has(.widgets-nav-header--back:not(.widgets-nav-header--empty)) .widgets-panel-item .info-wrapper ue-label .label {
    font-size: 14px;
}

.widgets-category-section:not(:has(.widgets-panel-item)) {
    display: none;
}

/*AI panel*/
#settings_widgetsAi_content .ue-scrollable-content {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.ui-editor-widgets-ai-panel-control {
    height: 100%;
}

.widgets-ai-panel-with-data-service {
    border-top: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

#ui-editor-widgets-ai-panel-container {
    height: calc(100% - 9px);
    padding: 0px 9px;
}
`,Oe=`.ue-mime-type-both .ue-widget-html-version,
.ue-mime-type-amp-html .ue-widget-html-version {
    display: none;
}
`,ke=`/widgets/registry/api/v1/widgets/ui-config`,Ae=`/widgets/registry/api/v1/widgets/markup`,je=`/convo/auth/api/v1/auth/token`,Me=`/convo/core/api/v1/chatkit`,Ne=`/convo/core/api/v1/attachments/register`,Pe=class{composerAttachments=[];constructor({attachmentsRegisterUrl:e,makeRequest:t,getChatKitElement:n}){this.attachmentsRegisterUrl=e,this.makeRequest=t,this.getChatKitElement=n}async attachImage(e){if(!e)return;let t=this.getChatKitElement();if(typeof t?.setComposerValue==`function`)try{let n=await this.#e(e);this.#i(n),await t.setComposerValue({attachments:this.composerAttachments,selectedToolId:null}),t.focusComposer?.()}catch(e){console.error(`[chatkit.attachImage.error]`,e)}}reset(){this.composerAttachments=[],Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:[],selectedToolId:null})).catch(e=>console.error(`[chatkit.cancelComposer.error]`,e))}cancel(){Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:this.composerAttachments,selectedToolId:null})).catch(e=>console.error(`[chatkit.cancelComposer.error]`,e))}deleteAttachment(e){this.composerAttachments=this.composerAttachments.filter(({id:t})=>t!==e),Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:this.composerAttachments,selectedToolId:null}))}async#e(e){let t=await this.makeRequest({url:this.attachmentsRegisterUrl,options:{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(this.#t(e))}});if(!t.ok)throw Error(`Failed to register image attachment`);let n=await t.json();if(!this.#r(n))throw Error(`Invalid image attachment registration response`);return n}#t(e){return{type:`image`,name:this.#a(e),mime_type:`image/*`,preview_url:e.url,metadata:this.#n(e)}}#n(e){return{original_url:e.url,...e.originalName?{original_name:e.originalName}:{},...e.width?{width:e.width}:{},...e.height?{height:e.height}:{},...e.sizeBytes?{size_bytes:e.sizeBytes}:{}}}#r(e){return!!(e&&typeof e==`object`&&typeof e.id==`string`&&e.id)}#i(e){this.composerAttachments=[...this.composerAttachments.filter(({id:t})=>t!==e.id),e]}#a(e){return e.originalName||this.#o(e.url)}#o(e){let t=`attached-image`;try{let n=new URL(e).pathname.split(`/`).filter(Boolean).pop();if(!n)return t;try{return decodeURIComponent(n)}catch{return n}}catch{return t}}},N=`attach_image`,P=`plugin`,Fe=`domain_pk_698f401a72f4819487598b2d409e5276015e1bb610e23585`,Ie=class{failedAiRequestsCount=0;chatKitUrl=Me;constructor({domainName:e,chatKitPanelContainer:t,onClientTool:n,eventHandlers:r,headerTitle:i,startScreenGreeting:a,quickStartPrompts:o,composerPlaceholder:s,locale:c,theme:l,attachImageToolLabel:u,onAttachImage:d,authTokenGetter:f,domainModelRevisionGetter:p,fetchFn:m,editorMode:h,chatkitDomainPublicKey:g}){this.domainName=e,this.editorMode=h,this.chatkitDomainPublicKey=g||Fe,this.chatKitPanelContainer=t,this.onClientTool=n,this.eventHandlers=r,this.headerTitle=i,this.startScreenGreeting=a,this.quickStartPrompts=o||[],this.composerPlaceholder=s,this.locale=c,this.theme=l||this.#s(),this.attachImageToolLabel=u||`Attach Image`,this.onAttachImage=d,this.authTokenGetter=f,this.domainModelRevisionGetter=p,this.fetchFn=m||fetch,this.attachmentsManager=new Pe({attachmentsRegisterUrl:Ne,makeRequest:e=>this.makeRequest({...e,streaming:!1,includeDomainModelRevision:!1}),getChatKitElement:()=>this.chatKitElement})}initPanel({domainModelId:e,metadata:t,threadIdStorageKey:n}){this.chatKitElement&&this.destroyPanel(),this.domainModelId=e,this.metadata=t,this.threadIdStorageKey=n,this.#e(this.#n.bind(this))}destroyPanel(){this.chatKitElement&&=(this.chatKitElement.remove(),null),this.attachmentsManager.reset()}#e(e){if(document.getElementById(`ui-editor-chatkit-script`)){e();return}let t=this.#t();t.onload=()=>{window.customElements?customElements.whenDefined(`openai-chatkit`).then(e):document.addEventListener(`DOMContentLoaded`,function(){setTimeout(e,1e3)})},document.head.appendChild(t)}#t(){let e=document.createElement(`script`);return e.src=`https://cdn.platform.openai.com/deployments/chatkit/chatkit.js`,e.id=`ui-editor-chatkit-script`,e.async=!0,e}#n(){let e=this.getThreadId();this.chatKitElement=document.createElement(`openai-chatkit`),this.chatKitElement.setOptions(this.#i({initialThread:e})),this.chatKitElement.setAttribute(`style`,`height: 100%`),this.chatKitElement.addEventListener(`chatkit.thread.change`,e=>{this.attachmentsManager.reset(),e?.detail?.threadId&&this.setThreadId(e.detail.threadId)}),this.chatKitElement.addEventListener(`chatkit.thread.created`,e=>{this.attachmentsManager.reset(),e?.detail?.threadId&&this.setThreadId(e.detail.threadId)}),this.chatKitElement.addEventListener(`chatkit.user_message.sent`,()=>{this.attachmentsManager.reset()}),this.chatKitElement.addEventListener(`chatkit.tool.change`,e=>{e?.detail?.toolId===N&&this.#a()}),this.eventHandlers&&Object.keys(this.eventHandlers).forEach(e=>{this.chatKitElement.addEventListener(e,this.eventHandlers[e])}),this.chatKitPanelContainer.appendChild(this.chatKitElement),this.#r(e)}#r(e){!e||typeof this.chatKitElement?.setThreadId!=`function`||Promise.resolve().then(()=>this.chatKitElement.setThreadId(e)).catch(e=>console.error(`[chatkit.setThreadId.error]`,e))}#i({initialThread:e=null}={}){let t={api:{url:this.chatKitUrl,domainKey:this.chatkitDomainPublicKey,fetch:(e,t)=>this.makeRequest({url:e,options:t})},theme:this.theme,onClientTool:this.onClientTool?.bind(this),...this.locale?{locale:this.locale}:{}},n={...this.composerPlaceholder?{placeholder:this.composerPlaceholder}:{},...this.onAttachImage?{tools:[{id:N,icon:`images`,label:this.attachImageToolLabel,shortLabel:this.attachImageToolLabel,pinned:!1}]}:{}};return{...t,initialThread:e,...this.headerTitle?{header:{title:{text:this.headerTitle}}}:{},startScreen:{greeting:this.startScreenGreeting,prompts:this.quickStartPrompts.map(e=>({icon:`circle-question`,label:e.label,prompt:e.prompt}))},...Object.keys(n).length?{composer:n}:{}}}#a(){this.onAttachImage&&Promise.resolve().then(()=>this.onAttachImage({onSelect:e=>this.#o(e),onCancel:()=>this.attachmentsManager.cancel(),onError:e=>{console.error(`[chatkit.attachImage.error]`,e)}})).catch(e=>console.error(`[chatkit.attachImage.error]`,e))}#o(e){return this.attachmentsManager.attachImage(e)}#s(){return{colorScheme:`light`,radius:`round`,density:`compact`,color:{accent:{primary:`#32CB4A`,level:1},surface:{background:`#ffffff`,foreground:`#EDEDED`}},typography:{baseSize:14}}}async makeRequest({url:e,options:t,streaming:n=!0,includeDomainModelRevision:r=!0}){if(r&&this.domainModelRevisionGetter)try{let e=JSON.parse(t.body);e.domainModelRevision=this.domainModelRevisionGetter(),e.type===`attachments.delete`&&this.attachmentsManager.deleteAttachment(e.params?.attachment_id),t.body=JSON.stringify(e)}catch(e){console.error(e)}let i=new Headers(t.headers||void 0);Object.entries(this.metadata||{}).forEach(([e,t])=>{i.set(e,String(t))}),this.editorMode!==P&&i.set(`AUTH-TOKEN`,await this.getAuthToken()),i.set(`DOMAIN-MODEL-ID`,String(this.domainModelId)),i.set(`DOMAIN-NAME`,String(this.domainName)),i.set(`THREAD-ID`,String(this.getThreadId()));let a=await this.fetchFn(e,{...t,streaming:n,headers:i});if(a.status===401&&this.editorMode!==P){if(this.failedAiRequestsCount++,this.failedAiRequestsCount>2)throw Error(`Too many failed requests from AI Panel`);return await this.getAuthToken(!0),this.makeRequest({url:e,options:t,streaming:n,includeDomainModelRevision:r})}return this.failedAiRequestsCount=0,a}async getAuthToken(e=!1){return this.authToken&&!e||(this.authToken=await this.authTokenGetter()),this.authToken}getThreadId(){return this.threadIdStorageKey?window.sessionStorage.getItem(this.threadIdStorageKey):null}setThreadId(e){this.threadIdStorageKey&&window.sessionStorage.setItem(this.threadIdStorageKey,e)}},Le=`#ffffff`;function Re(e={}){let t=Be(e,`--ue-option-panel-background-color`,Le),n=ze(t);return{colorScheme:n?`dark`:`light`,radius:`round`,density:`compact`,color:{accent:{primary:`#32CB4A`,level:1},surface:{background:t,foreground:n?`#1B1B1B`:`#EDEDED`}},typography:{baseSize:14}}}function ze(e){let t=Ve(e);return t?Ke(t)<.5:!1}function Be(e,t,n){let r=e[`${t}_h`],i=e[`${t}_s`],a=e[`${t}_l`],o=e[`${t}_t`];return[r,i,a,o].some(e=>e==null||e===``)?n:`hsla(${r}, ${i}, ${a}, ${o})`}function Ve(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase();return He(t)||Ue(t)||We(t)}function He(e){let t=e.match(/^#([0-9a-f]{3})$/i);if(t)return t[1].split(``).map(e=>parseInt(`${e}${e}`,16));let n=e.match(/^#([0-9a-f]{6})$/i);return n?[parseInt(n[1].slice(0,2),16),parseInt(n[1].slice(2,4),16),parseInt(n[1].slice(4,6),16)]:null}function Ue(e){let t=e.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);return t?[I(Number(t[1])),I(Number(t[2])),I(Number(t[3]))]:null}function We(e){let t=e.match(/^hsla?\(\s*([-\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/);return t?Ge(Number(t[1]),Number(t[2]),Number(t[3])):null}function Ge(e,t,n){let r=(e%360+360)%360/360,i=L(t)/100,a=L(n)/100;if(i===0){let e=I(a*255);return[e,e,e]}let o=a<.5?a*(1+i):a+i-a*i,s=2*a-o;return[F(s,o,r+1/3),F(s,o,r),F(s,o,r-1/3)].map(e=>I(e*255))}function F(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ke(e){let[t,n,r]=e.map(e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4});return .2126*t+.7152*n+.0722*r}function I(e){return Number.isFinite(e)?Math.round(Math.min(255,Math.max(0,e))):0}function L(e){return Number.isFinite(e)?Math.min(100,Math.max(0,e)):0}var R=class e{static buildConfig({widgetId:e,initialJsonConfig:t,currentConfig:n={}}){return{widgetId:e,jsonConfig:n.jsonConfig?{...n.jsonConfig}:{...t},blockUUID:crypto.randomUUID()}}static updateConfigJsonConfig({jsonConfig:e,currentConfig:t={}}){return{...t,jsonConfig:{...e}}}static updateConfigAmpServiceUrl({ampServiceUrl:e,currentConfig:t={}}){return{...t,jsonConfig:{...t.jsonConfig,amp_service_url:e}}}static getHiddenWidgetState(t){return e.getJsonConfig(t).hide_widget}static getJsonConfig(e){return e?.jsonConfig||{}}static getWidgetId(e){return e?.widgetId}static getBlockUUID(e){return e?.blockUUID}static getAmpServiceUrl(e){return e?.jsonConfig?.amp_service_url}static isSameWidget({currentConfig:e,newConfig:t}){return e?e.blockUUID===t?.blockUUID:!1}},z={};function qe(e,t){if(t)return z[e]=t,t;delete z[e]}function Je(e){if(!e?.platformApi)throw Error(`platformApi is not available for this first-party extension`);return e}function B(e){let t=window.UiEditorFirstPartyExtensionsContext?.[e]?.platformApi;return qe(e,t)}function Ye(e){let t=z[e]||B(e);if(!t)throw Error(`[${e}] platformApi is not available for ${e}`);return t}function Xe(e,t){return t?.platformApi?Je(t).platformApi:Ye(e)}var Ze=`widgets-panel`,V=class e{static async loadPanelConfig(){let t=await e.fetch(`${ke}?useDrafts=${e.isDraftMode()}`,{method:`GET`});if(!t.ok){let e=await t.text();throw console.error(`Failed to get widgets config: ${t.status} ${e}`),Error(`Failed to get widgets config: ${t.status}`)}return t.json()}static async loadWidgetTemplate({widgetId:t,jsonConfig:n,api:r}){let i=await e.fetch(Ae,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({widgetId:t,jsonConfig:n,useDraft:e.isDraftMode()})},r);if(!i.ok){let e=i.text();throw console.error(`Failed to get widgets ${t} config: ${i.status} ${e}`),Error(`Failed to get widgets ${t} config: ${i.status}`)}return i.json()}static async getConvoAuthToken(t){return await e.fetch(je,{method:`GET`},t).then(e=>e.json()).then(e=>e.token)}static getPlatformApi(e){return Xe(Ze,e)}static async fetch(t,n,r){return e.getPlatformApi(r).fetch(t,n)}static isDraftMode(){return localStorage.getItem(`stripoEditorWidgetsDraftMode`)===`true`}},H=`widgets-ai-panel-ui-element`,Qe=class{static buildUiElement(e){return class extends M{getId(){return`${H}_${e.widgetId}`}getTemplate(){return`<div id="ui-editor-widgets-ai-panel-container"></div>`}onRender(t){let n=this.api.getEditorConfig();this.chatKitSdk=new Ie({domainName:`stripo_widget_assistant`,editorMode:n?.editorMode,chatkitDomainPublicKey:n?.firstPartyExtensions?.chatkitDomainPublicKey,authTokenGetter:()=>V.getConvoAuthToken(this.api),fetchFn:(e,t)=>V.fetch(e,t,this.api),chatKitPanelContainer:t.querySelector(`#ui-editor-widgets-ai-panel-container`),eventHandlers:this.getChatKitEventHandlers(),headerTitle:this.api.translate(`AI Assistant`),startScreenGreeting:e.aiGreetingsText?this.api.translate(e.aiGreetingsText):null,quickStartPrompts:(e.quickStartPrompts||[]).map(e=>({prompt:this.api.translate(e.prompt),label:this.api.translate(e.label)})),composerPlaceholder:this.api.translate(`Describe what you want to modify...`),locale:n?.locale,theme:this.getChatkitTheme(),attachImageToolLabel:this.api.translate(`Attach Image`),onAttachImage:e.allowImageAttachments?this.openAttachImageLibrary.bind(this):null,domainModelRevisionGetter:this.getDomainModelRevision.bind(this)})}onDestroy(){super.onDestroy(),this.chatKitSdk.destroyPanel()}getValue(){return this.nodeConfig}setValue(e){e=typeof e==`string`?JSON.parse(e):e;let t=R.getBlockUUID(e);R.isSameWidget({currentConfig:this.getValue(),newConfig:e})||this.chatKitSdk.initPanel({domainModelId:t,threadIdStorageKey:`widgets-thread-id-${t}`,metadata:{widgetId:R.getWidgetId(e),useDraft:V.isDraftMode()}}),this.nodeConfig={...e}}getChatKitEventHandlers(){return{"chatkit.effect":t=>{let{name:n,data:r}=t.detail;if(console.log(`%conEffect`,`background: yellow; color: black;`,n,r),n===`apply_domain_model`){let t=typeof r.domain_model==`string`?JSON.parse(r.domain_model):r.domain_model;this.setValue(R.updateConfigJsonConfig({jsonConfig:t,currentConfig:this.getValue()})),this.api.triggerValueChange(JSON.stringify(this.getValue())),this.api.sendEvent&&this.api.sendEvent(`widget_updated`,{name:e.name})}}}}getDomainModelRevision(){return R.getJsonConfig(this.getValue())}getChatkitTheme(){let e=this.api.getEditorConfig()?.editorThemeVariables;return Re(e)}openAttachImageLibrary({onSelect:e,onCancel:t,onError:n}){try{window.StripoEditorApi.actionsApi.openImageLibrary(null,e,t)}catch(e){n(e)}}}}},U=class e{static prepareExternalWidgetMarkup({widgetMarkupString:t,showAmpOnlyForBothMimeTypeView:n,innerHtml:r=!1,updateUniqueSeed:i=!1}){let a=i?e.#e(t):t,o=document.createElement(`tr`);if(o.innerHTML=a,n){let e=o.querySelector(`.es-visible-amp-html-only`);e&&(o.querySelector(`.es-visible-simple-html-only`)?.classList?.add(`ue-widget-html-version`),e?.classList?.add(`ue-widget-amp-html-version`))}return r?o.querySelector(`td`).innerHTML:o.innerHTML}static#e(t){try{let n=e.#t(t,`w-pref-`);if(n){let e=`${crypto.randomUUID().replace(/-/g,``)}`;return t.replaceAll(n,e)}}catch(e){console.error(`Error replacing unique widget seed:`,e)}return t}static#t(e,t){let n=e.match(RegExp(`${t}[A-Za-z0-9-]+(?=[\\s"'<>]|$)`,`g`));return n?n[0].substring(t.length):null}},W=class e{static async applyWidgetModification({updatedNodeConfig:e,widgetConfig:t,documentModifier:n,node:r,versionHistoryMessage:i,api:a}){let o=await V.loadWidgetTemplate({widgetId:R.getWidgetId(e),jsonConfig:R.getJsonConfig(e),api:a}),s=U.prepareExternalWidgetMarkup({widgetMarkupString:o.module,showAmpOnlyForBothMimeTypeView:t.showAmpOnlyForBothMimeTypeView,innerHtml:!0}),c=R.updateConfigJsonConfig({jsonConfig:o.config,currentConfig:r.getNodeConfig()});n.modifyHtml(r).setHiddenElementState(R.getHiddenWidgetState(c)).setNodeConfig(c).setInnerHtml(s).apply(new Te(i))}static async applyWidgetAmpServiceUrlModification({ampServiceUrl:t,widgetConfig:n,documentModifier:r,node:i,versionHistoryMessage:a,api:o}){let s=R.updateConfigAmpServiceUrl({ampServiceUrl:t,currentConfig:i.getNodeConfig()});return await e.applyWidgetModification({updatedNodeConfig:s,widgetConfig:n,documentModifier:r,node:i,versionHistoryMessage:a,api:o})}},G=`widgets-ai-panel-control`,$e=class{static buildControl(e){return class extends w{getId(){return`${G}_${e.widgetId}`}getTemplate(){return`
                    <div class="ui-editor-widgets-ai-panel-control ${e.hasDataService?`widgets-ai-panel-with-data-service`:``}">
                        <${H}_${e.widgetId} name="widgetAiPanel" style="height: 100%"></${H}_${e.widgetId}>
                    </div>
                `}onRender(){this.api.onValueChanged(`widgetAiPanel`,async t=>{let n=JSON.parse(t);await W.applyWidgetModification({updatedNodeConfig:n,widgetConfig:e,api:this.api,documentModifier:this.api.getDocumentModifier(),node:this.node,versionHistoryMessage:`"${this.api.translate(e.name)}" ${this.api.translate(`widget has been updated`)}`})})}onTemplateNodeUpdated(e){this.node=e,this.api.updateValues({widgetAiPanel:e.getNodeConfig()})}}}},et=`data-service-control`,tt=class{static buildControl(e){return class extends w{getId(){return`${et}_${e.widgetId}`}getTemplate(){return`
                    <div class="container">
                        <${S.AMP_FORM_SERVICE_PICKER} ${x.AMP_FORM_SERVICE_PICKER.name}="dataService"></${S.LABEL}>
                    </div>
                `}onRender(){this.api.onValueChanged(`dataService`,async(t,n)=>{!t&&n||await W.applyWidgetAmpServiceUrlModification({ampServiceUrl:t,widgetConfig:e,api:this.api,documentModifier:this.api.getDocumentModifier(),node:this.node,versionHistoryMessage:`"${this.api.translate(e.name)}" ${this.api.translate(`widget has been updated`)}`})})}onTemplateNodeUpdated(e){this.node=e,this.api.updateValues({dataService:R.getAmpServiceUrl(this.node.getNodeConfig())})}}}},nt=class{static buildWidgetsSettingsPanel(e){return class extends _e{registerBlockControls(t){e.forEach(e=>{let n=[];e.hasDataService&&n.push({id:`data-service-control_${e.widgetId}`}),n.push({id:`${G}_${e.widgetId}`,withFullHeight:!0}),t[e.widgetId]=[new ve(`widgetsAi`,n).withLabel(`Stripo AI`)]})}}}},rt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path d="M7,2 L4,2 C2.8954305,2 2,2.8954305 2,4 L2,7 C2,8.1045695 2.8954305,9 4,9 L7,9 C8.1045695,9 9,8.1045695 9,7 L9,4 C9,2.8954305 8.1045695,2 7,2 Z M4,4 L7,4 L7,7 L4,7 L4,4 Z M7,11 C8.1045695,11 9,11.8954305 9,13 L9,16 C9,17.1045695 8.1045695,18 7,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,13 C2,11.8954305 2.8954305,11 4,11 Z M13,11 L16,11 C17.1045695,11 18,11.8954305 18,13 L18,16 C18,17.1045695 17.1045695,18 16,18 L13,18 C11.8954305,18 11,17.1045695 11,16 L11,13 C11,11.8954305 11.8954305,11 13,11 Z M4,13 L4,16 L7,16 L7,13 L4,13 Z M16,13 L13,13 L13,16 L16,16 L16,13 Z M13.0857864,1.96446609 C13.866835,1.18341751 15.133165,1.18341751 15.9142136,1.96446609 L18.0355339,4.08578644 C18.8165825,4.86683502 18.8165825,6.13316498 18.0355339,6.91421356 L15.9142136,9.03553391 C15.133165,9.81658249 13.866835,9.81658249 13.0857864,9.03553391 L10.9644661,6.91421356 C10.1834175,6.13316498 10.1834175,4.86683502 10.9644661,4.08578644 Z M14.5,3.37867966 L12.3786797,5.5 L14.5,7.62132034 L16.6213203,5.5 L14.5,3.37867966 Z"/>
</svg>
`,it=class extends we{registerIconsSvg(e){e.widgetsPanelIcon=rt}},at={Widgets:`Widgety`,"AI Assistant":`AI asistent`,"Describe what you want to modify...":`Popište, co chcete upravit...`,"Attach Image":`Připojit obrázek`,"widget has been updated":`widget byl aktualizován`,"Search by name":`Hledat podle názvu`,"No widgets found":`Nebyly nalezeny žádné widgety`,"Utility / Content":`Nástroje / Obsah`,Forms:`Formuláře`,Gamification:`Gamifikace`,eCommerce:`E-commerce`,"Personalized Images":`Personalizované obrázky`},ot={Widgets:`Widgets`,"AI Assistant":`KI-Assistent`,"Describe what you want to modify...":`Beschreiben Sie, was Sie ändern möchten...`,"Attach Image":`Bild anhängen`,"widget has been updated":`widget wurde aktualisiert`,"Search by name":`Nach Namen suchen`,"No widgets found":`Keine Widgets gefunden`,"Utility / Content":`Utility / Inhalt`,Forms:`Formulare`,Gamification:`Gamification`,eCommerce:`E-Commerce`,"Personalized Images":`Personalisierte Bilder`},st={Widgets:`Widgets`,"AI Assistant":`AI Assistant`,"Describe what you want to modify...":`Describe what you want to modify...`,"Attach Image":`Attach Image`,"widget has been updated":`widget has been updated`,"Search by name":`Search by name`,"No widgets found":`No widgets found`,"Utility / Content":`Utility / Content`,Forms:`Forms`,Gamification:`Gamification`,eCommerce:`eCommerce`,"Personalized Images":`Personalized Images`},ct={Widgets:`Widgets`,"AI Assistant":`Asistente de IA`,"Describe what you want to modify...":`Describe lo que quieres modificar...`,"Attach Image":`Adjuntar imagen`,"widget has been updated":`el widget ha sido actualizado`,"Search by name":`Buscar por nombre`,"No widgets found":`No se encontraron widgets`,"Utility / Content":`Utilidad / Contenido`,Forms:`Formularios`,Gamification:`Gamificación`,eCommerce:`Comercio electrónico`,"Personalized Images":`Imágenes personalizadas`},lt={Widgets:`Widgets`,"AI Assistant":`Assistant IA`,"Describe what you want to modify...":`Décrivez ce que vous souhaitez modifier...`,"Attach Image":`Joindre une image`,"widget has been updated":`le widget a été mis à jour`,"Search by name":`Rechercher par nom`,"No widgets found":`Aucun widget trouvé`,"Utility / Content":`Utilitaires / Contenu`,Forms:`Formulaires`,Gamification:`Gamification`,eCommerce:`E-commerce`,"Personalized Images":`Images personnalisées`},ut={Widgets:`Widget`,"AI Assistant":`Assistente IA`,"Describe what you want to modify...":`Descrivi cosa vuoi modificare...`,"Attach Image":`Allega immagine`,"widget has been updated":`il widget è stato aggiornato`,"Search by name":`Cerca per nome`,"No widgets found":`Nessun widget trovato`,"Utility / Content":`Utilità / Contenuto`,Forms:`Moduli`,Gamification:`Gamification`,eCommerce:`E-commerce`,"Personalized Images":`Immagini personalizzate`},dt={Widgets:`Widgets`,"AI Assistant":`Assistente de IA`,"Describe what you want to modify...":`Descreva o que você deseja modificar...`,"Attach Image":`Anexar imagem`,"widget has been updated":`o widget foi atualizado`,"Search by name":`Pesquisar por nome`,"No widgets found":`Nenhum widget encontrado`,"Utility / Content":`Utilitários / Conteúdo`,Forms:`Formulários`,Gamification:`Gamificação`,eCommerce:`E-commerce`,"Personalized Images":`Imagens personalizadas`},ft={Widgets:`Виджеты`,"AI Assistant":`ИИ-помощник`,"Describe what you want to modify...":`Опишите, что вы хотите изменить...`,"Attach Image":`Прикрепить изображение`,"widget has been updated":`виджет был обновлен`,"Search by name":`Поиск по имени`,"No widgets found":`Виджеты не найдены`,"Utility / Content":`Утилиты / Контент`,Forms:`Формы`,Gamification:`Геймификация`,eCommerce:`Электронная коммерция`,"Personalized Images":`Персонализированные изображения`},pt={Widgets:`Widget'lar`,"AI Assistant":`Yapay Zekâ Asistanı`,"Describe what you want to modify...":`Neyi değiştirmek istediğinizi açıklayın...`,"Attach Image":`Görsel ekle`,"widget has been updated":`widget güncellendi`,"Search by name":`Ada göre ara`,"No widgets found":`Widget bulunamadı`,"Utility / Content":`Yardımcı / İçerik`,Forms:`Formlar`,Gamification:`Oyunlaştırma`,eCommerce:`E-ticaret`,"Personalized Images":`Kişiselleştirilmiş görseller`},mt={Widgets:`Віджети`,"AI Assistant":`ШІ асистент`,"Describe what you want to modify...":`Опишіть, що ви хочете змінити...`,"Attach Image":`Прикріпити зображення`,"widget has been updated":`віджет було оновлено`,"Search by name":`Пошук за назвою`,"No widgets found":`Віджетів не знайдено`,"Utility / Content":`Утиліти / Контент`,Forms:`Форми`,Gamification:`Гейміфікація`,eCommerce:`Електронна комерція`,"Personalized Images":`Персоналізовані зображення`},ht=class{static buildLocalization(e){let t={cs:at,de:ot,en:st,es:ct,fr:lt,it:ut,"pt-br":dt,ru:ft,tr:pt,uk:mt};return e.forEach(e=>{if(e.translations)for(let n in e.translations){let r=e.translations[n];r&&typeof r==`object`&&(t[n]={...t[n]||{},...r})}}),t}},K=`widgets-hovered-icon`,gt=`default-src`,_t=`hover-src`,q=`widgets-hovered-icon--hover-ready`,vt=class e extends M{static#e=new WeakSet;getId(){return K}getTemplate(){return`
            <div class="widgets-hovered-icon">
                <img
                    class="widgets-hovered-icon__image widgets-hovered-icon__image--default"
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                />
                <img
                    class="widgets-hovered-icon__image widgets-hovered-icon__image--hover"
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    loading="lazy"
                />
            </div>
        `}onRender(t){this.container=t.querySelector(`.widgets-hovered-icon`),this.defaultImage=t.querySelector(`.widgets-hovered-icon__image--default`),this.hoverImage=t.querySelector(`.widgets-hovered-icon__image--hover`),e.#t(t.getRootNode()),this.renderState()}getValue(){return{defaultSrc:this.defaultSrc,hoverSrc:this.hoverSrc}}setValue(e){this.renderState()}onAttributeUpdated(e,t){if(e===gt){let e=this.defaultSrc;this.defaultSrc=typeof t==`string`?t:``,(!this.hoverSrc||this.hoverSrc===e)&&(this.hoverSrc=this.defaultSrc),this.renderState()}if(e===_t){let e=this.hoverSrc;this.hoverSrc=typeof t==`string`&&t?t:this.defaultSrc,this.hoverSrc!==e&&(this.#r(this.hoverImage,``),this.container?.classList.remove(q)),this.renderState()}}renderState(){if(!this.defaultImage||!this.hoverImage)return;let e=this.defaultSrc||``,t=this.hoverSrc||e;this.#r(this.defaultImage,e),t?this.container.dataset.hoverSrc=t:delete this.container.dataset.hoverSrc,this.hoverImage.getAttribute(`src`)&&this.hoverImage.getAttribute(`src`)!==t&&(this.#r(this.hoverImage,``),this.container.classList.remove(q))}static#t(t){!t||e.#e.has(t)||(e.#e.add(t),t.addEventListener(`pointerover`,t=>e.#n(t.target)),t.addEventListener(`focusin`,t=>e.#n(t.target)))}static#n(e){let t=e?.closest?.(`.widgets-hovered-icon`),n=t?.dataset.hoverSrc,r=t?.querySelector?.(`.widgets-hovered-icon__image--hover`);!t||!r||!n||(r.getAttribute(`src`)!==n&&(t.classList.remove(q),r.addEventListener(`load`,()=>t.classList.add(q),{once:!0}),r.setAttribute(`src`,n)),r.complete&&r.getAttribute(`src`)&&t.classList.add(q))}#r(e,t){if(!t){e.hasAttribute(`src`)&&e.removeAttribute(`src`);return}e.getAttribute(`src`)!==t&&e.setAttribute(`src`,t)}},J=`widgets-nav-header`,Y=`back`,X=`categoryBackHeader`,yt=`scroll-reset`,bt=`label`,xt=`direction`,St=class extends M{getId(){return J}getTemplate(){return`<div class="widgets-nav-header widgets-nav-header--empty"></div>`}onRender(e){this.root=e.querySelector(`.widgets-nav-header`),e.closest(`.widgets-category-section`)||(this.direction=Y),this.root.addEventListener(`click`,()=>this.#t()),this.renderState()}getValue(){return this.clickCount||0}setValue(e){typeof e==`number`&&(this.clickCount=e),this.renderState()}onAttributeUpdated(e,t){e===bt&&(this.label=typeof t==`string`?t:``,this.renderState()),e===xt&&(this.direction=t,this.renderState()),e===`scroll-reset`&&this.#n()}renderState(){if(!this.root)return;let e=this.direction===`back`||!this.root.closest(`.widgets-category-section`);this.root.classList.toggle(`widgets-nav-header--back`,e),this.root.classList.toggle(`widgets-nav-header--empty`,!this.label),this.root.innerHTML=this.label?this.#e(e):``,this.label&&(this.root.querySelector(`.widgets-nav-header__label`).textContent=this.label)}#e(e){return`
            <button type="button" class="widgets-nav-header__button">
                ${e?`<svg class="widgets-nav-header__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.3 5.3a1 1 0 01.07 1.31l-.08.1L6.98 9h8a1 1 0 01.12 2H7.04l2.25 2.22a1 1 0 01-1.31 1.5l-.1-.07L4.6 11.4a2 2 0 01-.13-2.7l.13-.14 3.29-3.28a1 1 0 011.41 0z"></path>
            </svg>`:`<svg class="widgets-nav-header__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M8.94 13.36a1.5 1.5 0 002 .1l.12-.1 3.65-3.65a1 1 0 00-1.32-1.5l-.1.08L10 11.6l-3.3-3.3a1 1 0 00-1.31-.08l-.1.08a1 1 0 00-.08 1.32l.08.1 3.65 3.65z"></path>
            </svg>`}
                <span class="widgets-nav-header__label"></span>
            </button>
        `}#t(){this.label&&(this.clickCount=(this.clickCount||0)+1,this.api.triggerValueChange(this.clickCount))}#n(){let e=this.root?.closest(`.widgets-panel`);if(!e)return;let t=e.querySelector(`.ue-scrollable`);t&&(t.scrollTop=0),e.querySelectorAll(`.widgets-category-row`).forEach(e=>e.scrollLeft=0)}},Z=`UTILITY_CONTENT`,Q=[{id:Z,label:`Utility / Content`},{id:`FORMS`,label:`Forms`},{id:`GAMIFICATION`,label:`Gamification`},{id:`ECOMMERCE`,label:`eCommerce`},{id:`PERSONALIZED_IMAGES`,label:`Personalized Images`}],Ct=new Set(Q.map(e=>e.id));function wt(e){return Ct.has(e.category)?e.category:Z}function Tt(e){return e.length?e.every(e=>!e.category)?[{id:null,label:null,widgets:[...e]}]:Q.map(t=>({...t,widgets:e.filter(e=>wt(e)===t.id)})).filter(e=>e.widgets.length):[]}var $=3;function Et(e){let t=e.id?`widgets-category-row`:`widgets-category-row widgets-category-row--full`;return`
        <div class="widgets-category-section">
            <${J} name="${e.headerName}"></${J}>

            <${S.REPEATABLE} name="${e.widgetsName}" class="${t}">
                <div class="widgets-panel-item">
                    <${S.DRAGGABLE_BLOCK} name="widgetDraggableBlock">
                        <${K} name="widgetIcon" class="widget-icon"></${K}>
                    </${S.DRAGGABLE_BLOCK}>

                    <div class="info-wrapper">
                        <div class="hint-container">
                            <${S.LABEL} name="widgetName"></${S.LABEL}>
                        </div>
                    </div>
                </div>
            </${S.REPEATABLE}>
        </div>
    `}var Dt=class{static buildWidgetsPanel(e){let t=Tt(e).map((e,t)=>({...e,headerName:`category${t}Header`,widgetsName:`category${t}Widgets`}));return class extends ge{#e=!1;#t=0;isEnabled(){return!0}getId(){return`widgets-panel`}getIcon(){return`widgetsPanelIcon`}getTabIndex(){return 1}getName(){return this.api.translate(`Widgets`)}getTemplate(){return`
                    <div class="widgets-panel">
                        <div class="widgets-panel-filter-container">
                            <${S.TEXT} name="searchFilter"></${S.TEXT}>
                        </div>

                        <div class="widgets-panel-separator"></div>

                        <div class="widgets-panel-content">
                            <${S.SCROLLABLE}>
                                <${J} name="${X}"></${J}>

                                <div class="module-list-empty" name="emptyWidgetsContainer">${this.api.translate(`No widgets found`)}</div>

                                ${t.map(Et).join(``)}
                            </${S.SCROLLABLE}>
                        </div>
                    </div>
                `}onRender(){if(this.widgetsDragDisabled=!this.#o(this.api.getUserPermissions()),this.api.onUserPermissionsUpdated(e=>{this.widgetsDragDisabled=!this.#o(e),this.#i()}),this.api.onValueChanged(`searchFilter`,e=>{this.searchFilter=e,this.#i()}),this.api.setUIEAttribute(`searchFilter`,`placeholder`,this.api.translate(`Search by name`)),this.api.setUIEAttribute(X,`direction`,Y),this.api.onValueChanged(X,()=>this.#r(null)),t.filter(e=>e.id).forEach(e=>{this.api.onValueChanged(e.headerName,()=>this.#r(e.id))}),this.#e){this.#n();return}this.#e=!0,this.#n({widgetsLimit:$,resetInput:!1}),requestAnimationFrame(()=>setTimeout(()=>this.#i()))}#n({widgetsLimit:e,resetInput:t=!0}={}){let n=t&&!!this.searchFilter;this.activeCategoryId=null,this.searchFilter=``,n&&this.api.updateValues({searchFilter:``}),this.#i({widgetsLimit:e}),this.api.setUIEAttribute(X,yt,++this.#t)}#r(e){this.activeCategoryId=e,this.#i()}#i({widgetsLimit:e}={}){let n=this.activeCategoryId?t.find(e=>e.id===this.activeCategoryId):null,r=t.map(e=>!n||e===n?this.#s(e.widgets,this.searchFilter):[]),i=e?r.map(t=>t.slice(0,e)):r;this.api.updateValues(t.reduce((e,t,n)=>(e[t.widgetsName]=i[n].map(e=>({widgetName:this.api.translate(e.name)})),e),{})),t.forEach((e,t)=>{this.#a(e.widgetsName,i[t])}),t.forEach((e,t)=>{let i=!!e.id&&!n&&!!r[t].length;this.api.setUIEAttribute(e.headerName,`label`,i?this.api.translate(e.label):``)}),this.api.setUIEAttribute(X,`label`,n?this.api.translate(n.label):``),this.api.setVisibility(`emptyWidgetsContainer`,r.every(e=>!e.length))}#a(e,t){for(let n=0;n<t.length;n++)this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock`,x.DRAGGABLE_BLOCK.blockId,t[n].widgetId),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock`,x.DEFAULT.disabled,this.widgetsDragDisabled),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock.widgetIcon`,`default-src`,t[n].iconUrl),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock.widgetIcon`,`hover-src`,t[n].hoverIconUrl||t[n].iconUrl)}#o(e){return e?.content?.write===!0&&e?.content?.textOnly!==!0}#s(e,t){return t?e.filter(e=>this.api.translate(e.name)?.toLowerCase().trim().includes(t.toLowerCase().trim())):e}}}},Ot=class{static buildBlock(e){return class extends r{getId(){return e.widgetId}getIcon(){return`widgetsPanelIcon`}getName(){return this.api.translate(e.name)}getDescription(){return e.description?this.api.translate(e.description):``}getTemplate(){return U.prepareExternalWidgetMarkup({widgetMarkupString:e.initialTemplate,showAmpOnlyForBothMimeTypeView:e.showAmpOnlyForBothMimeTypeView,updateUniqueSeed:!0})}getBlockCompositionType(){return e.type}onCreated(t){let n=R.buildConfig({widgetId:e.widgetId,initialJsonConfig:e.initialJsonConfig,currentConfig:t.getNodeConfig()});this.api.getDocumentModifier().modifyHtml(t).setNodeConfig(n),this.api.sendEvent&&this.api.sendEvent(`widget_created`,{name:e.name})}allowInnerBlocksSelection(){return e.allowInnerBlocksSelection}allowInnerBlocksDND(){return!1}shouldDisplayInBlocksPanel(){return!1}canBeSavedAsModule(){return!0}}}},kt=`widgets-panel`;async function At(){let e=new be;B(kt);try{let t=await V.loadPanelConfig();e=e.withIconsRegistry(it).addStyles(De).withPreviewStyles(Oe).withLocalization(ht.buildLocalization(t)).withSettingsPanelRegistry(nt.buildWidgetsSettingsPanel(t)).addModulesPanelTab(Dt.buildWidgetsPanel(t)).addUiElement(vt).addUiElement(St),t.forEach(t=>{e.addBlock(Ot.buildBlock(t)),e.addUiElement(Qe.buildUiElement(t)),e.addControl($e.buildControl(t)),t.hasDataService&&e.addControl(tt.buildControl(t))})}catch(e){console.error(`Error loading widgets config:`,e)}return e.build()}window.StripoEditorWidgets={openRegistry(){window.open(window.location.origin+`/bapi/widgets/registry/ui/index.html`,`_blank`)},setDraftsMode(e){localStorage.setItem(`stripoEditorWidgetsDraftMode`,`${e}`)}},window.UiEditorFirstPartyExtensionsLoader||(window.UiEditorFirstPartyExtensionsLoader={}),window.UiEditorFirstPartyExtensionsLoader[`widgets-panel`]=At()})();