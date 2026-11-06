(function(){var e=class e{constructor(t,n){if(n!==e){e.validatedClasses.has(n)||this.validateImplementation(t,n);let r=e.validationErrors.get(n);if(r&&r.length>0)throw Error(`${n.name} has validation errors:
${r.map(e=>`  - ${e}`).join(`
`)}`)}}validateImplementation(t,n){let r=[],i=n.name,a=Object.getPrototypeOf(this);t.forEach(e=>{if(typeof this[e]!=`function`){r.push(`Method ${e}() is not defined`);return}a[e]===n.prototype[e]&&r.push(`Method ${e}() must be implemented (currently using base class error-throwing implementation)`)}),e.validatedClasses.add(n),r.length>0?(e.validationErrors.set(n,r),console.error(`[${i} Validation] ${i} validation failed:`,r)):typeof process<`u`&&process.env.NODE_ENV===`development`&&console.log(`[${i} Validation] \u2705 ${i} validated successfully`)}destroy(){}};e.validatedClasses=new Set,e.validationErrors=new Map;var t=e,n=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}isEnabled(){return!0}canBeSavedAsModule(){return!1}getContextActionsIds(){}getCustomRenderer(){}getUniqueBlockClassname(){return`esd-${this.getId()}`}onDocumentInit(){}onSelect(e){}onCopy(e){}onDelete(e){}onCreated(e){}onDocumentChanged(e){}getBlockCompositionType(){return`BLOCK`}shouldDisplayQuickAddIcon(){return!1}shouldDisplayInBlocksPanel(){return!0}allowInnerBlocksSelection(){return!0}allowInnerBlocksDND(){return!0}isNestedImageResizeEnabled(){return!0}allowInteractWithAMPWhenSelected(){return!0}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}getTemplateStyles(){return``}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}getSettingsPanelTitleHtml(){return``}getDescription(){throw Error(`Method getDescription() must be implemented by the subclass`)}};n.REQUIRED_METHODS=[`getId`,`getTemplate`,`getIcon`,`getName`,`getDescription`];var r=n,i=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getPreviewHtml(e){}getPreviewInnerHtml(e){throw Error(`Method getPreviewInnerHtml() must be implemented by the subclass`)}};i.REQUIRED_METHODS=[`getPreviewInnerHtml`];var a=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getLabel(){throw Error(`Method getLabel() must be implemented by the subclass`)}onClick(e){throw Error(`Method onClick() must be implemented by the subclass`)}};a.REQUIRED_METHODS=[`getId`,`getIcon`,`getLabel`,`onClick`];var o=`esd-block-button`,s=`esd-block-text`,c=`esd-block-image`,l=`esd-structure`,u=`esd-block-video`,d=`esd-block-social`,f=`esd-block-banner`,p=`esd-block-timer`,ee=`esd-block-menu`,te=`esd-block-html`,ne=`esd-block-spacer`,re=`esd-container-frame`,ie=`esd-stripe`,ae=`esd-amp-form`,oe=(e=>(e.BUTTON=`.${o}`,e.TEXT=`.${s}`,e.IMAGE=`.${c}`,e.STRUCTURE=`.${l}`,e.VIDEO=`.${u}`,e.SOCIAL=`.${d}`,e.BANNER=`.${f}`,e.TIMER=`.${p}`,e.MENU=`.${ee}`,e.HTML=`.${te}`,e.SPACER=`.${ne}`,e.CONTAINER=`.${re}`,e.STRIPE=`.${ie}`,e.FORM=`.${ae}`,e))(oe||{}),m={name:`name`,disabled:`disabled`},se={...m,caption:`caption`,icon:`icon`},ce={...m,caption:`caption`},le={...m,minValue:`min-value`,maxValue:`max-value`,step:`step`,counterRangeEnabled:`counter-range-enabled`,counterRangeHeight:`counter-range-height`},ue={...m,placeholder:`placeholder`,minDate:`min-date`},de={...m,text:`text`,hint:`hint`},fe={...m,type:`type`,icon:`icon`},pe={...m,buttons:`buttons`},me={...m,searchable:`searchable`,multiSelect:`multi-select`,placeholder:`placeholder`,items:`items`},he={...me,addCustomFontOption:`add-custom-font-option`},ge={...m,text:`text`,value:`value`},_e={...m,text:`text`,hint:`hint`,icon:`icon`,value:`value`},ve={...m,buttons:`buttons`},ye={...m,text:`text`,hint:`hint`,icon:`icon`,value:`value`},be={...m,placeholder:`placeholder`},h={DEFAULT:m,BUTTON:se,CHECKBOX:ce,CHECK_BUTTONS:ve,COLOR:m,COUNTER:le,DATEPICKER:ue,LABEL:de,MESSAGE:fe,RADIO_BUTTONS:pe,SELECTPICKER:me,FONT_FAMILY_SELECT:he,SWITCHER:m,TEXT:be,RICH_TEXT:{...be,hasMergeTagIcon:`has-merge-tag-icon`,maxLength:`max-length`,singleLine:`single-line`},TEXTAREA:{...m,resizable:`resizable`,placeholder:`placeholder`},ICON:{...m,img:`img`,src:`src`,title:`title`,imageClass:`image-class`,hint:`hint`,disabled:`disabled`,isActive:`is-active`,visibility:`visibility`,transform:`transform`},CHECK_ITEM:_e,SELECT_ITEM:ge,RADIO_ITEM:ye,NESTED_CONTROL:{...m,controlId:`control-id`},EXPANDABLE:{...m,expanded:`expanded`},ORDERABLE:{...m,icon:`icon`,position:`position`},ORDERABLE_ITEM:{...m},ORDERABLE_ICON:{...m,icon:`icon`},REPEATABLE:{...m},DRAGGABLE_BLOCK:{...m,blockId:`block-id`},AMP_FORM_SERVICE_PICKER:{...m},MULTIPLE_SELECT:{...m,placeholder:`placeholder`}},g=(e=>(e.BUTTON=`UE-BUTTON`,e.CHECKBOX=`UE-CHECKBOX`,e.CHECK_BUTTONS=`UE-CHECK-BUTTONS`,e.COLOR=`UE-COLOR`,e.COUNTER=`UE-COUNTER`,e.DATEPICKER=`UE-DATEPICKER`,e.LABEL=`UE-LABEL`,e.MESSAGE=`UE-MESSAGE`,e.RADIO_BUTTONS=`UE-RADIO-BUTTONS`,e.SELECTPICKER=`UE-SELECT`,e.SWITCHER=`UE-SWITCHER`,e.TEXT=`UE-TEXT`,e.RICH_TEXT=`UE-RICH-TEXT`,e.TEXTAREA=`UE-TEXTAREA`,e.CHECK_ITEM=`UE-CHECK-ITEM`,e.RADIO_ITEM=`UE-RADIO-ITEM`,e.SELECT_ITEM=`UE-SELECT-ITEM`,e.ICON=`UE-ICON`,e.MERGETAGS=`UE-MERGETAGS`,e.FONT_FAMILY_SELECT=`UE-FONT-FAMILY-SELECT`,e.NESTED_CONTROL=`UE-NESTED-CONTROL`,e.EXPANDABLE=`UE-EXPANDABLE`,e.EXPANDABLE_HEADER=`UE-EXPANDABLE_HEADER`,e.EXPANDABLE_CONTENT=`UE-EXPANDABLE_CONTENT`,e.ORDERABLE=`UE-ORDERABLE`,e.ORDERABLE_ITEM=`UE-ORDERABLE-ITEM`,e.ORDERABLE_ICON=`UE-ORDERABLE-ICON`,e.REPEATABLE=`UE-REPEATABLE`,e.DRAGGABLE_BLOCK=`UE-DRAGGABLE-BLOCK`,e.AMP_FORM_SERVICE_PICKER=`UE-AMP-FORM-SERVICE-PICKER`,e.MULTIPLE_SELECT=`UE-MULTIPLE_SELECT`,e.SCROLLABLE=`UE-SCROLLABLE-CONTAINER`,e.POPUP_PANEL=`UE-POPUP-PANEL`,e))(g||{}),xe=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}isVisible(e){return!0}onRender(){}onDestroy(){}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onTemplateNodeUpdated(e){}onDocumentChanged(e){}getElementLockCategory(){return`content`}};xe.REQUIRED_METHODS=[`getId`,`getTemplate`];var Se=xe,Ce=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getTabIndex(){throw Error(`Method getTabIndex() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}isEnabled(){return!0}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onDocumentChanged(){}onRender(){}onDestroy(){}};Ce.REQUIRED_METHODS=[`getId`,`getIcon`,`getName`,`getTemplate`,`getTabIndex`];var we=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getIcon(){throw Error(`Method getIcon() must be implemented by the subclass`)}getTabIndex(){throw Error(`Method getTabIndex() must be implemented by the subclass`)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}isEnabled(){return!0}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}onRender(){}onDocumentChanged(){}};we.REQUIRED_METHODS=[`getId`,`getIcon`,`getName`,`getTemplate`,`getTabIndex`];var Te=we,Ee=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerBlockControls(e){throw Error(`Method registerBlockControls() must be implemented by the subclass`)}registerBlockHeaderControls(e){}};Ee.REQUIRED_METHODS=[`registerBlockControls`];var De=Ee,Oe=class e{constructor(t,n){this.tabId=t,this.controls=n.map(e.normalizeControl)}getTabId(){return this.tabId}getLabel(){return this.label}getControlsIds(){return this.controls.map(e=>e.id)}getControls(){return this.controls}withLabel(e){return this.label=e,this}addControl(t,n){let r=e.normalizeControl(t);return n<0?this.controls.unshift(r):n>this.controls.length?this.controls.push(r):this.controls.splice(n,0,r),this}deleteControl(e){let t=this.controls.findIndex(t=>t.id===e);t!==-1&&this.controls.splice(t,1)}static normalizeControl(e){if(typeof e==`string`)return{id:e};if(!e.id)throw Error(`SettingsPanelTabControlConfig.id is required`);return{...e,id:e.id}}},ke=class{constructor(e){this.uiElements=[],this.controls=[],this.contextActions=[],this.blocks=[],this.generalPanelTabs=[],this.modulesPanelTabs=[],this.i18n=e?.i18n,this.styles=e?.styles,this.previewStyles=e?.previewStyles,this.uiElements=e?.uiElements??[],this.uiElementTagRegistry=e?.uiElementTagRegistry,this.controls=e?.controls??[],this.settingsPanelRegistry=e?.settingsPanelRegistry,this.contextActions=e?.contextActions??[],this.blocks=e?.blocks??[],this.generalPanelTabs=e?.generalPanelTabs??[],this.modulesPanelTabs=e?.modulesPanelTabs??[],this.externalSmartElementsLibrary=e?.externalSmartElementsLibrary,this.externalImageLibrary=e?.externalImageLibrary,this.externalImageLibraryTab=e?.externalImageLibraryTab,this.externalMergeTagsLibrary=e?.externalMergeTagsLibrary,this.externalAiAssistant=e?.externalAiAssistant,this.externalDisplayConditionsLibrary=e?.externalDisplayConditionsLibrary,this.externalVideoLibrary=e?.externalVideoLibrary,this.blocksPanel=e?.blocksPanel,this.iconsRegistry=e?.iconsRegistry,this.id=Math.random().toString(36).substring(2)}getI18n(){return this.i18n}getStyles(){return this.styles}getPreviewStyles(){return this.previewStyles}getUiElements(){return this.uiElements}getUiElementTagRegistry(){return this.uiElementTagRegistry}getControls(){return this.controls}getSettingsPanelRegistry(){return this.settingsPanelRegistry}getContextActions(){return this.contextActions}getBlocks(){return this.blocks}getId(){return this.id}getExternalSmartElementsLibrary(){return this.externalSmartElementsLibrary}getExternalImageLibrary(){return this.externalImageLibrary}getExternalImageLibraryTab(){return this.externalImageLibraryTab}getExternalMergeTagsLibrary(){return this.externalMergeTagsLibrary}getExternalAiAssistant(){return this.externalAiAssistant}getExternalDisplayConditionsLibrary(){return this.externalDisplayConditionsLibrary}getExternalVideoLibrary(){return this.externalVideoLibrary}getBlocksPanel(){return this.blocksPanel}getIconsRegistry(){return this.iconsRegistry}getGeneralPanelTabs(){return this.generalPanelTabs}getModulesPanelTabs(){return this.modulesPanelTabs}},Ae=class{constructor(){this.styles=[],this.uiElements=[],this.controls=[],this.contextActions=[],this.blocks=[],this.generalPanelTabs=[],this.modulesPanelTabs=[]}withLocalization(e){return this.i18n=e,this}withStyles(e){return this.styles=[e],this}addStyles(e){return this.styles.push(e),this}withPreviewStyles(e){return this.previewStyles=e,this}addContextAction(e){return this.contextActions.push(e),this}addUiElement(e){return this.uiElements.push(e),this}withUiElementTagRegistry(e){return this.uiElementTagRegistry=e,this}addControl(e){return this.controls.push(e),this}withSettingsPanelRegistry(e){return this.settingsPanelRegistry=e,this}withExternalSmartElementsLibrary(e){return this.externalSmartElementsLibrary=e,this}withExternalImageLibrary(e){return this.externalImageLibrary=e,this}withExternalImageLibraryTab(e){return this.externalImageLibraryTab=e,this}withExternalMergeTagsLibrary(e){return this.externalMergeTagsLibrary=e,this}withExternalAiAssistant(e){return this.externalAiAssistant=e,this}withExternalDisplayCondition(e){return this.externalDisplayConditionsLibrary=e,this}withExternalVideosLibrary(e){return this.externalVideoLibrary=e,this}withBlocksPanel(e){return this.blocksPanel=e,this}addBlock(e){return this.blocks.push(e),this}withIconsRegistry(e){return this.iconsRegistry=e,this}addGeneralPanelTab(e){return this.generalPanelTabs.push(e),this}addModulesPanelTab(e){return this.modulesPanelTabs.push(e),this}build(){return new ke({i18n:this.i18n,styles:this.styles.map(e=>e.trim()).join(`
`),uiElements:this.uiElements,uiElementTagRegistry:this.uiElementTagRegistry,controls:this.controls,settingsPanelRegistry:this.settingsPanelRegistry,contextActions:this.contextActions,blocks:this.blocks,externalSmartElementsLibrary:this.externalSmartElementsLibrary,externalImageLibrary:this.externalImageLibrary,previewStyles:this.previewStyles,externalAiAssistant:this.externalAiAssistant,externalDisplayConditionsLibrary:this.externalDisplayConditionsLibrary,externalVideoLibrary:this.externalVideoLibrary,blocksPanel:this.blocksPanel,iconsRegistry:this.iconsRegistry,externalImageLibraryTab:this.externalImageLibraryTab,externalMergeTagsLibrary:this.externalMergeTagsLibrary,generalPanelTabs:this.generalPanelTabs,modulesPanelTabs:this.modulesPanelTabs})}},je=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openAiAssistant(e){throw Error(`Method openAiAssistant() must be implemented by the subclass`)}};je.REQUIRED_METHODS=[`openAiAssistant`];var Me=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getCategoryName(){throw Error(`Method getCategoryName() must be implemented by the subclass`)}openExternalDisplayConditionsDialog(e,t,n){throw Error(`Method openExternalDisplayConditionsDialog() must be implemented by the subclass`)}getIsContextActionEnabled(){throw Error(`Method getIsContextActionEnabled() must be implemented by the subclass`)}getContextActionIndex(){throw Error(`Method getContextActionIndex() must be implemented by the subclass`)}};Me.REQUIRED_METHODS=[`getCategoryName`,`openExternalDisplayConditionsDialog`];var Ne=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openImageLibrary(e,t,n){throw Error(`Method openImageLibrary() must be implemented by the subclass`)}};Ne.REQUIRED_METHODS=[`openImageLibrary`];var Pe=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}getName(){throw Error(`Method getName() must be implemented by the subclass`)}openImageLibraryTab(e,t,n){throw Error(`Method openImageLibraryTab() must be implemented by the subclass`)}};Pe.REQUIRED_METHODS=[`getName`,`openImageLibraryTab`];var Fe=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openMergeTagsLibrary(e,t,n,r){throw Error(`Method openMergeTagsLibrary() must be implemented by the subclass`)}};Fe.REQUIRED_METHODS=[`openMergeTagsLibrary`];var Ie=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openSmartElementsLibrary(e,t){throw Error(`Method openSmartElementsLibrary() must be implemented by the subclass`)}};Ie.REQUIRED_METHODS=[`openSmartElementsLibrary`];var Le=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}openExternalVideosLibraryDialog(e,t,n){throw Error(`Method openExternalVideosLibraryDialog() must be implemented by the subclass`)}};Le.REQUIRED_METHODS=[`openExternalVideosLibraryDialog`];var Re=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerIconsSvg(e){throw Error(`Method registerIconsSvg() must be implemented by the subclass`)}};Re.REQUIRED_METHODS=[`registerIconsSvg`];var ze=Re,Be=class{constructor(e){this.hidden=!1,this.key=e}withParams(e){return this.params=e,this}asHidden(e=!0){return this.hidden=e,this}isHidden(){return this.hidden}getValue(){return{key:this.key,params:this.params}}},Ve=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}onRender(e){throw Error(`Method onRender() must be implemented by the subclass`)}onDestroy(){}getValue(){}setValue(e){}onAttributeUpdated(e,t){}getId(){throw Error(`Method getId() must be implemented by the subclass`)}getTemplate(){throw Error(`Method getTemplate() must be implemented by the subclass`)}};Ve.REQUIRED_METHODS=[`onRender`,`getId`,`getTemplate`];var _=Ve,He=class e extends t{constructor(){super(e.REQUIRED_METHODS,e)}registerUiElements(e){throw Error(`Method registerUiElements() must be implemented by the subclass`)}};He.REQUIRED_METHODS=[`registerUiElements`];var Ue=`/*Widgets Panel*/
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
    height: 100%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
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

/*Deep-link hint (DS-557): ring + halo on the widget opened from the widgets landing*/
@keyframes widgets-hint-halo {

    0%,
    100% {
        box-shadow: 0 0 0 2px var(--widgets-hint-color), 0 0 0 6px var(--widgets-hint-halo-color), 0 15px 35px -5px rgba(0, 0, 0, 0.1);
    }

    50% {
        box-shadow: 0 0 0 2px var(--widgets-hint-color), 0 0 0 12px transparent, 0 15px 35px -5px rgba(0, 0, 0, 0.1);
    }
}

.widgets-panel-item .widgets-hovered-icon--hint {
    --widgets-hint-color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    --widgets-hint-halo-color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 0.22);
    box-shadow: 0 0 0 2px var(--widgets-hint-color), 0 15px 35px -5px rgba(0, 0, 0, 0.1);
    animation: widgets-hint-halo 1.8s ease-in-out infinite;
}

.widgets-panel-item:has(.widgets-hovered-icon--hint) .info-wrapper ue-label .label {
    color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), calc(var(--ue-primary-color_l, 50%) - 10%), 1);
    font-weight: 500;
}

/*The row scrolls horizontally, so it clips vertically: give the halo room above the highlighted widget*/
.widgets-category-row:not(.widgets-category-row--full):has(.widgets-hovered-icon--hint) {
    padding-top: 12px;
    margin-top: -12px;
}

@media (prefers-reduced-motion: reduce) {
    .widgets-panel-item .widgets-hovered-icon--hint {
        animation: none;
    }
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
    white-space: normal;
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
}

/*Horizontal scroll of widget and layout tiles: a thin scrollbar shown on hover*/
.widgets-category-row,
.widgets-layouts-strip {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}

.widgets-category-row::-webkit-scrollbar,
.widgets-layouts-strip::-webkit-scrollbar {
    height: 4px;
}

.widgets-category-row::-webkit-scrollbar-thumb,
.widgets-layouts-strip::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: transparent;
}

.widgets-category-row:hover,
.widgets-layouts-strip:hover {
    scrollbar-color: var(--ue-input-hover-color, rgba(0, 0, 0, 0.1)) transparent;
}

.widgets-category-row:hover::-webkit-scrollbar-thumb,
.widgets-layouts-strip:hover::-webkit-scrollbar-thumb {
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
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}

/*Editor color picker of a settings card in the chat: over the bottom of the chat, where its newest messages are;
  the chat itself is a ChatKit iframe, so the picker cannot be placed next to the card control*/
.widgets-settings-color-layer {
    position: absolute;
    bottom: 9px;
    right: 9px;
    left: 9px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
    border-radius: 6px;
    background: hsla(var(--ue-option-panel-background-color_h, 0),
            var(--ue-option-panel-background-color_s, 0%),
            var(--ue-option-panel-background-color_l, 100%),
            var(--ue-option-panel-background-color_t, 1));
    box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.2);
}

/*The AI panel UI element is rendered in the ue-extension-input wrapper*/
.ui-editor-widgets-ai-panel-control > ue-extension-input {
    flex: 1 1 auto;
    min-height: 0;
}

/*Zeplin: the data storage block opens right under the header, in place of the layouts strip; the chat stays under it.
  The strip is only hidden, so it comes back as it was.*/
.widgets-storage-block {
    display: none;
}

.widgets-storage-block-open .widgets-layouts-strip-container,
.widgets-storage-block-open .widgets-layout-question {
    display: none;
}

.widgets-storage-block-open .widgets-storage-block {
    display: block;
    flex: 0 0 auto;
    order: -1;
}

/*Zeplin: the block has the waves and the bottom line of the layouts strip it replaces*/
.widgets-storage-block {
    position: relative;
    isolation: isolate;
    border-bottom: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

.widgets-storage-block::before {
    z-index: -1;
}

/*Focused only to take Escape after the menu that opened it is closed*/
.widgets-storage-block:focus {
    outline: none;
}

#ui-editor-widgets-ai-panel-container {
    height: calc(100% - 9px);
    padding: 0px 9px;
}

.widgets-ai-panel-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
}

/*The chat fills the space under the layouts strip, so the 9px gap under it is padding, the same as at its sides*/
.widgets-ai-panel-layout #ui-editor-widgets-ai-panel-container {
    flex: 1 1 auto;
    min-height: 0;
    padding-bottom: 9px;
}

/*Zeplin: layouts strip — 15px 20px padding, 110x75 tiles 15px apart, waves in the background.
  The waves sit on a wrapper: on the scrolling strip itself they would scroll away with the tiles.*/
.widgets-layouts-strip-container {
    position: relative;
    flex: 0 0 auto;
}

.widgets-layouts-strip-container::before,
.widgets-storage-block::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-color: hsla(var(--ue-font-color_h, 0), var(--ue-font-color_s, 0%), var(--ue-font-color_l, 33.33%), 0.05);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='14'%3E%3Cpath d='M0 7C23 2 47 2 70 7S117 12 140 7' fill='none' stroke='%23000'/%3E%3C/svg%3E") repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='14'%3E%3Cpath d='M0 7C23 2 47 2 70 7S117 12 140 7' fill='none' stroke='%23000'/%3E%3C/svg%3E") repeat;
}

.widgets-layouts-strip {
    position: relative;
    display: flex;
    gap: 15px;
    padding: 15px 20px;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

.widgets-layouts-strip[hidden] {
    display: none;
}

.widgets-layout-tile {
    display: flex;
    flex: 0 0 110px;
    flex-direction: column;
    gap: 7px;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    text-align: center;
    cursor: pointer;
    color: hsla(var(--ue-font-color_h, 0), var(--ue-font-color_s, 0%), var(--ue-font-color_l, 33.33%), 0.85);
}

.widgets-layout-tile:disabled {
    cursor: default;
    opacity: 0.5;
}

.widgets-layout-tile__preview {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    overflow: hidden;
    border-radius: 10px;
    background-color: hsla(var(--ue-option-panel-background-color_h, 0), var(--ue-option-panel-background-color_s, 0%), var(--ue-option-panel-background-color_l, 100%), var(--ue-option-panel-background-color_t, 1));
}

/*Zeplin: the tile border is a 2px inner shadow; an overlay keeps it above the thumbnail*/
.widgets-layout-tile__preview::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 2px var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

.widgets-layout-tile__preview img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.widgets-layout-tile:not(:disabled):hover .widgets-layout-tile__preview::after {
    box-shadow: inset 0 0 0 2px var(--ue-input-hover-color, rgba(0, 0, 0, 0.1));
}

.widgets-layout-tile--selected .widgets-layout-tile__preview::after,
.widgets-layout-tile--selected:not(:disabled):hover .widgets-layout-tile__preview::after {
    box-shadow: inset 0 0 0 2px hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
}

.widgets-layout-tile:focus-visible {
    outline: none;
}

.widgets-layout-tile:focus-visible .widgets-layout-tile__preview {
    outline: 2px solid hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    outline-offset: 1px;
}

.widgets-layout-tile__name {
    display: -webkit-box;
    overflow: hidden;
    font-size: 12px;
    line-height: 14px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

/*Question whether to carry design changes to the chosen layout; no Zeplin design yet*/
.widgets-layout-question {
    position: relative;
    flex: 0 0 auto;
    padding: 12px 36px 12px 12px;
    border-bottom: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
    color: hsla(var(--ue-font-color_h, 0), var(--ue-font-color_s, 0%), var(--ue-font-color_l, 33.33%), var(--ue-font-color_t, 1));
    font-size: 13px;
    line-height: 18px;
}

.widgets-layout-question[hidden] {
    display: none;
}

.widgets-layout-question__text {
    margin: 0 0 10px;
}

.widgets-layout-question__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.widgets-layout-question__button,
.widgets-layout-question__close {
    border: 1px solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
    border-radius: 4px;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
}

.widgets-layout-question__button {
    padding: 5px 12px;
}

.widgets-layout-question__button--primary {
    border-color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    background-color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    color: #ffffff;
}

.widgets-layout-question__close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    font-size: 18px;
    line-height: 24px;
}

.widgets-layout-question__button:hover,
.widgets-layout-question__close:hover {
    border-color: hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
}

.widgets-layout-question__button:focus-visible,
.widgets-layout-question__close:focus-visible {
    outline: 2px solid hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    outline-offset: 1px;
}

/*Zeplin: layouts toggle in the settings panel header — a flat 34px icon button like its neighbours, the margin
  stands for their 2px border wrapper; the pressed state is the editor's pressed button background*/
.widgets-layouts-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin: 2px;
    padding: 0;
    border: none;
    border-radius: 10px;
    background: none;
    cursor: pointer;
}

.widgets-layouts-toggle:hover {
    background-color: hsla(var(--ue-secondary-color_h, 0), var(--ue-secondary-color_s, 0%), calc(var(--ue-secondary-color_l, 100%) - 2%), var(--ue-secondary-color_t, 1));
}

.widgets-layouts-toggle[aria-pressed="true"] {
    background-color: hsla(var(--ue-secondary-color_h, 0), calc(var(--ue-secondary-color_s, 0%) + 3%), calc(var(--ue-secondary-color_l, 100%) - 7%), var(--ue-secondary-color_t, 1));
}

/*Zeplin: while the strip is shown, the header line has an ear under the pressed toggle that points at it;
  the same ear points at the panel menu toggle while the data storage block is open. The ear is the editor's
  popover pointer in its own size, centered under the toggle (its static position in the flex container),
  standing on the header line over the border and over the toggle, so its tip cuts into the toggle background.
  The header is not a stacking context, the panel menu dropdown has to stay over the panel*/
ue-header-control-panel:has(.widgets-layouts-toggle, .widgets-panel-menu) {
    position: relative;
}

.widgets-layouts-toggle-wrapper {
    display: flex;
    justify-content: center;
}

.widgets-header-ear {
    display: none;
    position: absolute;
    bottom: -1px;
    pointer-events: none;
}

.widgets-header-ear svg {
    display: block;
    width: 48px;
    height: 14px;
    fill: hsla(var(--ue-option-panel-background-color_h, 0),
            var(--ue-option-panel-background-color_s, 0%),
            var(--ue-option-panel-background-color_l, 100%),
            var(--ue-option-panel-background-color_t, 1));
    color: var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));
}

.widgets-layouts-toggle[aria-pressed="true"] ~ .widgets-header-ear,
.widgets-panel-menu[data-storage-open="true"] .widgets-header-ear {
    display: block;
}

.widgets-layouts-toggle:focus-visible {
    outline: 2px solid hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    outline-offset: -2px;
}

/*Zeplin: panel menu in the settings panel header — a flat icon button like the layouts toggle,
  with a storage indicator dot: red while a needed storage is not chosen, green once it is.*/
/*Not positioned and centered: the ear under the toggle takes its static position, see the layouts toggle ear*/
.widgets-panel-menu {
    display: flex;
    justify-content: center;
}

.widgets-panel-menu__toggle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin: 2px;
    padding: 0;
    border: none;
    border-radius: 10px;
    background: none;
    cursor: pointer;
}

.widgets-panel-menu__toggle:hover,
.widgets-panel-menu__toggle[aria-expanded="true"] {
    background-color: hsla(var(--ue-secondary-color_h, 0), var(--ue-secondary-color_s, 0%), calc(var(--ue-secondary-color_l, 100%) - 2%), var(--ue-secondary-color_t, 1));
}

.widgets-panel-menu__toggle:focus-visible {
    outline: 2px solid hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    outline-offset: -2px;
}

.widgets-panel-menu[data-storage-state="missing"] .widgets-panel-menu__toggle::after,
.widgets-panel-menu[data-storage-state="chosen"] .widgets-panel-menu__toggle::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.widgets-panel-menu[data-storage-state="missing"] .widgets-panel-menu__toggle::after {
    background-color: hsla(var(--ue-danger-color_h, 2), var(--ue-danger-color_s, 77%), var(--ue-danger-color_l, 64%), var(--ue-danger-color_t, 1));
}

.widgets-panel-menu[data-storage-state="chosen"] .widgets-panel-menu__toggle::after {
    background-color: hsla(var(--ue-success-color_h, 129), var(--ue-success-color_s, 60%), var(--ue-success-color_l, 50%), var(--ue-success-color_t, 1));
}

/*Fixed, so the settings panel header does not clip it; the items take the editor's .menu look*/
.widgets-panel-menu__dropdown {
    position: fixed;
    z-index: 1000;
    width: 220px;
    border-radius: 10px;
    background-color: hsla(var(--ue-option-panel-background-color_h, 0), var(--ue-option-panel-background-color_s, 0%), var(--ue-option-panel-background-color_l, 100%), var(--ue-option-panel-background-color_t, 1));
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.widgets-panel-menu__dropdown[hidden] {
    display: none;
}

.widgets-panel-menu__dropdown .menu {
    grid-template-columns: minmax(0, 1fr);
}

.widgets-panel-menu__dropdown .menu-item {
    width: 100%;
    min-width: 0;
    border: none;
    background: none;
    color: inherit;
    text-align: left;
}

.widgets-panel-menu__dropdown .menu-item[hidden] {
    display: none;
}

.widgets-panel-menu__dropdown .menu-item:disabled {
    opacity: 0.5;
    cursor: default;
}

.widgets-panel-menu__dropdown .menu-item:focus-visible {
    outline: 2px solid hsla(var(--ue-primary-color_h, 129), var(--ue-primary-color_s, 60%), var(--ue-primary-color_l, 50%), 1);
    outline-offset: -2px;
}

.widgets-panel-menu__dropdown .menu-item-text {
    flex: 1 1 auto;
    min-width: 0;
}

.widgets-panel-menu__storage-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 16px;
    color: hsla(var(--ue-font-color_h, 0), var(--ue-font-color_s, 0%), var(--ue-font-color_l, 33.33%), 0.6);
}

.widgets-panel-menu[data-storage-state="missing"] .widgets-panel-menu__storage-icon {
    color: hsla(var(--ue-danger-color_h, 2), var(--ue-danger-color_s, 77%), var(--ue-danger-color_l, 64%), var(--ue-danger-color_t, 1));
}

.widgets-panel-menu[data-storage-state="chosen"] .widgets-panel-menu__storage-icon {
    color: hsla(var(--ue-success-color_h, 129), var(--ue-success-color_s, 60%), var(--ue-success-color_l, 50%), var(--ue-success-color_t, 1));
}
`,We=`.ue-mime-type-both .ue-widget-html-version,
.ue-mime-type-amp-html .ue-widget-html-version {
    display: none;
}
`,Ge=`/widgets/registry/api/v1/widgets/ui-config`,Ke=`/widgets/registry/api/v1/widgets/markup`,qe=`/convo/auth/api/v1/auth/token`,Je=`/convo/core/api/v1/chatkit`,Ye=`/convo/core/api/v1/attachments/register`,Xe=class{composerAttachments=[];constructor({attachmentsRegisterUrl:e,makeRequest:t,getChatKitElement:n}){this.attachmentsRegisterUrl=e,this.makeRequest=t,this.getChatKitElement=n}async attachImage(e){if(!e)return;let t=this.getChatKitElement();if(typeof t?.setComposerValue==`function`)try{let n=await this.#e(e);this.#i(n),await t.setComposerValue({attachments:this.composerAttachments,selectedToolId:null}),t.focusComposer?.()}catch(e){console.error(`[chatkit.attachImage.error]`,e)}}reset(){this.composerAttachments=[],Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:[],selectedToolId:null})).catch(e=>console.error(`[chatkit.cancelComposer.error]`,e))}cancel(){Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:this.composerAttachments,selectedToolId:null})).catch(e=>console.error(`[chatkit.cancelComposer.error]`,e))}deleteAttachment(e){this.composerAttachments=this.composerAttachments.filter(({id:t})=>t!==e),Promise.resolve(this.getChatKitElement()?.setComposerValue({attachments:this.composerAttachments,selectedToolId:null}))}async#e(e){let t=await this.makeRequest({url:this.attachmentsRegisterUrl,options:{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(this.#t(e))}});if(!t.ok)throw Error(`Failed to register image attachment`);let n=await t.json();if(!this.#r(n))throw Error(`Invalid image attachment registration response`);return n}#t(e){return{type:`image`,name:this.#a(e),mime_type:`image/*`,preview_url:e.url,metadata:this.#n(e)}}#n(e){return{original_url:e.url,...e.originalName?{original_name:e.originalName}:{},...e.width?{width:e.width}:{},...e.height?{height:e.height}:{},...e.sizeBytes?{size_bytes:e.sizeBytes}:{}}}#r(e){return!!(e&&typeof e==`object`&&typeof e.id==`string`&&e.id)}#i(e){this.composerAttachments=[...this.composerAttachments.filter(({id:t})=>t!==e.id),e]}#a(e){return e.originalName||this.#o(e.url)}#o(e){let t=`attached-image`;try{let n=new URL(e).pathname.split(`/`).filter(Boolean).pop();if(!n)return t;try{return decodeURIComponent(n)}catch{return n}}catch{return t}}},Ze=`attach_image`,Qe=`plugin`,$e=`domain_pk_698f401a72f4819487598b2d409e5276015e1bb610e23585`,et=class{failedAiRequestsCount=0;chatKitUrl=Je;constructor({domainName:e,chatKitPanelContainer:t,onClientTool:n,onWidgetAction:r,eventHandlers:i,headerTitle:a,startScreenGreeting:o,quickStartPrompts:s,composerPlaceholder:c,locale:l,theme:u,attachImageToolLabel:d,onAttachImage:f,authTokenGetter:p,domainModelRevisionGetter:ee,fetchFn:te,editorMode:ne,chatkitDomainPublicKey:re}){this.domainName=e,this.editorMode=ne,this.chatkitDomainPublicKey=re||$e,this.chatKitPanelContainer=t,this.onClientTool=n,this.onWidgetAction=r,this.eventHandlers=i,this.headerTitle=a,this.startScreenGreeting=o,this.quickStartPrompts=s||[],this.composerPlaceholder=c,this.locale=l,this.theme=u||this.#s(),this.attachImageToolLabel=d||`Attach Image`,this.onAttachImage=f,this.authTokenGetter=p,this.domainModelRevisionGetter=ee,this.fetchFn=te||fetch,this.attachmentsManager=new Xe({attachmentsRegisterUrl:Ye,makeRequest:e=>this.makeRequest({...e,streaming:!1,includeDomainModelRevision:!1}),getChatKitElement:()=>this.chatKitElement})}initPanel({domainModelId:e,metadata:t,threadIdStorageKey:n}){this.chatKitElement&&this.destroyPanel(),this.domainModelId=e,this.metadata=t,this.threadIdStorageKey=n,this.#e(this.#n.bind(this))}destroyPanel(){this.chatKitElement&&=(this.chatKitElement.remove(),null),this.attachmentsManager.reset()}#e(e){if(document.getElementById(`ui-editor-chatkit-script`)){e();return}let t=this.#t();t.onload=()=>{window.customElements?customElements.whenDefined(`openai-chatkit`).then(e):document.addEventListener(`DOMContentLoaded`,function(){setTimeout(e,1e3)})},document.head.appendChild(t)}#t(){let e=document.createElement(`script`);return e.src=`https://cdn.platform.openai.com/deployments/chatkit/chatkit.js`,e.id=`ui-editor-chatkit-script`,e.async=!0,e}#n(){let e=this.getThreadId();this.chatKitElement=document.createElement(`openai-chatkit`),this.chatKitElement.setOptions(this.#i({initialThread:e})),this.chatKitElement.setAttribute(`style`,`height: 100%`),this.chatKitElement.addEventListener(`chatkit.thread.change`,e=>{this.attachmentsManager.reset(),e?.detail?.threadId&&this.setThreadId(e.detail.threadId)}),this.chatKitElement.addEventListener(`chatkit.thread.created`,e=>{this.attachmentsManager.reset(),e?.detail?.threadId&&this.setThreadId(e.detail.threadId)}),this.chatKitElement.addEventListener(`chatkit.user_message.sent`,()=>{this.attachmentsManager.reset()}),this.chatKitElement.addEventListener(`chatkit.tool.change`,e=>{e?.detail?.toolId===Ze&&this.#a()}),this.eventHandlers&&Object.keys(this.eventHandlers).forEach(e=>{this.chatKitElement.addEventListener(e,this.eventHandlers[e])}),this.chatKitPanelContainer.appendChild(this.chatKitElement),this.#r(e)}sendUserMessage(e){typeof this.chatKitElement?.sendUserMessage==`function`&&Promise.resolve().then(()=>this.chatKitElement.sendUserMessage({text:e})).catch(e=>console.error(`[chatkit.sendUserMessage.error]`,e))}#r(e){!e||typeof this.chatKitElement?.setThreadId!=`function`||Promise.resolve().then(()=>this.chatKitElement.setThreadId(e)).catch(e=>console.error(`[chatkit.setThreadId.error]`,e))}#i({initialThread:e=null}={}){let t={api:{url:this.chatKitUrl,domainKey:this.chatkitDomainPublicKey,fetch:(e,t)=>this.makeRequest({url:e,options:t})},theme:this.theme,onClientTool:this.onClientTool?.bind(this),...this.onWidgetAction?{widgets:{onAction:this.onWidgetAction}}:{},...this.locale?{locale:this.locale}:{}},n={...this.composerPlaceholder?{placeholder:this.composerPlaceholder}:{},...this.onAttachImage?{tools:[{id:Ze,icon:`images`,label:this.attachImageToolLabel,shortLabel:this.attachImageToolLabel,pinned:!1}]}:{}};return{...t,initialThread:e,...this.headerTitle?{header:{title:{text:this.headerTitle}}}:{},startScreen:{greeting:this.startScreenGreeting,prompts:this.quickStartPrompts.map(e=>({icon:`circle-question`,label:e.label,prompt:e.prompt}))},...Object.keys(n).length?{composer:n}:{}}}sendCustomAction(e,t){return typeof this.chatKitElement?.sendCustomAction==`function`?Promise.resolve().then(()=>this.chatKitElement.sendCustomAction(e,t)).catch(e=>console.error(`[chatkit.sendCustomAction.error]`,e)):Promise.resolve()}#a(){this.onAttachImage&&Promise.resolve().then(()=>this.onAttachImage({onSelect:e=>this.#o(e),onCancel:()=>this.attachmentsManager.cancel(),onError:e=>{console.error(`[chatkit.attachImage.error]`,e)}})).catch(e=>console.error(`[chatkit.attachImage.error]`,e))}#o(e){return this.attachmentsManager.attachImage(e)}#s(){return{colorScheme:`light`,radius:`round`,density:`compact`,color:{accent:{primary:`#32CB4A`,level:1},surface:{background:`#ffffff`,foreground:`#EDEDED`}},typography:{baseSize:14}}}async makeRequest({url:e,options:t,streaming:n=!0,includeDomainModelRevision:r=!0}){if(r&&this.domainModelRevisionGetter)try{let e=JSON.parse(t.body);e.domainModelRevision=this.domainModelRevisionGetter(),e.type===`attachments.delete`&&this.attachmentsManager.deleteAttachment(e.params?.attachment_id),t.body=JSON.stringify(e)}catch(e){console.error(e)}let i=new Headers(t.headers||void 0);Object.entries(this.metadata||{}).forEach(([e,t])=>{i.set(e,String(t))}),this.editorMode!==Qe&&i.set(`AUTH-TOKEN`,await this.getAuthToken()),i.set(`DOMAIN-MODEL-ID`,String(this.domainModelId)),i.set(`DOMAIN-NAME`,String(this.domainName)),i.set(`THREAD-ID`,String(this.getThreadId()));let a=await this.fetchFn(e,{...t,streaming:n,headers:i});if(a.status===401&&this.editorMode!==Qe){if(this.failedAiRequestsCount++,this.failedAiRequestsCount>2)throw Error(`Too many failed requests from AI Panel`);return await this.getAuthToken(!0),this.makeRequest({url:e,options:t,streaming:n,includeDomainModelRevision:r})}return this.failedAiRequestsCount=0,a}async getAuthToken(e=!1){return this.authToken&&!e||(this.authToken=await this.authTokenGetter()),this.authToken}getThreadId(){return this.threadIdStorageKey?window.sessionStorage.getItem(this.threadIdStorageKey):null}setThreadId(e){this.threadIdStorageKey&&window.sessionStorage.setItem(this.threadIdStorageKey,e)}},tt={prefix:`--ue-option-panel-background-color`,h:`0`,s:`0%`,l:`100%`,t:`1`},nt={prefix:`--ue-primary-color`,h:`129`,s:`60%`,l:`50%`,t:`1`},v={prefix:`--ue-font-color`,h:`0`,s:`0%`,l:`33.33%`,t:`1`},rt=`-apple-system, BlinkMacSystemFont, Aptos, "SF UI Text", Roboto, Arial, sans-serif`,it=15,at=12,ot=9;function st(e=()=>void 0){let t=lt(e,tt),n=ft(t),r=dt(e);return{colorScheme:n?`dark`:`light`,radius:ut(e(`--ue-border-radius-base`)),density:`compact`,color:{accent:{primary:lt(e,nt),level:1},...r?{grayscale:r}:{},surface:{background:t,foreground:n?`#1B1B1B`:`#EDEDED`}},typography:{baseSize:14,fontFamily:e(`--ue-font-family`)||rt}}}function ct(e,t){let n=t?getComputedStyle(t):void 0;return t=>{let r=e?.[t]??n?.getPropertyValue(t);return(r==null?``:String(r).trim())||void 0}}function lt(e,{prefix:t,h:n,s:r,l:i,t:a}){let o=(n,r)=>e(`${t}_${n}`)??r;return`hsla(${o(`h`,n)}, ${o(`s`,r)}, ${o(`l`,i)}, ${o(`t`,a)})`}function ut(e){let t=parseFloat(e??`${it}`);return Number.isFinite(t)?t<=0?`sharp`:t<at?`soft`:`round`:`round`}function dt(e){let t=parseFloat(e(`${v.prefix}_h`)??v.h),n=parseFloat(e(`${v.prefix}_s`)??v.s);if(!(!Number.isFinite(t)||!Number.isFinite(n)||n<=0))return{hue:t,tint:Math.min(ot,Math.max(1,Math.round(n/10)))}}function ft(e){let t=pt(e);return t?vt(t)<.5:!1}function pt(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase();return mt(t)||ht(t)||gt(t)}function mt(e){let t=e.match(/^#([0-9a-f]{3})$/i);if(t)return t[1].split(``).map(e=>parseInt(`${e}${e}`,16));let n=e.match(/^#([0-9a-f]{6})$/i);return n?[parseInt(n[1].slice(0,2),16),parseInt(n[1].slice(2,4),16),parseInt(n[1].slice(4,6),16)]:null}function ht(e){let t=e.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);return t?[b(Number(t[1])),b(Number(t[2])),b(Number(t[3]))]:null}function gt(e){let t=e.match(/^hsla?\(\s*([-\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/);return t?_t(Number(t[1]),Number(t[2]),Number(t[3])):null}function _t(e,t,n){let r=(e%360+360)%360/360,i=yt(t)/100,a=yt(n)/100;if(i===0){let e=b(a*255);return[e,e,e]}let o=a<.5?a*(1+i):a+i-a*i,s=2*a-o;return[y(s,o,r+1/3),y(s,o,r),y(s,o,r-1/3)].map(e=>b(e*255))}function y(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vt(e){let[t,n,r]=e.map(e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4});return .2126*t+.7152*n+.0722*r}function b(e){return Number.isFinite(e)?Math.round(Math.min(255,Math.max(0,e))):0}function yt(e){return Number.isFinite(e)?Math.min(100,Math.max(0,e)):0}var x=class e{static buildConfig({widgetId:e,initialJsonConfig:t,currentConfig:n={}}){return{widgetId:e,jsonConfig:n.jsonConfig?{...n.jsonConfig}:{...t},blockUUID:crypto.randomUUID()}}static updateConfigJsonConfig({jsonConfig:e,currentConfig:t={}}){return{...t,jsonConfig:{...e}}}static updateConfigAmpServiceUrl({ampServiceUrl:e,currentConfig:t={}}){return{...t,jsonConfig:{...t.jsonConfig,amp_service_url:e}}}static getHiddenWidgetState(t){return e.getJsonConfig(t).hide_widget}static getJsonConfig(e){return e?.jsonConfig||{}}static getWidgetId(e){return e?.widgetId}static getBlockUUID(e){return e?.blockUUID}static getAmpServiceUrl(e){return e?.jsonConfig?.amp_service_url}static isSameWidget({currentConfig:e,newConfig:t}){return e?e.blockUUID===t?.blockUUID:!1}},S={};function bt(e,t){if(t)return S[e]=t,t;delete S[e]}function xt(e){if(!e?.platformApi)throw Error(`platformApi is not available for this first-party extension`);return e}function St(e){let t=window.UiEditorFirstPartyExtensionsContext?.[e]?.platformApi;return bt(e,t)}function Ct(e){let t=S[e]||St(e);if(!t)throw Error(`[${e}] platformApi is not available for ${e}`);return t}function wt(e,t){return t?.platformApi?xt(t).platformApi:Ct(e)}var Tt=`widgets-panel`,C=class e{static async loadPanelConfig(){let t=await e.fetch(`${Ge}?useDrafts=${e.isDraftMode()}`,{method:`GET`});if(!t.ok){let e=await t.text();throw console.error(`Failed to get widgets config: ${t.status} ${e}`),Error(`Failed to get widgets config: ${t.status}`)}return t.json()}static async loadWidgetTemplate({widgetId:t,jsonConfig:n,api:r}){let i=await e.fetch(Ke,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({widgetId:t,jsonConfig:n,useDraft:e.isDraftMode()})},r);if(!i.ok){let e=i.text();throw console.error(`Failed to get widgets ${t} config: ${i.status} ${e}`),Error(`Failed to get widgets ${t} config: ${i.status}`)}return i.json()}static async getConvoAuthToken(t){return await e.fetch(qe,{method:`GET`},t).then(e=>e.json()).then(e=>e.token)}static getPlatformApi(e){return wt(Tt,e)}static async fetch(t,n,r){return e.getPlatformApi(r).fetch(t,n)}static isDraftMode(){return localStorage.getItem(`stripoEditorWidgetsDraftMode`)===`true`}};function Et(e){let t=new Map,n=new Map,r=Object.freeze({...e}),i=e=>t.get(e)||r;return{get:i,update(e,r){if(!e)return;let a=i(e);Object.keys(r).every(e=>a[e]===r[e])||(t.set(e,{...a,...r}),(n.get(e)||[]).forEach(e=>e()))},subscribe(e,t){n.has(e)||n.set(e,new Set);let r=n.get(e);return r.add(t),()=>{r.delete(t),r.size||n.delete(e)}}}}var w=Et({collapsed:!1,aiResponding:!1,layoutChange:void 0,layoutQuestion:!1}),T=new Map,E=new Map,D=new Map,O=new Map,k=w.get,A=w.update;function j(e,t){return`${e}\n${t}`}var M={isCollapsed(e){return k(e).collapsed},toggleCollapsed(e){A(e,{collapsed:!k(e).collapsed})},isBusy(e){let t=k(e);return t.aiResponding||t.layoutQuestion||t.layoutChange!==void 0},setLayoutQuestion(e,t){A(e,{layoutQuestion:t})},isAiResponding(e){return k(e).aiResponding},setAiResponding(e,t){A(e,{aiResponding:t})},startLayoutChange(e,t,n){M.setPendingLayoutSettings(e,t,n),A(e,{layoutChange:t})},isLayoutChange(e,t){return t!==void 0&&k(e).layoutChange===t},finishLayoutChange(e,t){M.isLayoutChange(e,t)&&A(e,{layoutChange:void 0})},startWidgetChange(e,t){e&&O.set(e,t)},isLatestWidgetChange(e,t){return!e||O.get(e)===t},finishWidgetChange(e,t){e&&O.get(e)===t&&O.delete(e)},setPendingLayoutSettings(e,t,n){e&&n&&(E.set(j(e,t),n),D.set(e,t))},settleLayoutSettings(e,t,n){let r=j(e,t),i=E.get(r);E.delete(r),D.get(e)===t&&D.delete(e),n&&i&&M.setLayoutSettings(e,i)},getLayoutSettings(e){return T.get(e)||{}},getLatestLayoutSettings(e){let t=D.get(e);return t!==void 0&&E.get(j(e,t))||M.getLayoutSettings(e)},setLayoutSettings(e,t){e&&T.set(e,t)},copyLayoutSettings(e,t){T.has(e)&&M.setLayoutSettings(t,T.get(e))},subscribe:w.subscribe},N=Et({storageBlockOpen:!1}),P=new Map,F={isStorageBlockOpen(e){return N.get(e).storageBlockOpen},setStorageBlockOpen(e,t){N.update(e,{storageBlockOpen:t})},subscribe:N.subscribe,setPromptSender(e,t){return P.set(e,t),()=>P.get(e)===t&&P.delete(e)},sendPrompt(e,t){F.setStorageBlockOpen(e,!1),P.get(e)?.(t)}},Dt=2;function I(e){return Array.isArray(e?.layouts)?e.layouts.filter(e=>e?.id):[]}function L(e){return e.length>=Dt}function R(e,t){let n=t?.layout;return(e.find(e=>e.id===n)||e.find(e=>Array.isArray(e.aliases)&&e.aliases.includes(n))||e[0])?.id}function Ot({layouts:e,jsonConfig:t,targetLayoutId:n,memory:r={}}){let i=R(e,t),a=z(e,i),o=z(e,n),s={...structuredClone(t||{}),layout:n},c=structuredClone(s);if(!a||!o||i===n)return{hasUserChanges:!1,transferJsonConfig:s,resetJsonConfig:c,memory:r};let l=new Map((r[n]||[]).map(e=>[jt(e.path),e.value])),u=!1;new Set([...a.keys(),...o.keys()]).forEach(e=>{let n=a.get(e),r=o.get(e);if(!r)return;let i=r.path,d=Mt(t,i),f=l.has(e)?l.get(e):r.value;if(!n){d===void 0&&B(s,c,i,f);return}V(n.value,r.value)||(d!==void 0&&!V(d,n.value)&&!V(d,r.value)?(u=!0,B(c,void 0,i,f)):B(s,c,i,f))});let d=At(r,i,a,t);return delete d[n],{hasUserChanges:u,transferJsonConfig:s,resetJsonConfig:c,memory:d}}function kt({layouts:e,previousJsonConfig:t,jsonConfig:n,memory:r={}}){let i=R(e,t),a=z(e,i);return!a||i===R(e,n)?r:At(r,i,a,t)}function At(e,t,n,r){let i=[...n.values()].map(({path:e,value:t})=>({path:e,value:Mt(r,e),presetValue:t})).filter(({value:e,presetValue:t})=>e!==void 0&&!V(e,t)).map(({path:e,value:t})=>({path:e,value:structuredClone(t)})),a={...e};return i.length?a[t]=i:delete a[t],a}function z(e,t){let n=e.find(e=>e.id===t)?.preset;if(!U(n))return;let r=new Map,i=(e,t)=>{U(e)?Object.keys(e).forEach(n=>i(e[n],[...t,n])):r.set(jt(t),{path:t,value:e})};return i(n,[]),r}function jt(e){return JSON.stringify(e)}function Mt(e,t){return t.reduce((e,t)=>U(e)?e[t]:void 0,e)}function B(e,t,n,r){[e,t].filter(Boolean).forEach(e=>{let t=n.slice(0,-1).reduce((e,t)=>(U(e[t])||(e[t]={}),e[t]),e);t[n[n.length-1]]=structuredClone(r)})}function V(e,t){return JSON.stringify(H(e))===JSON.stringify(H(t))}function H(e){return typeof e==`string`&&/^#[0-9a-f]{3,8}$/i.test(e)?e.toLowerCase():Array.isArray(e)?e.map(H):e}function U(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}var W=new Map,G=new Map;function Nt(e){(G.get(e)||[]).forEach(e=>e())}var K={open(e,t){e&&(W.set(e,t),Nt(e))},close(e){W.delete(e)&&Nt(e)},getRequest(e){return W.get(e)},subscribe(e,t){G.has(e)||G.set(e,new Set);let n=G.get(e);return n.add(t),()=>{n.delete(t),n.size||G.delete(e)}}},Pt=`widgetControls`,Ft=`settings_control_change`,It=`settings_control_step`,Lt=`settings_color_pick`,Rt=`settings_value_updated`,q=Object.freeze({BOOLEAN:`boolean`,NUMBER:`number`,LENGTH:`length`,STRING:`string`,COLOR:`color`}),zt=`.`,Bt=10,Vt=new Set([`__proto__`,`prototype`,`constructor`]),Ht=/^(?:0|[1-9][0-9]*)$/,Ut=/^-?[0-9]+(?:\.[0-9]+)?(px|%|em|rem)?$/,Wt=new Set([``,`px`,`%`,`em`,`rem`]),Gt=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;function Kt(e,t,{onChange:n,onStep:r,onColorPick:i}){let a={[Ft]:n,[It]:r,[Lt]:i}[e?.type],o=a&&Jt(e.payload,t);return!o||!qt(e.type,o)?!1:(a(o),!0)}function qt(e,t){return e===`settings_color_pick`?t.valueType===q.COLOR:e!==`settings_control_step`||(t.valueType===q.NUMBER||t.valueType===q.LENGTH)&&J(t.delta)&&t.delta!==0}function Jt(e,t){if(!(!an(e)||typeof e.path!=`string`||!e.path.trim())&&Object.values(q).includes(e.valueType))return{path:e.path.trim(),valueType:e.valueType,value:e.value,unit:typeof e.unit==`string`?e.unit:``,...e.delta===void 0?{}:{delta:e.delta},...J(e.min)?{min:e.min}:{},...J(e.max)?{max:e.max}:{},...t?{itemId:t}:{}}}function Yt(e,t){let n=e,r=[];return t.forEach(t=>{let i=Xt(n,t.path);if(!i)return;let a=en(t,i.value);if(a===void 0||(r.push({...t,value:a}),a===i.value))return;n===e&&(n=structuredClone(e));let{parent:o,key:s}=Xt(n,t.path);o[s]=a}),{jsonConfig:n,applied:r}}function Xt(e,t){let n=t.split(zt),r,i,a=e;for(let e of n){if(Vt.has(e))return;if(Array.isArray(a)){if(!Ht.test(e)||Number(e)>=a.length)return}else if(!an(a)||!Object.hasOwn(a,e))return;r=a,i=Array.isArray(a)?Number(e):e,a=a[i]}return r?{parent:r,key:i,value:a}:void 0}function Zt(e){return e.filter(e=>e.itemId).map(({path:e,value:t,itemId:n})=>({action:{type:Rt,payload:{path:e,value:t}},itemId:n}))}function Qt(e,t){return Xt(e,t)?.value}function $t(e,t,{min:n=0,max:r=1/0}={}){let i=typeof e==`string`&&Ut.test(e)?parseFloat(e):nn(e);if(i===void 0)return;let a=Number((i+t).toFixed(Bt));return Math.min(r,Math.max(n,a))}function en({valueType:e,value:t,unit:n},r){switch(e){case q.BOOLEAN:return typeof r==`boolean`?tn(t):void 0;case q.NUMBER:return J(r)?nn(t):void 0;case q.LENGTH:{let e=nn(t),i=typeof r==`string`?Ut.exec(r):null,a=n||i?.[1]||``;return i&&e!==void 0&&Wt.has(a)?`${e}${a}`:void 0}case q.STRING:return typeof r==`string`&&typeof t==`string`&&t?t:void 0;case q.COLOR:return rn(r)&&rn(t)?t:void 0;default:return}}function tn(e){return typeof e==`boolean`?e:e===`true`||e!==`false`&&void 0}function nn(e){if(J(e))return e;if(typeof e!=`string`||!e.trim())return;let t=Number(e);return Number.isFinite(t)?t:void 0}function J(e){return typeof e==`number`&&Number.isFinite(e)}function rn(e){return typeof e==`string`&&Gt.test(e)}function an(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}var on=class{#e=new Map;#t=void 0;#n=!1;constructor({onFlush:e,delayMs:t=500}){this.onFlush=e,this.delayMs=t}get(e){return this.#e.get(e)}push(e){this.#e.delete(e.path),this.#e.set(e.path,e),this.#r()}hold(){this.#n=!0,this.#i()}release(){this.#n=!1,this.flush()}flush(){if(this.#i(),this.#n||!this.#e.size)return;let e=[...this.#e.values()];this.#e.clear(),this.onFlush(e)}clear(){this.#i(),this.#e.clear(),this.#n=!1}#r(){this.#i(),this.#n||(this.#t=setTimeout(()=>this.flush(),this.delayMs))}#i(){clearTimeout(this.#t),this.#t=void 0}},sn=`widgets-ai-panel-ui-element`,cn=class{static buildUiElement(e){return class extends _{getId(){return`${sn}_${e.widgetId}`}getTemplate(){return`
                    <div class="widgets-ai-panel-layout">
                        <div class="widgets-layouts-strip-container">
                            <div class="widgets-layouts-strip" role="radiogroup" hidden></div>
                        </div>
                        <div id="ui-editor-widgets-ai-panel-container"></div>
                    </div>
                `}onRender(t){this.layouts=I(e),this.layoutsStrip=t.querySelector(`.widgets-layouts-strip`),this.renderLayoutsStrip(),this.renderLayoutQuestion(),this.settingsChanges=new on({onFlush:e=>this.applySettingsChanges(e)}),this.panelControl=t.closest(`.ui-editor-widgets-ai-panel-control`),this.panelControl?.addEventListener(`keydown`,this.onPanelKeydown),this.panelControl?.addEventListener(`focusout`,this.onPanelFocusOut);let n=this.api.getEditorConfig();this.chatKitSdk=new et({domainName:`stripo_widget_assistant`,editorMode:n?.editorMode,chatkitDomainPublicKey:n?.firstPartyExtensions?.chatkitDomainPublicKey,authTokenGetter:()=>C.getConvoAuthToken(this.api),fetchFn:(e,t)=>C.fetch(e,t,this.api),chatKitPanelContainer:t.querySelector(`#ui-editor-widgets-ai-panel-container`),eventHandlers:this.getChatKitEventHandlers(),onWidgetAction:(e,t)=>this.onWidgetAction(e,t),headerTitle:this.api.translate(`AI Assistant`),startScreenGreeting:e.aiGreetingsText?this.api.translate(e.aiGreetingsText):null,quickStartPrompts:(e.quickStartPrompts||[]).map(e=>({prompt:this.api.translate(e.prompt),label:this.api.translate(e.label)})),composerPlaceholder:this.api.translate(`Describe what you want to modify...`),locale:n?.locale,theme:this.getChatkitTheme(t),attachImageToolLabel:this.api.translate(`Attach Image`),onAttachImage:e.allowImageAttachments?this.openAttachImageLibrary.bind(this):null,domainModelRevisionGetter:this.getDomainModelRevision.bind(this)})}onDestroy(){super.onDestroy(),this.chatKitSdk.destroyPanel(),this.resetSettingsControls(x.getBlockUUID(this.getValue())),this.closeLayoutQuestion(),this.unsubscribeLayoutsState?.(),this.unsubscribeMenuState?.(),F.setStorageBlockOpen(x.getBlockUUID(this.getValue()),!1),this.panelControl?.removeEventListener(`keydown`,this.onPanelKeydown),this.panelControl?.removeEventListener(`focusout`,this.onPanelFocusOut),M.setAiResponding(x.getBlockUUID(this.getValue()),!1)}getValue(){return this.nodeConfig}setValue(e){e=typeof e==`string`?JSON.parse(e):e;let t=x.getBlockUUID(e);x.isSameWidget({currentConfig:this.getValue(),newConfig:e})||(this.closeLayoutQuestion(),this.resetSettingsControls(x.getBlockUUID(this.getValue())),this.subscribeToLayoutsState(x.getBlockUUID(this.getValue()),t),this.subscribeToMenuState(x.getBlockUUID(this.getValue()),t),this.chatKitSdk.initPanel({domainModelId:t,threadIdStorageKey:`widgets-thread-id-${t}`,metadata:{widgetId:x.getWidgetId(e),useDraft:C.isDraftMode(),[Pt]:!0}})),this.nodeConfig={...e},this.updateLayoutsStrip()}subscribeToLayoutsState(e,t){this.unsubscribeLayoutsState?.(),M.setAiResponding(e,!1),this.unsubscribeLayoutsState=this.hasLayoutsStrip()?M.subscribe(t,()=>this.updateLayoutsStrip()):void 0}subscribeToMenuState(e,t){this.unsubscribeMenuState?.(),F.setStorageBlockOpen(e,!1);let n=F.subscribe(t,()=>this.updateStorageBlock()),r=F.setPromptSender(t,e=>this.chatKitSdk.sendUserMessage(e));this.unsubscribeMenuState=()=>{n(),r()},this.updateStorageBlock(t)}updateStorageBlock(e=x.getBlockUUID(this.getValue())){let t=F.isStorageBlockOpen(e),n=t&&!this.panelControl?.classList.contains(`widgets-storage-block-open`);this.panelControl?.classList.toggle(`widgets-storage-block-open`,t),t&&K.close(e),n&&this.panelControl?.querySelector(`.widgets-storage-block`)?.focus()}onPanelKeydown=e=>{let t=x.getBlockUUID(this.getValue());F.isStorageBlockOpen(t)&&(e.key===`Escape`?(e.stopPropagation(),F.setStorageBlockOpen(t,!1)):e.key===`Enter`&&this.isFilledExternalStorageField(e.target)&&F.setStorageBlockOpen(t,!1))};onPanelFocusOut=e=>{let t=x.getBlockUUID(this.getValue()),n=this.panelControl?.querySelector(`.widgets-storage-block`);F.isStorageBlockOpen(t)&&this.isFilledExternalStorageField(e.target)&&!n?.contains(e.relatedTarget)&&F.setStorageBlockOpen(t,!1)};isFilledExternalStorageField(e){return e instanceof HTMLInputElement&&!!e.value.trim()&&!!e.closest(`.widgets-storage-block`)&&!e.closest(`ue-select`)}hasLayoutsStrip(){return!!this.layouts&&L(this.layouts)}renderLayoutsStrip(){this.hasLayoutsStrip()&&(this.layoutsStrip.setAttribute(`aria-label`,this.api.translate(`Layouts`)),this.layoutTiles=this.layouts.map(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`widgets-layout-tile`,t.setAttribute(`role`,`radio`),t.dataset.layoutId=e.id;let n=document.createElement(`span`);if(n.className=`widgets-layout-tile__preview`,e.thumbnailUrl){let t=document.createElement(`img`);t.src=e.thumbnailUrl,t.alt=``,t.loading=`lazy`,n.appendChild(t)}let r=document.createElement(`span`);return r.className=`widgets-layout-tile__name`,r.textContent=this.api.translate(e.name),t.append(n,r),t.addEventListener(`click`,()=>this.onLayoutTileClick(e.id)),this.layoutsStrip.appendChild(t),t}))}updateLayoutsStrip(){if(!this.hasLayoutsStrip()||!this.layoutTiles)return;let e=x.getBlockUUID(this.getValue()),t=R(this.layouts,x.getJsonConfig(this.getValue())),n=M.isBusy(e);this.layoutsStrip.hidden=!e||M.isCollapsed(e),this.layoutsStrip.setAttribute(`aria-busy`,`${n}`),this.layoutTiles.forEach(e=>{let r=e.dataset.layoutId===t;e.setAttribute(`aria-checked`,`${r}`),e.classList.toggle(`widgets-layout-tile--selected`,r),e.disabled=n})}renderLayoutQuestion(){if(!this.hasLayoutsStrip())return;let e=document.createElement(`div`);e.className=`widgets-layout-question`,e.setAttribute(`role`,`alertdialog`),e.hidden=!0;let t=document.createElement(`p`);t.className=`widgets-layout-question__text`;let n=this.createLayoutQuestionButton(`widgets-layout-question__close`,`×`,()=>this.closeLayoutQuestion({restoreFocus:!0}));n.setAttribute(`aria-label`,this.api.translate(`Cancel`));let r=document.createElement(`div`);r.className=`widgets-layout-question__actions`;let i=this.createLayoutQuestionButton(`widgets-layout-question__button widgets-layout-question__button--primary`,this.api.translate(`Transfer`),()=>this.answerLayoutQuestion(!0));r.append(i,this.createLayoutQuestionButton(`widgets-layout-question__button`,this.api.translate(`Do not transfer`),()=>this.answerLayoutQuestion(!1))),e.append(n,t,r),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),this.closeLayoutQuestion({restoreFocus:!0}))}),this.layoutsStrip.parentElement.after(e),this.layoutQuestion={element:e,text:t,transferButton:i}}createLayoutQuestionButton(e,t,n){let r=document.createElement(`button`);return r.type=`button`,r.className=e,r.textContent=t,r.addEventListener(`click`,n),r}openLayoutQuestion(e,t){let n=this.layouts.find(e=>e.id===t),r=this.api.translate(`You changed the design of this layout. Transfer the changes to "{layoutName}"?`,{layoutName:this.api.translate(n.name)});this.layoutQuestion.text.textContent=r,this.layoutQuestion.element.setAttribute(`aria-label`,r),this.layoutQuestion.element.hidden=!1,this.pendingLayoutQuestion={blockUUID:e,layoutId:t},M.setLayoutQuestion(e,!0),this.layoutQuestion.transferButton.focus()}closeLayoutQuestion({restoreFocus:e=!1}={}){let t=this.pendingLayoutQuestion;if(t)return this.pendingLayoutQuestion=void 0,this.layoutQuestion.element.hidden=!0,M.setLayoutQuestion(t.blockUUID,!1),e&&this.layoutTiles.find(e=>e.dataset.layoutId===t.layoutId)?.focus(),t}answerLayoutQuestion(e){let t=this.closeLayoutQuestion(),n=x.getBlockUUID(this.getValue());if(!t||t.blockUUID!==n||M.isBusy(n))return;let r=this.planLayoutSwitch(n,t.layoutId);r&&this.applyLayoutSwitch(n,e?r.transferJsonConfig:r.resetJsonConfig,r.memory)}onLayoutTileClick(e){let t=x.getBlockUUID(this.getValue());if(!t||M.isBusy(t))return;let n=this.planLayoutSwitch(t,e);n&&(n.hasUserChanges?this.openLayoutQuestion(t,e):this.applyLayoutSwitch(t,n.resetJsonConfig,n.memory))}planLayoutSwitch(e,t){let n=x.getJsonConfig(this.getValue());if(R(this.layouts,n)!==t)return Ot({layouts:this.layouts,jsonConfig:n,targetLayoutId:t,memory:M.getLatestLayoutSettings(e)})}applyLayoutSwitch(e,t,n){this.setValue(x.updateConfigJsonConfig({jsonConfig:t,currentConfig:this.getValue()}));let r=JSON.stringify(this.getValue());M.startLayoutChange(e,r,n),this.api.triggerValueChange(r)}getChatKitEventHandlers(){return{"chatkit.response.start":()=>{M.setAiResponding(x.getBlockUUID(this.getValue()),!0),this.settingsChanges.hold()},"chatkit.response.end":()=>{M.setAiResponding(x.getBlockUUID(this.getValue()),!1),this.settingsChanges.release()},"chatkit.effect":t=>{let{name:n,data:r}=t.detail;if(console.log(`%conEffect`,`background: yellow; color: black;`,n,r),n===`apply_domain_model`){let t=typeof r.domain_model==`string`?JSON.parse(r.domain_model):r.domain_model;this.applyJsonConfig(t),this.api.sendEvent&&this.api.sendEvent(`widget_updated`,{name:e.name})}}}}applyJsonConfig(e){let t=this.rememberLayoutSettings(e);this.setValue(x.updateConfigJsonConfig({jsonConfig:e,currentConfig:this.getValue()}));let n=JSON.stringify(this.getValue());M.setPendingLayoutSettings(x.getBlockUUID(this.getValue()),n,t),this.api.triggerValueChange(n)}onWidgetAction(e,t){Kt(e,t?.id,{onChange:e=>this.settingsChanges.push(e),onStep:e=>this.stepSettingsControl(e),onColorPick:e=>this.openSettingsColorPicker(e)})}stepSettingsControl({delta:e,min:t,max:n,...r}){let i=this.settingsChanges.get(r.path),a=$t(i?i.value:Qt(x.getJsonConfig(this.getValue()),r.path),e,{min:t,max:n});a!==void 0&&this.settingsChanges.push({...r,value:a})}openSettingsColorPicker(e){let t=Qt(x.getJsonConfig(this.getValue()),e.path);K.open(x.getBlockUUID(this.getValue()),{path:e.path,value:rn(t)?t:e.value,onPick:t=>this.settingsChanges.push({...e,value:t})})}applySettingsChanges(e){let t=x.getJsonConfig(this.getValue()),{jsonConfig:n,applied:r}=Yt(t,e);n!==t&&this.applyJsonConfig(n),Zt(r).forEach(({action:e,itemId:t})=>this.chatKitSdk.sendCustomAction(e,t))}resetSettingsControls(e){this.settingsChanges.clear(),K.close(e)}rememberLayoutSettings(e){let t=x.getBlockUUID(this.getValue());if(!(!this.hasLayoutsStrip()||!t))return kt({layouts:this.layouts,previousJsonConfig:x.getJsonConfig(this.getValue()),jsonConfig:e,memory:M.getLatestLayoutSettings(t)})}getDomainModelRevision(){return x.getJsonConfig(this.getValue())}getChatkitTheme(e){let t=this.api.getEditorConfig()?.editorThemeVariables;return st(ct(t,e))}openAttachImageLibrary({onSelect:e,onCancel:t,onError:n}){try{window.StripoEditorApi.actionsApi.openImageLibrary(null,e,t)}catch(e){n(e)}}}}},ln=class e{static prepareExternalWidgetMarkup({widgetMarkupString:t,showAmpOnlyForBothMimeTypeView:n,innerHtml:r=!1,updateUniqueSeed:i=!1}){let a=i?e.#e(t):t,o=document.createElement(`tr`);if(o.innerHTML=a,n){let e=o.querySelector(`.es-visible-amp-html-only`);e&&(o.querySelector(`.es-visible-simple-html-only`)?.classList?.add(`ue-widget-html-version`),e?.classList?.add(`ue-widget-amp-html-version`))}return r?o.querySelector(`td`).innerHTML:o.innerHTML}static#e(t){try{let n=e.#t(t,`w-pref-`);if(n){let e=`${crypto.randomUUID().replace(/-/g,``)}`;return t.replaceAll(n,e)}}catch(e){console.error(`Error replacing unique widget seed:`,e)}return t}static#t(e,t){let n=e.match(RegExp(`${t}[A-Za-z0-9-]+(?=[\\s"'<>]|$)`,`g`));return n?n[0].substring(t.length):null}},un=class e{static async applyWidgetModification({updatedNodeConfig:e,widgetConfig:t,documentModifier:n,node:r,versionHistoryMessage:i,api:a,isActual:o=()=>!0}){let s=await C.loadWidgetTemplate({widgetId:x.getWidgetId(e),jsonConfig:x.getJsonConfig(e),api:a});if(!o())return!1;let c=ln.prepareExternalWidgetMarkup({widgetMarkupString:s.module,showAmpOnlyForBothMimeTypeView:t.showAmpOnlyForBothMimeTypeView,innerHtml:!0}),l=x.updateConfigJsonConfig({jsonConfig:s.config,currentConfig:r.getNodeConfig()});return n.modifyHtml(r).setHiddenElementState(x.getHiddenWidgetState(l)).setNodeConfig(l).setInnerHtml(c).apply(new Be(i)),!0}static async applyWidgetAmpServiceUrlModification({ampServiceUrl:t,widgetConfig:n,documentModifier:r,node:i,versionHistoryMessage:a,api:o}){let s=x.updateConfigAmpServiceUrl({ampServiceUrl:t,currentConfig:i.getNodeConfig()});return await e.applyWidgetModification({updatedNodeConfig:s,widgetConfig:n,documentModifier:r,node:i,versionHistoryMessage:a,api:o})}},Y=Object.freeze({NONE:`none`,MISSING:`missing`,CHOSEN:`chosen`});function dn({hasDataService:e,ampServiceUrl:t,ampFormServices:n}){if(!e)return{state:Y.NONE};if(!t)return{state:Y.MISSING};let r=(n||[]).find(e=>e?.value===t);return{state:Y.CHOSEN,name:r?.label||t}}function fn(e,t){return!!e&&(t||[]).some(t=>t?.value===e)}var pn=`settingsColorLayer`,mn=`settingsColor`,hn=`settingsColorClose`,gn=`widgets-ai-panel-control`,_n=class{static buildControl(e){return class extends Se{getId(){return`${gn}_${e.widgetId}`}getTemplate(){let t=e.hasDataService?`
                        <div class="container widgets-storage-block" tabindex="-1">
                            <${g.AMP_FORM_SERVICE_PICKER} ${h.AMP_FORM_SERVICE_PICKER.name}="dataService"></${g.AMP_FORM_SERVICE_PICKER}>
                        </div>`:``;return`
                    <div class="ui-editor-widgets-ai-panel-control">
                        <${sn}_${e.widgetId} name="widgetAiPanel"></${sn}_${e.widgetId}>${t}
                        <div class="widgets-settings-color-layer" ${h.DEFAULT.name}="${pn}">
                            <${g.LABEL} ${h.LABEL.text}="${this.api.translate(`Color`)}"></${g.LABEL}>
                            <${g.COLOR} ${h.COLOR.name}="${mn}"></${g.COLOR}>
                            <${g.BUTTON} ${h.BUTTON.name}="${hn}" ${h.BUTTON.caption}="${this.api.translate(`Close`)}"></${g.BUTTON}>
                        </div>
                    </div>
                `}onRender(){this.node=void 0,this.unsubscribeSettingsColorPicker?.(),this.unsubscribeSettingsColorPicker=void 0,this.renderSettingsColorPicker(),this.api.onValueChanged(mn,e=>{K.getRequest(this.getBlockUUID())?.onPick(e)}),this.api.onValueChanged(hn,()=>K.close(this.getBlockUUID())),this.api.onValueChanged(`widgetAiPanel`,async t=>{let n=JSON.parse(t),r=this.node,i=x.getBlockUUID(n),a=M.isLayoutChange(i,t),o=a?`layout has been changed`:`widget has been updated`,s=!1;M.startWidgetChange(i,t);try{s=await un.applyWidgetModification({updatedNodeConfig:n,widgetConfig:e,api:this.api,documentModifier:this.api.getDocumentModifier(),node:r,versionHistoryMessage:`"${this.api.translate(e.name)}" ${this.api.translate(o)}`,isActual:()=>M.isLatestWidgetChange(i,t)})}catch(e){if(!a)throw e;console.error(`Failed to apply widget layout:`,e),r===this.node&&this.api.updateValues({widgetAiPanel:r.getNodeConfig()})}finally{M.finishWidgetChange(i,t),M.settleLayoutSettings(i,t,s),a&&M.finishLayoutChange(i,t)}}),e.hasDataService&&this.api.onValueChanged(`dataService`,async(t,n)=>{if(!t&&n)return;let r=this.node;fn(t,this.api.getEditorConfig()?.ampFormServices)&&F.setStorageBlockOpen(x.getBlockUUID(r.getNodeConfig()),!1),await un.applyWidgetAmpServiceUrlModification({ampServiceUrl:t,widgetConfig:e,api:this.api,documentModifier:this.api.getDocumentModifier(),node:r,versionHistoryMessage:`"${this.api.translate(e.name)}" ${this.api.translate(`widget has been updated`)}`})})}onTemplateNodeUpdated(t){let n=this.getBlockUUID();this.node=t,n!==this.getBlockUUID()&&(this.unsubscribeSettingsColorPicker?.(),this.unsubscribeSettingsColorPicker=K.subscribe(this.getBlockUUID(),()=>this.renderSettingsColorPicker()),this.renderSettingsColorPicker());let r=t.getNodeConfig();this.api.updateValues({widgetAiPanel:r,...e.hasDataService?{dataService:x.getAmpServiceUrl(r)}:{}})}onDestroy(){this.unsubscribeSettingsColorPicker?.()}getBlockUUID(){return x.getBlockUUID(this.node?.getNodeConfig())}renderSettingsColorPicker(){let e=K.getRequest(this.getBlockUUID());e&&this.api.updateValues({[mn]:e.value}),this.api.setVisibility(pn,!!e)}}}},vn=`widgets-layouts-toggle-ui-element`,yn=class extends _{getId(){return vn}getTemplate(){return`<div class="widgets-layouts-toggle-wrapper">
            <button type="button" class="widgets-layouts-toggle">
                <ue-icon src="stripe" class="icon-button"></ue-icon>
            </button>
            <ue-icon src="popup-pointer-light-bottom" class="widgets-header-ear"></ue-icon>
        </div>`}onRender(e){this.button=e.querySelector(`.widgets-layouts-toggle`),this.button.addEventListener(`click`,()=>this.onClick()),this.renderState()}onDestroy(){super.onDestroy(),this.unsubscribe?.()}getValue(){return this.blockUUID}setValue(e){if(e===this.blockUUID)return;this.unsubscribe?.(),this.blockUUID=e;let t=e?[M,F].map(t=>t.subscribe(e,()=>this.renderState())):[];this.unsubscribe=t.length?()=>t.forEach(e=>e()):void 0,this.renderState()}onClick(){if(this.blockUUID){if(!F.isStorageBlockOpen(this.blockUUID)){M.toggleCollapsed(this.blockUUID);return}F.setStorageBlockOpen(this.blockUUID,!1),M.isCollapsed(this.blockUUID)&&M.toggleCollapsed(this.blockUUID)}}renderState(){if(!this.button)return;let e=!M.isCollapsed(this.blockUUID)&&!F.isStorageBlockOpen(this.blockUUID);this.button.setAttribute(`aria-pressed`,`${e}`),this.button.setAttribute(`aria-label`,this.api.translate(`Layouts`)),this.button.title=this.api.translate(e?`Hide layouts`:`Show layouts`)}},bn=`widgets-layouts-toggle`,xn=class{static buildControl(e){return class extends Se{getId(){return`${bn}_${e.widgetId}`}getTemplate(){return`<${vn} name="layoutsToggle"></${vn}>`}onTemplateNodeUpdated(e){this.api.updateValues({layoutsToggle:x.getBlockUUID(e.getNodeConfig())})}}}},Sn=`widgets-panel-menu-ui-element`,Cn=`Let me show or hide the content elements of this widget.`,wn=`Let me change the styles of this widget.`,Tn=class extends _{getId(){return Sn}getTemplate(){return`
            <div class="widgets-panel-menu">
                <button type="button" class="widgets-panel-menu__toggle" aria-haspopup="menu" aria-expanded="false">
                    <ue-icon src="more" class="icon-button"></ue-icon>
                </button>
                <ue-icon src="popup-pointer-light-bottom" class="widgets-header-ear"></ue-icon>
                <div class="widgets-panel-menu__dropdown" hidden>
                    <div class="menu" role="menu">
                        <button type="button" class="menu-item" role="menuitem" data-action="options">
                            <ue-icon src="eye" class="icon-text"></ue-icon>
                            <span class="menu-item-text">${this.api.translate(`Manage Options`)}</span>
                        </button>
                        <button type="button" class="menu-item" role="menuitem" data-action="styles">
                            <ue-icon src="appearance" class="icon-text"></ue-icon>
                            <span class="menu-item-text">${this.api.translate(`Styles`)}</span>
                        </button>
                        <button type="button" class="menu-item widgets-panel-menu__storage" role="menuitem" data-action="storage">
                            <ue-icon src="data" class="icon-text widgets-panel-menu__storage-icon"></ue-icon>
                            <span class="menu-item-text">
                                <span>${this.api.translate(`Data Storage`)}</span>
                                <span class="widgets-panel-menu__storage-name"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        `}onRender(e){this.root=e.querySelector(`.widgets-panel-menu`),this.toggle=e.querySelector(`.widgets-panel-menu__toggle`),this.dropdown=e.querySelector(`.widgets-panel-menu__dropdown`),this.items=[...e.querySelectorAll(`[role="menuitem"]`)],this.storageItem=e.querySelector(`[data-action="storage"]`),this.storageName=e.querySelector(`.widgets-panel-menu__storage-name`),this.toggle.setAttribute(`aria-label`,this.api.translate(`More actions`)),this.toggle.title=this.api.translate(`More actions`),this.toggle.addEventListener(`click`,()=>this.isOpen()?this.close():this.open()),this.items.forEach(e=>e.addEventListener(`click`,()=>this.onItemClick(e.dataset.action))),this.dropdown.addEventListener(`keydown`,e=>this.onDropdownKeydown(e)),this.onDocumentPointerDown=e=>!e.composedPath().includes(this.root)&&this.close(),this.onWindowResize=()=>this.close(),this.renderState()}onDestroy(){super.onDestroy(),this.close(),this.unsubscribe?.()}getValue(){return this.value}setValue(e){let t=e?.blockUUID;if(t!==this.value?.blockUUID){this.close(),this.unsubscribe?.();let e=t?[M,F].map(e=>e.subscribe(t,()=>this.renderState())):[];this.unsubscribe=e.length?()=>e.forEach(e=>e()):void 0}this.value=e,this.renderState()}renderState(){if(!this.root)return;let{state:e,name:t}=this.getStorageStatus();this.root.dataset.storageState=e,this.root.dataset.storageOpen=`${F.isStorageBlockOpen(this.value?.blockUUID)}`,this.storageItem.hidden=e===Y.NONE,this.storageName.textContent=e===Y.CHOSEN?t:this.api.translate(`Storage is not chosen`),this.storageName.title=this.storageName.textContent;let n=M.isAiResponding(this.value?.blockUUID);this.items.filter(e=>e.dataset.action!==`storage`).forEach(e=>e.disabled=n)}getStorageStatus(){return dn({hasDataService:this.value?.hasDataService,ampServiceUrl:this.value?.ampServiceUrl,ampFormServices:this.api.getEditorConfig()?.ampFormServices})}isOpen(){return!this.dropdown.hidden}open(){if(!this.value?.blockUUID)return;this.renderState();let e=this.toggle.getBoundingClientRect();this.dropdown.style.top=`${e.bottom}px`,this.dropdown.style.right=`${document.documentElement.clientWidth-e.right}px`,this.dropdown.hidden=!1,this.toggle.setAttribute(`aria-expanded`,`true`),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),window.addEventListener(`resize`,this.onWindowResize),this.items.find(e=>!e.hidden&&!e.disabled)?.focus()}close({restoreFocus:e=!1}={}){!this.dropdown||!this.isOpen()||(this.dropdown.hidden=!0,this.toggle.setAttribute(`aria-expanded`,`false`),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),window.removeEventListener(`resize`,this.onWindowResize),e&&this.toggle.focus())}onItemClick(e){let t=this.value?.blockUUID;if(this.close(),t)switch(e){case`options`:F.sendPrompt(t,this.api.translate(Cn));break;case`styles`:F.sendPrompt(t,this.api.translate(wn));break;case`storage`:F.setStorageBlockOpen(t,!0);break}}onDropdownKeydown(e){if(e.key===`Escape`){e.stopPropagation(),this.close({restoreFocus:!0});return}if(e.key!==`ArrowDown`&&e.key!==`ArrowUp`)return;e.preventDefault();let t=this.items.filter(e=>!e.hidden&&!e.disabled);t[(t.indexOf(this.root.getRootNode().activeElement)+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus()}},En=`widgets-panel-menu`,Dn=class{static buildControl(e){return class extends Se{getId(){return`${En}_${e.widgetId}`}getTemplate(){return`<${Sn} name="widgetMenu"></${Sn}>`}onTemplateNodeUpdated(t){let n=t.getNodeConfig();this.api.updateValues({widgetMenu:{blockUUID:x.getBlockUUID(n),hasDataService:!!e.hasDataService,ampServiceUrl:x.getAmpServiceUrl(n)}})}}}},On=class{static buildWidgetsSettingsPanel(e){return class extends De{registerBlockControls(t){e.forEach(e=>{let n=[{id:`${gn}_${e.widgetId}`,withFullHeight:!0}];t[e.widgetId]=[new Oe(`widgetsAi`,n).withLabel(`Stripo AI`)]})}registerBlockHeaderControls(t){e.forEach(e=>{t[e.widgetId]=[...L(I(e))?[`${bn}_${e.widgetId}`]:[],`${En}_${e.widgetId}`]})}}}},kn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path d="M7,2 L4,2 C2.8954305,2 2,2.8954305 2,4 L2,7 C2,8.1045695 2.8954305,9 4,9 L7,9 C8.1045695,9 9,8.1045695 9,7 L9,4 C9,2.8954305 8.1045695,2 7,2 Z M4,4 L7,4 L7,7 L4,7 L4,4 Z M7,11 C8.1045695,11 9,11.8954305 9,13 L9,16 C9,17.1045695 8.1045695,18 7,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,13 C2,11.8954305 2.8954305,11 4,11 Z M13,11 L16,11 C17.1045695,11 18,11.8954305 18,13 L18,16 C18,17.1045695 17.1045695,18 16,18 L13,18 C11.8954305,18 11,17.1045695 11,16 L11,13 C11,11.8954305 11.8954305,11 13,11 Z M4,13 L4,16 L7,16 L7,13 L4,13 Z M16,13 L13,13 L13,16 L16,16 L16,13 Z M13.0857864,1.96446609 C13.866835,1.18341751 15.133165,1.18341751 15.9142136,1.96446609 L18.0355339,4.08578644 C18.8165825,4.86683502 18.8165825,6.13316498 18.0355339,6.91421356 L15.9142136,9.03553391 C15.133165,9.81658249 13.866835,9.81658249 13.0857864,9.03553391 L10.9644661,6.91421356 C10.1834175,6.13316498 10.1834175,4.86683502 10.9644661,4.08578644 Z M14.5,3.37867966 L12.3786797,5.5 L14.5,7.62132034 L16.6213203,5.5 L14.5,3.37867966 Z"/>
</svg>
`,An=class extends ze{registerIconsSvg(e){e.widgetsPanelIcon=kn}},jn={Widgets:`Widgety`,"AI Assistant":`AI asistent`,"Describe what you want to modify...":`Popište, co chcete upravit...`,"Attach Image":`Připojit obrázek`,"widget has been updated":`widget byl aktualizován`,"Search by name":`Hledat podle názvu`,"No widgets found":`Nebyly nalezeny žádné widgety`,"Utility / Content":`Nástroje / Obsah`,Forms:`Formuláře`,Gamification:`Gamifikace`,eCommerce:`E-commerce`,"Personalized Images":`Personalizované obrázky`,Layouts:`Rozvržení`,"Show layouts":`Zobrazit rozvržení`,"Hide layouts":`Skrýt rozvržení`,"layout has been changed":`rozvržení bylo změněno`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Změnili jste vzhled tohoto rozvržení. Přenést změny do „{layoutName}“?`,Transfer:`Přenést`,"Do not transfer":`Nepřenášet`,Cancel:`Zrušit`,Color:`Barva`,Close:`Zavřít`,"More actions":`Další akce`,"Manage Options":`Spravovat možnosti`,Styles:`Styly`,"Data Storage":`Úložiště dat`,"Storage is not chosen":`Úložiště není vybráno`,"Let me show or hide the content elements of this widget.":`Umožni mi zobrazit nebo skrýt obsahové prvky tohoto widgetu.`,"Let me change the styles of this widget.":`Umožni mi změnit styly tohoto widgetu.`},Mn={Widgets:`Widgets`,"AI Assistant":`KI-Assistent`,"Describe what you want to modify...":`Beschreiben Sie, was Sie ändern möchten...`,"Attach Image":`Bild anhängen`,"widget has been updated":`widget wurde aktualisiert`,"Search by name":`Nach Namen suchen`,"No widgets found":`Keine Widgets gefunden`,"Utility / Content":`Utility / Inhalt`,Forms:`Formulare`,Gamification:`Gamification`,eCommerce:`E-Commerce`,"Personalized Images":`Personalisierte Bilder`,Layouts:`Layouts`,"Show layouts":`Layouts anzeigen`,"Hide layouts":`Layouts ausblenden`,"layout has been changed":`Layout wurde geändert`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Sie haben das Design dieses Layouts geändert. Änderungen auf „{layoutName}“ übertragen?`,Transfer:`Übertragen`,"Do not transfer":`Nicht übertragen`,Cancel:`Abbrechen`,Color:`Farbe`,Close:`Schließen`,"More actions":`Weitere Aktionen`,"Manage Options":`Optionen verwalten`,Styles:`Stile`,"Data Storage":`Datenspeicher`,"Storage is not chosen":`Kein Speicher ausgewählt`,"Let me show or hide the content elements of this widget.":`Lass mich die Inhaltselemente dieses Widgets ein- oder ausblenden.`,"Let me change the styles of this widget.":`Lass mich die Stile dieses Widgets ändern.`},Nn={Widgets:`Widgets`,"AI Assistant":`AI Assistant`,"Describe what you want to modify...":`Describe what you want to modify...`,"Attach Image":`Attach Image`,"widget has been updated":`widget has been updated`,"Search by name":`Search by name`,"No widgets found":`No widgets found`,"Utility / Content":`Utility / Content`,Forms:`Forms`,Gamification:`Gamification`,eCommerce:`eCommerce`,"Personalized Images":`Personalized Images`,Layouts:`Layouts`,"Show layouts":`Show layouts`,"Hide layouts":`Hide layouts`,"layout has been changed":`layout has been changed`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`You changed the design of this layout. Transfer the changes to "{layoutName}"?`,Transfer:`Transfer`,"Do not transfer":`Do not transfer`,Cancel:`Cancel`,Color:`Color`,Close:`Close`,"More actions":`More actions`,"Manage Options":`Manage Options`,Styles:`Styles`,"Data Storage":`Data Storage`,"Storage is not chosen":`Storage is not chosen`,"Let me show or hide the content elements of this widget.":`Let me show or hide the content elements of this widget.`,"Let me change the styles of this widget.":`Let me change the styles of this widget.`},Pn={Widgets:`Widgets`,"AI Assistant":`Asistente de IA`,"Describe what you want to modify...":`Describe lo que quieres modificar...`,"Attach Image":`Adjuntar imagen`,"widget has been updated":`el widget ha sido actualizado`,"Search by name":`Buscar por nombre`,"No widgets found":`No se encontraron widgets`,"Utility / Content":`Utilidad / Contenido`,Forms:`Formularios`,Gamification:`Gamificación`,eCommerce:`Comercio electrónico`,"Personalized Images":`Imágenes personalizadas`,Layouts:`Diseños`,"Show layouts":`Mostrar diseños`,"Hide layouts":`Ocultar diseños`,"layout has been changed":`se ha cambiado el diseño`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Has cambiado el estilo de este diseño. ¿Transferir los cambios a «{layoutName}»?`,Transfer:`Transferir`,"Do not transfer":`No transferir`,Cancel:`Cancelar`,Color:`Color`,Close:`Cerrar`,"More actions":`Más acciones`,"Manage Options":`Gestionar opciones`,Styles:`Estilos`,"Data Storage":`Almacenamiento de datos`,"Storage is not chosen":`No se ha elegido ningún almacenamiento`,"Let me show or hide the content elements of this widget.":`Permíteme mostrar u ocultar los elementos de contenido de este widget.`,"Let me change the styles of this widget.":`Permíteme cambiar los estilos de este widget.`},Fn={Widgets:`Widgets`,"AI Assistant":`Assistant IA`,"Describe what you want to modify...":`Décrivez ce que vous souhaitez modifier...`,"Attach Image":`Joindre une image`,"widget has been updated":`le widget a été mis à jour`,"Search by name":`Rechercher par nom`,"No widgets found":`Aucun widget trouvé`,"Utility / Content":`Utilitaires / Contenu`,Forms:`Formulaires`,Gamification:`Gamification`,eCommerce:`E-commerce`,"Personalized Images":`Images personnalisées`,Layouts:`Mises en page`,"Show layouts":`Afficher les mises en page`,"Hide layouts":`Masquer les mises en page`,"layout has been changed":`la mise en page a été modifiée`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Vous avez modifié le style de cette mise en page. Transférer les modifications vers « {layoutName} » ?`,Transfer:`Transférer`,"Do not transfer":`Ne pas transférer`,Cancel:`Annuler`,Color:`Couleur`,Close:`Fermer`,"More actions":`Plus d'actions`,"Manage Options":`Gérer les options`,Styles:`Styles`,"Data Storage":`Stockage des données`,"Storage is not chosen":`Aucun stockage choisi`,"Let me show or hide the content elements of this widget.":`Permets-moi d'afficher ou de masquer les éléments de contenu de ce widget.`,"Let me change the styles of this widget.":`Permets-moi de modifier les styles de ce widget.`},In={Widgets:`Widget`,"AI Assistant":`Assistente IA`,"Describe what you want to modify...":`Descrivi cosa vuoi modificare...`,"Attach Image":`Allega immagine`,"widget has been updated":`il widget è stato aggiornato`,"Search by name":`Cerca per nome`,"No widgets found":`Nessun widget trovato`,"Utility / Content":`Utilità / Contenuto`,Forms:`Moduli`,Gamification:`Gamification`,eCommerce:`E-commerce`,"Personalized Images":`Immagini personalizzate`,Layouts:`Layout`,"Show layouts":`Mostra layout`,"Hide layouts":`Nascondi layout`,"layout has been changed":`il layout è stato modificato`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Hai modificato lo stile di questo layout. Trasferire le modifiche a «{layoutName}»?`,Transfer:`Trasferisci`,"Do not transfer":`Non trasferire`,Cancel:`Annulla`,Color:`Colore`,Close:`Chiudi`,"More actions":`Altre azioni`,"Manage Options":`Gestisci opzioni`,Styles:`Stili`,"Data Storage":`Archiviazione dati`,"Storage is not chosen":`Nessuna archiviazione scelta`,"Let me show or hide the content elements of this widget.":`Permettimi di mostrare o nascondere gli elementi di contenuto di questo widget.`,"Let me change the styles of this widget.":`Permettimi di modificare gli stili di questo widget.`},Ln={Widgets:`Widgets`,"AI Assistant":`Assistente de IA`,"Describe what you want to modify...":`Descreva o que você deseja modificar...`,"Attach Image":`Anexar imagem`,"widget has been updated":`o widget foi atualizado`,"Search by name":`Pesquisar por nome`,"No widgets found":`Nenhum widget encontrado`,"Utility / Content":`Utilitários / Conteúdo`,Forms:`Formulários`,Gamification:`Gamificação`,eCommerce:`E-commerce`,"Personalized Images":`Imagens personalizadas`,Layouts:`Layouts`,"Show layouts":`Mostrar layouts`,"Hide layouts":`Ocultar layouts`,"layout has been changed":`o layout foi alterado`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Você alterou o estilo deste layout. Transferir as alterações para "{layoutName}"?`,Transfer:`Transferir`,"Do not transfer":`Não transferir`,Cancel:`Cancelar`,Color:`Cor`,Close:`Fechar`,"More actions":`Mais ações`,"Manage Options":`Gerenciar opções`,Styles:`Estilos`,"Data Storage":`Armazenamento de dados`,"Storage is not chosen":`Nenhum armazenamento escolhido`,"Let me show or hide the content elements of this widget.":`Deixe-me mostrar ou ocultar os elementos de conteúdo deste widget.`,"Let me change the styles of this widget.":`Deixe-me alterar os estilos deste widget.`},Rn={Widgets:`Виджеты`,"AI Assistant":`ИИ-помощник`,"Describe what you want to modify...":`Опишите, что вы хотите изменить...`,"Attach Image":`Прикрепить изображение`,"widget has been updated":`виджет был обновлен`,"Search by name":`Поиск по имени`,"No widgets found":`Виджеты не найдены`,"Utility / Content":`Утилиты / Контент`,Forms:`Формы`,Gamification:`Геймификация`,eCommerce:`Электронная коммерция`,"Personalized Images":`Персонализированные изображения`,Layouts:`Макеты`,"Show layouts":`Показать макеты`,"Hide layouts":`Скрыть макеты`,"layout has been changed":`макет был изменён`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Вы меняли оформление этого макета. Перенести изменения на «{layoutName}»?`,Transfer:`Перенести`,"Do not transfer":`Не переносить`,Cancel:`Отмена`,Color:`Цвет`,Close:`Закрыть`,"More actions":`Больше действий`,"Manage Options":`Управлять опциями`,Styles:`Стили`,"Data Storage":`Хранилище данных`,"Storage is not chosen":`Хранилище не выбрано`,"Let me show or hide the content elements of this widget.":`Дай мне возможность показать или скрыть элементы контента этого виджета.`,"Let me change the styles of this widget.":`Дай мне возможность изменить стили этого виджета.`},zn={Widgets:`Widget'lar`,"AI Assistant":`Yapay Zekâ Asistanı`,"Describe what you want to modify...":`Neyi değiştirmek istediğinizi açıklayın...`,"Attach Image":`Görsel ekle`,"widget has been updated":`widget güncellendi`,"Search by name":`Ada göre ara`,"No widgets found":`Widget bulunamadı`,"Utility / Content":`Yardımcı / İçerik`,Forms:`Formlar`,Gamification:`Oyunlaştırma`,eCommerce:`E-ticaret`,"Personalized Images":`Kişiselleştirilmiş görseller`,Layouts:`Düzenler`,"Show layouts":`Düzenleri göster`,"Hide layouts":`Düzenleri gizle`,"layout has been changed":`düzen değiştirildi`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Bu düzenin tasarımını değiştirdiniz. Değişiklikler "{layoutName}" düzenine aktarılsın mı?`,Transfer:`Aktar`,"Do not transfer":`Aktarma`,Cancel:`İptal`,Color:`Renk`,Close:`Kapat`,"More actions":`Diğer işlemler`,"Manage Options":`Seçenekleri yönet`,Styles:`Stiller`,"Data Storage":`Veri depolama`,"Storage is not chosen":`Depolama seçilmedi`,"Let me show or hide the content elements of this widget.":`Bu widget'ın içerik öğelerini göstermeme veya gizlememe izin ver.`,"Let me change the styles of this widget.":`Bu widget'ın stillerini değiştirmeme izin ver.`},Bn={Widgets:`Віджети`,"AI Assistant":`ШІ асистент`,"Describe what you want to modify...":`Опишіть, що ви хочете змінити...`,"Attach Image":`Прикріпити зображення`,"widget has been updated":`віджет було оновлено`,"Search by name":`Пошук за назвою`,"No widgets found":`Віджетів не знайдено`,"Utility / Content":`Утиліти / Контент`,Forms:`Форми`,Gamification:`Гейміфікація`,eCommerce:`Електронна комерція`,"Personalized Images":`Персоналізовані зображення`,Layouts:`Макети`,"Show layouts":`Показати макети`,"Hide layouts":`Сховати макети`,"layout has been changed":`макет було змінено`,'You changed the design of this layout. Transfer the changes to "{layoutName}"?':`Ви змінювали оформлення цього макета. Перенести зміни на «{layoutName}»?`,Transfer:`Перенести`,"Do not transfer":`Не переносити`,Cancel:`Скасувати`,Color:`Колір`,Close:`Закрити`,"More actions":`Більше дій`,"Manage Options":`Керувати опціями`,Styles:`Стилі`,"Data Storage":`Сховище даних`,"Storage is not chosen":`Сховище не обрано`,"Let me show or hide the content elements of this widget.":`Дай мені змогу показати чи сховати елементи вмісту цього віджета.`,"Let me change the styles of this widget.":`Дай мені змогу змінити стилі цього віджета.`},Vn=class{static buildLocalization(e){let t={cs:jn,de:Mn,en:Nn,es:Pn,fr:Fn,it:In,"pt-br":Ln,ru:Rn,tr:zn,uk:Bn};return e.forEach(e=>{if(e.translations)for(let n in e.translations){let r=e.translations[n];r&&typeof r==`object`&&(t[n]={...t[n]||{},...r})}}),t}},X=`widgets-hovered-icon`,Hn=`hint-reveal`,Un=`default-src`,Wn=`hover-src`,Z=`widgets-hovered-icon--hover-ready`,Gn=`widgets-hovered-icon--hint`,Kn=12;function qn(e,t,n){let r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),a=n?e.offsetWidth:e.offsetHeight,o=n?r.width:r.height;if(!a||!o)return;let s=o/a,c=n?e.scrollLeft:e.scrollTop,l=n?e.clientWidth:e.clientHeight,u=n?(i.left-r.left)/s-e.clientLeft:(i.top-r.top)/s-e.clientTop,d=c+u-Kn,f=c+u+(n?i.width:i.height)/s+Kn,p=c;d<c?p=d:f>c+l&&(p=Math.min(d,f-l)),n?e.scrollLeft=p:e.scrollTop=p}var Jn=class e extends _{static#e=new WeakSet;getId(){return X}getTemplate(){return`
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
        `}onRender(t){this.container=t.querySelector(`.widgets-hovered-icon`),this.defaultImage=t.querySelector(`.widgets-hovered-icon__image--default`),this.hoverImage=t.querySelector(`.widgets-hovered-icon__image--hover`),e.#n(t.getRootNode()),this.renderState()}getValue(){return{defaultSrc:this.defaultSrc,hoverSrc:this.hoverSrc}}setValue(e){this.renderState()}onAttributeUpdated(e,t){if(e===Un){let e=this.defaultSrc;this.defaultSrc=typeof t==`string`?t:``,(!this.hoverSrc||this.hoverSrc===e)&&(this.hoverSrc=this.defaultSrc),this.renderState()}if(e===`hint-reveal`){let e=this.hintToken;this.hintToken=t||0,this.renderState(),this.hintToken&&this.hintToken!==e&&requestAnimationFrame(()=>this.#t())}if(e===Wn){let e=this.hoverSrc;this.hoverSrc=typeof t==`string`&&t?t:this.defaultSrc,this.hoverSrc!==e&&(this.#i(this.hoverImage,``),this.container?.classList.remove(Z)),this.renderState()}}renderState(){if(!this.defaultImage||!this.hoverImage)return;this.container.classList.toggle(Gn,!!this.hintToken);let e=this.defaultSrc||``,t=this.hoverSrc||e;this.#i(this.defaultImage,e),t?this.container.dataset.hoverSrc=t:delete this.container.dataset.hoverSrc,this.hoverImage.getAttribute(`src`)&&this.hoverImage.getAttribute(`src`)!==t&&(this.#i(this.hoverImage,``),this.container.classList.remove(Z))}#t(){let e=this.container?.closest(`.widgets-panel-item`);if(!this.hintToken||!e?.isConnected)return;let t=e.closest(`.widgets-category-row`),n=e.closest(`.ue-scrollable`);t&&qn(t,e,!0),n&&qn(n,e,!1)}static#n(t){!t||e.#e.has(t)||(e.#e.add(t),t.addEventListener(`pointerover`,t=>e.#r(t.target)),t.addEventListener(`focusin`,t=>e.#r(t.target)))}static#r(e){let t=e?.closest?.(`.widgets-hovered-icon`),n=t?.dataset.hoverSrc,r=t?.querySelector?.(`.widgets-hovered-icon__image--hover`);!t||!r||!n||(r.getAttribute(`src`)!==n&&(t.classList.remove(Z),r.addEventListener(`load`,()=>t.classList.add(Z),{once:!0}),r.setAttribute(`src`,n)),r.complete&&r.getAttribute(`src`)&&t.classList.add(Z))}#i(e,t){if(!t){e.hasAttribute(`src`)&&e.removeAttribute(`src`);return}e.getAttribute(`src`)!==t&&e.setAttribute(`src`,t)}},Q=`widgets-nav-header`,Yn=`back`,$=`categoryBackHeader`,Xn=`scroll-reset`,Zn=`label`,Qn=`direction`,$n=class extends _{getId(){return Q}getTemplate(){return`<div class="widgets-nav-header widgets-nav-header--empty"></div>`}onRender(e){this.root=e.querySelector(`.widgets-nav-header`),e.closest(`.widgets-category-section`)||(this.direction=Yn),this.root.addEventListener(`click`,()=>this.#t()),this.renderState()}getValue(){return this.clickCount||0}setValue(e){typeof e==`number`&&(this.clickCount=e),this.renderState()}onAttributeUpdated(e,t){e===Zn&&(this.label=typeof t==`string`?t:``,this.renderState()),e===Qn&&(this.direction=t,this.renderState()),e===`scroll-reset`&&this.#n()}renderState(){if(!this.root)return;let e=this.direction===`back`||!this.root.closest(`.widgets-category-section`);this.root.classList.toggle(`widgets-nav-header--back`,e),this.root.classList.toggle(`widgets-nav-header--empty`,!this.label),this.root.innerHTML=this.label?this.#e(e):``,this.label&&(this.root.querySelector(`.widgets-nav-header__label`).textContent=this.label)}#e(e){return`
            <button type="button" class="widgets-nav-header__button">
                ${e?`<svg class="widgets-nav-header__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.3 5.3a1 1 0 01.07 1.31l-.08.1L6.98 9h8a1 1 0 01.12 2H7.04l2.25 2.22a1 1 0 01-1.31 1.5l-.1-.07L4.6 11.4a2 2 0 01-.13-2.7l.13-.14 3.29-3.28a1 1 0 011.41 0z"></path>
            </svg>`:`<svg class="widgets-nav-header__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M8.94 13.36a1.5 1.5 0 002 .1l.12-.1 3.65-3.65a1 1 0 00-1.32-1.5l-.1.08L10 11.6l-3.3-3.3a1 1 0 00-1.31-.08l-.1.08a1 1 0 00-.08 1.32l.08.1 3.65 3.65z"></path>
            </svg>`}
                <span class="widgets-nav-header__label"></span>
            </button>
        `}#t(){this.label&&(this.clickCount=(this.clickCount||0)+1,this.api.triggerValueChange(this.clickCount))}#n(){let e=this.root?.closest(`.widgets-panel`);if(!e)return;let t=e.querySelector(`.ue-scrollable`);t&&(t.scrollTop=0),e.querySelectorAll(`.widgets-category-row`).forEach(e=>e.scrollLeft=0)}},er=`UTILITY_CONTENT`,tr=[{id:er,label:`Utility / Content`},{id:`FORMS`,label:`Forms`},{id:`GAMIFICATION`,label:`Gamification`},{id:`ECOMMERCE`,label:`eCommerce`},{id:`PERSONALIZED_IMAGES`,label:`Personalized Images`}],nr=new Set(tr.map(e=>e.id));function rr(e){return nr.has(e.category)?e.category:er}function ir(e){return e.length?e.every(e=>!e.category)?[{id:null,label:null,widgets:[...e]}]:tr.map(t=>({...t,widgets:e.filter(e=>rr(e)===t.id)})).filter(e=>e.widgets.length):[]}function ar(e){return typeof e==`string`?e.trim().replace(/\s+/g,` `).toLocaleLowerCase():``}function or(e,t){let n=Object.values(e.translations||{}).map(t=>t?.[e.name]);return[e.name,t?.(e.name),...n]}function sr(e,t,n){let r=ar(t);return r&&e.find(e=>or(e,n).some(e=>ar(e)===r))||null}var cr=3,lr=`hintHighlighted`;function ur(e){let t=e.id?`widgets-category-row`:`widgets-category-row widgets-category-row--full`;return`
        <div class="widgets-category-section">
            <${Q} name="${e.headerName}"></${Q}>

            <${g.REPEATABLE} name="${e.widgetsName}" class="${t}">
                <div class="widgets-panel-item">
                    <${g.DRAGGABLE_BLOCK} name="widgetDraggableBlock">
                        <${X} name="widgetIcon" class="widget-icon"></${X}>
                    </${g.DRAGGABLE_BLOCK}>

                    <div class="info-wrapper">
                        <div class="hint-container">
                            <${g.LABEL} name="widgetName"></${g.LABEL}>
                        </div>
                    </div>
                </div>
            </${g.REPEATABLE}>
        </div>
    `}var dr=class{static buildWidgetsPanel(e){let t=ir(e).map((e,t)=>({...e,headerName:`category${t}Header`,widgetsName:`category${t}Widgets`}));return class extends Te{#e=!1;#t=0;#n=null;#r=0;isEnabled(){return!0}getId(){return`widgets-panel`}getIcon(){return`widgetsPanelIcon`}getTabIndex(){return 1}getName(){return this.api.translate(`Widgets`)}getTemplate(){return`
                    <div class="widgets-panel">
                        <div class="widgets-panel-filter-container">
                            <${g.TEXT} name="searchFilter"></${g.TEXT}>
                        </div>

                        <div class="widgets-panel-separator"></div>

                        <div class="widgets-panel-content">
                            <${g.SCROLLABLE}>
                                <${Q} name="${$}"></${Q}>

                                <div class="module-list-empty" name="emptyWidgetsContainer">${this.api.translate(`No widgets found`)}</div>

                                ${t.map(ur).join(``)}
                            </${g.SCROLLABLE}>
                        </div>
                    </div>
                `}onRender(){if(this.widgetsDragDisabled=!this.#l(this.api.getUserPermissions()),this.api.onUserPermissionsUpdated(e=>{this.widgetsDragDisabled=!this.#l(e),this.#s()}),this.api.onValueChanged(`searchFilter`,e=>{this.searchFilter=e,e?.trim()&&(this.#n=null),this.#s()}),this.api.setUIEAttribute(`searchFilter`,`placeholder`,this.api.translate(`Search by name`)),this.api.setUIEAttribute($,`direction`,Yn),this.api.onValueChanged($,()=>this.#o(null)),t.filter(e=>e.id).forEach(e=>{this.api.onValueChanged(e.headerName,()=>this.#o(e.id))}),this.#e){this.#a();return}this.#e=!0,this.#a({widgetsLimit:cr,resetInput:!1}),requestAnimationFrame(()=>setTimeout(()=>this.#s()))}setHintWidget(t){let n=sr(e,t,e=>this.api.translate(e));return this.#n=n?.widgetId||null,this.#i(),this.#n}clearHintWidget(){this.#n=null,this.#e&&this.#s()}#i(){this.#n&&this.#r++,this.#e&&this.#s()}#a({widgetsLimit:e,resetInput:t=!0}={}){let n=t&&!!this.searchFilter;this.activeCategoryId=null,this.searchFilter=``,n&&this.api.updateValues({searchFilter:``}),this.api.setUIEAttribute($,Xn,++this.#t),this.#n&&this.#r++,this.#s({widgetsLimit:e})}#o(e){this.activeCategoryId=e,this.#s()}#s({widgetsLimit:e}={}){let n=this.activeCategoryId?t.find(e=>e.id===this.activeCategoryId):null,r=t.map(e=>!n||e===n?this.#u(e.widgets,this.searchFilter):[]),i=e?r.map(t=>t.slice(0,e)):r;this.api.updateValues(t.reduce((e,t,n)=>(e[t.widgetsName]=i[n].map(e=>({widgetName:this.api.translate(e.name)})),e),{})),t.forEach((e,t)=>{this.#c(e.widgetsName,i[t])}),t.forEach((e,t)=>{let i=!!e.id&&!n&&!!r[t].length;this.api.setUIEAttribute(e.headerName,`label`,i?this.api.translate(e.label):``)}),this.api.setUIEAttribute($,`label`,n?this.api.translate(n.label):``),this.api.setVisibility(`emptyWidgetsContainer`,r.every(e=>!e.length))}#c(e,t){for(let n=0;n<t.length;n++){let r=!!this.#n&&t[n].widgetId===this.#n;this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock`,h.DRAGGABLE_BLOCK.blockId,t[n].widgetId),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock`,h.DEFAULT.disabled,this.widgetsDragDisabled),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock`,lr,r),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock.widgetIcon`,`default-src`,t[n].iconUrl),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock.widgetIcon`,`hover-src`,t[n].hoverIconUrl||t[n].iconUrl),this.api.setUIEAttribute(`${e}[${n}].widgetDraggableBlock.widgetIcon`,Hn,r?this.#r:0)}}#l(e){return e?.content?.write===!0&&e?.content?.textOnly!==!0}#u(e,t){return t?e.filter(e=>this.api.translate(e.name)?.toLowerCase().trim().includes(t.toLowerCase().trim())):e}}}},fr=class{static buildBlock(e){return class extends r{getId(){return e.widgetId}getIcon(){return`widgetsPanelIcon`}getName(){return this.api.translate(e.name)}getDescription(){return e.description?this.api.translate(e.description):``}getTemplate(){return ln.prepareExternalWidgetMarkup({widgetMarkupString:e.initialTemplate,showAmpOnlyForBothMimeTypeView:e.showAmpOnlyForBothMimeTypeView,updateUniqueSeed:!0})}getBlockCompositionType(){return e.type}onCreated(t){let n=t.getNodeConfig(),r=x.buildConfig({widgetId:e.widgetId,initialJsonConfig:e.initialJsonConfig,currentConfig:n});M.copyLayoutSettings(x.getBlockUUID(n),r.blockUUID),this.api.getDocumentModifier().modifyHtml(t).setNodeConfig(r),this.api.sendEvent&&this.api.sendEvent(`widget_created`,{name:e.name})}allowInnerBlocksSelection(){return e.allowInnerBlocksSelection}allowInnerBlocksDND(){return!1}shouldDisplayInBlocksPanel(){return!1}canBeSavedAsModule(){return!0}}}},pr=`widgets-panel`;async function mr(){let e=new Ae;St(pr);try{let t=await C.loadPanelConfig();e=e.withIconsRegistry(An).addStyles(Ue).withPreviewStyles(We).withLocalization(Vn.buildLocalization(t)).withSettingsPanelRegistry(On.buildWidgetsSettingsPanel(t)).addModulesPanelTab(dr.buildWidgetsPanel(t)).addUiElement(Jn).addUiElement($n).addUiElement(yn).addUiElement(Tn),t.forEach(t=>{e.addBlock(fr.buildBlock(t)),e.addUiElement(cn.buildUiElement(t)),e.addControl(_n.buildControl(t)),e.addControl(Dn.buildControl(t)),L(I(t))&&e.addControl(xn.buildControl(t))})}catch(e){console.error(`Error loading widgets config:`,e)}return e.build()}window.StripoEditorWidgets={openRegistry(){window.open(window.location.origin+`/bapi/widgets/registry/ui/index.html`,`_blank`)},setDraftsMode(e){localStorage.setItem(`stripoEditorWidgetsDraftMode`,`${e}`)}},window.UiEditorFirstPartyExtensionsLoader||(window.UiEditorFirstPartyExtensionsLoader={}),window.UiEditorFirstPartyExtensionsLoader[`widgets-panel`]=mr()})();