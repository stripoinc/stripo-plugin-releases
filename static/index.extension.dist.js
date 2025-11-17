var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _activePosition, _CustomTitleControl_instances, patchControl_fn;
var BlockCompositionType = /* @__PURE__ */ ((BlockCompositionType2) => {
  BlockCompositionType2["BLOCK"] = "BLOCK";
  BlockCompositionType2["STRUCTURE"] = "STRUCTURE";
  BlockCompositionType2["CONTAINER"] = "CONTAINER";
  return BlockCompositionType2;
})(BlockCompositionType || {});
var _BaseValidatedClass = class _BaseValidatedClass2 {
  /**
   * Validates that all required methods are properly implemented in the subclass.
   * @param requiredMethods - Array of method names that must be implemented
   * @param classRef - Reference to the class constructor for validation caching
   */
  constructor(requiredMethods, classRef) {
    if (classRef !== _BaseValidatedClass2) {
      if (!_BaseValidatedClass2.validatedClasses.has(classRef)) {
        this.validateImplementation(requiredMethods, classRef);
      }
      const errors = _BaseValidatedClass2.validationErrors.get(classRef);
      if (errors && errors.length > 0) {
        throw new Error(
          `${classRef.name} has validation errors:
${errors.map((e) => `  - ${e}`).join("\n")}`
        );
      }
    }
  }
  /**
   * Validates that all required methods are properly implemented in the subclass.
   * This validation runs only once per class type and results are cached.
   */
  validateImplementation(requiredMethods, classRef) {
    var _a;
    const errors = [];
    const className = classRef.name;
    const proto = Object.getPrototypeOf(this);
    requiredMethods.forEach((methodName) => {
      const method = this[methodName];
      if (typeof method !== "function") {
        errors.push(`Method ${methodName}() is not defined`);
        return;
      }
      if (proto[methodName] === classRef.prototype[methodName]) {
        errors.push(`Method ${methodName}() must be implemented (currently using base class error-throwing implementation)`);
      }
    });
    _BaseValidatedClass2.validatedClasses.add(classRef);
    if (errors.length > 0) {
      _BaseValidatedClass2.validationErrors.set(classRef, errors);
      console.error(`[${className} Validation] ${className} validation failed:`, errors);
    } else {
      if (typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.NODE_ENV) === "development") {
        console.log(`[${className} Validation] ✅ ${className} validated successfully`);
      }
    }
  }
};
_BaseValidatedClass.validatedClasses = /* @__PURE__ */ new Set();
_BaseValidatedClass.validationErrors = /* @__PURE__ */ new Map();
var BaseValidatedClass = _BaseValidatedClass;
var _Block = class _Block2 extends BaseValidatedClass {
  constructor() {
    super(_Block2.REQUIRED_METHODS, _Block2);
  }
  /**
   * Determines if the block should be available for use in the editor.
   * Override to provide custom logic based on editor state or configuration.
   * @returns True if the block is enabled, false otherwise. Defaults to true.
   */
  isEnabled() {
    return true;
  }
  /**
   * Determines if the block can be saved as a reusable module by the user.
   * @returns True if the block can be saved as a module, false otherwise. Defaults to false.
   */
  canBeSavedAsModule() {
    return false;
  }
  /**
   * Specifies the context actions available for this block.
   * If not overridden, the editor might use a default set of actions.
   * Use IDs from {@link ContextActionType} or custom action IDs.
   * @returns An array of context action IDs, or undefined to use defaults (if any).
   */
  getContextActionsIds() {
    return void 0;
  }
  /**
   * Provides a custom renderer class for this block, allowing for specialized rendering logic.
   * @returns A constructor for a class extending {@link BlockRenderer}, or undefined to use the default renderer.
   */
  getCustomRenderer() {
    return void 0;
  }
  /**
   * Gets a unique CSS class name specifically for this block type.
   * Used for targeting styles.
   * @returns A unique CSS class name. Defaults to `esd-{blockId}`.
   */
  getUniqueBlockClassname() {
    return `esd-${this.getId()}`;
  }
  /**
   * Lifecycle hook called when the editor document is initialized.
   * Useful for performing initial setup or modifications on existing block instances in the template.
   */
  onDocumentInit() {
  }
  /**
   * Lifecycle hook called when an instance of this block is selected in the editor.
   * @param node - The immutable HTML node representing the selected block instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect(node) {
  }
  /**
   * Lifecycle hook called when an instance of this block is copied.
   * @param modifier - The HTML node modifier to apply changes to the copied block instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCopy(modifier) {
  }
  /**
   * Lifecycle hook called when an instance of this block is deleted.
   * @param node - The immutable HTML node representing the block instance being deleted.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDelete(node) {
  }
  /**
   * Lifecycle hook called after a new instance of this block is created and added to the document (e.g., via drag-and-drop).
   * @param node - The immutable HTML node representing the newly created block instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCreated(node) {
  }
  /**
   * Lifecycle hook called when any part of the document template has changed.
   * This can be frequent; use cautiously for performance-sensitive operations.
   * @param node - The immutable HTML node representing current node instance
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDocumentChanged(node) {
  }
  /**
   * @description Determines if block is atomic or composite.
   * {@link BlockCompositionType.BLOCK} - atomic block which can be inserted inside other container and cannot hold other objects
   * {@link BlockCompositionType.STRUCTURE} - composite block which can serve as a container for another atomic block
   * @returns The type of the block. Defaults to {@link BlockCompositionType.BLOCK}.
   */
  getBlockCompositionType() {
    return "BLOCK";
  }
  /**
   * @description Determines if block should be included in empty container quick insert actions list.
   * @returns True to show a quick-add icon for this block in empty containers, false otherwise. Defaults to false.
   */
  shouldDisplayQuickAddIcon() {
    return false;
  }
  /**
   * @description Determines if nested blocks selection allowed in extension of type {@link BlockCompositionType.STRUCTURE}
   */
  allowInnerBlocksSelection() {
    return true;
  }
  /**
   * @description Determines if nested blocks drag and drop allowed in extension of type {@link BlockCompositionType.STRUCTURE}
   */
  allowInnerBlocksDND() {
    return true;
  }
  /**
   * Gets the unique identifier for this block type.
   * This ID is used for registration and referencing the block.
   * @returns A unique string ID.
   */
  getId() {
    throw new Error("Method getId() must be implemented by the subclass");
  }
  /**
   * Gets the HTML template string that defines the initial structure of this block.
   * This template will be used when the block is dragged into the editor.
   * @returns An HTML string.
   */
  getTemplate() {
    throw new Error("Method getTemplate() must be implemented by the subclass");
  }
  /**
   * Gets the URL or path to the icon representing this block in the editor's block panel.
   * @returns A string representing the icon source (e.g., URL, data URI).
   */
  getIcon() {
    throw new Error("Method getIcon() must be implemented by the subclass");
  }
  /**
   * Gets the display name of the block shown to the user in the block panel.
   * Use `this.api.translate()` for localization.
   * @returns The localized block name string.
   */
  getName() {
    throw new Error("Method getName() must be implemented by the subclass");
  }
  /**
   * Gets a short description of the block shown to the user, often as a tooltip in the block panel.
   * Use `this.api.translate()` for localization.
   * @returns The localized description string.
   */
  getDescription() {
    throw new Error("Method getDescription() must be implemented by the subclass");
  }
};
_Block.REQUIRED_METHODS = ["getId", "getTemplate", "getIcon", "getName", "getDescription"];
var Block = _Block;
var _BlockRenderer = class _BlockRenderer2 extends BaseValidatedClass {
  constructor() {
    super(_BlockRenderer2.REQUIRED_METHODS, _BlockRenderer2);
  }
  /**
   * @deprecated - use {@link getPreviewInnerHtml} instead
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPreviewHtml(_node) {
    return void 0;
  }
  /**
   * @description returns custom content to be displayed inside the {@link Block} root TD element
   */
  getPreviewInnerHtml(_node) {
    throw new Error("Method getPreviewInnerHtml() must be implemented by the subclass");
  }
};
_BlockRenderer.REQUIRED_METHODS = ["getPreviewInnerHtml"];
var BlockRenderer = _BlockRenderer;
var _ContextAction = class _ContextAction2 extends BaseValidatedClass {
  constructor() {
    super(_ContextAction2.REQUIRED_METHODS, _ContextAction2);
  }
  getId() {
    throw new Error("Method getId() must be implemented by the subclass");
  }
  getIcon() {
    throw new Error("Method getIcon() must be implemented by the subclass");
  }
  getLabel() {
    throw new Error("Method getLabel() must be implemented by the subclass");
  }
  onClick(_node) {
    throw new Error("Method onClick() must be implemented by the subclass");
  }
};
_ContextAction.REQUIRED_METHODS = ["getId", "getIcon", "getLabel", "onClick"];
var ContextAction = _ContextAction;
var ADD_CUSTOM_FONT_OPTION = "ADD_CUSTOM_FONT_OPTION";
var containerAttributes = {
  widthPercent: "width-percent"
};
var emptyContainerAttributes = {
  ...containerAttributes,
  blocks: "blocks"
};
var imageAttributes = {
  src: "src",
  alt: "alt",
  href: "href",
  width: "width",
  height: "height"
};
var buttonAttributes = {
  href: "href"
};
var BlockAttr = {
  EMPTY_CONTAINER: emptyContainerAttributes,
  CONTAINER: containerAttributes,
  BLOCK_IMAGE: imageAttributes,
  BLOCK_BUTTON: buttonAttributes
};
var ESD_BLOCK_BUTTON = "esd-block-button";
var ESD_BLOCK_TEXT = "esd-block-text";
var ESD_BLOCK_IMAGE = "esd-block-image";
var ESD_BLOCK_STRUCTURE = "esd-structure";
var ESD_BLOCK_VIDEO = "esd-block-video";
var ESD_BLOCK_SOCIAL = "esd-block-social";
var ESD_BLOCK_BANNER = "esd-block-banner";
var ESD_BLOCK_TIMER = "esd-block-timer";
var ESD_BLOCK_MENU = "esd-block-menu";
var ESD_BLOCK_HTML = "esd-block-html";
var ESD_BLOCK_SPACER = "esd-block-spacer";
var ESD_BLOCK_CONTAINER = "esd-container-frame";
var ESD_BLOCK_STRIPE = "esd-stripe";
var ESD_BLOCK_FORM = "esd-amp-form";
var BlockSelector = ((BlockSelector2) => {
  BlockSelector2["BUTTON"] = `.${ESD_BLOCK_BUTTON}`;
  BlockSelector2["TEXT"] = `.${ESD_BLOCK_TEXT}`;
  BlockSelector2["IMAGE"] = `.${ESD_BLOCK_IMAGE}`;
  BlockSelector2["STRUCTURE"] = `.${ESD_BLOCK_STRUCTURE}`;
  BlockSelector2["VIDEO"] = `.${ESD_BLOCK_VIDEO}`;
  BlockSelector2["SOCIAL"] = `.${ESD_BLOCK_SOCIAL}`;
  BlockSelector2["BANNER"] = `.${ESD_BLOCK_BANNER}`;
  BlockSelector2["TIMER"] = `.${ESD_BLOCK_TIMER}`;
  BlockSelector2["MENU"] = `.${ESD_BLOCK_MENU}`;
  BlockSelector2["HTML"] = `.${ESD_BLOCK_HTML}`;
  BlockSelector2["SPACER"] = `.${ESD_BLOCK_SPACER}`;
  BlockSelector2["CONTAINER"] = `.${ESD_BLOCK_CONTAINER}`;
  BlockSelector2["STRIPE"] = `.${ESD_BLOCK_STRIPE}`;
  BlockSelector2["FORM"] = `.${ESD_BLOCK_FORM}`;
  return BlockSelector2;
})(BlockSelector || {});
var BlockType = /* @__PURE__ */ ((BlockType2) => {
  BlockType2["BLOCK_IMAGE"] = "BLOCK_IMAGE";
  BlockType2["BLOCK_TEXT"] = "BLOCK_TEXT";
  BlockType2["BLOCK_BUTTON"] = "BLOCK_BUTTON";
  BlockType2["BLOCK_SPACER"] = "BLOCK_SPACER";
  BlockType2["BLOCK_VIDEO"] = "BLOCK_VIDEO";
  BlockType2["BLOCK_SOCIAL"] = "BLOCK_SOCIAL";
  BlockType2["BLOCK_BANNER"] = "BLOCK_BANNER";
  BlockType2["BLOCK_TIMER"] = "BLOCK_TIMER";
  BlockType2["BLOCK_MENU"] = "BLOCK_MENU";
  BlockType2["BLOCK_MENU_ITEM"] = "BLOCK_MENU_ITEM";
  BlockType2["BLOCK_HTML"] = "BLOCK_HTML";
  BlockType2["BLOCK_AMP_CAROUSEL"] = "BLOCK_AMP_CAROUSEL";
  BlockType2["BLOCK_AMP_ACCORDION"] = "BLOCK_AMP_ACCORDION";
  BlockType2["BLOCK_AMP_FORM"] = "BLOCK_AMP_FORM";
  BlockType2["CONTAINER"] = "CONTAINER";
  BlockType2["FORM_CONTAINER"] = "FORM_CONTAINER";
  BlockType2["STRUCTURE"] = "STRUCTURE";
  BlockType2["STRIPE"] = "STRIPE";
  BlockType2["EMPTY_CONTAINER"] = "EMPTY_CONTAINER";
  BlockType2["CUSTOM_BLOCK_LINK"] = "CUSTOM_BLOCK_LINK";
  BlockType2["CUSTOM_BLOCK_IMAGE"] = "CUSTOM_BLOCK_IMAGE";
  BlockType2["CUSTOM_BLOCK_TEXT"] = "CUSTOM_BLOCK_TEXT";
  return BlockType2;
})(BlockType || {});
var GeneralControls = /* @__PURE__ */ ((GeneralControls2) => {
  GeneralControls2["ANCHOR_LINK_CONTAINER"] = "anchorLinkFormContainer";
  GeneralControls2["APPLY_CONDITION"] = "applyCondition";
  GeneralControls2["APPLY_CONDITION_SWITCHER"] = "applyConditionSwitcher";
  GeneralControls2["BACKGROUND_COLOR"] = "backgroundColor";
  GeneralControls2["BACKGROUND_IMAGE"] = "generalImageContainer";
  GeneralControls2["TEXT_COLOR"] = "textColor";
  GeneralControls2["TEXT_STYLE"] = "textStyle";
  GeneralControls2["TEXT_SIZE"] = "textSize";
  GeneralControls2["TEXT_LINE_SPACING"] = "textLineSpacing";
  GeneralControls2["TEXT_ALIGN"] = "textAlign";
  GeneralControls2["FIXED_HEIGHT_SWITCHER"] = "fixedHeightSwitcherForm";
  GeneralControls2["HIDDEN_NODE"] = "hiddenNode";
  GeneralControls2["SMART_BLOCK"] = "smartBlock";
  GeneralControls2["SYNCHRONIZED_MODULE"] = "synchronizedModuleForm";
  GeneralControls2["FONT_FAMILY"] = "generalFontFamilyForm";
  GeneralControls2["BLOCK_INTERNAL_INDENTS"] = "generalBlockInternalIndents";
  GeneralControls2["STRUCTURE_INTERNAL_INDENTS"] = "generalStructureInternalIndents";
  return GeneralControls2;
})(GeneralControls || {});
var ButtonControls = /* @__PURE__ */ ((ButtonControls2) => {
  ButtonControls2["ADJUST_TO_WIDTH"] = "adjustToWidth";
  ButtonControls2["ALIGNMENT"] = "buttonAlignment";
  ButtonControls2["BORDER"] = "buttonBorder";
  ButtonControls2["BORDER_RADIUS"] = "buttonBorderRadius";
  ButtonControls2["COLOR"] = "buttonColor";
  ButtonControls2["BUTTON_BLOCK_BACKGROUND_COLOR"] = "buttonBlockBackgroundColor";
  ButtonControls2["EXTERNAL_INDENTS"] = "buttonExternalIndents";
  ButtonControls2["FIXED_HEIGHT"] = "buttonFixedHeightForm";
  ButtonControls2["FONT_COLOR"] = "buttonFontColor";
  ButtonControls2["FONT_FAMILY"] = "buttonFontFamily";
  ButtonControls2["FONT_SIZE"] = "buttonFontSize";
  ButtonControls2["ICON"] = "buttonIconContainer";
  ButtonControls2["ICON_ALIGN"] = "buttonIconAlign";
  ButtonControls2["ICON_INDENT"] = "buttonIconIndent";
  ButtonControls2["ICON_WIDTH"] = "buttonIconWidth";
  ButtonControls2["IMAGE"] = "buttonImageForm";
  ButtonControls2["INTERNAL_INDENTS"] = "buttonInternalIndents";
  ButtonControls2["LINK"] = "buttonLink";
  ButtonControls2["MIME_TYPE"] = "buttonMimeTypeForm";
  ButtonControls2["SWITCHER_HOVERED_STYLES"] = "buttonSwitcherHoveredStylesForm";
  ButtonControls2["TEXT"] = "buttonText";
  ButtonControls2["TEXT_STYLE_AND_COLOR"] = "buttonTextStyleAndColorForm";
  ButtonControls2["HOVERED_BORDER_COLOR"] = "hoveredStyleBorderButtonForm";
  ButtonControls2["HOVERED_COLOR"] = "hoveredButtonColorForm";
  ButtonControls2["HOVERED_TEXT_COLOR"] = "hoveredButtonTextColorForm";
  return ButtonControls2;
})(ButtonControls || {});
var TextControls = /* @__PURE__ */ ((TextControls2) => {
  TextControls2["HIDDEN_NODE"] = "hiddenNodeText";
  TextControls2["PARAGRAPH_STYLE"] = "paragraphStyleForm";
  TextControls2["ALIGN"] = "textAlignmentForm";
  TextControls2["ANCHOR_CONTAINER"] = "textAnchorForm";
  TextControls2["FONT_BACKGROUND_COLOR"] = "textBlockFontBackgroundColor";
  TextControls2["TEXT_BLOCK_BACKGROUND_COLOR"] = "textBlockBackgroundColor";
  TextControls2["FONT_COLOR"] = "textBlockFontColor";
  TextControls2["TEXT_BLOCK_FONT_FAMILY"] = "textBlockFontFamily";
  TextControls2["FONT_FAMILY"] = "textFontFamily";
  TextControls2["FONT_SIZE"] = "textBlockFontSize";
  TextControls2["DIRECTION"] = "textBlockDirectionForm";
  TextControls2["INSERT_FORM"] = "textBlockInsertForm";
  TextControls2["LINK_DATA"] = "textBlockLinkDataForm";
  TextControls2["FORMAT"] = "textBlockTextFormatForm";
  TextControls2["FIXED_HEIGHT"] = "textFixedHeightForm";
  TextControls2["INTERNAL_INDENTS"] = "textInternalIndents";
  TextControls2["LINE_HEIGHT"] = "textLineHeightForm";
  TextControls2["LINKS_COLOR"] = "textLinksFontColorForm";
  TextControls2["MIME_TYPE"] = "textMimeTypeForm";
  TextControls2["NO_LINE_WRAPS"] = "textNoLineWrapsForm";
  return TextControls2;
})(TextControls || {});
var SpacerControls = /* @__PURE__ */ ((SpacerControls2) => {
  SpacerControls2["ALIGNMENT"] = "spacerAlignment";
  SpacerControls2["BORDER"] = "spacerBorder";
  SpacerControls2["EXTERNAL_INDENTS"] = "spacerExternalIndents";
  SpacerControls2["MIME_TYPE"] = "spacerMimeTypeForm";
  SpacerControls2["MODE"] = "spacerMode";
  SpacerControls2["SIZE"] = "spacerSize";
  SpacerControls2["BACKGROUND_COLOR"] = "spacerBackgroundColor";
  return SpacerControls2;
})(SpacerControls || {});
var ImageControls = /* @__PURE__ */ ((ImageControls2) => {
  ImageControls2["ALT_TEXT"] = "altText";
  ImageControls2["LINK"] = "blockLink";
  ImageControls2["ALIGNMENT"] = "imageAlignment";
  ImageControls2["ANCHOR_LINK_CONTAINER"] = "imageAnchorLinkContainerForm";
  ImageControls2["BORDER_RADIUS"] = "imageBorderRadiusForm";
  ImageControls2["IMAGE"] = "imageImageForm";
  ImageControls2["EXTERNAL_INDENTS"] = "imageExternalIndents";
  ImageControls2["MIME_TYPE"] = "imageMimeTypeForm";
  ImageControls2["RESPONSIVE"] = "imageResponsive";
  ImageControls2["ROLLOVER_IMAGE"] = "imageRolloverImageForm";
  ImageControls2["ROLLOVER_SWITCHER"] = "imageRolloverSwitcherForm";
  ImageControls2["SIZE"] = "imageSizeContainer";
  return ImageControls2;
})(ImageControls || {});
var MenuControls = /* @__PURE__ */ ((MenuControls2) => {
  MenuControls2["EXTERNAL_INDENTS"] = "menuExternalIndents";
  MenuControls2["ALIGNMENT"] = "menuAlignment";
  MenuControls2["RESPONSIVE_MENU"] = "menuResponsive";
  MenuControls2["FIT_TO_CONTAINER"] = "menuFitToContainer";
  MenuControls2["FONT_FAMILY"] = "menuFontFamily";
  MenuControls2["FONT_SIZE"] = "menuFontSize";
  MenuControls2["HIDDEN"] = "menuHidden";
  MenuControls2["ICONS_CONFIGURATION"] = "menuIconsConfiguration";
  MenuControls2["ITEMS"] = "menuItemsForm";
  MenuControls2["ITEMS_COUNT"] = "menuItemsCount";
  MenuControls2["ITEM_INTERNAL_INDENTS"] = "menuItemInternalIndents";
  MenuControls2["MIME_TYPE"] = "menuMimeTypeForm";
  MenuControls2["SEPARATE_ITEMS"] = "menuSeparateItems";
  MenuControls2["SEPARATE_ITEMS_COLOR_SWITCHER"] = "menuSeparateItemsColorSwitcher";
  MenuControls2["SEPARATOR"] = "menuSeparatorForm";
  MenuControls2["STYLES"] = "menuStylesForm";
  MenuControls2["TEXT_STYLE_AND_COLOR"] = "menuTextStyleAndColor";
  MenuControls2["TYPE_CONTAINER"] = "menuTypeContainerForm";
  return MenuControls2;
})(MenuControls || {});
var StructureControls = /* @__PURE__ */ ((StructureControls2) => {
  StructureControls2["RESPONSIVE_STRUCTURE"] = "responsiveStructure";
  StructureControls2["BACKGROUND_COLOR"] = "structureBackgroundColor";
  StructureControls2["BORDER_RADIUS"] = "structureBorderRadiusForm";
  StructureControls2["CONTAINER_GAP"] = "structureContainerGap";
  StructureControls2["CONTAINER_INVERSION"] = "structureContainerInversion";
  StructureControls2["DYNAMIC_CONTAINERS"] = "structureDynamicContainers";
  StructureControls2["EXTERNAL_INDENTS"] = "structureExternalIndents";
  StructureControls2["IMAGE_CONTAINER"] = "structureImageContainerForm";
  StructureControls2["INTERNAL_INDENTS"] = "structureInternalIndents";
  StructureControls2["ITEM"] = "structureItem";
  StructureControls2["MIME_TYPE"] = "structureMimeType";
  StructureControls2["BORDER_FORM"] = "structureBorderForm";
  return StructureControls2;
})(StructureControls || {});
var ContainerControls = /* @__PURE__ */ ((ContainerControls2) => {
  ContainerControls2["BACKGROUND_COLOR"] = "containerBackgroundColorForm";
  ContainerControls2["BORDER_FORM"] = "containerBorderForm";
  ContainerControls2["BORDER_RADIUS"] = "containerBorderRadiusForm";
  ContainerControls2["EXTERNAL_INDENTS"] = "containerExternalIndentsForm";
  ContainerControls2["IMAGE_CONTAINER"] = "containerImageContainerForm";
  ContainerControls2["MIME_TYPE"] = "containerMimeTypeForm";
  ContainerControls2["DISPLAY_CONDITIONS"] = "displayConditions";
  ContainerControls2["HIDDEN_NODE"] = "containerHiddenNodeForm";
  return ContainerControls2;
})(ContainerControls || {});
var BuiltInControlTypes = {
  [
    "BLOCK_BUTTON"
    /* BLOCK_BUTTON */
  ]: ButtonControls,
  [
    "BLOCK_TEXT"
    /* BLOCK_TEXT */
  ]: TextControls,
  [
    "BLOCK_SPACER"
    /* BLOCK_SPACER */
  ]: SpacerControls,
  [
    "BLOCK_IMAGE"
    /* BLOCK_IMAGE */
  ]: ImageControls,
  [
    "BLOCK_MENU"
    /* BLOCK_MENU */
  ]: MenuControls,
  [
    "STRUCTURE"
    /* STRUCTURE */
  ]: StructureControls,
  [
    "CONTAINER"
    /* CONTAINER */
  ]: ContainerControls,
  GENERAL: GeneralControls
};
var ContextActionType = /* @__PURE__ */ ((ContextActionType2) => {
  ContextActionType2["SAVE_AS_MODULE"] = "saveAsModule";
  ContextActionType2["UPDATE_MODULE"] = "updateModule";
  ContextActionType2["IMPROVE_WITH_AI"] = "improveWithAI";
  ContextActionType2["MOVE"] = "move";
  ContextActionType2["COPY"] = "copy";
  ContextActionType2["REMOVE"] = "remove";
  ContextActionType2["CLEAR_CONTAINER"] = "clearContainer";
  ContextActionType2["REMOVE_CONTAINER"] = "removeContainer";
  ContextActionType2["EXTERNAL_DISPLAY_CONDITION"] = "externalDisplayCondition";
  return ContextActionType2;
})(ContextActionType || {});
var EditorStatePropertyType = /* @__PURE__ */ ((EditorStatePropertyType2) => {
  EditorStatePropertyType2["previewDeviceMode"] = "previewDeviceMode";
  EditorStatePropertyType2["panelPosition"] = "panelPosition";
  return EditorStatePropertyType2;
})(EditorStatePropertyType || {});
var PreviewDeviceMode = /* @__PURE__ */ ((PreviewDeviceMode2) => {
  PreviewDeviceMode2["DESKTOP"] = "DESKTOP";
  PreviewDeviceMode2["MOBILE"] = "MOBILE";
  return PreviewDeviceMode2;
})(PreviewDeviceMode || {});
var SettingsTab = /* @__PURE__ */ ((SettingsTab2) => {
  SettingsTab2["SETTINGS"] = "settings";
  SettingsTab2["STYLES"] = "styles";
  SettingsTab2["DATA"] = "data";
  return SettingsTab2;
})(SettingsTab || {});
var UIElementAttributes = {
  name: "name",
  disabled: "disabled"
};
var buttonAttributes2 = {
  ...UIElementAttributes,
  caption: "caption",
  icon: "icon"
};
var checkBoxAttributes = {
  ...UIElementAttributes,
  caption: "caption"
};
var counterAttributes = {
  ...UIElementAttributes,
  minValue: "min-value",
  maxValue: "max-value",
  step: "step"
};
var datePickerAttributes = {
  ...UIElementAttributes
};
var labelAttributes = {
  ...UIElementAttributes,
  text: "text"
};
var messageAttributes = {
  ...UIElementAttributes,
  type: "type"
};
var radioButtonsAttributes = {
  ...UIElementAttributes,
  buttons: "buttons"
};
var selectAttributes = {
  ...UIElementAttributes,
  multiSelect: "multi-select",
  placeholder: "placeholder"
};
var fontFamilySelectAttributes = {
  addCustomFontOption: "add-custom-font-option"
};
var selectItemAttributes = {
  text: "text",
  value: "value"
};
var checkItemAttributes = {
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
var checkButtonsAttributes = {
  ...UIElementAttributes
};
var radioItemAttributes = {
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
var textAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder"
};
var textAreaAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder"
};
var nestedControlAttributes = {
  ...UIElementAttributes,
  controlId: "control-id"
};
var expandableAttributes = {
  ...UIElementAttributes,
  expanded: "expanded"
};
var orderableAttributes = {
  ...UIElementAttributes,
  icon: "icon",
  position: "position"
};
var orderableIconAttributes = {
  icon: "icon"
};
var UEAttr = {
  DEFAULT: UIElementAttributes,
  BUTTON: buttonAttributes2,
  CHECKBOX: checkBoxAttributes,
  CHECK_BUTTONS: checkButtonsAttributes,
  COLOR: UIElementAttributes,
  COUNTER: counterAttributes,
  DATEPICKER: datePickerAttributes,
  LABEL: labelAttributes,
  MESSAGE: messageAttributes,
  RADIO_BUTTONS: radioButtonsAttributes,
  SELECTPICKER: selectAttributes,
  FONT_FAMILY_SELECT: fontFamilySelectAttributes,
  SWITCHER: UIElementAttributes,
  TEXT: textAttributes,
  TEXTAREA: textAreaAttributes,
  CHECK_ITEM: checkItemAttributes,
  SELECT_ITEM: selectItemAttributes,
  RADIO_ITEM: radioItemAttributes,
  NESTED_CONTROL: nestedControlAttributes,
  EXPANDABLE: expandableAttributes,
  ORDERABLE: orderableAttributes,
  ORDERABLE_ICON: orderableIconAttributes
};
var UIElementType = /* @__PURE__ */ ((UIElementType2) => {
  UIElementType2["BUTTON"] = "UE-BUTTON";
  UIElementType2["CHECKBOX"] = "UE-CHECKBOX";
  UIElementType2["CHECK_BUTTONS"] = "UE-CHECK-BUTTONS";
  UIElementType2["COLOR"] = "UE-COLOR";
  UIElementType2["COUNTER"] = "UE-COUNTER";
  UIElementType2["DATEPICKER"] = "UE-DATEPICKER";
  UIElementType2["LABEL"] = "UE-LABEL";
  UIElementType2["MESSAGE"] = "UE-MESSAGE";
  UIElementType2["RADIO_BUTTONS"] = "UE-RADIO-BUTTONS";
  UIElementType2["SELECTPICKER"] = "UE-SELECT";
  UIElementType2["SWITCHER"] = "UE-SWITCHER";
  UIElementType2["TEXT"] = "UE-TEXT";
  UIElementType2["TEXTAREA"] = "UE-TEXTAREA";
  UIElementType2["CHECK_ITEM"] = "UE-CHECK-ITEM";
  UIElementType2["RADIO_ITEM"] = "UE-RADIO-ITEM";
  UIElementType2["SELECT_ITEM"] = "UE-SELECT-ITEM";
  UIElementType2["ICON"] = "UE-ICON";
  UIElementType2["MERGETAGS"] = "UE-MERGETAGS";
  UIElementType2["FONT_FAMILY_SELECT"] = "UE-FONT-FAMILY-SELECT";
  UIElementType2["NESTED_CONTROL"] = "UE-NESTED-CONTROL";
  UIElementType2["EXPANDABLE"] = "UE-EXPANDABLE";
  UIElementType2["EXPANDABLE_HEADER"] = "UE-EXPANDABLE_HEADER";
  UIElementType2["EXPANDABLE_CONTENT"] = "UE-EXPANDABLE_CONTENT";
  UIElementType2["ORDERABLE"] = "UE-ORDERABLE";
  UIElementType2["ORDERABLE_ITEM"] = "UE-ORDERABLE-ITEM";
  UIElementType2["ORDERABLE_ICON"] = "UE-ORDERABLE-ICON";
  return UIElementType2;
})(UIElementType || {});
var BuiltInControl = class {
  /**
   * @description returns map of nodes parent control operates on
   */
  getTargetNodes(root) {
    return [root];
  }
  /**
   * @description returns map of labels used by parent control UI
   */
  getLabels() {
    return void 0;
  }
  /**
   * @description returns custom description for parent modifications
   */
  getModificationDescription() {
    return void 0;
  }
  /**
   * @description returns custom modifications to be included in the parent control patch
   */
  getAdditionalModifications(_root) {
    return void 0;
  }
  /**
   * Determines whether the specified HTML node is visible.
   *
   * @param _node - The HTML node to evaluate for visibility, provided as an immutable object.
   * @return A boolean value indicating whether the node is visible. Returns `true` if the node is visible, otherwise `false`.
   */
  isVisible(_node) {
    return true;
  }
};
var ButtonBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const buttons = root.querySelectorAll(BlockSelector.BUTTON);
    const button = root.asElement().hasClass(ESD_BLOCK_BUTTON) ? [root] : [];
    return buttons.length ? buttons : button;
  }
};
var ButtonBorderRadiusBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].BORDER_RADIUS;
  }
  getLabels() {
    return void 0;
  }
};
var ButtonAlignBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].ALIGNMENT;
  }
};
var ButtonBackgroundColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.BACKGROUND_COLOR;
  }
};
var ButtonBlockBackgroundColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].BUTTON_BLOCK_BACKGROUND_COLOR;
  }
};
var ButtonBorderBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].BORDER;
  }
  getLabels() {
    return void 0;
  }
};
var ButtonColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].COLOR;
  }
};
var ButtonFitToContainerBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].ADJUST_TO_WIDTH;
  }
};
var ButtonFixedHeightBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].FIXED_HEIGHT;
  }
  getLabels() {
    return void 0;
  }
};
var ButtonFontFamilyBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].FONT_FAMILY;
  }
};
var ButtonHoverBorderColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].HOVERED_BORDER_COLOR;
  }
};
var ButtonHoverColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].HOVERED_COLOR;
  }
};
var ButtonHoverTextColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].HOVERED_TEXT_COLOR;
  }
};
var ButtonMarginsBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].EXTERNAL_INDENTS;
  }
};
var ButtonPaddingsBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].INTERNAL_INDENTS;
  }
};
var ButtonTextBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].TEXT;
  }
};
var ButtonTextSizeBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].FONT_SIZE;
  }
};
var ButtonTextStyleAndFontColorBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ].TEXT_STYLE_AND_COLOR;
  }
  getLabels() {
    return void 0;
  }
};
var ButtonVisibilityBuiltInControl = class extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.HIDDEN_NODE;
  }
};
var ContainerBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const containers = root.querySelectorAll(BlockSelector.CONTAINER);
    const container = root.asElement().hasClass(ESD_BLOCK_CONTAINER) ? [root] : [];
    return containers.length ? containers : container;
  }
};
var ContainerBackgroundColorBuiltInControl = class extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "CONTAINER"
      /* CONTAINER */
    ].BACKGROUND_COLOR;
  }
};
var ContainerBackgroundImageBuiltInControl = class extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "CONTAINER"
      /* CONTAINER */
    ].IMAGE_CONTAINER;
  }
  getLabels() {
    return void 0;
  }
};
var ContainerBorderBuiltInControl = class extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "CONTAINER"
      /* CONTAINER */
    ].BORDER_FORM;
  }
  getLabels() {
    return void 0;
  }
};
var ContainerVisibilityBuiltInControl = class extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "CONTAINER"
      /* CONTAINER */
    ].HIDDEN_NODE;
  }
};
var _Control = class _Control2 extends BaseValidatedClass {
  constructor() {
    super(_Control2.REQUIRED_METHODS, _Control2);
  }
  /**
   * @description Allows to determine if control should be visible or hidden in control panel.
   * Called on every node modification.
   */
  isVisible(_node) {
    return true;
  }
  /**
   * Optional hook called when the control is initially rendered.
   * Use this for setup tasks like attaching event listeners to the control's template elements.
   */
  onRender() {
  }
  /**
   * Optional cleanup hook called when the control is being destroyed.
   * Use this to remove event listeners or perform other cleanup tasks.
   */
  onDestroy() {
  }
  /**
   * Gets the unique identifier for this UI control type.
   * This ID is used for registration and referencing.
   * @returns A unique string ID.
   */
  getId() {
    throw new Error("Method getId() must be implemented by the subclass");
  }
  /**
   * Gets the HTML template string that defines the structure of this UI control,
   * typically containing one or more UI elements (e.g., `<UE-TEXT>`, `<UE-BUTTON>`).
   * @returns An HTML string.
   */
  getTemplate() {
    throw new Error("Method getTemplate() must be implemented by the subclass");
  }
  /**
   * Hook called whenever the underlying template node associated with this control's context
   * (e.g., the selected block's  HTMLnode) is updated.
   * Implement this to react to changes in the block/structure and update the control's UI elements accordingly.
   * @param node - The updated immutable HTML node representing the control's context.
   */
  onTemplateNodeUpdated(_node) {
  }
  /**
   * Lifecycle hook called when any part of the document template has changed.
   * This can be frequent; use cautiously for performance-sensitive operations.
   * @param _node - The immutable HTML node representing current node instance
   */
  onDocumentChanged(_node) {
  }
};
_Control.REQUIRED_METHODS = ["getId", "getTemplate"];
var Control = _Control;
var ImageBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const images = root.querySelectorAll(BlockSelector.IMAGE);
    const image = root.asElement().hasClass(ESD_BLOCK_IMAGE) ? [root] : [];
    return images.length ? images : image;
  }
};
var ImageSizeBuiltInControl = class extends ImageBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_IMAGE"
      /* BLOCK_IMAGE */
    ].SIZE;
  }
};
var ImageVisibilityBuiltInControl = class extends ImageBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.HIDDEN_NODE;
  }
};
var MenuBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const menus = root.querySelectorAll(BlockSelector.MENU);
    const menu = root.asElement().hasClass(ESD_BLOCK_MENU) ? [root] : [];
    return menus.length ? menus : menu;
  }
};
var MenuFontFamilyBuiltInControl = class extends MenuBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_MENU"
      /* BLOCK_MENU */
    ].FONT_FAMILY;
  }
};
var _SettingsPanelRegistry = class _SettingsPanelRegistry2 extends BaseValidatedClass {
  constructor() {
    super(_SettingsPanelRegistry2.REQUIRED_METHODS, _SettingsPanelRegistry2);
  }
  registerBlockControls(_blockControlsMap) {
    throw new Error("Method registerBlockControls() must be implemented by the subclass");
  }
};
_SettingsPanelRegistry.REQUIRED_METHODS = ["registerBlockControls"];
var SettingsPanelRegistry = _SettingsPanelRegistry;
var SettingsPanelTab = class {
  constructor(tabId, controlsIds) {
    this.tabId = tabId;
    this.controlsIds = controlsIds;
  }
  getTabId() {
    return this.tabId;
  }
  getLabel() {
    return this.label;
  }
  getControlsIds() {
    return this.controlsIds;
  }
  withLabel(label) {
    this.label = label;
    return this;
  }
  addControl(controlId, position) {
    if (position < 0) {
      this.controlsIds.unshift(controlId);
    } else if (position > this.controlsIds.length) {
      this.controlsIds.push(controlId);
    } else {
      this.controlsIds.splice(position, 0, controlId);
    }
    return this;
  }
  deleteControl(controlId) {
    const index = this.controlsIds.indexOf(controlId);
    if (index !== -1) {
      this.controlsIds.splice(index, 1);
    }
  }
};
var SpacerBuildInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const spacers = root.querySelectorAll(BlockSelector.SPACER);
    const spacer = root.asElement().hasClass(ESD_BLOCK_SPACER) ? [root] : [];
    return spacers.length ? spacers : spacer;
  }
};
var SpacerBackgroundColorBuiltInControl = class extends SpacerBuildInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_SPACER"
      /* BLOCK_SPACER */
    ].BACKGROUND_COLOR;
  }
};
var StructureBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const structures = root.querySelectorAll(BlockSelector.STRUCTURE);
    const structure = root.asElement().hasClass(ESD_BLOCK_STRUCTURE) ? [root] : [];
    return structures.length ? structures : structure;
  }
};
var StructureAdaptBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "STRUCTURE"
      /* STRUCTURE */
    ].RESPONSIVE_STRUCTURE;
  }
  getLabels() {
    return void 0;
  }
};
var StructureBackgroundColorBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "STRUCTURE"
      /* STRUCTURE */
    ].BACKGROUND_COLOR;
  }
};
var StructureBackgroundImageBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "STRUCTURE"
      /* STRUCTURE */
    ].IMAGE_CONTAINER;
  }
  getLabels() {
    return void 0;
  }
};
var StructureBorderBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "STRUCTURE"
      /* STRUCTURE */
    ].BORDER_FORM;
  }
  getLabels() {
    return void 0;
  }
};
var StructureMarginsBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "STRUCTURE"
      /* STRUCTURE */
    ].EXTERNAL_INDENTS;
  }
};
var StructurePaddingsBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.STRUCTURE_INTERNAL_INDENTS;
  }
};
var StructureVisibilityBuiltInControl = class extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.HIDDEN_NODE;
  }
};
var TextBuiltInControl = class extends BuiltInControl {
  getTargetNodes(root) {
    const texts = root.querySelectorAll(BlockSelector.TEXT);
    const text = root.asElement().hasClass(ESD_BLOCK_TEXT) ? [root] : [];
    return texts.length ? texts : text;
  }
};
var TextAlignBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_ALIGN;
  }
};
var TextBlockBackgroundBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ].TEXT_BLOCK_BACKGROUND_COLOR;
  }
};
var TextColorBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_COLOR;
  }
};
var TextFixedHeightBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ].FIXED_HEIGHT;
  }
  getLabels() {
    return void 0;
  }
};
var TextFontFamilyBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ].FONT_FAMILY;
  }
};
var TextLineSpacingBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_LINE_SPACING;
  }
};
var TextLinkColorBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ].LINKS_COLOR;
  }
};
var TextPaddingsBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ].INTERNAL_INDENTS;
  }
};
var TextSizeBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_SIZE;
  }
};
var TextStyleBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_STYLE;
  }
};
var TextVisibilityBuiltInControl = class extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.HIDDEN_NODE;
  }
};
var Extension = class {
  constructor(i18n, styles, uiElements = [], uiElementTagRegistry, controls2 = [], settingsPanelRegistry, contextActions = [], blocks = [], externalSmartElementsLibrary2, externalImageLibrary, previewStyles2, externalAiAssistant2, externalDisplayConditionsLibrary, externalVideoLibrary, blocksPanel, iconsRegistry, externalImageLibraryTab) {
    this.uiElements = [];
    this.controls = [];
    this.contextActions = [];
    this.blocks = [];
    this.i18n = i18n;
    this.styles = styles;
    this.previewStyles = previewStyles2;
    this.uiElements = uiElements;
    this.uiElementTagRegistry = uiElementTagRegistry;
    this.controls = controls2;
    this.settingsPanelRegistry = settingsPanelRegistry;
    this.contextActions = contextActions;
    this.blocks = blocks;
    this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
    this.externalImageLibrary = externalImageLibrary;
    this.externalImageLibraryTab = externalImageLibraryTab;
    this.externalAiAssistant = externalAiAssistant2;
    this.externalDisplayConditionsLibrary = externalDisplayConditionsLibrary;
    this.externalVideoLibrary = externalVideoLibrary;
    this.blocksPanel = blocksPanel;
    this.iconsRegistry = iconsRegistry;
    this.id = Math.random().toString(36).substring(2);
  }
  getI18n() {
    return this.i18n;
  }
  getStyles() {
    return this.styles;
  }
  getPreviewStyles() {
    return this.previewStyles;
  }
  getUiElements() {
    return this.uiElements;
  }
  getUiElementTagRegistry() {
    return this.uiElementTagRegistry;
  }
  getControls() {
    return this.controls;
  }
  getSettingsPanelRegistry() {
    return this.settingsPanelRegistry;
  }
  getContextActions() {
    return this.contextActions;
  }
  getBlocks() {
    return this.blocks;
  }
  getId() {
    return this.id;
  }
  getExternalSmartElementsLibrary() {
    return this.externalSmartElementsLibrary;
  }
  getExternalImageLibrary() {
    return this.externalImageLibrary;
  }
  getExternalImageLibraryTab() {
    return this.externalImageLibraryTab;
  }
  getExternalAiAssistant() {
    return this.externalAiAssistant;
  }
  getExternalDisplayConditionsLibrary() {
    return this.externalDisplayConditionsLibrary;
  }
  getExternalVideoLibrary() {
    return this.externalVideoLibrary;
  }
  getBlocksPanel() {
    return this.blocksPanel;
  }
  getIconsRegistry() {
    return this.iconsRegistry;
  }
};
var ExtensionBuilder = class {
  constructor() {
    this.styles = [];
    this.uiElements = [];
    this.controls = [];
    this.contextActions = [];
    this.blocks = [];
  }
  withLocalization(i18n) {
    this.i18n = i18n;
    return this;
  }
  /**
   * @deprecated Use addStyles() instead. This method will be removed in a future version.
   */
  withStyles(styles) {
    this.styles = [styles];
    return this;
  }
  addStyles(styles) {
    this.styles.push(styles);
    return this;
  }
  /**
   * @description defines custom developer styles to use inside the editor document preview
   */
  withPreviewStyles(styles) {
    this.previewStyles = styles;
    return this;
  }
  addContextAction(contextAction) {
    this.contextActions.push(contextAction);
    return this;
  }
  addUiElement(uiElement) {
    this.uiElements.push(uiElement);
    return this;
  }
  withUiElementTagRegistry(uiElementTagRegistry) {
    this.uiElementTagRegistry = uiElementTagRegistry;
    return this;
  }
  addControl(control) {
    this.controls.push(control);
    return this;
  }
  withSettingsPanelRegistry(settingsPanelRegistry) {
    this.settingsPanelRegistry = settingsPanelRegistry;
    return this;
  }
  withExternalSmartElementsLibrary(externalSmartElementsLibrary2) {
    this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
    return this;
  }
  withExternalImageLibrary(externalImageLibrary) {
    this.externalImageLibrary = externalImageLibrary;
    return this;
  }
  withExternalImageLibraryTab(externalImageLibraryTab) {
    this.externalImageLibraryTab = externalImageLibraryTab;
    return this;
  }
  withExternalAiAssistant(externalAiAssistant2) {
    this.externalAiAssistant = externalAiAssistant2;
    return this;
  }
  withExternalDisplayCondition(externalDisplayCondition) {
    this.externalDisplayConditionsLibrary = externalDisplayCondition;
    return this;
  }
  withExternalVideosLibrary(externalVideoLibrary) {
    this.externalVideoLibrary = externalVideoLibrary;
    return this;
  }
  withBlocksPanel(blocksPanel) {
    this.blocksPanel = blocksPanel;
    return this;
  }
  addBlock(block) {
    this.blocks.push(block);
    return this;
  }
  withIconsRegistry(iconsRegistry) {
    this.iconsRegistry = iconsRegistry;
    return this;
  }
  build() {
    return new Extension(
      this.i18n,
      (this.styles || []).map((style) => style.trim()).join("\n"),
      this.uiElements,
      this.uiElementTagRegistry,
      this.controls,
      this.settingsPanelRegistry,
      this.contextActions,
      this.blocks,
      this.externalSmartElementsLibrary,
      this.externalImageLibrary,
      this.previewStyles,
      this.externalAiAssistant,
      this.externalDisplayConditionsLibrary,
      this.externalVideoLibrary,
      this.blocksPanel,
      this.iconsRegistry,
      this.externalImageLibraryTab
    );
  }
};
var _ExternalAiAssistant = class _ExternalAiAssistant2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalAiAssistant2.REQUIRED_METHODS, _ExternalAiAssistant2);
  }
  openAiAssistant({ value, onDataSelectCallback, onCancelCallback, type }) {
    throw new Error("Method openAiAssistant() must be implemented by the subclass");
  }
};
_ExternalAiAssistant.REQUIRED_METHODS = ["openAiAssistant"];
var _ExternalDisplayConditionsLibrary = class _ExternalDisplayConditionsLibrary2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalDisplayConditionsLibrary2.REQUIRED_METHODS, _ExternalDisplayConditionsLibrary2);
  }
  /**
   * Retrieves the name of the category.
   *
   * @return {string} The name of the category.
   */
  getCategoryName() {
    throw new Error("Method getCategoryName() must be implemented by the subclass");
  }
  /**
   * Opens a popup dialog for creating or updating a display condition.
   *
   * @param {DisplayCondition} currentCondition - The currently selected display condition to edit.
   * @param {ExternalDisplayConditionSelectedCB} successCallback - Callback executed with the updated or newly created condition upon success.
   * @param {() => void} cancelCallback - Callback executed when the dialog is closed without making changes.
   */
  openExternalDisplayConditionsDialog(_currentCondition, _successCallback, _cancelCallback) {
    throw new Error("Method openExternalDisplayConditionsDialog() must be implemented by the subclass");
  }
  /**
   * Determines if the context action associated with this library is enabled.
   *
   * @returns {boolean} `true` if the context action is enabled, otherwise `false`.
   */
  getIsContextActionEnabled() {
    throw new Error("Method getIsContextActionEnabled() must be implemented by the subclass");
  }
  /**
   * Retrieves the index of the context action associated with this library.
   * The index represents the position/order of the action in the UI.
   *
   * @returns {number} The index of the context action.
   */
  getContextActionIndex() {
    throw new Error("Method getContextActionIndex() must be implemented by the subclass");
  }
};
_ExternalDisplayConditionsLibrary.REQUIRED_METHODS = ["getCategoryName", "openExternalDisplayConditionsDialog"];
var _ExternalImageLibrary = class _ExternalImageLibrary2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalImageLibrary2.REQUIRED_METHODS, _ExternalImageLibrary2);
  }
  openImageLibrary(_currentImageUrl, _onImageSelectCallback, _onCancelCallback) {
    throw new Error("Method openImageLibrary() must be implemented by the subclass");
  }
};
_ExternalImageLibrary.REQUIRED_METHODS = ["openImageLibrary"];
var _ExternalImageLibraryTab = class _ExternalImageLibraryTab2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalImageLibraryTab2.REQUIRED_METHODS, _ExternalImageLibraryTab2);
  }
  /**
   * @description Returns the translated name/label for the tab
   * @returns Translation key or text to display as tab label
   */
  getName() {
    throw new Error("Method getName() must be implemented by the subclass");
  }
  /**
   * @description Opens the external image library tab and provides a container for rendering
   * @param _container - DOM element container where the external library UI should be rendered
   * @param _onImageSelectCallback - Callback to invoke when an image is selected
   */
  openImageLibraryTab(_container, _onImageSelectCallback) {
    throw new Error("Method openImageLibraryTab() must be implemented by the subclass");
  }
};
_ExternalImageLibraryTab.REQUIRED_METHODS = ["getName", "openImageLibraryTab"];
var ExternalImageLibraryTab = _ExternalImageLibraryTab;
var _ExternalSmartElementsLibrary = class _ExternalSmartElementsLibrary2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalSmartElementsLibrary2.REQUIRED_METHODS, _ExternalSmartElementsLibrary2);
  }
  openSmartElementsLibrary(_onDataSelectCallback, _onCancelCallback) {
    throw new Error("Method openSmartElementsLibrary() must be implemented by the subclass");
  }
};
_ExternalSmartElementsLibrary.REQUIRED_METHODS = ["openSmartElementsLibrary"];
var _ExternalVideosLibrary = class _ExternalVideosLibrary2 extends BaseValidatedClass {
  constructor() {
    super(_ExternalVideosLibrary2.REQUIRED_METHODS, _ExternalVideosLibrary2);
  }
  openExternalVideosLibraryDialog(_currentValue, _successCallback, _cancelCallback) {
    throw new Error("Method openExternalVideosLibraryDialog() must be implemented by the subclass");
  }
};
_ExternalVideosLibrary.REQUIRED_METHODS = ["openExternalVideosLibraryDialog"];
var _IconsRegistry = class _IconsRegistry2 extends BaseValidatedClass {
  constructor() {
    super(_IconsRegistry2.REQUIRED_METHODS, _IconsRegistry2);
  }
  registerIconsSvg(_iconsMap) {
    throw new Error("Method registerIconsSvg() must be implemented by the subclass");
  }
};
_IconsRegistry.REQUIRED_METHODS = ["registerIconsSvg"];
var IconsRegistry = _IconsRegistry;
var ModificationDescription = class {
  constructor(key) {
    this.key = key;
  }
  withParams(params) {
    this.params = params;
    return this;
  }
  getValue() {
    return {
      key: this.key,
      params: this.params
    };
  }
};
var _UIElement = class _UIElement2 extends BaseValidatedClass {
  constructor() {
    super(_UIElement2.REQUIRED_METHODS, _UIElement2);
  }
  /**
   * Called when the UI element should render its content into the provided container.
   * @param container - The HTMLElement where the UI element should be rendered.
   */
  onRender(_container) {
    throw new Error("Method onRender() must be implemented by the subclass");
  }
  /**
   * Optional cleanup hook called when the UI element is being destroyed.
   * Use this to remove event listeners or perform other cleanup tasks.
   */
  onDestroy() {
  }
  /**
   * Optional method to get the current value of the UI element.
   * Implement this if the element manages a state or value (e.g., input fields).
   * @returns The current value of the element.
   */
  getValue() {
  }
  /**
   * Optional method to set the value of the UI element.
   * Implement this if the element manages a state or value and needs to be updated externally.
   * @param value - The new value to set.
   */
  setValue(_value) {
  }
  /**
   * @description Optional hook called when one of the element's supported attributes ({@link UEAttr}) gets updated externally.
   * Implement this to react to attribute changes (e.g., visibility, disabled state).
   * @param name - The name of the attribute that was updated.
   * @param value - The new value of the attribute.
   */
  onAttributeUpdated(_name, _value) {
  }
  /**
   * Gets the unique identifier for this UI element type.
   * This ID is used for registration and referencing within controls.
   * @returns A unique string ID.
   */
  getId() {
    throw new Error("Method getId() must be implemented by the subclass");
  }
  /**
   * Gets the HTML template string that defines the structure of this UI element.
   * @returns An HTML string.
   */
  getTemplate() {
    throw new Error("Method getTemplate() must be implemented by the subclass");
  }
};
_UIElement.REQUIRED_METHODS = ["onRender", "getId", "getTemplate"];
var UIElement = _UIElement;
var _UIElementTagRegistry = class _UIElementTagRegistry2 extends BaseValidatedClass {
  constructor() {
    super(_UIElementTagRegistry2.REQUIRED_METHODS, _UIElementTagRegistry2);
  }
  registerUiElements(_uiElementsTagsMap) {
    throw new Error("Method registerUiElements() must be implemented by the subclass");
  }
};
_UIElementTagRegistry.REQUIRED_METHODS = ["registerUiElements"];
var UIElementTagRegistry = _UIElementTagRegistry;
var OrderableItemIconPosition = /* @__PURE__ */ ((OrderableItemIconPosition2) => {
  OrderableItemIconPosition2["TOP"] = "TOP";
  OrderableItemIconPosition2["LEFT"] = "LEFT";
  return OrderableItemIconPosition2;
})(OrderableItemIconPosition || {});
const IMAGE_BLOCK_ID = "atomic-block-image-alias-extension";
const TEXT_BLOCK_ID$1 = "atomic-block-text-alias-extension";
let PanelRegistry$G = class PanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[IMAGE_BLOCK_ID] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [BuiltInControlTypes.BLOCK_IMAGE.IMAGE])
    ];
  }
};
class AtomicBlockImageAlias extends Block {
  getId() {
    return IMAGE_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Atomic Block Image Alias Extension");
  }
  getDescription() {
    return this.api.translate("Atomic Block Image Alias Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    const attrs = BlockAttr.BLOCK_IMAGE;
    return `<${BlockType.BLOCK_IMAGE} ${attrs.src}="src.jpg" ${attrs.alt}="alt" style="border: 2px solid blueviolet;"></${BlockType.BLOCK_IMAGE}>`;
  }
}
class AtomicBlockTextAlias extends Block {
  getId() {
    return TEXT_BLOCK_ID$1;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Atomic Block Text Alias Extension");
  }
  getDescription() {
    return this.api.translate("Atomic Block Text Alias Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<${BlockType.BLOCK_TEXT} class="product-name" align="center"><h1>Hello world!</h1></${BlockType.BLOCK_TEXT}>`;
  }
}
const atomicBlockAlias = new ExtensionBuilder().addBlock(AtomicBlockImageAlias).withSettingsPanelRegistry(PanelRegistry$G).addBlock(AtomicBlockTextAlias).build();
const BLOCK_ID$9 = "structure-wth-ondocumentChange-hook";
const CONTROL_ID$4 = "structure-wth-ondocumentChange-hook-control";
class StructureExtensionControl extends StructureMarginsBuiltInControl {
  getId() {
    return CONTROL_ID$4;
  }
  getLabels() {
    return {
      title: "Structure Extension Control"
    };
  }
}
class StructureExtensionBlock extends Block {
  getId() {
    return BLOCK_ID$9;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure Extension");
  }
  getDescription() {
    return this.api.translate("Structure Extension Description");
  }
  isEnabled() {
    return true;
  }
  allowInnerBlocksSelection() {
    return true;
  }
  getTemplate() {
    return `<td>
              <h3>CUSTOM STRUCTURE</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="560" align="left" class="esd-container-frame">
                      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" class="esd-block-button">
                              <span class="es-button-border">
                                <a href="" target="_blank" class="es-button">
                                  Button
                                </a>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>`;
  }
  onDocumentChanged(_node) {
    console.count("onDocumentChanged");
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
}
let PanelRegistry$F = class PanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(_blockControlsMap) {
    _blockControlsMap[BLOCK_ID$9] = [
      new SettingsPanelTab("Settings", [
        CONTROL_ID$4
      ]).withLabel("Settings")
    ];
  }
};
const blockWithDocumentChangedHook = new ExtensionBuilder().addBlock(StructureExtensionBlock).addControl(StructureExtensionControl).withSettingsPanelRegistry(PanelRegistry$F).build();
const BUTTON_ID$3 = "button-id";
class BlockExtensionButton extends Block {
  getId() {
    return BUTTON_ID$3;
  }
  getBlockCompositionType() {
    return BlockCompositionType.BLOCK;
  }
  getIcon() {
    return "new-window";
  }
  getTemplate() {
    const { BLOCK_BUTTON } = BlockType;
    return `
            <td>
                <table width="100%" cellspacing="0" cellpadding="0">
                    <${BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://aaaaa.stripo.email">
                        BUY NOW
                    </${BLOCK_BUTTON}>
               </table> 
            </td>
        `;
  }
  getName() {
    return this.api.translate("BUY NOW");
  }
  getDescription() {
    return this.api.translate("BUY NOW button");
  }
  isEnabled() {
    return true;
  }
  onCreated(node) {
    this.api.getDocumentModifier().modifyHtml(node).setAttribute("data-created", (/* @__PURE__ */ new Date()).toISOString()).apply(new ModificationDescription("Initialized new block"));
  }
}
const buttonExtensionBlock = new ExtensionBuilder().addBlock(BlockExtensionButton).build();
var cjs;
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var index_exports = {};
  __export(index_exports, {
    ADD_CUSTOM_FONT_OPTION: () => ADD_CUSTOM_FONT_OPTION2,
    AccordionControls: () => AccordionControls,
    AiAssistantValueType: () => AiAssistantValueType,
    AmpFormControls: () => AmpFormControls,
    BannerChildControls: () => BannerChildControls,
    BannerControls: () => BannerControls,
    BannerMarginsBuiltInControl: () => BannerMarginsBuiltInControl,
    Block: () => Block2,
    BlockAttr: () => BlockAttr2,
    BlockCompositionType: () => BlockCompositionType2,
    BlockName: () => BlockName,
    BlockRenderer: () => BlockRenderer2,
    BlockSelector: () => BlockSelector2,
    BlockType: () => BlockType2,
    BlocksPanel: () => BlocksPanel,
    BuiltInControl: () => BuiltInControl2,
    BuiltInControlTypes: () => BuiltInControlTypes2,
    ButtonAlignBuiltInControl: () => ButtonAlignBuiltInControl2,
    ButtonBackgroundColorBuiltInControl: () => ButtonBackgroundColorBuiltInControl2,
    ButtonBlockBackgroundColorBuiltInControl: () => ButtonBlockBackgroundColorBuiltInControl2,
    ButtonBorderBuiltInControl: () => ButtonBorderBuiltInControl2,
    ButtonBorderRadiusBuiltInControl: () => ButtonBorderRadiusBuiltInControl2,
    ButtonColorBuiltInControl: () => ButtonColorBuiltInControl2,
    ButtonControls: () => ButtonControls2,
    ButtonFitToContainerBuiltInControl: () => ButtonFitToContainerBuiltInControl2,
    ButtonFixedHeightBuiltInControl: () => ButtonFixedHeightBuiltInControl2,
    ButtonFontFamilyBuiltInControl: () => ButtonFontFamilyBuiltInControl2,
    ButtonHoverBorderColorBuiltInControl: () => ButtonHoverBorderColorBuiltInControl2,
    ButtonHoverColorBuiltInControl: () => ButtonHoverColorBuiltInControl2,
    ButtonHoverTextColorBuiltInControl: () => ButtonHoverTextColorBuiltInControl2,
    ButtonMarginsBuiltInControl: () => ButtonMarginsBuiltInControl2,
    ButtonPaddingsBuiltInControl: () => ButtonPaddingsBuiltInControl2,
    ButtonTextBuiltInControl: () => ButtonTextBuiltInControl2,
    ButtonTextSizeBuiltInControl: () => ButtonTextSizeBuiltInControl2,
    ButtonTextStyleAndFontColorBuiltInControl: () => ButtonTextStyleAndFontColorBuiltInControl2,
    ButtonVisibilityBuiltInControl: () => ButtonVisibilityBuiltInControl2,
    CarouselControls: () => CarouselControls,
    ContainerBackgroundColorBuiltInControl: () => ContainerBackgroundColorBuiltInControl2,
    ContainerBackgroundImageBuiltInControl: () => ContainerBackgroundImageBuiltInControl2,
    ContainerBorderBuiltInControl: () => ContainerBorderBuiltInControl2,
    ContainerControls: () => ContainerControls2,
    ContainerVisibilityBuiltInControl: () => ContainerVisibilityBuiltInControl2,
    ContextAction: () => ContextAction2,
    ContextActionType: () => ContextActionType2,
    Control: () => Control2,
    CustomImageControls: () => CustomImageControls,
    CustomLinkControls: () => CustomLinkControls,
    CustomTextControls: () => CustomTextControls,
    EditorStatePropertyType: () => EditorStatePropertyType2,
    Extension: () => Extension2,
    ExtensionBuilder: () => ExtensionBuilder2,
    ExtensionPopoverType: () => ExtensionPopoverType,
    ExternalAiAssistant: () => ExternalAiAssistant2,
    ExternalDisplayConditionsLibrary: () => ExternalDisplayConditionsLibrary,
    ExternalImageLibrary: () => ExternalImageLibrary,
    ExternalImageLibraryTab: () => ExternalImageLibraryTab2,
    ExternalSmartElementsLibrary: () => ExternalSmartElementsLibrary2,
    ExternalVideosLibrary: () => ExternalVideosLibrary,
    GeneralControls: () => GeneralControls2,
    GeneralStylesControls: () => GeneralStylesControls,
    HTMLControls: () => HTMLControls,
    HtmlMarginsBuiltInControl: () => HtmlMarginsBuiltInControl,
    IconsRegistry: () => IconsRegistry2,
    ImageControls: () => ImageControls2,
    ImageMarginsBuiltInControl: () => ImageMarginsBuiltInControl,
    ImageSizeBuiltInControl: () => ImageSizeBuiltInControl2,
    ImageVisibilityBuiltInControl: () => ImageVisibilityBuiltInControl2,
    MenuControls: () => MenuControls2,
    MenuFontFamilyBuiltInControl: () => MenuFontFamilyBuiltInControl2,
    MenuMarginsBuiltInControl: () => MenuMarginsBuiltInControl,
    MessageSettingsControls: () => MessageSettingsControls,
    ModificationDescription: () => ModificationDescription2,
    OrderableItemIconPosition: () => OrderableItemIconPosition2,
    PanelPosition: () => PanelPosition,
    PopoverSide: () => PopoverSide,
    PreviewDeviceMode: () => PreviewDeviceMode2,
    SettingsPanelRegistry: () => SettingsPanelRegistry2,
    SettingsPanelTab: () => SettingsPanelTab2,
    SettingsTab: () => SettingsTab2,
    SocialControls: () => SocialControls,
    SocialMarginsBuiltInControl: () => SocialMarginsBuiltInControl,
    SpacerBackgroundColorBuiltInControl: () => SpacerBackgroundColorBuiltInControl2,
    SpacerControls: () => SpacerControls2,
    SpacerMarginsBuiltInControl: () => SpacerMarginsBuiltInControl,
    StripeControls: () => StripeControls,
    StructureAdaptBuiltInControl: () => StructureAdaptBuiltInControl2,
    StructureBackgroundColorBuiltInControl: () => StructureBackgroundColorBuiltInControl2,
    StructureBackgroundImageBuiltInControl: () => StructureBackgroundImageBuiltInControl2,
    StructureBorderBuiltInControl: () => StructureBorderBuiltInControl2,
    StructureControls: () => StructureControls2,
    StructureMarginsBuiltInControl: () => StructureMarginsBuiltInControl2,
    StructurePaddingsBuiltInControl: () => StructurePaddingsBuiltInControl2,
    StructureVisibilityBuiltInControl: () => StructureVisibilityBuiltInControl2,
    TextAlignBuiltInControl: () => TextAlignBuiltInControl2,
    TextBlockBackgroundBuiltInControl: () => TextBlockBackgroundBuiltInControl2,
    TextColorBuiltInControl: () => TextColorBuiltInControl2,
    TextControls: () => TextControls2,
    TextFixedHeightBuiltInControl: () => TextFixedHeightBuiltInControl2,
    TextFontFamilyBuiltInControl: () => TextFontFamilyBuiltInControl2,
    TextLineSpacingBuiltInControl: () => TextLineSpacingBuiltInControl2,
    TextLinkColorBuiltInControl: () => TextLinkColorBuiltInControl2,
    TextPaddingsBuiltInControl: () => TextPaddingsBuiltInControl2,
    TextSizeBuiltInControl: () => TextSizeBuiltInControl2,
    TextStyleBuiltInControl: () => TextStyleBuiltInControl2,
    TextVisibilityBuiltInControl: () => TextVisibilityBuiltInControl2,
    TimerControls: () => TimerControls,
    UEAttr: () => UEAttr2,
    UIElement: () => UIElement2,
    UIElementTagRegistry: () => UIElementTagRegistry2,
    UIElementType: () => UIElementType2,
    VideoControls: () => VideoControls,
    VideoMarginsBuiltInControl: () => VideoMarginsBuiltInControl
  });
  cjs = __toCommonJS(index_exports);
  var BlockCompositionType2 = /* @__PURE__ */ ((BlockCompositionType22) => {
    BlockCompositionType22["BLOCK"] = "BLOCK";
    BlockCompositionType22["STRUCTURE"] = "STRUCTURE";
    BlockCompositionType22["CONTAINER"] = "CONTAINER";
    return BlockCompositionType22;
  })(BlockCompositionType2 || {});
  var _BaseValidatedClass3 = class _BaseValidatedClass4 {
    /**
     * Validates that all required methods are properly implemented in the subclass.
     * @param requiredMethods - Array of method names that must be implemented
     * @param classRef - Reference to the class constructor for validation caching
     */
    constructor(requiredMethods, classRef) {
      if (classRef !== _BaseValidatedClass4) {
        if (!_BaseValidatedClass4.validatedClasses.has(classRef)) {
          this.validateImplementation(requiredMethods, classRef);
        }
        const errors = _BaseValidatedClass4.validationErrors.get(classRef);
        if (errors && errors.length > 0) {
          throw new Error(
            `${classRef.name} has validation errors:
${errors.map((e) => `  - ${e}`).join("\n")}`
          );
        }
      }
    }
    /**
     * Validates that all required methods are properly implemented in the subclass.
     * This validation runs only once per class type and results are cached.
     */
    validateImplementation(requiredMethods, classRef) {
      var _a;
      const errors = [];
      const className = classRef.name;
      const proto = Object.getPrototypeOf(this);
      requiredMethods.forEach((methodName) => {
        const method = this[methodName];
        if (typeof method !== "function") {
          errors.push(`Method ${methodName}() is not defined`);
          return;
        }
        if (proto[methodName] === classRef.prototype[methodName]) {
          errors.push(`Method ${methodName}() must be implemented (currently using base class error-throwing implementation)`);
        }
      });
      _BaseValidatedClass4.validatedClasses.add(classRef);
      if (errors.length > 0) {
        _BaseValidatedClass4.validationErrors.set(classRef, errors);
        console.error(`[${className} Validation] ${className} validation failed:`, errors);
      } else {
        if (typeof process !== "undefined" && ((_a = process.env) == null ? void 0 : _a.NODE_ENV) === "development") {
          console.log(`[${className} Validation] ✅ ${className} validated successfully`);
        }
      }
    }
  };
  _BaseValidatedClass3.validatedClasses = /* @__PURE__ */ new Set();
  _BaseValidatedClass3.validationErrors = /* @__PURE__ */ new Map();
  var BaseValidatedClass2 = _BaseValidatedClass3;
  var _Block3 = class _Block4 extends BaseValidatedClass2 {
    constructor() {
      super(_Block4.REQUIRED_METHODS, _Block4);
    }
    /**
     * Determines if the block should be available for use in the editor.
     * Override to provide custom logic based on editor state or configuration.
     * @returns True if the block is enabled, false otherwise. Defaults to true.
     */
    isEnabled() {
      return true;
    }
    /**
     * Determines if the block can be saved as a reusable module by the user.
     * @returns True if the block can be saved as a module, false otherwise. Defaults to false.
     */
    canBeSavedAsModule() {
      return false;
    }
    /**
     * Specifies the context actions available for this block.
     * If not overridden, the editor might use a default set of actions.
     * Use IDs from {@link ContextActionType} or custom action IDs.
     * @returns An array of context action IDs, or undefined to use defaults (if any).
     */
    getContextActionsIds() {
      return void 0;
    }
    /**
     * Provides a custom renderer class for this block, allowing for specialized rendering logic.
     * @returns A constructor for a class extending {@link BlockRenderer}, or undefined to use the default renderer.
     */
    getCustomRenderer() {
      return void 0;
    }
    /**
     * Gets a unique CSS class name specifically for this block type.
     * Used for targeting styles.
     * @returns A unique CSS class name. Defaults to `esd-{blockId}`.
     */
    getUniqueBlockClassname() {
      return `esd-${this.getId()}`;
    }
    /**
     * Lifecycle hook called when the editor document is initialized.
     * Useful for performing initial setup or modifications on existing block instances in the template.
     */
    onDocumentInit() {
    }
    /**
     * Lifecycle hook called when an instance of this block is selected in the editor.
     * @param node - The immutable HTML node representing the selected block instance.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelect(node) {
    }
    /**
     * Lifecycle hook called when an instance of this block is copied.
     * @param modifier - The HTML node modifier to apply changes to the copied block instance.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCopy(modifier) {
    }
    /**
     * Lifecycle hook called when an instance of this block is deleted.
     * @param node - The immutable HTML node representing the block instance being deleted.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onDelete(node) {
    }
    /**
     * Lifecycle hook called after a new instance of this block is created and added to the document (e.g., via drag-and-drop).
     * @param node - The immutable HTML node representing the newly created block instance.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCreated(node) {
    }
    /**
     * Lifecycle hook called when any part of the document template has changed.
     * This can be frequent; use cautiously for performance-sensitive operations.
     * @param node - The immutable HTML node representing current node instance
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onDocumentChanged(node) {
    }
    /**
     * @description Determines if block is atomic or composite.
     * {@link BlockCompositionType.BLOCK} - atomic block which can be inserted inside other container and cannot hold other objects
     * {@link BlockCompositionType.STRUCTURE} - composite block which can serve as a container for another atomic block
     * @returns The type of the block. Defaults to {@link BlockCompositionType.BLOCK}.
     */
    getBlockCompositionType() {
      return "BLOCK";
    }
    /**
     * @description Determines if block should be included in empty container quick insert actions list.
     * @returns True to show a quick-add icon for this block in empty containers, false otherwise. Defaults to false.
     */
    shouldDisplayQuickAddIcon() {
      return false;
    }
    /**
     * @description Determines if nested blocks selection allowed in extension of type {@link BlockCompositionType.STRUCTURE}
     */
    allowInnerBlocksSelection() {
      return true;
    }
    /**
     * @description Determines if nested blocks drag and drop allowed in extension of type {@link BlockCompositionType.STRUCTURE}
     */
    allowInnerBlocksDND() {
      return true;
    }
    /**
     * Gets the unique identifier for this block type.
     * This ID is used for registration and referencing the block.
     * @returns A unique string ID.
     */
    getId() {
      throw new Error("Method getId() must be implemented by the subclass");
    }
    /**
     * Gets the HTML template string that defines the initial structure of this block.
     * This template will be used when the block is dragged into the editor.
     * @returns An HTML string.
     */
    getTemplate() {
      throw new Error("Method getTemplate() must be implemented by the subclass");
    }
    /**
     * Gets the URL or path to the icon representing this block in the editor's block panel.
     * @returns A string representing the icon source (e.g., URL, data URI).
     */
    getIcon() {
      throw new Error("Method getIcon() must be implemented by the subclass");
    }
    /**
     * Gets the display name of the block shown to the user in the block panel.
     * Use `this.api.translate()` for localization.
     * @returns The localized block name string.
     */
    getName() {
      throw new Error("Method getName() must be implemented by the subclass");
    }
    /**
     * Gets a short description of the block shown to the user, often as a tooltip in the block panel.
     * Use `this.api.translate()` for localization.
     * @returns The localized description string.
     */
    getDescription() {
      throw new Error("Method getDescription() must be implemented by the subclass");
    }
  };
  _Block3.REQUIRED_METHODS = ["getId", "getTemplate", "getIcon", "getName", "getDescription"];
  var Block2 = _Block3;
  var _BlockRenderer3 = class _BlockRenderer4 extends BaseValidatedClass2 {
    constructor() {
      super(_BlockRenderer4.REQUIRED_METHODS, _BlockRenderer4);
    }
    /**
     * @deprecated - use {@link getPreviewInnerHtml} instead
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPreviewHtml(_node) {
      return void 0;
    }
    /**
     * @description returns custom content to be displayed inside the {@link Block} root TD element
     */
    getPreviewInnerHtml(_node) {
      throw new Error("Method getPreviewInnerHtml() must be implemented by the subclass");
    }
  };
  _BlockRenderer3.REQUIRED_METHODS = ["getPreviewInnerHtml"];
  var BlockRenderer2 = _BlockRenderer3;
  var BlocksPanel = class {
    /**
     * Generates HTML representation for a block item
     * @param block - The block item to generate HTML for
     * @returns HTML string representation of the block or undefined if default representation should be used
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getBlockItemHtml(block) {
      return void 0;
    }
    /**
     * Determines whether a hint should be displayed for the block
     * @param block - The block item to check hint visibility for
     * @returns True if the hint should be visible, false otherwise
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isBlockHintVisible(block) {
      return true;
    }
    /**
     * Gets the hint text for a block
     * @param block - The block item to get hint for
     * @returns The hint text for the block or undefined if default hint should be used
     */
    getBlockHint(block) {
      return {
        title: block.title,
        description: block.description
      };
    }
    /**
     * Generates HTML representation for the blocks panel header
     * @returns HTML string representation of the blocks panel header or undefined if header should not be shown
     */
    getBlocksPanelHeaderHtml() {
      return void 0;
    }
    /**
     * Generates HTML representation for the modules panel in collapsed state
     * @returns HTML string representation of the collapsed modules panel or undefined if default representation should be used
     */
    getModulesPanelCollapsedHtml() {
      return void 0;
    }
    /**
     * Determines whether a hint should be displayed for the collapsed modules panel
     * @returns True if the hint should be visible, false otherwise
     */
    isModulesPanelCollapsedHintVisible() {
      return true;
    }
    /**
     * Gets the custom delay for showing hints
     * @returns The delay in milliseconds or undefined to use the default delay
     */
    getHintDelay() {
      return void 0;
    }
    /**
     * Gets the hint text for a modules panel block
     * @returns The hint text for the modules panel or undefined if default hint should be used
     */
    getModulesPanelHint() {
      return void 0;
    }
    /**
     * Gets the icon name for the modules tab
     * @returns The icon name for the modules tab or undefined if default icon or text should be used
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getModulesTabIconName(modulesTab) {
      return void 0;
    }
  };
  var _ContextAction3 = class _ContextAction4 extends BaseValidatedClass2 {
    constructor() {
      super(_ContextAction4.REQUIRED_METHODS, _ContextAction4);
    }
    getId() {
      throw new Error("Method getId() must be implemented by the subclass");
    }
    getIcon() {
      throw new Error("Method getIcon() must be implemented by the subclass");
    }
    getLabel() {
      throw new Error("Method getLabel() must be implemented by the subclass");
    }
    onClick(_node) {
      throw new Error("Method onClick() must be implemented by the subclass");
    }
  };
  _ContextAction3.REQUIRED_METHODS = ["getId", "getIcon", "getLabel", "onClick"];
  var ContextAction2 = _ContextAction3;
  var ADD_CUSTOM_FONT_OPTION2 = "ADD_CUSTOM_FONT_OPTION";
  var AiAssistantValueType = /* @__PURE__ */ ((AiAssistantValueType2) => {
    AiAssistantValueType2["SUBJECT"] = "subject";
    AiAssistantValueType2["HIDDEN_PREHEADER"] = "hiddenPreheader";
    AiAssistantValueType2["TEXT_BLOCK"] = "textBlock";
    return AiAssistantValueType2;
  })(AiAssistantValueType || {});
  var containerAttributes2 = {
    widthPercent: "width-percent"
  };
  var emptyContainerAttributes2 = {
    ...containerAttributes2,
    blocks: "blocks"
  };
  var imageAttributes2 = {
    src: "src",
    alt: "alt",
    href: "href",
    width: "width",
    height: "height"
  };
  var buttonAttributes3 = {
    href: "href"
  };
  var BlockAttr2 = {
    EMPTY_CONTAINER: emptyContainerAttributes2,
    CONTAINER: containerAttributes2,
    BLOCK_IMAGE: imageAttributes2,
    BLOCK_BUTTON: buttonAttributes3
  };
  var ESD_BLOCK_BUTTON2 = "esd-block-button";
  var ESD_BLOCK_TEXT2 = "esd-block-text";
  var ESD_BLOCK_IMAGE2 = "esd-block-image";
  var ESD_BLOCK_STRUCTURE2 = "esd-structure";
  var ESD_BLOCK_VIDEO2 = "esd-block-video";
  var ESD_BLOCK_SOCIAL2 = "esd-block-social";
  var ESD_BLOCK_BANNER2 = "esd-block-banner";
  var ESD_BLOCK_TIMER2 = "esd-block-timer";
  var ESD_BLOCK_MENU2 = "esd-block-menu";
  var ESD_BLOCK_HTML2 = "esd-block-html";
  var ESD_BLOCK_SPACER2 = "esd-block-spacer";
  var ESD_BLOCK_CONTAINER2 = "esd-container-frame";
  var ESD_BLOCK_STRIPE2 = "esd-stripe";
  var ESD_BLOCK_FORM2 = "esd-amp-form";
  var BlockName = /* @__PURE__ */ ((BlockName2) => {
    BlockName2[BlockName2["BUTTON"] = ESD_BLOCK_BUTTON2] = "BUTTON";
    BlockName2[BlockName2["TEXT"] = ESD_BLOCK_TEXT2] = "TEXT";
    BlockName2[BlockName2["IMAGE"] = ESD_BLOCK_IMAGE2] = "IMAGE";
    BlockName2[BlockName2["STRUCTURE"] = ESD_BLOCK_STRUCTURE2] = "STRUCTURE";
    BlockName2[BlockName2["VIDEO"] = ESD_BLOCK_VIDEO2] = "VIDEO";
    BlockName2[BlockName2["SOCIAL"] = ESD_BLOCK_SOCIAL2] = "SOCIAL";
    BlockName2[BlockName2["BANNER"] = ESD_BLOCK_BANNER2] = "BANNER";
    BlockName2[BlockName2["TIMER"] = ESD_BLOCK_TIMER2] = "TIMER";
    BlockName2[BlockName2["MENU"] = ESD_BLOCK_MENU2] = "MENU";
    BlockName2[BlockName2["HTML"] = ESD_BLOCK_HTML2] = "HTML";
    BlockName2[BlockName2["SPACER"] = ESD_BLOCK_SPACER2] = "SPACER";
    BlockName2[BlockName2["CONTAINER"] = ESD_BLOCK_CONTAINER2] = "CONTAINER";
    return BlockName2;
  })(BlockName || {});
  var BlockSelector2 = ((BlockSelector22) => {
    BlockSelector22["BUTTON"] = `.${ESD_BLOCK_BUTTON2}`;
    BlockSelector22["TEXT"] = `.${ESD_BLOCK_TEXT2}`;
    BlockSelector22["IMAGE"] = `.${ESD_BLOCK_IMAGE2}`;
    BlockSelector22["STRUCTURE"] = `.${ESD_BLOCK_STRUCTURE2}`;
    BlockSelector22["VIDEO"] = `.${ESD_BLOCK_VIDEO2}`;
    BlockSelector22["SOCIAL"] = `.${ESD_BLOCK_SOCIAL2}`;
    BlockSelector22["BANNER"] = `.${ESD_BLOCK_BANNER2}`;
    BlockSelector22["TIMER"] = `.${ESD_BLOCK_TIMER2}`;
    BlockSelector22["MENU"] = `.${ESD_BLOCK_MENU2}`;
    BlockSelector22["HTML"] = `.${ESD_BLOCK_HTML2}`;
    BlockSelector22["SPACER"] = `.${ESD_BLOCK_SPACER2}`;
    BlockSelector22["CONTAINER"] = `.${ESD_BLOCK_CONTAINER2}`;
    BlockSelector22["STRIPE"] = `.${ESD_BLOCK_STRIPE2}`;
    BlockSelector22["FORM"] = `.${ESD_BLOCK_FORM2}`;
    return BlockSelector22;
  })(BlockSelector2 || {});
  var BlockType2 = /* @__PURE__ */ ((BlockType22) => {
    BlockType22["BLOCK_IMAGE"] = "BLOCK_IMAGE";
    BlockType22["BLOCK_TEXT"] = "BLOCK_TEXT";
    BlockType22["BLOCK_BUTTON"] = "BLOCK_BUTTON";
    BlockType22["BLOCK_SPACER"] = "BLOCK_SPACER";
    BlockType22["BLOCK_VIDEO"] = "BLOCK_VIDEO";
    BlockType22["BLOCK_SOCIAL"] = "BLOCK_SOCIAL";
    BlockType22["BLOCK_BANNER"] = "BLOCK_BANNER";
    BlockType22["BLOCK_TIMER"] = "BLOCK_TIMER";
    BlockType22["BLOCK_MENU"] = "BLOCK_MENU";
    BlockType22["BLOCK_MENU_ITEM"] = "BLOCK_MENU_ITEM";
    BlockType22["BLOCK_HTML"] = "BLOCK_HTML";
    BlockType22["BLOCK_AMP_CAROUSEL"] = "BLOCK_AMP_CAROUSEL";
    BlockType22["BLOCK_AMP_ACCORDION"] = "BLOCK_AMP_ACCORDION";
    BlockType22["BLOCK_AMP_FORM"] = "BLOCK_AMP_FORM";
    BlockType22["CONTAINER"] = "CONTAINER";
    BlockType22["FORM_CONTAINER"] = "FORM_CONTAINER";
    BlockType22["STRUCTURE"] = "STRUCTURE";
    BlockType22["STRIPE"] = "STRIPE";
    BlockType22["EMPTY_CONTAINER"] = "EMPTY_CONTAINER";
    BlockType22["CUSTOM_BLOCK_LINK"] = "CUSTOM_BLOCK_LINK";
    BlockType22["CUSTOM_BLOCK_IMAGE"] = "CUSTOM_BLOCK_IMAGE";
    BlockType22["CUSTOM_BLOCK_TEXT"] = "CUSTOM_BLOCK_TEXT";
    return BlockType22;
  })(BlockType2 || {});
  var GeneralControls2 = /* @__PURE__ */ ((GeneralControls22) => {
    GeneralControls22["ANCHOR_LINK_CONTAINER"] = "anchorLinkFormContainer";
    GeneralControls22["APPLY_CONDITION"] = "applyCondition";
    GeneralControls22["APPLY_CONDITION_SWITCHER"] = "applyConditionSwitcher";
    GeneralControls22["BACKGROUND_COLOR"] = "backgroundColor";
    GeneralControls22["BACKGROUND_IMAGE"] = "generalImageContainer";
    GeneralControls22["TEXT_COLOR"] = "textColor";
    GeneralControls22["TEXT_STYLE"] = "textStyle";
    GeneralControls22["TEXT_SIZE"] = "textSize";
    GeneralControls22["TEXT_LINE_SPACING"] = "textLineSpacing";
    GeneralControls22["TEXT_ALIGN"] = "textAlign";
    GeneralControls22["FIXED_HEIGHT_SWITCHER"] = "fixedHeightSwitcherForm";
    GeneralControls22["HIDDEN_NODE"] = "hiddenNode";
    GeneralControls22["SMART_BLOCK"] = "smartBlock";
    GeneralControls22["SYNCHRONIZED_MODULE"] = "synchronizedModuleForm";
    GeneralControls22["FONT_FAMILY"] = "generalFontFamilyForm";
    GeneralControls22["BLOCK_INTERNAL_INDENTS"] = "generalBlockInternalIndents";
    GeneralControls22["STRUCTURE_INTERNAL_INDENTS"] = "generalStructureInternalIndents";
    return GeneralControls22;
  })(GeneralControls2 || {});
  var BannerControls = /* @__PURE__ */ ((BannerControls2) => {
    BannerControls2["ALIGNMENT"] = "bannerAlignment";
    BannerControls2["ALT_TEXT"] = "bannerAltText";
    BannerControls2["ANCHOR_LINK_CONTAINER"] = "bannerAnchorLinkContainerForm";
    BannerControls2["ASPECT_RATIO"] = "bannerAspectRatioForm";
    BannerControls2["BACKGROUND_COLOR"] = "bannerBackgroundColor";
    BannerControls2["BACKGROUND_IMAGE_CONTAINER"] = "bannerBackgroundImageContainer";
    BannerControls2["SIZE"] = "bannerBlockBannerSize";
    BannerControls2["BLOCK_LINK"] = "bannerBlockLink";
    BannerControls2["CHILD_ROTATION"] = "bannerChildRotationForm";
    BannerControls2["CROP"] = "bannerCropForm";
    BannerControls2["FILTER"] = "bannerFilter";
    BannerControls2["EXTERNAL_INDENTS"] = "bannerExternalIndents";
    BannerControls2["MIME_TYPE"] = "bannerMimeTypeForm";
    BannerControls2["RESPONSIVE_IMAGE"] = "bannerResponsiveImageForm";
    return BannerControls2;
  })(BannerControls || {});
  var BannerChildControls = /* @__PURE__ */ ((BannerChildControls2) => {
    BannerChildControls2["ADDITIONAL_IMAGE"] = "bannerAdditionalImageForm";
    BannerChildControls2["ADDITIONAL_IMAGE_ASPECT_RATIO"] = "bannerAdditionalImageAspectRatioForm";
    BannerChildControls2["CHILD_COLOR"] = "bannerChildColorForm";
    BannerChildControls2["CHILD_FLIP"] = "bannerChildFlipForm";
    BannerChildControls2["CHILD_OPACITY"] = "bannerChildOpacityForm";
    BannerChildControls2["TEXT_ALIGNMENT"] = "bannerTextAlignmentForm";
    BannerChildControls2["TEXT_FONT"] = "bannerTextFontContainer";
    BannerChildControls2["TEXT_LETTER_CASE"] = "bannerTextLetterCaseForm";
    BannerChildControls2["TEXT_STYLE"] = "bannerTextStyleForm";
    return BannerChildControls2;
  })(BannerChildControls || {});
  var ButtonControls2 = /* @__PURE__ */ ((ButtonControls22) => {
    ButtonControls22["ADJUST_TO_WIDTH"] = "adjustToWidth";
    ButtonControls22["ALIGNMENT"] = "buttonAlignment";
    ButtonControls22["BORDER"] = "buttonBorder";
    ButtonControls22["BORDER_RADIUS"] = "buttonBorderRadius";
    ButtonControls22["COLOR"] = "buttonColor";
    ButtonControls22["BUTTON_BLOCK_BACKGROUND_COLOR"] = "buttonBlockBackgroundColor";
    ButtonControls22["EXTERNAL_INDENTS"] = "buttonExternalIndents";
    ButtonControls22["FIXED_HEIGHT"] = "buttonFixedHeightForm";
    ButtonControls22["FONT_COLOR"] = "buttonFontColor";
    ButtonControls22["FONT_FAMILY"] = "buttonFontFamily";
    ButtonControls22["FONT_SIZE"] = "buttonFontSize";
    ButtonControls22["ICON"] = "buttonIconContainer";
    ButtonControls22["ICON_ALIGN"] = "buttonIconAlign";
    ButtonControls22["ICON_INDENT"] = "buttonIconIndent";
    ButtonControls22["ICON_WIDTH"] = "buttonIconWidth";
    ButtonControls22["IMAGE"] = "buttonImageForm";
    ButtonControls22["INTERNAL_INDENTS"] = "buttonInternalIndents";
    ButtonControls22["LINK"] = "buttonLink";
    ButtonControls22["MIME_TYPE"] = "buttonMimeTypeForm";
    ButtonControls22["SWITCHER_HOVERED_STYLES"] = "buttonSwitcherHoveredStylesForm";
    ButtonControls22["TEXT"] = "buttonText";
    ButtonControls22["TEXT_STYLE_AND_COLOR"] = "buttonTextStyleAndColorForm";
    ButtonControls22["HOVERED_BORDER_COLOR"] = "hoveredStyleBorderButtonForm";
    ButtonControls22["HOVERED_COLOR"] = "hoveredButtonColorForm";
    ButtonControls22["HOVERED_TEXT_COLOR"] = "hoveredButtonTextColorForm";
    return ButtonControls22;
  })(ButtonControls2 || {});
  var TextControls2 = /* @__PURE__ */ ((TextControls22) => {
    TextControls22["HIDDEN_NODE"] = "hiddenNodeText";
    TextControls22["PARAGRAPH_STYLE"] = "paragraphStyleForm";
    TextControls22["ALIGN"] = "textAlignmentForm";
    TextControls22["ANCHOR_CONTAINER"] = "textAnchorForm";
    TextControls22["FONT_BACKGROUND_COLOR"] = "textBlockFontBackgroundColor";
    TextControls22["TEXT_BLOCK_BACKGROUND_COLOR"] = "textBlockBackgroundColor";
    TextControls22["FONT_COLOR"] = "textBlockFontColor";
    TextControls22["TEXT_BLOCK_FONT_FAMILY"] = "textBlockFontFamily";
    TextControls22["FONT_FAMILY"] = "textFontFamily";
    TextControls22["FONT_SIZE"] = "textBlockFontSize";
    TextControls22["DIRECTION"] = "textBlockDirectionForm";
    TextControls22["INSERT_FORM"] = "textBlockInsertForm";
    TextControls22["LINK_DATA"] = "textBlockLinkDataForm";
    TextControls22["FORMAT"] = "textBlockTextFormatForm";
    TextControls22["FIXED_HEIGHT"] = "textFixedHeightForm";
    TextControls22["INTERNAL_INDENTS"] = "textInternalIndents";
    TextControls22["LINE_HEIGHT"] = "textLineHeightForm";
    TextControls22["LINKS_COLOR"] = "textLinksFontColorForm";
    TextControls22["MIME_TYPE"] = "textMimeTypeForm";
    TextControls22["NO_LINE_WRAPS"] = "textNoLineWrapsForm";
    return TextControls22;
  })(TextControls2 || {});
  var AmpFormControls = /* @__PURE__ */ ((AmpFormControls2) => {
    AmpFormControls2["AMP_FORM_HIDDEN_NODE"] = "ampFormHiddenNodeForm";
    AmpFormControls2["AMP_FORM_MIME_TYPE"] = "ampFormMimeTypeForm";
    AmpFormControls2["BACKGROUND_COLOR"] = "ampFormBackgroundColorForm";
    return AmpFormControls2;
  })(AmpFormControls || {});
  var VideoControls = /* @__PURE__ */ ((VideoControls2) => {
    VideoControls2["CUSTOM_THUMBNAIL_CONTAINER"] = "customThumbnailContainerForm";
    VideoControls2["METADATA_LINK"] = "metadataLink";
    VideoControls2["PLAY_BUTTON"] = "playButton";
    VideoControls2["ALIGNMENT"] = "videoAlignment";
    VideoControls2["ALT_TEXT"] = "videoAltText";
    VideoControls2["EXTERNAL_INDENTS"] = "videoExternalIndents";
    VideoControls2["MIME_TYPE"] = "videoMimeTypeForm";
    VideoControls2["RESPONSIVE"] = "videoResponsive";
    VideoControls2["SIZE"] = "videoSizeContainer";
    return VideoControls2;
  })(VideoControls || {});
  var TimerControls = /* @__PURE__ */ ((TimerControls2) => {
    TimerControls2["ALIGNMENT"] = "timerAlignment";
    TimerControls2["ALT_TEXT"] = "timerAltText";
    TimerControls2["BACKGROUND_COLOR"] = "timerBackgroundColor";
    TimerControls2["DATE_TIME"] = "timeDateTime";
    TimerControls2["DIGITAL_LABELS"] = "timerDigitalLabels";
    TimerControls2["DIGITS_FONT_COLOR_CONTAINER"] = "timerDigitsFontColorContainer";
    TimerControls2["DIGITS_FONT_CONTAINER"] = "timerDigitsFontContainer";
    TimerControls2["DISPLAY_DAYS_SWITCHER"] = "timerDisplayDaysSwitcher";
    TimerControls2["EXPIRATION_IMAGE"] = "timerExpirationImage";
    TimerControls2["EXPIRATION_IMAGE_SWITCHER"] = "timerExpirationSwitcher";
    TimerControls2["EXTERNAL_INDENTS"] = "timerExternalIndents";
    TimerControls2["LABELS_CASE"] = "timerLabelsCase";
    TimerControls2["LABELS_FONT_COLOR_CONTAINER"] = "timerLabelsFontColorContainer";
    TimerControls2["LABELS_FONT_CONTAINER"] = "timerLabelsFontContainer";
    TimerControls2["LABEL_LANGUAGE"] = "timerLabelsLanguage";
    TimerControls2["LINK"] = "timerLink";
    TimerControls2["MIME_TYPE"] = "timerMimeTypeForm";
    TimerControls2["RESPONSIVE"] = "timerResponsive";
    TimerControls2["RETINA_DISPLAY_SUPPORT"] = "timerRetinaDisplaySupport";
    TimerControls2["SEPARATOR"] = "timerSeparator";
    TimerControls2["SEPARATOR_FONT_COLOR"] = "timerSeparatorFontColor";
    TimerControls2["SEPARATOR_FONT_CONTAINER"] = "timerSeparatorFontContainer";
    TimerControls2["SIZE"] = "timerSize";
    TimerControls2["TIME_ZONE"] = "timerTimeZone";
    return TimerControls2;
  })(TimerControls || {});
  var SpacerControls2 = /* @__PURE__ */ ((SpacerControls22) => {
    SpacerControls22["ALIGNMENT"] = "spacerAlignment";
    SpacerControls22["BORDER"] = "spacerBorder";
    SpacerControls22["EXTERNAL_INDENTS"] = "spacerExternalIndents";
    SpacerControls22["MIME_TYPE"] = "spacerMimeTypeForm";
    SpacerControls22["MODE"] = "spacerMode";
    SpacerControls22["SIZE"] = "spacerSize";
    SpacerControls22["BACKGROUND_COLOR"] = "spacerBackgroundColor";
    return SpacerControls22;
  })(SpacerControls2 || {});
  var ImageControls2 = /* @__PURE__ */ ((ImageControls22) => {
    ImageControls22["ALT_TEXT"] = "altText";
    ImageControls22["LINK"] = "blockLink";
    ImageControls22["ALIGNMENT"] = "imageAlignment";
    ImageControls22["ANCHOR_LINK_CONTAINER"] = "imageAnchorLinkContainerForm";
    ImageControls22["BORDER_RADIUS"] = "imageBorderRadiusForm";
    ImageControls22["IMAGE"] = "imageImageForm";
    ImageControls22["EXTERNAL_INDENTS"] = "imageExternalIndents";
    ImageControls22["MIME_TYPE"] = "imageMimeTypeForm";
    ImageControls22["RESPONSIVE"] = "imageResponsive";
    ImageControls22["ROLLOVER_IMAGE"] = "imageRolloverImageForm";
    ImageControls22["ROLLOVER_SWITCHER"] = "imageRolloverSwitcherForm";
    ImageControls22["SIZE"] = "imageSizeContainer";
    return ImageControls22;
  })(ImageControls2 || {});
  var HTMLControls = /* @__PURE__ */ ((HTMLControls2) => {
    HTMLControls2["EXTERNAL_INDENTS"] = "htmlExternalIndents";
    HTMLControls2["MIME_TYPE"] = "htmlMimeTypeForm";
    return HTMLControls2;
  })(HTMLControls || {});
  var CustomLinkControls = /* @__PURE__ */ ((CustomLinkControls2) => {
    CustomLinkControls2["IMAGE"] = "customBlockImageForm";
    CustomLinkControls2["COLOR_FORM"] = "customLinkColorForm";
    CustomLinkControls2["HREF_FORM"] = "customLinkHrefForm";
    CustomLinkControls2["TEXT_FORM"] = "customLinkTextForm";
    CustomLinkControls2["UNDERLINE_FORM"] = "customLinkUnderlineForm";
    CustomLinkControls2["WORD_BREAK_FORM"] = "customLinkWordBreakForm";
    return CustomLinkControls2;
  })(CustomLinkControls || {});
  var CustomImageControls = /* @__PURE__ */ ((CustomImageControls2) => {
    CustomImageControls2["ALT_TEXT_FORM"] = "customBlockImageAltTextForm";
    CustomImageControls2["WITHOUT_LINK_FORM"] = "customBlockImageWithOutLinkForm";
    return CustomImageControls2;
  })(CustomImageControls || {});
  var CustomTextControls = /* @__PURE__ */ ((CustomTextControls2) => {
    CustomTextControls2["ALIGN"] = "customTextBlockTextAlign";
    CustomTextControls2["FONT_SIZE"] = "customTextFontSizeController";
    return CustomTextControls2;
  })(CustomTextControls || {});
  var SocialControls = /* @__PURE__ */ ((SocialControls2) => {
    SocialControls2["ICON_SIZE"] = "iconSize";
    SocialControls2["EXTERNAL_INDENTS"] = "socialExternalIndents";
    SocialControls2["ICON_SPACER"] = "socialIconsSpacer";
    SocialControls2["ICON_TYPE"] = "socialIconTypeForm";
    SocialControls2["ITEM"] = "socialItemForm";
    SocialControls2["ITEM_TEXT_CUSTOMIZATION"] = "socialItemTextCustomizationForm";
    SocialControls2["MIME_TYPE"] = "socialMimeTypeForm";
    SocialControls2["NETWORK_ALIGNMENT"] = "socialNetworkAlignment";
    SocialControls2["BACKGROUND_COLOR"] = "socialBackgroundColor";
    return SocialControls2;
  })(SocialControls || {});
  var MenuControls2 = /* @__PURE__ */ ((MenuControls22) => {
    MenuControls22["EXTERNAL_INDENTS"] = "menuExternalIndents";
    MenuControls22["ALIGNMENT"] = "menuAlignment";
    MenuControls22["RESPONSIVE_MENU"] = "menuResponsive";
    MenuControls22["FIT_TO_CONTAINER"] = "menuFitToContainer";
    MenuControls22["FONT_FAMILY"] = "menuFontFamily";
    MenuControls22["FONT_SIZE"] = "menuFontSize";
    MenuControls22["HIDDEN"] = "menuHidden";
    MenuControls22["ICONS_CONFIGURATION"] = "menuIconsConfiguration";
    MenuControls22["ITEMS"] = "menuItemsForm";
    MenuControls22["ITEMS_COUNT"] = "menuItemsCount";
    MenuControls22["ITEM_INTERNAL_INDENTS"] = "menuItemInternalIndents";
    MenuControls22["MIME_TYPE"] = "menuMimeTypeForm";
    MenuControls22["SEPARATE_ITEMS"] = "menuSeparateItems";
    MenuControls22["SEPARATE_ITEMS_COLOR_SWITCHER"] = "menuSeparateItemsColorSwitcher";
    MenuControls22["SEPARATOR"] = "menuSeparatorForm";
    MenuControls22["STYLES"] = "menuStylesForm";
    MenuControls22["TEXT_STYLE_AND_COLOR"] = "menuTextStyleAndColor";
    MenuControls22["TYPE_CONTAINER"] = "menuTypeContainerForm";
    return MenuControls22;
  })(MenuControls2 || {});
  var AccordionControls = /* @__PURE__ */ ((AccordionControls2) => {
    AccordionControls2["MIME_TYPE"] = "ampAccordionMimeTypeForm";
    AccordionControls2["ANIMATED_OPENING"] = "ampAccordionAnimatedOpeningForm";
    AccordionControls2["AUTO_COLLAPSING"] = "ampAccordionAutoCollapsingForm";
    AccordionControls2["BORDER_FORM"] = "ampAccordionBorderForm";
    AccordionControls2["FONT_FAMILY"] = "ampAccordionFontFamily";
    AccordionControls2["ICON_SIZE"] = "ampAccordionIconSizeForm";
    AccordionControls2["SECTIONS_GAP_FORM"] = "ampAccordionSectionsGapForm";
    AccordionControls2["SECTIONS_MAIN_FORM"] = "ampAccordionSectionsMainForm";
    AccordionControls2["TITLES_BACKGROUND_COLOR"] = "ampAccordionTitlesBackgroundColor";
    AccordionControls2["TITLE_ALIGNMENT_FORM"] = "ampAccordionTitleAlignmentForm";
    AccordionControls2["TITLE_FONT_SIZE"] = "AmpAccordionTitleFontSizeController";
    AccordionControls2["TITLE_ICON_IMAGE"] = "ampAccordionTitleIconImageForm";
    AccordionControls2["TITLE_ICON_SWITCHER"] = "ampAccordionTitleIconSwitcherForm";
    AccordionControls2["TITLE_TEXT_STYLE_AND_COLOR"] = "AmpAccordionTitleTextStyleAndColorController";
    return AccordionControls2;
  })(AccordionControls || {});
  var CarouselControls = /* @__PURE__ */ ((CarouselControls2) => {
    CarouselControls2["MIME_TYPE"] = "ampCarouselMimeTypeForm";
    CarouselControls2["AUTOPLAY"] = "ampCarouselAutoplayForm";
    CarouselControls2["AUTOPLAY_DELAY"] = "ampCarouselDelayForm";
    CarouselControls2["LOOP"] = "ampCarouselLoopForm";
    CarouselControls2["SLIDES"] = "ampSlidesForm";
    CarouselControls2["SLIDE_ALT_TEXT"] = "ampSlideAltTextForm";
    CarouselControls2["SLIDE_IMAGE"] = "ampSlideImageForm";
    CarouselControls2["SLIDE_IMAGE_FIT"] = "ampCarouselSlideImageFitForm";
    CarouselControls2["SLIDE_LINK"] = "ampSlideLinkForm";
    CarouselControls2["SLIDE_RADIUS"] = "ampCarouselSlideRadiusForm";
    CarouselControls2["SLIDE_THUMBNAIL_SWITCHER"] = "ampCarouselSlideThumbnailSwitcherForm";
    CarouselControls2["THUMBNAIL_BORDER_STYLE"] = "ampCarouselThumbnailBorderStyleForm";
    CarouselControls2["THUMBNAIL_CONTAINER"] = "ampCarouselThumbnailContainerForm";
    CarouselControls2["THUMBNAIL_CUSTOM_REVIEW"] = "ampCarouselThumbnailCustomPreviewImageForm";
    CarouselControls2["THUMBNAIL_RADIUS"] = "ampCarouselThumbnailRadiusForm";
    CarouselControls2["AMP_GENERAL_LINK"] = "AMP_GENERAL_LINK_CONTROLLER";
    CarouselControls2["AMP_GENERAL_LINK_SWITCHER"] = "AMP_GENERAL_LINK_SWITCHER";
    return CarouselControls2;
  })(CarouselControls || {});
  var StripeControls = /* @__PURE__ */ ((StripeControls2) => {
    StripeControls2["BORDER_FORM"] = "stripeBorderForm";
    StripeControls2["COLOR"] = "stripeColorForm";
    StripeControls2["CONTENT_COLOR"] = "stripeContentColor";
    StripeControls2["IMAGE_CONTAINER"] = "stripeImageContainerForm";
    StripeControls2["INTERNAL_INDENTS"] = "stripeInternalIndents";
    StripeControls2["MESSAGE_AREA"] = "stripeMessageAreaForm";
    StripeControls2["MIME_TYPE"] = "stripeMimeTypeForm";
    return StripeControls2;
  })(StripeControls || {});
  var StructureControls2 = /* @__PURE__ */ ((StructureControls22) => {
    StructureControls22["RESPONSIVE_STRUCTURE"] = "responsiveStructure";
    StructureControls22["BACKGROUND_COLOR"] = "structureBackgroundColor";
    StructureControls22["BORDER_RADIUS"] = "structureBorderRadiusForm";
    StructureControls22["CONTAINER_GAP"] = "structureContainerGap";
    StructureControls22["CONTAINER_INVERSION"] = "structureContainerInversion";
    StructureControls22["DYNAMIC_CONTAINERS"] = "structureDynamicContainers";
    StructureControls22["EXTERNAL_INDENTS"] = "structureExternalIndents";
    StructureControls22["IMAGE_CONTAINER"] = "structureImageContainerForm";
    StructureControls22["INTERNAL_INDENTS"] = "structureInternalIndents";
    StructureControls22["ITEM"] = "structureItem";
    StructureControls22["MIME_TYPE"] = "structureMimeType";
    StructureControls22["BORDER_FORM"] = "structureBorderForm";
    return StructureControls22;
  })(StructureControls2 || {});
  var ContainerControls2 = /* @__PURE__ */ ((ContainerControls22) => {
    ContainerControls22["BACKGROUND_COLOR"] = "containerBackgroundColorForm";
    ContainerControls22["BORDER_FORM"] = "containerBorderForm";
    ContainerControls22["BORDER_RADIUS"] = "containerBorderRadiusForm";
    ContainerControls22["EXTERNAL_INDENTS"] = "containerExternalIndentsForm";
    ContainerControls22["IMAGE_CONTAINER"] = "containerImageContainerForm";
    ContainerControls22["MIME_TYPE"] = "containerMimeTypeForm";
    ContainerControls22["DISPLAY_CONDITIONS"] = "displayConditions";
    ContainerControls22["HIDDEN_NODE"] = "containerHiddenNodeForm";
    return ContainerControls22;
  })(ContainerControls2 || {});
  var MessageSettingsControls = /* @__PURE__ */ ((MessageSettingsControls2) => {
    MessageSettingsControls2["DISPLAY_OFFER_BADGE"] = "displayOfferBadgeForm";
    MessageSettingsControls2["DISPLAY_PROMO_CODE_BADGE"] = "displayPromoCodeBadgeForm";
    MessageSettingsControls2["END_DISCOUNT_OFFER"] = "endDiscountOfferForm";
    MessageSettingsControls2["GMAIL_PROMOTIONS_TAB"] = "gmailPromotionsTabForm";
    MessageSettingsControls2["HIDDEN_PRE_HEADER"] = "hiddenPreHeaderForm";
    MessageSettingsControls2["PROMO_IMAGE_CAROUSEL"] = "promoImageCarouselForm";
    MessageSettingsControls2["INCLUDE_SENDER_LOGO"] = "includeSenderLogoForm";
    MessageSettingsControls2["SUBJECT_TITLE"] = "subjectTitleForm";
    MessageSettingsControls2["UTM_PARAMETERS"] = "utmParametersForm";
    MessageSettingsControls2["UTM_PARAMETERS_CAMPAIGN"] = "utmParameterCampaignForm";
    MessageSettingsControls2["UTM_PARAMETERS_CUSTOM"] = "utmParametersCustomForm";
    MessageSettingsControls2["UTM_PARAMETERS_CUSTOM_ITEM"] = "utmParametersCustomItemForm";
    return MessageSettingsControls2;
  })(MessageSettingsControls || {});
  var GeneralStylesControls = /* @__PURE__ */ ((GeneralStylesControls2) => {
    GeneralStylesControls2["BUTTONS_ADJUST_TO_WIDTH_CONTAINER"] = "buttonsAdjustToWidthFormContainer";
    GeneralStylesControls2["BUTTONS_BORDER"] = "buttonsBorder";
    GeneralStylesControls2["BUTTONS_BORDER_RADIUS_CONTAINER"] = "buttonsBorderRadiusContainer";
    GeneralStylesControls2["BUTTONS_COLOR_CONTAINER"] = "buttonsColorContainer";
    GeneralStylesControls2["BUTTONS_FONT_FAMILY_CONTAINER"] = "buttonsFontFamilyContainer";
    GeneralStylesControls2["BUTTONS_FONT_SIZE_CONTAINER"] = "buttonsFontSizeFormContainer";
    GeneralStylesControls2["BUTTONS_HOVERED_BUTTON_STYLE"] = "buttonsHoveredButtonStyleForm";
    GeneralStylesControls2["BUTTONS_INTERNAL_INDENTS_CONTAINER"] = "buttonsInternalIndentsContainer";
    GeneralStylesControls2["BUTTONS_LETTER_SPACING_CONTAINER"] = "buttonsLetterSpacingContainer";
    GeneralStylesControls2["BUTTONS_OUTLOOK_SUPPORT_CONTAINER"] = "buttonsOutlookSupportContainer";
    GeneralStylesControls2["BUTTONS_TEXT_STYLE_AND_COLOR_CONTAINER"] = "buttonsTextStyleAndColorFormContainer";
    GeneralStylesControls2["DEFAULT_STRUCTURE_INTERNAL_INDENTS"] = "defaultStructureInternalIndents";
    GeneralStylesControls2["GENERAL_BACKGROUND_COLOR_CONTAINER"] = "generalBackgroundColorContainer";
    GeneralStylesControls2["GENERAL_IMAGE_CONTAINER"] = "generalImageContainer";
    GeneralStylesControls2["HEADINGS_FONT_FAMILY_CONTAINER"] = "headingsFontFamilyContainer";
    GeneralStylesControls2["HEADINGS_H1_CONTROLS_CONTAINER"] = "headingH1controlsContainer";
    GeneralStylesControls2["HEADINGS_H2_CONTROLS_CONTAINER"] = "headingH2controlsContainer";
    GeneralStylesControls2["HEADINGS_H3_CONTROLS_CONTAINER"] = "headingH3controlsContainer";
    GeneralStylesControls2["HEADINGS_H4_CONTROLS_CONTAINER"] = "headingH4controlsContainer";
    GeneralStylesControls2["HEADINGS_H5_CONTROLS_CONTAINER"] = "headingH5controlsContainer";
    GeneralStylesControls2["HEADINGS_H6_CONTROLS_CONTAINER"] = "headingH6controlsContainer";
    GeneralStylesControls2["HEADINGS_LETTER_SPACING_CONTAINER"] = "headingsLetterSpacingFormContainer";
    GeneralStylesControls2["HEADINGS_PARAGRAPH_BOTTOM_MARGIN"] = "headingsParagraphBottomMarginForm";
    GeneralStylesControls2["HEADINGS_TYPES_BUTTON_BAR"] = "headingsTypesButtonBarForm";
    GeneralStylesControls2["LISTS_STYLES"] = "listsStyles";
    GeneralStylesControls2["MARGIN_AROUND_MESSAGE"] = "marginAroundMessage";
    GeneralStylesControls2["MESSAGE_ALIGNMENT"] = "messageAlignment";
    GeneralStylesControls2["MESSAGE_CONTENT_WIDTH"] = "messageContentWidth";
    GeneralStylesControls2["RESPONSIVE_DESIGN"] = "responsiveDesign";
    GeneralStylesControls2["RIGHT_TO_LEFT_CONTAINER"] = "rightToLeftContainer";
    GeneralStylesControls2["STRIPES_CONTENT_CONTROLS_CONTAINER"] = "stripesContentControlsContainer";
    GeneralStylesControls2["STRIPES_FONT_FAMILY_CONTAINER"] = "stripesFontFamilyFormContainer";
    GeneralStylesControls2["STRIPES_FOOTER_CONTROLS_CONTAINER"] = "stripesFooterControlsContainer";
    GeneralStylesControls2["STRIPES_HEADER_CONTROLS_CONTAINER"] = "stripesHeaderControlsContainer";
    GeneralStylesControls2["STRIPES_INFO_AREA_CONTROLS_CONTAINER"] = "stripesInfoAreaControlsContainer";
    GeneralStylesControls2["STRIPES_LETTER_SPACING_CONTAINER"] = "stripesLetterSpacingFormContainer";
    GeneralStylesControls2["STRIPES_LINE_HEIGHT_CONTAINER"] = "stripesLineHeightFormContainer";
    GeneralStylesControls2["STRIPE_TYPES_BUTTON_BAR"] = "stripeTypesButtonBarForm";
    GeneralStylesControls2["UNDERLINE_LINKS_CONTAINER"] = "underlineLinksContainer";
    return GeneralStylesControls2;
  })(GeneralStylesControls || {});
  var BuiltInControlTypes2 = {
    [
      "BLOCK_BANNER"
      /* BLOCK_BANNER */
    ]: BannerControls,
    [
      "BLOCK_BUTTON"
      /* BLOCK_BUTTON */
    ]: ButtonControls2,
    [
      "BLOCK_TEXT"
      /* BLOCK_TEXT */
    ]: TextControls2,
    [
      "BLOCK_VIDEO"
      /* BLOCK_VIDEO */
    ]: VideoControls,
    [
      "BLOCK_TIMER"
      /* BLOCK_TIMER */
    ]: TimerControls,
    [
      "BLOCK_SPACER"
      /* BLOCK_SPACER */
    ]: SpacerControls2,
    [
      "BLOCK_IMAGE"
      /* BLOCK_IMAGE */
    ]: ImageControls2,
    [
      "BLOCK_HTML"
      /* BLOCK_HTML */
    ]: HTMLControls,
    [
      "BLOCK_SOCIAL"
      /* BLOCK_SOCIAL */
    ]: SocialControls,
    [
      "BLOCK_MENU"
      /* BLOCK_MENU */
    ]: MenuControls2,
    [
      "BLOCK_AMP_FORM"
      /* BLOCK_AMP_FORM */
    ]: AmpFormControls,
    [
      "BLOCK_AMP_ACCORDION"
      /* BLOCK_AMP_ACCORDION */
    ]: AccordionControls,
    [
      "BLOCK_AMP_CAROUSEL"
      /* BLOCK_AMP_CAROUSEL */
    ]: CarouselControls,
    [
      "STRIPE"
      /* STRIPE */
    ]: StripeControls,
    [
      "STRUCTURE"
      /* STRUCTURE */
    ]: StructureControls2,
    [
      "CONTAINER"
      /* CONTAINER */
    ]: ContainerControls2,
    [
      "CUSTOM_BLOCK_LINK"
      /* CUSTOM_BLOCK_LINK */
    ]: CustomLinkControls,
    [
      "CUSTOM_BLOCK_IMAGE"
      /* CUSTOM_BLOCK_IMAGE */
    ]: CustomImageControls,
    [
      "CUSTOM_BLOCK_TEXT"
      /* CUSTOM_BLOCK_TEXT */
    ]: CustomTextControls,
    BANNER_CHILD: BannerChildControls,
    MESSAGE_SETTINGS: MessageSettingsControls,
    GENERAL_STYLES: GeneralStylesControls,
    GENERAL: GeneralControls2
  };
  var ContextActionType2 = /* @__PURE__ */ ((ContextActionType22) => {
    ContextActionType22["SAVE_AS_MODULE"] = "saveAsModule";
    ContextActionType22["UPDATE_MODULE"] = "updateModule";
    ContextActionType22["IMPROVE_WITH_AI"] = "improveWithAI";
    ContextActionType22["MOVE"] = "move";
    ContextActionType22["COPY"] = "copy";
    ContextActionType22["REMOVE"] = "remove";
    ContextActionType22["CLEAR_CONTAINER"] = "clearContainer";
    ContextActionType22["REMOVE_CONTAINER"] = "removeContainer";
    ContextActionType22["EXTERNAL_DISPLAY_CONDITION"] = "externalDisplayCondition";
    return ContextActionType22;
  })(ContextActionType2 || {});
  var EditorStatePropertyType2 = /* @__PURE__ */ ((EditorStatePropertyType22) => {
    EditorStatePropertyType22["previewDeviceMode"] = "previewDeviceMode";
    EditorStatePropertyType22["panelPosition"] = "panelPosition";
    return EditorStatePropertyType22;
  })(EditorStatePropertyType2 || {});
  var PanelPosition = /* @__PURE__ */ ((PanelPosition2) => {
    PanelPosition2["BLOCKS_SETTINGS"] = "BLOCKS_SETTINGS";
    PanelPosition2["SETTINGS_BLOCKS"] = "SETTINGS_BLOCKS";
    return PanelPosition2;
  })(PanelPosition || {});
  var PopoverSide = /* @__PURE__ */ ((PopoverSide2) => {
    PopoverSide2["TOP"] = "top";
    PopoverSide2["RIGHT"] = "right";
    PopoverSide2["BOTTOM"] = "bottom";
    PopoverSide2["LEFT"] = "left";
    return PopoverSide2;
  })(PopoverSide || {});
  var ExtensionPopoverType = /* @__PURE__ */ ((ExtensionPopoverType2) => {
    ExtensionPopoverType2["AI_HIDDEN_PREHEADER"] = "aiHiddenPreheader";
    ExtensionPopoverType2["AI_SUBJECT"] = "aiSubject";
    ExtensionPopoverType2["AI_TEXT"] = "aiText";
    return ExtensionPopoverType2;
  })(ExtensionPopoverType || {});
  var PreviewDeviceMode2 = /* @__PURE__ */ ((PreviewDeviceMode22) => {
    PreviewDeviceMode22["DESKTOP"] = "DESKTOP";
    PreviewDeviceMode22["MOBILE"] = "MOBILE";
    return PreviewDeviceMode22;
  })(PreviewDeviceMode2 || {});
  var SettingsTab2 = /* @__PURE__ */ ((SettingsTab22) => {
    SettingsTab22["SETTINGS"] = "settings";
    SettingsTab22["STYLES"] = "styles";
    SettingsTab22["DATA"] = "data";
    return SettingsTab22;
  })(SettingsTab2 || {});
  var UIElementAttributes2 = {
    name: "name",
    disabled: "disabled"
  };
  var buttonAttributes22 = {
    ...UIElementAttributes2,
    caption: "caption",
    icon: "icon"
  };
  var checkBoxAttributes2 = {
    ...UIElementAttributes2,
    caption: "caption"
  };
  var counterAttributes2 = {
    ...UIElementAttributes2,
    minValue: "min-value",
    maxValue: "max-value",
    step: "step"
  };
  var datePickerAttributes2 = {
    ...UIElementAttributes2,
    placeholder: "placeholder",
    minDate: "min-date"
  };
  var labelAttributes2 = {
    ...UIElementAttributes2,
    text: "text",
    hint: "hint"
  };
  var messageAttributes2 = {
    ...UIElementAttributes2,
    type: "type"
  };
  var radioButtonsAttributes2 = {
    ...UIElementAttributes2,
    buttons: "buttons"
  };
  var selectAttributes2 = {
    ...UIElementAttributes2,
    searchable: "searchable",
    multiSelect: "multi-select",
    placeholder: "placeholder",
    items: "items"
  };
  var fontFamilySelectAttributes2 = {
    ...selectAttributes2,
    addCustomFontOption: "add-custom-font-option"
  };
  var selectItemAttributes2 = {
    ...UIElementAttributes2,
    text: "text",
    value: "value"
  };
  var checkItemAttributes2 = {
    ...UIElementAttributes2,
    text: "text",
    hint: "hint",
    icon: "icon",
    value: "value"
  };
  var checkButtonsAttributes2 = {
    ...UIElementAttributes2,
    buttons: "buttons"
  };
  var radioItemAttributes2 = {
    ...UIElementAttributes2,
    text: "text",
    hint: "hint",
    icon: "icon",
    value: "value"
  };
  var textAttributes2 = {
    ...UIElementAttributes2,
    placeholder: "placeholder"
  };
  var textAreaAttributes2 = {
    ...UIElementAttributes2,
    resizable: "resizable",
    placeholder: "placeholder"
  };
  var iconAttributes = {
    ...UIElementAttributes2,
    img: "img",
    src: "src",
    title: "title",
    imageClass: "image-class",
    hint: "hint",
    disabled: "disabled",
    isActive: "is-active",
    visibility: "visibility",
    transform: "transform"
  };
  var nestedControlAttributes2 = {
    ...UIElementAttributes2,
    controlId: "control-id"
  };
  var expandableAttributes2 = {
    ...UIElementAttributes2,
    expanded: "expanded"
  };
  var orderableAttributes2 = {
    ...UIElementAttributes2,
    icon: "icon",
    position: "position"
  };
  var orderableItemAttributes = {
    ...UIElementAttributes2
  };
  var orderableIconAttributes2 = {
    ...UIElementAttributes2,
    icon: "icon"
  };
  var UEAttr2 = {
    DEFAULT: UIElementAttributes2,
    BUTTON: buttonAttributes22,
    CHECKBOX: checkBoxAttributes2,
    CHECK_BUTTONS: checkButtonsAttributes2,
    COLOR: UIElementAttributes2,
    COUNTER: counterAttributes2,
    DATEPICKER: datePickerAttributes2,
    LABEL: labelAttributes2,
    MESSAGE: messageAttributes2,
    RADIO_BUTTONS: radioButtonsAttributes2,
    SELECTPICKER: selectAttributes2,
    FONT_FAMILY_SELECT: fontFamilySelectAttributes2,
    SWITCHER: UIElementAttributes2,
    TEXT: textAttributes2,
    TEXTAREA: textAreaAttributes2,
    ICON: iconAttributes,
    CHECK_ITEM: checkItemAttributes2,
    SELECT_ITEM: selectItemAttributes2,
    RADIO_ITEM: radioItemAttributes2,
    NESTED_CONTROL: nestedControlAttributes2,
    EXPANDABLE: expandableAttributes2,
    ORDERABLE: orderableAttributes2,
    ORDERABLE_ITEM: orderableItemAttributes,
    ORDERABLE_ICON: orderableIconAttributes2
  };
  var UIElementType2 = /* @__PURE__ */ ((UIElementType22) => {
    UIElementType22["BUTTON"] = "UE-BUTTON";
    UIElementType22["CHECKBOX"] = "UE-CHECKBOX";
    UIElementType22["CHECK_BUTTONS"] = "UE-CHECK-BUTTONS";
    UIElementType22["COLOR"] = "UE-COLOR";
    UIElementType22["COUNTER"] = "UE-COUNTER";
    UIElementType22["DATEPICKER"] = "UE-DATEPICKER";
    UIElementType22["LABEL"] = "UE-LABEL";
    UIElementType22["MESSAGE"] = "UE-MESSAGE";
    UIElementType22["RADIO_BUTTONS"] = "UE-RADIO-BUTTONS";
    UIElementType22["SELECTPICKER"] = "UE-SELECT";
    UIElementType22["SWITCHER"] = "UE-SWITCHER";
    UIElementType22["TEXT"] = "UE-TEXT";
    UIElementType22["TEXTAREA"] = "UE-TEXTAREA";
    UIElementType22["CHECK_ITEM"] = "UE-CHECK-ITEM";
    UIElementType22["RADIO_ITEM"] = "UE-RADIO-ITEM";
    UIElementType22["SELECT_ITEM"] = "UE-SELECT-ITEM";
    UIElementType22["ICON"] = "UE-ICON";
    UIElementType22["MERGETAGS"] = "UE-MERGETAGS";
    UIElementType22["FONT_FAMILY_SELECT"] = "UE-FONT-FAMILY-SELECT";
    UIElementType22["NESTED_CONTROL"] = "UE-NESTED-CONTROL";
    UIElementType22["EXPANDABLE"] = "UE-EXPANDABLE";
    UIElementType22["EXPANDABLE_HEADER"] = "UE-EXPANDABLE_HEADER";
    UIElementType22["EXPANDABLE_CONTENT"] = "UE-EXPANDABLE_CONTENT";
    UIElementType22["ORDERABLE"] = "UE-ORDERABLE";
    UIElementType22["ORDERABLE_ITEM"] = "UE-ORDERABLE-ITEM";
    UIElementType22["ORDERABLE_ICON"] = "UE-ORDERABLE-ICON";
    return UIElementType22;
  })(UIElementType2 || {});
  var BuiltInControl2 = class {
    /**
     * @description returns map of nodes parent control operates on
     */
    getTargetNodes(root) {
      return [root];
    }
    /**
     * @description returns map of labels used by parent control UI
     */
    getLabels() {
      return void 0;
    }
    /**
     * @description returns custom description for parent modifications
     */
    getModificationDescription() {
      return void 0;
    }
    /**
     * @description returns custom modifications to be included in the parent control patch
     */
    getAdditionalModifications(_root) {
      return void 0;
    }
    /**
     * Determines whether the specified HTML node is visible.
     *
     * @param _node - The HTML node to evaluate for visibility, provided as an immutable object.
     * @return A boolean value indicating whether the node is visible. Returns `true` if the node is visible, otherwise `false`.
     */
    isVisible(_node) {
      return true;
    }
  };
  var BannerBuiltInControl = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const banners = root.querySelectorAll(BlockSelector2.BANNER);
      const banner = root.asElement().hasClass(ESD_BLOCK_BANNER2) ? [root] : [];
      return banners.length ? banners : banner;
    }
  };
  var BannerMarginsBuiltInControl = class extends BannerBuiltInControl {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BANNER"
        /* BLOCK_BANNER */
      ].EXTERNAL_INDENTS;
    }
  };
  var ButtonBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const buttons = root.querySelectorAll(BlockSelector2.BUTTON);
      const button = root.asElement().hasClass(ESD_BLOCK_BUTTON2) ? [root] : [];
      return buttons.length ? buttons : button;
    }
  };
  var ButtonBorderRadiusBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].BORDER_RADIUS;
    }
    getLabels() {
      return void 0;
    }
  };
  var ButtonAlignBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].ALIGNMENT;
    }
  };
  var ButtonBackgroundColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.BACKGROUND_COLOR;
    }
  };
  var ButtonBlockBackgroundColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].BUTTON_BLOCK_BACKGROUND_COLOR;
    }
  };
  var ButtonBorderBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].BORDER;
    }
    getLabels() {
      return void 0;
    }
  };
  var ButtonColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].COLOR;
    }
  };
  var ButtonFitToContainerBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].ADJUST_TO_WIDTH;
    }
  };
  var ButtonFixedHeightBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].FIXED_HEIGHT;
    }
    getLabels() {
      return void 0;
    }
  };
  var ButtonFontFamilyBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].FONT_FAMILY;
    }
  };
  var ButtonHoverBorderColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].HOVERED_BORDER_COLOR;
    }
  };
  var ButtonHoverColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].HOVERED_COLOR;
    }
  };
  var ButtonHoverTextColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].HOVERED_TEXT_COLOR;
    }
  };
  var ButtonMarginsBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].EXTERNAL_INDENTS;
    }
  };
  var ButtonPaddingsBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].INTERNAL_INDENTS;
    }
  };
  var ButtonTextBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].TEXT;
    }
  };
  var ButtonTextSizeBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].FONT_SIZE;
    }
  };
  var ButtonTextStyleAndFontColorBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_BUTTON"
        /* BLOCK_BUTTON */
      ].TEXT_STYLE_AND_COLOR;
    }
    getLabels() {
      return void 0;
    }
  };
  var ButtonVisibilityBuiltInControl2 = class extends ButtonBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.HIDDEN_NODE;
    }
  };
  var ContainerBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const containers = root.querySelectorAll(BlockSelector2.CONTAINER);
      const container = root.asElement().hasClass(ESD_BLOCK_CONTAINER2) ? [root] : [];
      return containers.length ? containers : container;
    }
  };
  var ContainerBackgroundColorBuiltInControl2 = class extends ContainerBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "CONTAINER"
        /* CONTAINER */
      ].BACKGROUND_COLOR;
    }
  };
  var ContainerBackgroundImageBuiltInControl2 = class extends ContainerBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "CONTAINER"
        /* CONTAINER */
      ].IMAGE_CONTAINER;
    }
    getLabels() {
      return void 0;
    }
  };
  var ContainerBorderBuiltInControl2 = class extends ContainerBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "CONTAINER"
        /* CONTAINER */
      ].BORDER_FORM;
    }
    getLabels() {
      return void 0;
    }
  };
  var ContainerVisibilityBuiltInControl2 = class extends ContainerBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "CONTAINER"
        /* CONTAINER */
      ].HIDDEN_NODE;
    }
  };
  var _Control3 = class _Control4 extends BaseValidatedClass2 {
    constructor() {
      super(_Control4.REQUIRED_METHODS, _Control4);
    }
    /**
     * @description Allows to determine if control should be visible or hidden in control panel.
     * Called on every node modification.
     */
    isVisible(_node) {
      return true;
    }
    /**
     * Optional hook called when the control is initially rendered.
     * Use this for setup tasks like attaching event listeners to the control's template elements.
     */
    onRender() {
    }
    /**
     * Optional cleanup hook called when the control is being destroyed.
     * Use this to remove event listeners or perform other cleanup tasks.
     */
    onDestroy() {
    }
    /**
     * Gets the unique identifier for this UI control type.
     * This ID is used for registration and referencing.
     * @returns A unique string ID.
     */
    getId() {
      throw new Error("Method getId() must be implemented by the subclass");
    }
    /**
     * Gets the HTML template string that defines the structure of this UI control,
     * typically containing one or more UI elements (e.g., `<UE-TEXT>`, `<UE-BUTTON>`).
     * @returns An HTML string.
     */
    getTemplate() {
      throw new Error("Method getTemplate() must be implemented by the subclass");
    }
    /**
     * Hook called whenever the underlying template node associated with this control's context
     * (e.g., the selected block's  HTMLnode) is updated.
     * Implement this to react to changes in the block/structure and update the control's UI elements accordingly.
     * @param node - The updated immutable HTML node representing the control's context.
     */
    onTemplateNodeUpdated(_node) {
    }
    /**
     * Lifecycle hook called when any part of the document template has changed.
     * This can be frequent; use cautiously for performance-sensitive operations.
     * @param _node - The immutable HTML node representing current node instance
     */
    onDocumentChanged(_node) {
    }
  };
  _Control3.REQUIRED_METHODS = ["getId", "getTemplate"];
  var Control2 = _Control3;
  var HtmlBuiltInControl = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const htmlBlocks = root.querySelectorAll(BlockSelector2.HTML);
      const html = root.asElement().hasClass(ESD_BLOCK_HTML2) ? [root] : [];
      return htmlBlocks.length ? htmlBlocks : html;
    }
  };
  var HtmlMarginsBuiltInControl = class extends HtmlBuiltInControl {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_HTML"
        /* BLOCK_HTML */
      ].EXTERNAL_INDENTS;
    }
  };
  var ImageBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const images = root.querySelectorAll(BlockSelector2.IMAGE);
      const image = root.asElement().hasClass(ESD_BLOCK_IMAGE2) ? [root] : [];
      return images.length ? images : image;
    }
  };
  var ImageMarginsBuiltInControl = class extends ImageBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_IMAGE"
        /* BLOCK_IMAGE */
      ].EXTERNAL_INDENTS;
    }
  };
  var ImageSizeBuiltInControl2 = class extends ImageBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_IMAGE"
        /* BLOCK_IMAGE */
      ].SIZE;
    }
  };
  var ImageVisibilityBuiltInControl2 = class extends ImageBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.HIDDEN_NODE;
    }
  };
  var MenuBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const menus = root.querySelectorAll(BlockSelector2.MENU);
      const menu = root.asElement().hasClass(ESD_BLOCK_MENU2) ? [root] : [];
      return menus.length ? menus : menu;
    }
  };
  var MenuFontFamilyBuiltInControl2 = class extends MenuBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_MENU"
        /* BLOCK_MENU */
      ].FONT_FAMILY;
    }
  };
  var MenuMarginsBuiltInControl = class extends MenuBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_MENU"
        /* BLOCK_MENU */
      ].EXTERNAL_INDENTS;
    }
  };
  var _SettingsPanelRegistry3 = class _SettingsPanelRegistry4 extends BaseValidatedClass2 {
    constructor() {
      super(_SettingsPanelRegistry4.REQUIRED_METHODS, _SettingsPanelRegistry4);
    }
    registerBlockControls(_blockControlsMap) {
      throw new Error("Method registerBlockControls() must be implemented by the subclass");
    }
  };
  _SettingsPanelRegistry3.REQUIRED_METHODS = ["registerBlockControls"];
  var SettingsPanelRegistry2 = _SettingsPanelRegistry3;
  var SettingsPanelTab2 = class {
    constructor(tabId, controlsIds) {
      this.tabId = tabId;
      this.controlsIds = controlsIds;
    }
    getTabId() {
      return this.tabId;
    }
    getLabel() {
      return this.label;
    }
    getControlsIds() {
      return this.controlsIds;
    }
    withLabel(label) {
      this.label = label;
      return this;
    }
    addControl(controlId, position) {
      if (position < 0) {
        this.controlsIds.unshift(controlId);
      } else if (position > this.controlsIds.length) {
        this.controlsIds.push(controlId);
      } else {
        this.controlsIds.splice(position, 0, controlId);
      }
      return this;
    }
    deleteControl(controlId) {
      const index = this.controlsIds.indexOf(controlId);
      if (index !== -1) {
        this.controlsIds.splice(index, 1);
      }
    }
  };
  var SocialBuiltInControl = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const socials = root.querySelectorAll(BlockSelector2.SOCIAL);
      const social = root.asElement().hasClass(ESD_BLOCK_SOCIAL2) ? [root] : [];
      return socials.length ? socials : social;
    }
  };
  var SocialMarginsBuiltInControl = class extends SocialBuiltInControl {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_SOCIAL"
        /* BLOCK_SOCIAL */
      ].EXTERNAL_INDENTS;
    }
  };
  var SpacerBuildInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const spacers = root.querySelectorAll(BlockSelector2.SPACER);
      const spacer = root.asElement().hasClass(ESD_BLOCK_SPACER2) ? [root] : [];
      return spacers.length ? spacers : spacer;
    }
  };
  var SpacerBackgroundColorBuiltInControl2 = class extends SpacerBuildInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_SPACER"
        /* BLOCK_SPACER */
      ].BACKGROUND_COLOR;
    }
  };
  var SpacerMarginsBuiltInControl = class extends SpacerBuildInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_SPACER"
        /* BLOCK_SPACER */
      ].EXTERNAL_INDENTS;
    }
  };
  var StructureBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const structures = root.querySelectorAll(BlockSelector2.STRUCTURE);
      const structure = root.asElement().hasClass(ESD_BLOCK_STRUCTURE2) ? [root] : [];
      return structures.length ? structures : structure;
    }
  };
  var StructureAdaptBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "STRUCTURE"
        /* STRUCTURE */
      ].RESPONSIVE_STRUCTURE;
    }
    getLabels() {
      return void 0;
    }
  };
  var StructureBackgroundColorBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "STRUCTURE"
        /* STRUCTURE */
      ].BACKGROUND_COLOR;
    }
  };
  var StructureBackgroundImageBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "STRUCTURE"
        /* STRUCTURE */
      ].IMAGE_CONTAINER;
    }
    getLabels() {
      return void 0;
    }
  };
  var StructureBorderBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "STRUCTURE"
        /* STRUCTURE */
      ].BORDER_FORM;
    }
    getLabels() {
      return void 0;
    }
  };
  var StructureMarginsBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "STRUCTURE"
        /* STRUCTURE */
      ].EXTERNAL_INDENTS;
    }
  };
  var StructurePaddingsBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.STRUCTURE_INTERNAL_INDENTS;
    }
  };
  var StructureVisibilityBuiltInControl2 = class extends StructureBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.HIDDEN_NODE;
    }
  };
  var TextBuiltInControl2 = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const texts = root.querySelectorAll(BlockSelector2.TEXT);
      const text = root.asElement().hasClass(ESD_BLOCK_TEXT2) ? [root] : [];
      return texts.length ? texts : text;
    }
  };
  var TextAlignBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.TEXT_ALIGN;
    }
  };
  var TextBlockBackgroundBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_TEXT"
        /* BLOCK_TEXT */
      ].TEXT_BLOCK_BACKGROUND_COLOR;
    }
  };
  var TextColorBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.TEXT_COLOR;
    }
  };
  var TextFixedHeightBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_TEXT"
        /* BLOCK_TEXT */
      ].FIXED_HEIGHT;
    }
    getLabels() {
      return void 0;
    }
  };
  var TextFontFamilyBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_TEXT"
        /* BLOCK_TEXT */
      ].FONT_FAMILY;
    }
  };
  var TextLineSpacingBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.TEXT_LINE_SPACING;
    }
  };
  var TextLinkColorBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_TEXT"
        /* BLOCK_TEXT */
      ].LINKS_COLOR;
    }
  };
  var TextPaddingsBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_TEXT"
        /* BLOCK_TEXT */
      ].INTERNAL_INDENTS;
    }
  };
  var TextSizeBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.TEXT_SIZE;
    }
  };
  var TextStyleBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.TEXT_STYLE;
    }
  };
  var TextVisibilityBuiltInControl2 = class extends TextBuiltInControl2 {
    getParentControlId() {
      return BuiltInControlTypes2.GENERAL.HIDDEN_NODE;
    }
  };
  var VideoBuiltInControl = class extends BuiltInControl2 {
    getTargetNodes(root) {
      const videos = root.querySelectorAll(BlockSelector2.VIDEO);
      const video = root.asElement().hasClass(ESD_BLOCK_VIDEO2) ? [root] : [];
      return videos.length ? videos : video;
    }
  };
  var VideoMarginsBuiltInControl = class extends VideoBuiltInControl {
    getParentControlId() {
      return BuiltInControlTypes2[
        "BLOCK_VIDEO"
        /* BLOCK_VIDEO */
      ].EXTERNAL_INDENTS;
    }
  };
  var Extension2 = class {
    constructor(i18n, styles, uiElements = [], uiElementTagRegistry, controls2 = [], settingsPanelRegistry, contextActions = [], blocks = [], externalSmartElementsLibrary2, externalImageLibrary, previewStyles2, externalAiAssistant2, externalDisplayConditionsLibrary, externalVideoLibrary, blocksPanel, iconsRegistry, externalImageLibraryTab) {
      this.uiElements = [];
      this.controls = [];
      this.contextActions = [];
      this.blocks = [];
      this.i18n = i18n;
      this.styles = styles;
      this.previewStyles = previewStyles2;
      this.uiElements = uiElements;
      this.uiElementTagRegistry = uiElementTagRegistry;
      this.controls = controls2;
      this.settingsPanelRegistry = settingsPanelRegistry;
      this.contextActions = contextActions;
      this.blocks = blocks;
      this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
      this.externalImageLibrary = externalImageLibrary;
      this.externalImageLibraryTab = externalImageLibraryTab;
      this.externalAiAssistant = externalAiAssistant2;
      this.externalDisplayConditionsLibrary = externalDisplayConditionsLibrary;
      this.externalVideoLibrary = externalVideoLibrary;
      this.blocksPanel = blocksPanel;
      this.iconsRegistry = iconsRegistry;
      this.id = Math.random().toString(36).substring(2);
    }
    getI18n() {
      return this.i18n;
    }
    getStyles() {
      return this.styles;
    }
    getPreviewStyles() {
      return this.previewStyles;
    }
    getUiElements() {
      return this.uiElements;
    }
    getUiElementTagRegistry() {
      return this.uiElementTagRegistry;
    }
    getControls() {
      return this.controls;
    }
    getSettingsPanelRegistry() {
      return this.settingsPanelRegistry;
    }
    getContextActions() {
      return this.contextActions;
    }
    getBlocks() {
      return this.blocks;
    }
    getId() {
      return this.id;
    }
    getExternalSmartElementsLibrary() {
      return this.externalSmartElementsLibrary;
    }
    getExternalImageLibrary() {
      return this.externalImageLibrary;
    }
    getExternalImageLibraryTab() {
      return this.externalImageLibraryTab;
    }
    getExternalAiAssistant() {
      return this.externalAiAssistant;
    }
    getExternalDisplayConditionsLibrary() {
      return this.externalDisplayConditionsLibrary;
    }
    getExternalVideoLibrary() {
      return this.externalVideoLibrary;
    }
    getBlocksPanel() {
      return this.blocksPanel;
    }
    getIconsRegistry() {
      return this.iconsRegistry;
    }
  };
  var ExtensionBuilder2 = class {
    constructor() {
      this.styles = [];
      this.uiElements = [];
      this.controls = [];
      this.contextActions = [];
      this.blocks = [];
    }
    withLocalization(i18n) {
      this.i18n = i18n;
      return this;
    }
    /**
     * @deprecated Use addStyles() instead. This method will be removed in a future version.
     */
    withStyles(styles) {
      this.styles = [styles];
      return this;
    }
    addStyles(styles) {
      this.styles.push(styles);
      return this;
    }
    /**
     * @description defines custom developer styles to use inside the editor document preview
     */
    withPreviewStyles(styles) {
      this.previewStyles = styles;
      return this;
    }
    addContextAction(contextAction) {
      this.contextActions.push(contextAction);
      return this;
    }
    addUiElement(uiElement) {
      this.uiElements.push(uiElement);
      return this;
    }
    withUiElementTagRegistry(uiElementTagRegistry) {
      this.uiElementTagRegistry = uiElementTagRegistry;
      return this;
    }
    addControl(control) {
      this.controls.push(control);
      return this;
    }
    withSettingsPanelRegistry(settingsPanelRegistry) {
      this.settingsPanelRegistry = settingsPanelRegistry;
      return this;
    }
    withExternalSmartElementsLibrary(externalSmartElementsLibrary2) {
      this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
      return this;
    }
    withExternalImageLibrary(externalImageLibrary) {
      this.externalImageLibrary = externalImageLibrary;
      return this;
    }
    withExternalImageLibraryTab(externalImageLibraryTab) {
      this.externalImageLibraryTab = externalImageLibraryTab;
      return this;
    }
    withExternalAiAssistant(externalAiAssistant2) {
      this.externalAiAssistant = externalAiAssistant2;
      return this;
    }
    withExternalDisplayCondition(externalDisplayCondition) {
      this.externalDisplayConditionsLibrary = externalDisplayCondition;
      return this;
    }
    withExternalVideosLibrary(externalVideoLibrary) {
      this.externalVideoLibrary = externalVideoLibrary;
      return this;
    }
    withBlocksPanel(blocksPanel) {
      this.blocksPanel = blocksPanel;
      return this;
    }
    addBlock(block) {
      this.blocks.push(block);
      return this;
    }
    withIconsRegistry(iconsRegistry) {
      this.iconsRegistry = iconsRegistry;
      return this;
    }
    build() {
      return new Extension2(
        this.i18n,
        (this.styles || []).map((style) => style.trim()).join("\n"),
        this.uiElements,
        this.uiElementTagRegistry,
        this.controls,
        this.settingsPanelRegistry,
        this.contextActions,
        this.blocks,
        this.externalSmartElementsLibrary,
        this.externalImageLibrary,
        this.previewStyles,
        this.externalAiAssistant,
        this.externalDisplayConditionsLibrary,
        this.externalVideoLibrary,
        this.blocksPanel,
        this.iconsRegistry,
        this.externalImageLibraryTab
      );
    }
  };
  var _ExternalAiAssistant3 = class _ExternalAiAssistant4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalAiAssistant4.REQUIRED_METHODS, _ExternalAiAssistant4);
    }
    openAiAssistant({ value, onDataSelectCallback, onCancelCallback, type }) {
      throw new Error("Method openAiAssistant() must be implemented by the subclass");
    }
  };
  _ExternalAiAssistant3.REQUIRED_METHODS = ["openAiAssistant"];
  var ExternalAiAssistant2 = _ExternalAiAssistant3;
  var _ExternalDisplayConditionsLibrary3 = class _ExternalDisplayConditionsLibrary4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalDisplayConditionsLibrary4.REQUIRED_METHODS, _ExternalDisplayConditionsLibrary4);
    }
    /**
     * Retrieves the name of the category.
     *
     * @return {string} The name of the category.
     */
    getCategoryName() {
      throw new Error("Method getCategoryName() must be implemented by the subclass");
    }
    /**
     * Opens a popup dialog for creating or updating a display condition.
     *
     * @param {DisplayCondition} currentCondition - The currently selected display condition to edit.
     * @param {ExternalDisplayConditionSelectedCB} successCallback - Callback executed with the updated or newly created condition upon success.
     * @param {() => void} cancelCallback - Callback executed when the dialog is closed without making changes.
     */
    openExternalDisplayConditionsDialog(_currentCondition, _successCallback, _cancelCallback) {
      throw new Error("Method openExternalDisplayConditionsDialog() must be implemented by the subclass");
    }
    /**
     * Determines if the context action associated with this library is enabled.
     *
     * @returns {boolean} `true` if the context action is enabled, otherwise `false`.
     */
    getIsContextActionEnabled() {
      throw new Error("Method getIsContextActionEnabled() must be implemented by the subclass");
    }
    /**
     * Retrieves the index of the context action associated with this library.
     * The index represents the position/order of the action in the UI.
     *
     * @returns {number} The index of the context action.
     */
    getContextActionIndex() {
      throw new Error("Method getContextActionIndex() must be implemented by the subclass");
    }
  };
  _ExternalDisplayConditionsLibrary3.REQUIRED_METHODS = ["getCategoryName", "openExternalDisplayConditionsDialog"];
  var ExternalDisplayConditionsLibrary = _ExternalDisplayConditionsLibrary3;
  var _ExternalImageLibrary3 = class _ExternalImageLibrary4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalImageLibrary4.REQUIRED_METHODS, _ExternalImageLibrary4);
    }
    openImageLibrary(_currentImageUrl, _onImageSelectCallback, _onCancelCallback) {
      throw new Error("Method openImageLibrary() must be implemented by the subclass");
    }
  };
  _ExternalImageLibrary3.REQUIRED_METHODS = ["openImageLibrary"];
  var ExternalImageLibrary = _ExternalImageLibrary3;
  var _ExternalImageLibraryTab3 = class _ExternalImageLibraryTab4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalImageLibraryTab4.REQUIRED_METHODS, _ExternalImageLibraryTab4);
    }
    /**
     * @description Returns the translated name/label for the tab
     * @returns Translation key or text to display as tab label
     */
    getName() {
      throw new Error("Method getName() must be implemented by the subclass");
    }
    /**
     * @description Opens the external image library tab and provides a container for rendering
     * @param _container - DOM element container where the external library UI should be rendered
     * @param _onImageSelectCallback - Callback to invoke when an image is selected
     */
    openImageLibraryTab(_container, _onImageSelectCallback) {
      throw new Error("Method openImageLibraryTab() must be implemented by the subclass");
    }
  };
  _ExternalImageLibraryTab3.REQUIRED_METHODS = ["getName", "openImageLibraryTab"];
  var ExternalImageLibraryTab2 = _ExternalImageLibraryTab3;
  var _ExternalSmartElementsLibrary3 = class _ExternalSmartElementsLibrary4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalSmartElementsLibrary4.REQUIRED_METHODS, _ExternalSmartElementsLibrary4);
    }
    openSmartElementsLibrary(_onDataSelectCallback, _onCancelCallback) {
      throw new Error("Method openSmartElementsLibrary() must be implemented by the subclass");
    }
  };
  _ExternalSmartElementsLibrary3.REQUIRED_METHODS = ["openSmartElementsLibrary"];
  var ExternalSmartElementsLibrary2 = _ExternalSmartElementsLibrary3;
  var _ExternalVideosLibrary3 = class _ExternalVideosLibrary4 extends BaseValidatedClass2 {
    constructor() {
      super(_ExternalVideosLibrary4.REQUIRED_METHODS, _ExternalVideosLibrary4);
    }
    openExternalVideosLibraryDialog(_currentValue, _successCallback, _cancelCallback) {
      throw new Error("Method openExternalVideosLibraryDialog() must be implemented by the subclass");
    }
  };
  _ExternalVideosLibrary3.REQUIRED_METHODS = ["openExternalVideosLibraryDialog"];
  var ExternalVideosLibrary = _ExternalVideosLibrary3;
  var _IconsRegistry3 = class _IconsRegistry4 extends BaseValidatedClass2 {
    constructor() {
      super(_IconsRegistry4.REQUIRED_METHODS, _IconsRegistry4);
    }
    registerIconsSvg(_iconsMap) {
      throw new Error("Method registerIconsSvg() must be implemented by the subclass");
    }
  };
  _IconsRegistry3.REQUIRED_METHODS = ["registerIconsSvg"];
  var IconsRegistry2 = _IconsRegistry3;
  var ModificationDescription2 = class {
    constructor(key) {
      this.key = key;
    }
    withParams(params) {
      this.params = params;
      return this;
    }
    getValue() {
      return {
        key: this.key,
        params: this.params
      };
    }
  };
  var _UIElement3 = class _UIElement4 extends BaseValidatedClass2 {
    constructor() {
      super(_UIElement4.REQUIRED_METHODS, _UIElement4);
    }
    /**
     * Called when the UI element should render its content into the provided container.
     * @param container - The HTMLElement where the UI element should be rendered.
     */
    onRender(_container) {
      throw new Error("Method onRender() must be implemented by the subclass");
    }
    /**
     * Optional cleanup hook called when the UI element is being destroyed.
     * Use this to remove event listeners or perform other cleanup tasks.
     */
    onDestroy() {
    }
    /**
     * Optional method to get the current value of the UI element.
     * Implement this if the element manages a state or value (e.g., input fields).
     * @returns The current value of the element.
     */
    getValue() {
    }
    /**
     * Optional method to set the value of the UI element.
     * Implement this if the element manages a state or value and needs to be updated externally.
     * @param value - The new value to set.
     */
    setValue(_value) {
    }
    /**
     * @description Optional hook called when one of the element's supported attributes ({@link UEAttr}) gets updated externally.
     * Implement this to react to attribute changes (e.g., visibility, disabled state).
     * @param name - The name of the attribute that was updated.
     * @param value - The new value of the attribute.
     */
    onAttributeUpdated(_name, _value) {
    }
    /**
     * Gets the unique identifier for this UI element type.
     * This ID is used for registration and referencing within controls.
     * @returns A unique string ID.
     */
    getId() {
      throw new Error("Method getId() must be implemented by the subclass");
    }
    /**
     * Gets the HTML template string that defines the structure of this UI element.
     * @returns An HTML string.
     */
    getTemplate() {
      throw new Error("Method getTemplate() must be implemented by the subclass");
    }
  };
  _UIElement3.REQUIRED_METHODS = ["onRender", "getId", "getTemplate"];
  var UIElement2 = _UIElement3;
  var _UIElementTagRegistry3 = class _UIElementTagRegistry4 extends BaseValidatedClass2 {
    constructor() {
      super(_UIElementTagRegistry4.REQUIRED_METHODS, _UIElementTagRegistry4);
    }
    registerUiElements(_uiElementsTagsMap) {
      throw new Error("Method registerUiElements() must be implemented by the subclass");
    }
  };
  _UIElementTagRegistry3.REQUIRED_METHODS = ["registerUiElements"];
  var UIElementTagRegistry2 = _UIElementTagRegistry3;
  var OrderableItemIconPosition2 = /* @__PURE__ */ ((OrderableItemIconPosition22) => {
    OrderableItemIconPosition22["TOP"] = "TOP";
    OrderableItemIconPosition22["LEFT"] = "LEFT";
    return OrderableItemIconPosition22;
  })(OrderableItemIconPosition2 || {});
  return cjs;
}
var cjsExports = /* @__PURE__ */ requireCjs();
const BLOCK_ID$8 = "e2e-cjs-block";
class E2eCjsBlock extends cjsExports.Block {
  getId() {
    return BLOCK_ID$8;
  }
  getIcon() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
  }
  getName() {
    return this.api.translate("E2E CJS Block");
  }
  getDescription() {
    return this.api.translate("E2E CJS Library Build Block");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<td class="esd-${BLOCK_ID$8}"><h1>E2E CJS</h1></td>`;
  }
}
const cjsLib = new cjsExports.ExtensionBuilder().addBlock(E2eCjsBlock).build();
const EMPTY_CONTAINER_ID = "empty-container-extension";
const CONTAINER_ID = "container-extension";
class EmptyContainerExtension extends Block {
  getId() {
    return EMPTY_CONTAINER_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Empty Container Extension");
  }
  getDescription() {
    return this.api.translate("Empty Container Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    return `<td align="left" width="560" class="esd-container-frame">
              <h3>Empty Container Extension</h3>
              <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td align="center" class="esd-empty-container" style="display: none"></td>
                  </tr>
                </tbody>
              </table>
            </td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.CONTAINER;
  }
  allowInnerBlocksSelection() {
    return true;
  }
}
let ContainerExtension$1 = class ContainerExtension extends Block {
  getId() {
    return CONTAINER_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Container Extension");
  }
  getDescription() {
    return this.api.translate("Container Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    const { CONTAINER: CONTAINER2, BLOCK_TEXT } = BlockType;
    return `<${CONTAINER2}><${BLOCK_TEXT}><p>Hello world!</p></${BLOCK_TEXT}></${CONTAINER2}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.CONTAINER;
  }
  allowInnerBlocksSelection() {
    return false;
  }
};
const containerExtension = new ExtensionBuilder().addBlock(EmptyContainerExtension).addBlock(ContainerExtension$1).build();
const SINGLE_CONTAINER$1 = "single-container";
const CONTAINERS_ROW$1 = "containers-row";
const CONTAINERS_ROW2$1 = "containers-row2";
const CONTAINERS_ROW3 = "containers-row3";
const CONTAINERS_COLUMN$1 = "containers-column";
let BaseBlockExtension$3 = class BaseBlockExtension extends Block {
  constructor(id, name, icon2) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon2;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  _getImageBlock(url) {
    const tag = BlockType.BLOCK_IMAGE;
    const attrs = BlockAttr.BLOCK_IMAGE;
    return `<${tag} ${attrs.src}="${url}" ${attrs.alt}="Image block" ${attrs.href}="https://google.com"></${tag}>`;
  }
  _getTextBlock(content) {
    const tag = BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = BlockType.BLOCK_BUTTON;
    const attrs = BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.CONTAINER;
    const attrs = BlockAttr.CONTAINER;
    return `<${tag} ${`${attrs.widthPercent}="${width}"`}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
};
let SingleContainer$1 = class SingleContainer extends BaseBlockExtension$3 {
  constructor() {
    super(SINGLE_CONTAINER$1, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"))}
            </td>`;
  }
};
let ContainersRow$1 = class ContainersRow extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_ROW$1, "Containers row with custom content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content</h3>
              ${this._getContainer("<tr><td>custom html <b>1</b></td></tr>", 30)}
              ${this._getContainer("<tr><td>custom html <b>2</b></td></tr>", 65, 4)}
            </td>`;
  }
};
let ContainersRow2$1 = class ContainersRow2 extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_ROW2$1, "Containers row with standard content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with standard content</h3>
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 30)}
              ${this._getContainer(this._getImageBlock("https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"), 65, 4)}
            </td>`;
  }
};
class ContainersRow3 extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_ROW3, "Containers row with custom content in between", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content in between</h3>
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 30)}
              <span class="es-left" style="font-weight: bold; color: red; border: 1px solid green; padding: 5px; margin-left: 4%;">Custom Content</span>
              ${this._getContainer(this._getImageBlock("https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"), 30, 4)}
            </td>`;
  }
}
let ContainersColumn$1 = class ContainersColumn extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_COLUMN$1, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 100, 0, 20)}
            </td>`;
  }
};
const containerLayouts = new ExtensionBuilder().addBlock(SingleContainer$1).addBlock(ContainersRow$1).addBlock(ContainersRow2$1).addBlock(ContainersRow3).addBlock(ContainersColumn$1).build();
const BLOCK_ID$7 = "test-block-extension";
class BlockExtensionCustomBlockBasic extends Block {
  getId() {
    return BLOCK_ID$7;
  }
  getIcon() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
  }
  getName() {
    return this.api.translate("Test Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  getTemplate() {
    return `<td><h1>Test block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  onCopy(modifier) {
    modifier.setAttribute("data-copied", "true");
  }
}
const customBlockBasic = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockBasic).build();
const BLOCK_ID$6 = "test-context-action-block-extension";
const CONTEXT_ACTION_ID$1 = "test-block-context-action";
let TestBlockContextAction$1 = class TestBlockContextAction extends ContextAction {
  getId() {
    return CONTEXT_ACTION_ID$1;
  }
  getLabel() {
    return this.api.translate("Test context action");
  }
  onClick(node) {
    console.log(`Test context action clicked for block: ${node.getOuterHTML()}`);
  }
  getIcon() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
  }
};
class BlockExtensionCustomBlockWithCustomContextAction extends Block {
  getId() {
    return BLOCK_ID$6;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Context Action Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Context Action Block Extension");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  getTemplate() {
    return "<td><h1>Test Context Action Block Extension</h1></td>";
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getContextActionsIds() {
    return [ContextActionType.REMOVE, CONTEXT_ACTION_ID$1];
  }
}
const customBlockWithCustomContextAction = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomContextAction).addContextAction(TestBlockContextAction$1).build();
const BLOCK_ID$5 = "test-custom-renderer-block-extension";
let CustomRenderer$3 = class CustomRenderer extends BlockRenderer {
  getPreviewInnerHtml(node) {
    return "<h1>Custom content</h1>";
  }
};
class BlockExtensionCustomBlockWithCustomRenderer extends Block {
  getId() {
    return BLOCK_ID$5;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Custom Renderer Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Custom Renderer Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer$3;
  }
  getTemplate() {
    return `<td><h1>Test custom renderer block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customBlockWithCustomRenderer = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomRenderer).build();
const TEST_STRUCTURE_ID = "test-structure";
const CONTROL_PRODUCT_BLOCK_CARD_ORIENTATION_ID = "product-block-card-orientation-control";
const ORIENTATION_UI_ELEMENT_NAME = "cardOrientation";
class CardOrientationControl extends Control {
  constructor() {
    super(...arguments);
    __privateAdd(this, _activePosition);
  }
  getId() {
    return CONTROL_PRODUCT_BLOCK_CARD_ORIENTATION_ID;
  }
  getTemplate() {
    return `
            <div class="container two-columns">
                <${UIElementType.LABEL} ${UEAttr.LABEL.text}="${this.api.translate("Orientation")}:"></${UIElementType.LABEL}>
                
                <${UIElementType.RADIO_BUTTONS} ${UEAttr.RADIO_BUTTONS.name}="${ORIENTATION_UI_ELEMENT_NAME}">
                    <${UIElementType.RADIO_ITEM} 
                        ${UEAttr.RADIO_ITEM.hint}="${this.api.translate("Horizontal")}" 
                        ${UEAttr.RADIO_ITEM.text}="${this.api.translate("Horizontal")}"
                        ${UEAttr.RADIO_ITEM.value}="horizontal">
                    </${UIElementType.RADIO_ITEM}>  
                    
                    <${UIElementType.RADIO_ITEM} 
                        ${UEAttr.RADIO_ITEM.hint}="${this.api.translate("Vertical")}" 
                        ${UEAttr.RADIO_ITEM.text}="${this.api.translate("Vertical")}" 
                        ${UEAttr.RADIO_ITEM.value}="vertical">
                    </${UIElementType.RADIO_ITEM}>                
                </${UIElementType.RADIO_BUTTONS}>
            </div>`;
  }
  onRender() {
    this.api.onValueChanged(ORIENTATION_UI_ELEMENT_NAME, (newValue, _) => {
      __privateSet(this, _activePosition, newValue);
      if (newValue === "horizontal") {
        this.api.getDocumentModifier().modifyHtml(this.node).multiRowStructureModifier().updateLayoutWithContent(
          [
            "40%",
            "60%"
          ],
          [
            '<div class="changed">Content1</div>',
            '<div class="changed">Content2</div>'
          ]
        ).apply(new ModificationDescription("Updated layout"));
      }
    });
  }
  onTemplateNodeUpdated(node) {
    this.node = node;
    this.api.updateValues({
      [ORIENTATION_UI_ELEMENT_NAME]: __privateGet(this, _activePosition) ?? "vertical"
    });
  }
}
_activePosition = new WeakMap();
class CustomBlock extends Block {
  getId() {
    return TEST_STRUCTURE_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test structure");
  }
  getDescription() {
    return this.api.translate("Test structure description");
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <${BlockType.STRUCTURE}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="100">
                    <${BlockType.BLOCK_BUTTON}>
                        BUY
                    </${BlockType.BLOCK_BUTTON}>
                    <${BlockType.BLOCK_TEXT}>
                         <p>Lorem ipsum dolor sit amet</p>
                     </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </${BlockType.STRUCTURE}>
        `;
  }
}
let PanelRegistry$E = class PanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[TEST_STRUCTURE_ID] = [
      new SettingsPanelTab(
        "Test tab",
        [
          CONTROL_PRODUCT_BLOCK_CARD_ORIENTATION_ID
        ]
      ).withLabel(this.api.translate("Test tab"))
    ];
  }
};
const extensionCustomBlockMultiRowModifier = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$E).addBlock(CustomBlock).addControl(CardOrientationControl).build();
const STRUCTURE_ID$1 = "custom-renderer-structure";
const IMG_BLOCK_ID = "custom-renderer-img-block";
const IMG_SIZE_ID = "extended-img-size-control";
const FONT_FAMILY_ID = "extended-font-family-control";
const TEXT_COLOR_ID = "extended-text-color-control";
let CustomRenderer$2 = class CustomRenderer2 extends BlockRenderer {
  getPreviewInnerHtml(node) {
    return node.getInnerHTML();
  }
};
let CustomRendererStructureExtension$1 = class CustomRendererStructureExtension extends Block {
  getId() {
    return STRUCTURE_ID$1;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure with Custom Renderer Extension");
  }
  getDescription() {
    return this.api.translate("Structure with Custom Renderer Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer$2;
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    const { STRUCTURE, CONTAINER: CONTAINER2, BLOCK_TEXT, BLOCK_IMAGE } = BlockType;
    return `<${STRUCTURE}>
                <${CONTAINER2}>
                    <${BLOCK_TEXT}><h2>This H2 DOM node is not a part of the model nor is the IMG below</h2></${BLOCK_TEXT}>
                    <${BLOCK_IMAGE} src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"></${BLOCK_IMAGE}>
                </${CONTAINER2}>                
            </${STRUCTURE}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
};
class CustomRendererImageBlockExtension extends Block {
  getId() {
    return IMG_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Image Block with Custom Renderer Extension");
  }
  getDescription() {
    return this.api.translate("Image Block with Custom Renderer Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer$2;
  }
  getTemplate() {
    const { BLOCK_IMAGE } = BlockType;
    return `<${BLOCK_IMAGE} src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"></${BLOCK_IMAGE}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
let ExtendedImageSizeControl$1 = class ExtendedImageSizeControl extends ImageSizeBuiltInControl {
  getId() {
    return IMG_SIZE_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended image size control") : this.api.translate("Extended image size control on mobile")
    };
  }
};
class ExtendedFontFamilyControl extends TextFontFamilyBuiltInControl {
  getId() {
    return FONT_FAMILY_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
  getModificationDescription() {
    return new ModificationDescription("Extended font family control modification.");
  }
}
const TEXT_FIXED_HEIGHT_CONTROL_ID$1 = "extendedTextFixedHeight";
let TextFixedHeightControl$2 = class TextFixedHeightControl extends TextFixedHeightBuiltInControl {
  getId() {
    return TEXT_FIXED_HEIGHT_CONTROL_ID$1;
  }
  getLabels() {
    return {
      title: "Fixed text height",
      counterTitle: "Height",
      alignTitle: "Alignment"
    };
  }
};
let ExtendedTextColorControl$1 = class ExtendedTextColorControl extends TextColorBuiltInControl {
  getId() {
    return TEXT_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended text color control"
    };
  }
};
let PanelRegistry$D = class PanelRegistry4 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[STRUCTURE_ID$1] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          IMG_SIZE_ID,
          FONT_FAMILY_ID,
          TEXT_FIXED_HEIGHT_CONTROL_ID$1,
          TEXT_COLOR_ID
        ]
      )
    ];
    controls2[IMG_BLOCK_ID] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          IMG_SIZE_ID
        ]
      )
    ];
  }
};
const customRendererControls = new ExtensionBuilder().addBlock(CustomRendererStructureExtension$1).addBlock(CustomRendererImageBlockExtension).addControl(ExtendedImageSizeControl$1).addControl(ExtendedFontFamilyControl).addControl(TextFixedHeightControl$2).addControl(ExtendedTextColorControl$1).withSettingsPanelRegistry(PanelRegistry$D).build();
const STRUCTURE_ID = "custom-renderer-structure";
const TEXT_BLOCK_ID = "custom-renderer-text-block";
let CustomRenderer$1 = class CustomRenderer3 extends BlockRenderer {
  getPreviewInnerHtml(node) {
    return node.getInnerHTML();
  }
};
class CustomRendererStructureExtension2 extends Block {
  getId() {
    return STRUCTURE_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure with Custom Renderer Extension");
  }
  getDescription() {
    return this.api.translate("Structure with Custom Renderer Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer$1;
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    const { STRUCTURE, CONTAINER: CONTAINER2, BLOCK_TEXT, BLOCK_BUTTON } = BlockType;
    return `<${STRUCTURE}>
                <${CONTAINER2}>
                    <${BLOCK_TEXT}><p>Don't edit me</p></${BLOCK_TEXT}>
                    <${BLOCK_BUTTON}>Don't push me</${BLOCK_BUTTON}>
                </${CONTAINER2}>                
            </${STRUCTURE}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
}
class CustomRendererTextBlockExtension extends Block {
  getId() {
    return TEXT_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Text Block with Custom Renderer Extension");
  }
  getDescription() {
    return this.api.translate("Text Block with Custom Renderer Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer$1;
  }
  getTemplate() {
    const { BLOCK_TEXT } = BlockType;
    return `<${BLOCK_TEXT}><p>Don't edit me</p></${BLOCK_TEXT}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customRendererRestrictions = new ExtensionBuilder().addBlock(CustomRendererStructureExtension2).addBlock(CustomRendererTextBlockExtension).build();
const BLOCK_ID$4 = "test-deprecated-custom-renderer-block-extension";
class DeprecatedCustomRenderer extends BlockRenderer {
  getPreviewHtml(node) {
    return "<td><h1>Deprecated custom content</h1></td>";
  }
}
class BlockExtensionWithDeprecatedCustomRenderer extends Block {
  getId() {
    return BLOCK_ID$4;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Deprecated Custom Renderer Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Deprecated Custom Renderer Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return DeprecatedCustomRenderer;
  }
  getTemplate() {
    return `<td><h1>Test custom renderer block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customBlockWithDeprecatedCustomRenderer = new ExtensionBuilder().addBlock(BlockExtensionWithDeprecatedCustomRenderer).build();
const MEDIA_STRUCTURE_ID = "media-structure";
const MEDIA_BLOCK_ID = "media-block";
const QUICK_INSERT_BLOCK_ID = "quick-insert-block";
let BaseBlockExtension$2 = class BaseBlockExtension2 extends Block {
  constructor(id, name, icon2, type) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon2;
    this.type = type;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return this.type;
  }
};
class MediaStructure extends BaseBlockExtension$2 {
  constructor() {
    super(MEDIA_STRUCTURE_ID, "Media structure", "new-window", BlockCompositionType.STRUCTURE);
  }
  _getEmptyContainer() {
    const tag = BlockType.EMPTY_CONTAINER;
    const attrs = BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.blocks}="${BlockType.BLOCK_IMAGE},${BlockType.BLOCK_BANNER},${BlockType.BLOCK_VIDEO},${MEDIA_BLOCK_ID}"></${tag}>`;
  }
  getTemplate() {
    return `<td>
              <h3>Media structure</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
}
class MediaBlock extends BaseBlockExtension$2 {
  constructor() {
    super(MEDIA_BLOCK_ID, "Media block", "magic", BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>Media block</h4></td>";
  }
}
class QuickInsertBlock extends BaseBlockExtension$2 {
  constructor() {
    super(QUICK_INSERT_BLOCK_ID, "Quick insert block", "save", BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>This block can be inserted in any empty container!</h4></td>";
  }
  shouldDisplayQuickAddIcon() {
    return true;
  }
}
const customEmptyContainer = new ExtensionBuilder().addBlock(MediaStructure).addBlock(MediaBlock).addBlock(QuickInsertBlock).build();
const SINGLE_CONTAINER = "single-empty-container";
const CONTAINERS_ROW = "containers-row";
const CONTAINERS_ROW2 = "containers-row2";
const CONTAINERS_COLUMN = "containers-column";
let BaseBlockExtension$1 = class BaseBlockExtension3 extends Block {
  constructor(id, name, icon2) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon2;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  _getEmptyContainer(width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.EMPTY_CONTAINER;
    const attrs = BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.widthPercent ? `${attrs.widthPercent}="${width}"` : ""}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
            </${tag}>`;
  }
};
class SingleContainer2 extends BaseBlockExtension$1 {
  constructor() {
    super(SINGLE_CONTAINER, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
}
class ContainersRow4 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW, "Containers row", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row</h3>
              ${this._getEmptyContainer(30)}
              ${this._getEmptyContainer(65, 4)}
            </td>`;
  }
}
class ContainersRow22 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW2, "Containers row 2", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content in between</h3>
              ${this._getEmptyContainer(30)}
              <span class="es-left" style="font-weight: bold; color: red; border: 1px solid green; padding: 5px; margin-left: 4%;">Custom Content</span>
              ${this._getEmptyContainer(30, 4)}
            </td>`;
  }
}
class ContainersColumn2 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_COLUMN, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getEmptyContainer(100)}
              ${this._getEmptyContainer(100, 0, 20)}
            </td>`;
  }
}
const emptyContainerLayouts = new ExtensionBuilder().addBlock(SingleContainer2).addBlock(ContainersRow4).addBlock(ContainersRow22).addBlock(ContainersColumn2).build();
const BLOCK_ID$3 = "e2e-esm-block";
class E2eEsmBlock extends Block {
  getId() {
    return BLOCK_ID$3;
  }
  getIcon() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
  }
  getName() {
    return this.api.translate("E2E ESM Block");
  }
  getDescription() {
    return this.api.translate("E2E ESM Library Build Block");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<td class="esd-${BLOCK_ID$3}"><h1>E2E ESM</h1></td>`;
  }
}
const esmLib = new ExtensionBuilder().addBlock(E2eEsmBlock).build();
const IMAGE_ID = "image-id";
class BlockExtensionImage extends Block {
  getId() {
    return IMAGE_ID;
  }
  getBlockCompositionType() {
    return BlockCompositionType.BLOCK;
  }
  getIcon() {
    return "new-window";
  }
  getTemplate() {
    const { BLOCK_IMAGE } = BlockType;
    const { src, alt, href, height, width } = BlockAttr.BLOCK_IMAGE;
    return `
            <${BLOCK_IMAGE}
                ${src}="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/9091542014595406.png"
                ${alt}="text alt"
                ${href}="stripo.email"
                ${height}="155"
                ${width}="255">
            </${BLOCK_IMAGE}>
        `;
  }
  getName() {
    return this.api.translate("Image");
  }
  getDescription() {
    return this.api.translate("Image");
  }
}
const baseImageBlockExtension = new ExtensionBuilder().addBlock(BlockExtensionImage).build();
const BLOCK_ID$2 = "init-actions-block";
class InitActionsBlock extends Block {
  getId() {
    return BLOCK_ID$2;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Init Actions Block Extension");
  }
  getDescription() {
    return this.api.translate("Init Actions Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return "<td><h1>Init Actions block extension</h1></td>";
  }
  onDocumentInit() {
    return this.api.getDocumentModifier().modifyHtml(this.api.getDocumentRoot().querySelector(".esd-stripe")).setClass("modified-on-init");
  }
  onSelect(node) {
    return this.api.getDocumentModifier().modifyHtml(node).setClass("modified-on-select");
  }
}
const initActionsBlock = new ExtensionBuilder().addBlock(InitActionsBlock).build();
const RESTRICTED_DND = "restricted_dnd";
const RESTRICTED_SELECTION = "restricted_selection";
class BaseBlockExtension4 extends Block {
  constructor(id, name, icon2) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon2;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  _getTextBlock(content) {
    const tag = BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = BlockType.BLOCK_BUTTON;
    const attrs = BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.CONTAINER;
    const attrs = BlockAttr.CONTAINER;
    return `<${tag} ${`${attrs.widthPercent}="${width}"`}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
}
class RestrictedDND extends BaseBlockExtension4 {
  constructor() {
    super(RESTRICTED_DND, "Restricted drag and drop", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Structure with restructed drag and drop</h3>
              ${this._getContainer(this._getButtonBlock("Non draggable button"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Non draggable text.</b></p>"), 100, 0, 20)}
            </td>`;
  }
  allowInnerBlocksDND() {
    return false;
  }
}
class RestrictedSelection extends BaseBlockExtension4 {
  constructor() {
    super(RESTRICTED_SELECTION, "Restricted selection", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Structure with restricted inner block selection</h3>
              ${this._getContainer(this._getButtonBlock("Non selectable button"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Non selectable text.</b></p>"), 100, 0, 20)}
            </td>`;
  }
  allowInnerBlocksSelection() {
    return false;
  }
}
const interactionConstraints = new ExtensionBuilder().addBlock(RestrictedDND).addBlock(RestrictedSelection).build();
const IMAGE_ALT = "image_alt";
const IMAGE_HREF = "image_href";
const PRODUCT_BLOCK_ID = "product-block";
const CONTROL_PRODUCT_BLOCK_SELECT_PRODUCT_ITEMS_ID = "product-block-select-product-items-control";
function getProductCardTemplate() {
  return `
            <${BlockType.BLOCK_IMAGE}
                ${BlockAttr.BLOCK_IMAGE.src}="https://rf.stripocdn.email/content/guids/CABINET_a72abd995606a03654e2f4a6dac6aa4199889bd9c4261c4b3200c3d1b63c8700/images/g9fa3a8f2503b5df8ba9eb4f115ad6503e44d19921df74d38db793e722379a0b4fb3a097c9e80ededb83d0406223a755f_640.jpeg"
                ${BlockAttr.BLOCK_IMAGE.alt}="%%${IMAGE_ALT}%%"
                ${BlockAttr.BLOCK_IMAGE.href}="%%${IMAGE_HREF}%%">
            </${BlockType.BLOCK_IMAGE}>
    
            <${BlockType.BLOCK_TEXT} class="product-card-name">
                <p style="color: #555555; line-height: 200%">
                    <strong>IPhone</strong>
                </p>
            </${BlockType.BLOCK_TEXT}>
    
            <${BlockType.BLOCK_TEXT} class="product-card-price" align="center">
                <p style="color: #555555;">
                    999$
                </p>
            </${BlockType.BLOCK_TEXT}>
    
            <${BlockType.BLOCK_BUTTON}>
                BUY
            </${BlockType.BLOCK_BUTTON}>`;
}
class ProductBlock extends Block {
  getId() {
    return PRODUCT_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  getName() {
    return this.api.translate("Product block");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  getDescription() {
    return this.api.translate("Product block description");
  }
  getTemplate() {
    const productCardTemplate = getProductCardTemplate();
    return `<${BlockType.STRUCTURE}>
            <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                ${productCardTemplate}
            </${BlockType.CONTAINER}>
            <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                ${productCardTemplate}
            </${BlockType.CONTAINER}>
        </${BlockType.STRUCTURE}>`;
  }
}
class SelectProductItemsControl extends Control {
  getId() {
    return CONTROL_PRODUCT_BLOCK_SELECT_PRODUCT_ITEMS_ID;
  }
  getTemplate() {
    return `
            <div class="container">
                <${UIElementType.LABEL} ${UEAttr.LABEL.text}="${this.api.translate("Number of Product Cards")}:"></${UIElementType.LABEL}>
                <${UIElementType.SELECTPICKER} ${UEAttr.SELECTPICKER.name}="productItemsCount"
                    ${UEAttr.SELECTPICKER.placeholder}="${this.api.translate("Select the number of product cards")}">
                    ${[1, 2].map((key) => `<${UIElementType.SELECT_ITEM} ${UEAttr.SELECT_ITEM.text}="${key}" ${UEAttr.SELECT_ITEM.value}="${key}"></${UIElementType.SELECT_ITEM}>`).join("")}
                </${UIElementType.SELECTPICKER}>
            </div>`;
  }
  onRender() {
    this.api.onValueChanged("productItemsCount", (newValue, _) => {
      const nodeConfig = {
        ...this.node.getNodeConfig(),
        productItems: newValue
      };
      this.api.getDocumentModifier().modifyHtml(this.node).setNodeConfig(nodeConfig).modifyHtml(this.node).multiRowStructureModifier().updateLayoutWithContent(
        [
          "60%",
          "40%"
        ],
        [
          getProductCardTemplate(),
          getProductCardTemplate()
        ]
      ).apply(new ModificationDescription("Changed product cards count"));
    });
  }
  onTemplateNodeUpdated(node) {
    this.node = node;
  }
}
let PanelRegistry$C = class PanelRegistry5 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[PRODUCT_BLOCK_ID] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          CONTROL_PRODUCT_BLOCK_SELECT_PRODUCT_ITEMS_ID
        ]
      )
    ];
  }
};
const extensionMultirowModifierBlock = new ExtensionBuilder().addBlock(ProductBlock).addControl(SelectProductItemsControl).withSettingsPanelRegistry(PanelRegistry$C).build();
const ID$L = "custom-blocks";
class BlockExtensionCustomBlocks extends Block {
  getId() {
    return ID$L;
  }
  getBlockCompositionType() {
    return BlockCompositionType.BLOCK;
  }
  getIcon() {
    return "new-window";
  }
  getTemplate() {
    const { BLOCK_TEXT, BLOCK_BUTTON } = BlockType;
    return `
            <td>
                <table width="100%" cellspacing="0" cellpadding="0">       
                    <${BLOCK_TEXT}>
                        <p>Lorem ipsum dolor sit amet</p>
                    </${BLOCK_TEXT}>
                    
                    <${BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://stripo.email">
                        Click me
                    </${BLOCK_BUTTON}>
               </table> 
            </td>
        `;
  }
  getName() {
    return this.api.translate("Only blocks");
  }
  getDescription() {
    return this.api.translate("Only blocks");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
}
const onlyBlocksExtensionBlock = new ExtensionBuilder().addBlock(BlockExtensionCustomBlocks).build();
const BLOCK_ID$1 = "structure-extension";
class StructureExtension extends Block {
  getId() {
    return BLOCK_ID$1;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure Extension");
  }
  getDescription() {
    return this.api.translate("Structure Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    return `<td>
              <h3>CUSTOM STRUCTURE</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="560" align="left" class="esd-container-frame">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                        <tbody>
                          <tr>
                            <td align="center" class="esd-empty-container" style="display: none"></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
}
const customStructure = new ExtensionBuilder().addBlock(StructureExtension).build();
const ID$K = "extendedButtonAlign";
let ButonPanelRegistry$2 = class ButonPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$K
        ]
      )
    ];
  }
};
class ExtendedButtonAlignControl extends ButtonAlignBuiltInControl {
  getId() {
    return ID$K;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button align desktop") : this.api.translate("Extended button align mobile")
    };
  }
}
const buttonAlignControlExtension = new ExtensionBuilder().addControl(ExtendedButtonAlignControl).withSettingsPanelRegistry(ButonPanelRegistry$2).build();
const ID$J = "extendedButtonBackground";
let PanelRegistry$B = class PanelRegistry6 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$J, 0);
  }
};
class ExtendedButtonBackgroundControl extends ButtonBackgroundColorBuiltInControl {
  getId() {
    return ID$J;
  }
  getLabels() {
    return {
      title: "Extended button background control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-background-applied");
  }
}
const extensionButtonBackgroundControl = new ExtensionBuilder().addControl(ExtendedButtonBackgroundControl).withSettingsPanelRegistry(PanelRegistry$B).build();
const ID$I = "extendedButtonBlockBackground";
let PanelRegistry$A = class PanelRegistry7 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$I, 0);
  }
};
class ExtendedButtonBlockBackgroundControl extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return ID$I;
  }
  getLabels() {
    return {
      title: "Extended button block background control"
    };
  }
}
const extensionButtonBlockBackgroundControl = new ExtensionBuilder().addControl(ExtendedButtonBlockBackgroundControl).withSettingsPanelRegistry(PanelRegistry$A).build();
const ID$H = "extendedButtonBorder";
let PanelRegistry$z = class PanelRegistry8 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(SettingsTab.STYLES, [ID$H])
    ];
  }
};
class ExtendedButtonBorderControl extends ButtonBorderBuiltInControl {
  getId() {
    return ID$H;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended border"),
      titleHint: this.api.translate("Extended border hint"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
}
const buttonBorderControlExtension = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$z).addControl(ExtendedButtonBorderControl).build();
const ID$G = "builtInButtonBorderHover";
let ButtonPanelRegistry$b = class ButtonPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$G
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonBorderHover extends ButtonHoverBorderColorBuiltInControl {
  getId() {
    return ID$G;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover border color")
    };
  }
}
const extensionBuiltInButtonBorderHover = new ExtensionBuilder().addControl(ExtensionBuiltInButtonBorderHover).withSettingsPanelRegistry(ButtonPanelRegistry$b).build();
const ID$F = "extendedButtonBorderRadius";
let ButonPanelRegistry$1 = class ButonPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$F
        ]
      )
    ];
  }
};
class ExtendedButtonBorderRadiusControl extends ButtonBorderRadiusBuiltInControl {
  getId() {
    return ID$F;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button border radius"),
      titleHint: this.api.translate("Extended hint border radius")
    };
  }
}
const buttonBorderRadiusExtension = new ExtensionBuilder().addControl(ExtendedButtonBorderRadiusControl).withSettingsPanelRegistry(ButonPanelRegistry$1).build();
const ID$E = "extendedButtonColor";
let PanelRegistry$y = class PanelRegistry9 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$E, 0);
  }
};
class ExtendedButtonColorControl extends ButtonColorBuiltInControl {
  getId() {
    return ID$E;
  }
  getLabels() {
    return {
      title: "Extended button color control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-button-color-applied");
  }
}
const buttonColorControlExtension = new ExtensionBuilder().addControl(ExtendedButtonColorControl).withSettingsPanelRegistry(PanelRegistry$y).build();
const ID$D = "builtInButtonFitToContainer";
let ButtonPanelRegistry$a = class ButtonPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$D
        ]
      )
    ];
  }
};
class ExtendedButtonFitToContainerControl extends ButtonFitToContainerBuiltInControl {
  getId() {
    return ID$D;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button fit to container desktop") : this.api.translate("Extended button fit to container mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-fit-to-container-applied");
  }
}
const extensionBuiltInButtonFitToContainer = new ExtensionBuilder().addControl(ExtendedButtonFitToContainerControl).withSettingsPanelRegistry(ButtonPanelRegistry$a).build();
const ID$C = "builtInButtonHoverColor";
let ButtonPanelRegistry$9 = class ButtonPanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$C
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonHoverColor extends ButtonHoverColorBuiltInControl {
  getId() {
    return ID$C;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover color")
    };
  }
}
const extensionBuiltInButtonHoverColor = new ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverColor).withSettingsPanelRegistry(ButtonPanelRegistry$9).build();
const ID$B = "builtInButtonHoverTextColor";
let ButtonPanelRegistry$8 = class ButtonPanelRegistry4 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$B
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonHoverTextColor extends ButtonHoverTextColorBuiltInControl {
  getId() {
    return ID$B;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover text color")
    };
  }
}
const extensionBuiltInButtonHoverTextColor = new ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverTextColor).withSettingsPanelRegistry(ButtonPanelRegistry$8).build();
const ID$A = "extendedButtonMargins";
class ButonPanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$A, 0);
  }
}
class ExtendedButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return ID$A;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button margins desktop") : this.api.translate("Extended button margins mobile")
    };
  }
}
const extensionButtonMarginsControl = new ExtensionBuilder().addControl(ExtendedButtonMarginsControl).withSettingsPanelRegistry(ButonPanelRegistry3).build();
const ID$z = "extendedButtonPaddingsControl";
let PanelRegistry$x = class PanelRegistry10 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$z, 0);
  }
};
class ExtendedButtonInternalIndents extends ButtonPaddingsBuiltInControl {
  getId() {
    return ID$z;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended buttons paddings desktop") : this.api.translate("Extended buttons paddings mobile")
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-internal-indents-applied"));
    return modifier;
  }
}
const extendedButtonPaddingsControl = new ExtensionBuilder().addControl(ExtendedButtonInternalIndents).withLocalization({ "en": {
  "Extended buttons paddings desktop": "EN Extended buttons paddings desktop",
  "Extended buttons paddings mobile": "EN Extended buttons paddings mobile"
} }).withSettingsPanelRegistry(PanelRegistry$x).build();
const ID$y = "extendedButtonText";
let ButtonPanelRegistry$7 = class ButtonPanelRegistry5 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$y
        ]
      )
    ];
  }
};
class ExtendedButtonTextControl extends ButtonTextBuiltInControl {
  getId() {
    return ID$y;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button text control")
    };
  }
}
const buttonTextControlExtension = new ExtensionBuilder().addControl(ExtendedButtonTextControl).withSettingsPanelRegistry(ButtonPanelRegistry$7).build();
const ID$x = "extendedButtonTextSize";
let ButtonPanelRegistry$6 = class ButtonPanelRegistry6 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$x
        ]
      )
    ];
  }
};
class ExtendedButtonTextSizeControl extends ButtonTextSizeBuiltInControl {
  getId() {
    return ID$x;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button text size desktop") : this.api.translate("Extended button text size mobile")
    };
  }
  getAdditionalModifications(_root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(_root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-font-size-applied");
    });
    return modifier;
  }
}
const extensionButtonTextSizeControl = new ExtensionBuilder().addControl(ExtendedButtonTextSizeControl).withSettingsPanelRegistry(ButtonPanelRegistry$6).build();
const ID$w = "extendedButtonVisibility";
let ButtonPanelRegistry$5 = class ButtonPanelRegistry7 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$w
        ]
      )
    ];
  }
};
class ExtendedButtonVisibilityControl extends ButtonVisibilityBuiltInControl {
  getId() {
    return ID$w;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button visibility desktop") : this.api.translate("Extended button visibility mobile")
    };
  }
}
const extensionButtonVisibilityControl = new ExtensionBuilder().addControl(ExtendedButtonVisibilityControl).withSettingsPanelRegistry(ButtonPanelRegistry$5).build();
const ID$v = "builtInTextStyleAndColor";
let ButtonPanelRegistry$4 = class ButtonPanelRegistry8 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$v
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonTextStyleAndColor extends ButtonTextStyleAndFontColorBuiltInControl {
  getId() {
    return ID$v;
  }
  getLabels() {
    return {
      colorTitle: this.api.translate("Button built in text color"),
      styleTitle: this.api.translate("Button built in text style")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-text-color-applied");
  }
}
const extensionButtonTextStyleAndColorControl = new ExtensionBuilder().addControl(ExtensionBuiltInButtonTextStyleAndColor).withSettingsPanelRegistry(ButtonPanelRegistry$4).build();
const ID$u = "extendedContainerBackgroundColor";
let PanelRegistry$w = class PanelRegistry11 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER][0].addControl(ID$u, 0);
  }
};
class ExtendedContainerBackgroundColorControl extends ContainerBackgroundColorBuiltInControl {
  getId() {
    return ID$u;
  }
  getLabels() {
    return {
      title: "Extended container background control"
    };
  }
}
const extensionContainerBackgroundControl = new ExtensionBuilder().addControl(ExtendedContainerBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$w).build();
const ID$t = "extendedContainerBackgroundImage";
let PanelRegistry$v = class PanelRegistry12 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER][0].addControl(ID$t, 0);
  }
};
class ExtendedContainerBackgroundImageControl extends ContainerBackgroundImageBuiltInControl {
  getId() {
    return ID$t;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container background image control"),
      titleHint: this.api.translate("Extended container title hint"),
      repeat: this.api.translate("Extended container repeat"),
      repeatHint: this.api.translate("Extended container repeat hint"),
      horizontalPosition: this.api.translate("Extended container horizontal position"),
      verticalPosition: this.api.translate("Extended container vertical position"),
      backgroundWidth: this.api.translate("Extended container background width"),
      backgroundHeight: this.api.translate("Extended container background height")
    };
  }
}
const extensionContainerBackgroundImageControl = new ExtensionBuilder().addControl(ExtendedContainerBackgroundImageControl).withSettingsPanelRegistry(PanelRegistry$v).build();
const ID$s = "extendedContainerBorder";
let PanelRegistry$u = class PanelRegistry13 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$s])
    ];
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$s])
    ];
  }
};
class ExtendedContainerBorderControl extends ContainerBorderBuiltInControl {
  getId() {
    return ID$s;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container border"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleTitle: this.api.translate("Custom style label"),
      borderStyleHint: this.api.translate("Custom style hint")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-container-border-applied");
    });
    return modifier;
  }
}
const extensionContainerBorderControl = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$u).addControl(ExtendedContainerBorderControl).build();
const ID$r = "extendedContainerVisibility";
let ButtonPanelRegistry$3 = class ButtonPanelRegistry9 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$r
        ]
      )
    ];
  }
};
class ExtendedContainerVisibilityControl extends ContainerVisibilityBuiltInControl {
  getId() {
    return ID$r;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended container visibility desktop") : this.api.translate("Extended container visibility mobile")
    };
  }
}
const extensionContainerVisibilityControl = new ExtensionBuilder().addControl(ExtendedContainerVisibilityControl).withSettingsPanelRegistry(ButtonPanelRegistry$3).build();
const ID$q = "extendedBlockPaddings_text";
let PanelRegistry$t = class PanelRegistry14 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0] = new SettingsPanelTab(SettingsTab.SETTINGS, [
      ID$q
    ]);
  }
};
class ExtendedBlockPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return ID$q;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended block paddings") : void 0
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map(
      (node) => modifier.modifyHtml(node).setClass("custom-paddings-applied")
    );
    return modifier;
  }
}
const extendedBlockPaddingsControl = new ExtensionBuilder().addControl(ExtendedBlockPaddingsControl).withLocalization({
  "en": {
    "Extended block paddings": "EN Extended text block paddings"
  },
  "uk": {
    "Extended block paddings": "Зовнішні відступи блоку текст"
  }
}).withSettingsPanelRegistry(PanelRegistry$t).build();
const TEXT_ID$1 = "extendedBlockPaddingsMultipleText";
const BUTTON_ID$2 = "extendedBlockPaddingsMultipleButton";
let PanelRegistry$s = class PanelRegistry15 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(TEXT_ID$1, 0);
    controls2[BlockType.STRIPE][0].addControl(BUTTON_ID$2, 1);
  }
};
class ExtendedBlockTextPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return TEXT_ID$1;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text block paddings desktop") : this.api.translate("Extended text block paddings mobile")
    };
  }
}
let ExtendedBlockButtonMarginsControl$1 = class ExtendedBlockButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return BUTTON_ID$2;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button block paddings desktop") : this.api.translate("Extended button block paddings mobile")
    };
  }
};
const extensionMultiplePaddings = new ExtensionBuilder().addControl(ExtendedBlockTextPaddingsControl).addControl(ExtendedBlockButtonMarginsControl$1).withSettingsPanelRegistry(PanelRegistry$s).build();
const PRODUCT_CARD_NAME_ALIGN_CONTROL_ID = "card-name-align-control";
const PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID = "card-price-align-control";
const PRODUCT_STRUCTURE_ID$2 = "product-structure";
class CardNameAlignControl extends TextAlignBuiltInControl {
  getId() {
    return PRODUCT_CARD_NAME_ALIGN_CONTROL_ID;
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".esd-block-text.name");
  }
  getLabels() {
    return {
      title: this.api.translate("Product Name Align")
    };
  }
}
class CardPriceAlignControl extends TextAlignBuiltInControl {
  getId() {
    return PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID;
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".esd-block-text.price");
  }
  getLabels() {
    return {
      title: this.api.translate("Product Price Align")
    };
  }
}
let SampleSettingsPanelRegistry$1 = class SampleSettingsPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0] = new SettingsPanelTab(
      "settings",
      [
        PRODUCT_CARD_NAME_ALIGN_CONTROL_ID,
        PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID
      ]
    );
    controls2[PRODUCT_STRUCTURE_ID$2] = [
      new SettingsPanelTab(
        "settings",
        [
          PRODUCT_CARD_NAME_ALIGN_CONTROL_ID,
          PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID
        ]
      )
    ];
  }
};
let ProductStructureBlock$2 = class ProductStructureBlock extends Block {
  getId() {
    return PRODUCT_STRUCTURE_ID$2;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Product");
  }
  getDescription() {
    return this.api.translate("Product description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </td>`;
  }
};
const multipleTextAlignExtension = new ExtensionBuilder().withSettingsPanelRegistry(SampleSettingsPanelRegistry$1).addBlock(ProductStructureBlock$2).addControl(CardNameAlignControl).addControl(CardPriceAlignControl).build();
const CUSTOM_TITLE_CONTROL_ID = "extensionCustomTitle";
class CustomTitleControl extends Control {
  constructor() {
    super(...arguments);
    __privateAdd(this, _CustomTitleControl_instances);
  }
  getId() {
    return CUSTOM_TITLE_CONTROL_ID;
  }
  getTemplate() {
    const { LABEL, TEXTAREA } = UIElementType;
    const {
      LABEL: { text: labelTextAttr },
      TEXTAREA: { name: textareaNameAttr, placeholder: textareaPlaceholderAttr }
    } = UEAttr;
    return `
      <div class="container e2e-custom-title-extension">
        <${LABEL} ${labelTextAttr}="${this.api.translate("Custom subject|title control")}:"></${LABEL}>
        
        <${TEXTAREA} ${textareaNameAttr}="customNameTextArea" ${textareaPlaceholderAttr}="customPlaceholderTextArea"></${TEXTAREA}>
      </div>
    `;
  }
  onRender() {
    const modifier = this.api.getDocumentModifier();
    const root = this.api.getDocumentRootHtmlNode();
    this.api.onValueChanged("customNameTextArea", (newValue, _) => {
      const head = root.querySelector("head");
      const title = head.querySelector("title");
      modifier.modifyHtml(title).replaceWith(`<title>${newValue}</title>`).apply(new ModificationDescription("Modify title"));
    });
  }
  onTemplateNodeUpdated(node) {
    this.node = node;
    __privateMethod(this, _CustomTitleControl_instances, patchControl_fn).call(this);
  }
}
_CustomTitleControl_instances = new WeakSet();
patchControl_fn = function() {
  const root = this.api.getDocumentRootHtmlNode();
  const head = root.querySelector("head");
  const title = head.querySelector("title");
  this.api.updateValues({
    "customNameTextArea": title.getInnerText()
  });
};
let PanelRegistry$r = class PanelRegistry16 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    const controlIds = controls2["MESSAGE_SETTINGS"][0].getControlsIds();
    controls2["MESSAGE_SETTINGS"][0].deleteControl(controlIds[0]);
    controls2["MESSAGE_SETTINGS"][0].addControl(CUSTOM_TITLE_CONTROL_ID, 0);
  }
};
const extensionCustomTitle = new ExtensionBuilder().addControl(CustomTitleControl).withSettingsPanelRegistry(PanelRegistry$r).build();
const ID$p = "custom-title";
class CustomTitleWithPopoverPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2["MESSAGE_SETTINGS"][0].addControl(ID$p, 0);
  }
}
const customTitleElementId = "custom-title-element";
class CutomTitleElement extends UIElement {
  getId() {
    return customTitleElementId;
  }
  getTemplate() {
    return `
      <div>
        <ue-button name="openEmojiPopover">
          Emoji
        </ue-button>
        <ue-button name="openAiHiddenPreheaderPopover">
          AI Hidden Preheader
        </ue-button>
        <ue-button name="openSubjectTitlePopover">
          Subject Title
        </ue-button>
        <ue-button name="openTextAiPopover">
          AI Text
        </ue-button>
      </div>
    `;
  }
  onRender(container) {
    const emojiButton = container.querySelector('ue-button[name="openEmojiPopover"]');
    emojiButton.addEventListener("change", () => {
      this.api.openEmojiPopover({
        targetElement: emojiButton,
        preferredSides: [],
        onResult: (_response) => {
        }
      });
    });
    const aiHiddenPreheaderButton = container.querySelector('ue-button[name="openAiHiddenPreheaderPopover"]');
    aiHiddenPreheaderButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: aiHiddenPreheaderButton,
        preferredSides: ["bottom", "right"],
        type: "aiHiddenPreheader",
        value: "",
        onResult: (_response) => {
        }
      });
    });
    const subjectTitleButton = container.querySelector('ue-button[name="openSubjectTitlePopover"]');
    subjectTitleButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: subjectTitleButton,
        preferredSides: ["bottom", "right"],
        type: "aiSubject",
        value: "",
        onResult: (_response) => {
        }
      });
    });
    const textAiButton = container.querySelector('ue-button[name="openTextAiPopover"]');
    textAiButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: textAiButton,
        value: "Hello world",
        preferredSides: ["left"],
        type: "aiText",
        onResult: (_response) => {
        }
      });
    });
  }
}
class CustomTitle extends Control {
  getId() {
    return ID$p;
  }
  getTemplate() {
    return `
      <custom-title-element>

      </custom-title-element>
    `;
  }
}
const customTitleWithPopover = new ExtensionBuilder().addControl(CustomTitle).addUiElement(CutomTitleElement).withSettingsPanelRegistry(CustomTitleWithPopoverPanelRegistry).build();
const BACKGROUND_CONTROL$2 = "backgroundControl";
const ID$o = "expandableControlExtension";
let PanelRegistry$q = class PanelRegistry17 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$o, 0);
  }
};
class expandableControlExtension extends Control {
  constructor() {
    super(...arguments);
    __publicField(this, "disabled", false);
  }
  getId() {
    return ID$o;
  }
  getTemplate() {
    const { NESTED_CONTROL } = UIElementType;
    return `
            <${UIElementType.EXPANDABLE} ${UEAttr.EXPANDABLE.expanded}="false" ${UEAttr.EXPANDABLE.disabled}="${this.disabled}" name="exp1">
            
                <${UIElementType.EXPANDABLE_HEADER}>
                
                  Product name
                       
                </${UIElementType.EXPANDABLE_HEADER}>
                
                <${UIElementType.EXPANDABLE_CONTENT}>
                
                   <${NESTED_CONTROL} 
                        ${UEAttr.NESTED_CONTROL.name}="${BACKGROUND_CONTROL$2}" 
                        ${UEAttr.NESTED_CONTROL.controlId}="${BuiltInControlTypes.GENERAL.BACKGROUND_COLOR}">                               
                   </{NESTED_CONTROL}>
              
                   
                </${UIElementType.EXPANDABLE_CONTENT}> 
                
            </${UIElementType.EXPANDABLE}>
    `;
  }
  onDocumentChanged(_node) {
    super.onDocumentChanged(_node);
    this.disabled = !this.disabled;
    this.api.setUIEAttribute("exp1", UEAttr.EXPANDABLE.disabled, this.disabled);
  }
}
const expandableControlExtension$1 = new ExtensionBuilder().addControl(expandableControlExtension).withSettingsPanelRegistry(PanelRegistry$q).build();
const PRODUCT_STRUCTURE_ID$1 = "product-block-id";
const TEXT_FIXED_HEIGHT_ID = "text-fixed-height-id";
let ProductStructureBlock$1 = class ProductStructureBlock2 extends Block {
  getId() {
    return PRODUCT_STRUCTURE_ID$1;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Product");
  }
  getDescription() {
    return this.api.translate("Product description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </td>`;
  }
};
let TextFixedHeightControl$1 = class TextFixedHeightControl2 extends TextFixedHeightBuiltInControl {
  getId() {
    return TEXT_FIXED_HEIGHT_ID;
  }
  getLabels() {
    return {
      title: "Text switcher title",
      counterTitle: "Text counter",
      alignTitle: "Text align"
    };
  }
};
let PanelRegistry$p = class PanelRegistry18 extends SettingsPanelRegistry {
  registerBlockControls(_blockControlsMap) {
    _blockControlsMap[PRODUCT_STRUCTURE_ID$1] = [
      new SettingsPanelTab("Settings", [
        TEXT_FIXED_HEIGHT_ID
      ]).withLabel("Settings")
    ];
  }
};
const extensionFixedHeightControl = new ExtensionBuilder().addBlock(ProductStructureBlock$1).addControl(TextFixedHeightControl$1).withSettingsPanelRegistry(PanelRegistry$p).build();
const ID$n = "nestedControlExtension";
const BACKGROUND_CONTROL$1 = "backgroundControl";
const BACKGROUND_SWITCHER = "backgroundSwitcher";
let PanelRegistry$o = class PanelRegistry19 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$n, 0);
  }
};
let NestedControlExtension$1 = class NestedControlExtension extends Control {
  getId() {
    return ID$n;
  }
  getTemplate() {
    const { LABEL, SWITCHER, NESTED_CONTROL } = UIElementType;
    return `
            <div>
                <${LABEL} ${UEAttr.LABEL.text}="Enable background control:"></${LABEL}>
                <${SWITCHER} ${UEAttr.SWITCHER.name}="${BACKGROUND_SWITCHER}" class="e2e-background-switcher"></${SWITCHER}>
            </div>
            <${NESTED_CONTROL} ${UEAttr.NESTED_CONTROL.name}="${BACKGROUND_CONTROL$1}" 
                               ${UEAttr.NESTED_CONTROL.controlId}="${BuiltInControlTypes.GENERAL.BACKGROUND_COLOR}">                               
            </{NESTED_CONTROL}>`;
  }
  onRender() {
    this.api.onValueChanged(BACKGROUND_SWITCHER, this._enableBackgroundControl.bind(this));
  }
  onTemplateNodeUpdated(node) {
    const backgroundApplied = !!node.getAttribute("bgcolor");
    this.api.updateValues({ [BACKGROUND_SWITCHER]: backgroundApplied });
    this.api.setVisibility(BACKGROUND_CONTROL$1, backgroundApplied);
  }
  _enableBackgroundControl(enable) {
    this.api.setVisibility(BACKGROUND_CONTROL$1, enable);
  }
};
const nestedBackgroundControl = new ExtensionBuilder().addControl(NestedControlExtension$1).withSettingsPanelRegistry(PanelRegistry$o).build();
const NESTED_ID = "nestedControlID";
class NestedControlExtension2 extends Control {
  getId() {
    return NESTED_ID;
  }
  getTemplate() {
    const { NESTED_CONTROL } = UIElementType;
    const { NESTED_CONTROL: { name, controlId } } = UEAttr;
    return `<${NESTED_CONTROL} ${name}="${BuiltInControlTypes.GENERAL.TEXT_LINE_SPACING}" 
                               ${controlId}="${BuiltInControlTypes.GENERAL.TEXT_LINE_SPACING}">                               
            </{NESTED_CONTROL}>`;
  }
}
let PanelRegistry$n = class PanelRegistry20 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(NESTED_ID, 0);
  }
};
const nestedControlVisibility = new ExtensionBuilder().addControl(NestedControlExtension2).withSettingsPanelRegistry(PanelRegistry$n).build();
const CONTROL_ID$3 = "reinitializedControlExtension";
const ELEMENT_ID = "reinitializedElementExtension";
const SWITCHER_NAME$2 = "switcher";
let PanelRegistry$m = class PanelRegistry21 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(CONTROL_ID$3, 0);
  }
};
class ReinitializedElement extends UIElement {
  getId() {
    return ELEMENT_ID;
  }
  onRender(container) {
    this._checkbox = container.querySelector("input");
    this._listener = this._onChange.bind(this);
    this._checkbox.addEventListener("change", this._listener);
  }
  onDestroy() {
    this._checkbox.removeEventListener("change", this._listener);
  }
  _onChange(event) {
    this.api.triggerValueChange(event.target.checked);
  }
  getValue() {
    return this._checkbox.checked;
  }
  setValue(value) {
    this._checkbox.checked = value;
  }
  getTemplate() {
    return '<div class="event-id-switcher"><input type="checkbox" title="Add class"></div>';
  }
}
class ReinitializedControlExtension extends Control {
  getId() {
    return CONTROL_ID$3;
  }
  getTemplate() {
    return `<div class="e2e-reinitialized-control"><${ELEMENT_ID} ${UEAttr.DEFAULT.name}="${SWITCHER_NAME$2}"></${ELEMENT_ID}></div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME$2, this._toggleClass.bind(this));
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this.api.updateValues({ [SWITCHER_NAME$2]: this.link.hasClass(this._getClass()) });
  }
  _getClass() {
    return "test-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription("Class added"));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription("Class removed"));
    }
  }
}
const reinitializedExtension = new ExtensionBuilder().addControl(ReinitializedControlExtension).addUiElement(ReinitializedElement).withSettingsPanelRegistry(PanelRegistry$m).build();
const ID$m = "stateChangeSubscriberExtension";
const LABEL_NAME = "label";
const SWITCHER_NAME$1 = "switcher";
let PanelRegistry$l = class PanelRegistry22 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$m, 0);
  }
};
class StateChangeSubscriberExtension extends Control {
  getId() {
    return ID$m;
  }
  getTemplate() {
    const { LABEL, SWITCHER } = UIElementType;
    return `<div class="e2e-mode-class-control">
                <${LABEL} ${UEAttr.LABEL.name}="${LABEL_NAME}"></${LABEL}>
                <${SWITCHER} ${UEAttr.SWITCHER.name}="${SWITCHER_NAME$1}"></${SWITCHER}>
            </div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME$1, this._toggleClass.bind(this));
    this.api.onEditorStatePropUpdated(EditorStatePropertyType.previewDeviceMode, () => this._updateForm());
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this._updateForm();
  }
  _updateForm() {
    this.api.updateValues({
      [LABEL_NAME]: this._getViewMode() === PreviewDeviceMode.DESKTOP ? "Set desktop class" : "Set mobile class",
      [SWITCHER_NAME$1]: this.link.hasClass(this._getClass())
    });
  }
  _getViewMode() {
    return this.api.getEditorState()[EditorStatePropertyType.previewDeviceMode];
  }
  _getClass() {
    return this._getViewMode() === PreviewDeviceMode.DESKTOP ? "extension-desktop-class" : "extension-mobile-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription(`Class for ${this._getViewMode()} added`));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription(`Class for ${this._getViewMode()} removed`));
    }
  }
}
const stateChangeSubscriber = new ExtensionBuilder().addControl(StateChangeSubscriberExtension).withSettingsPanelRegistry(PanelRegistry$l).build();
const ID$l = "variableModeExtendedControl";
let PanelRegistry$k = class PanelRegistry23 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$l, 0);
  }
};
class VariableModeExtendedControl extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return ID$l;
  }
  getLabels() {
    return {
      title: this._getViewMode() === PreviewDeviceMode.DESKTOP ? "Set desktop background" : "Set mobile background"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass(`${this._getViewMode()}-background-applied`);
  }
  _getViewMode() {
    return this.api.getEditorState()[EditorStatePropertyType.previewDeviceMode];
  }
}
const variableModeExtendedControl = new ExtensionBuilder().addControl(VariableModeExtendedControl).withSettingsPanelRegistry(PanelRegistry$k).build();
const CONTROL_ID$2 = "variableVisibilityControl";
const SWITCHER_NAME = "switcher";
let PanelRegistry$j = class PanelRegistry24 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][1] = new SettingsPanelTab(SettingsTab.STYLES, [CONTROL_ID$2]);
    controls2[BlockType.BLOCK_IMAGE][0].addControl(CONTROL_ID$2, 0);
  }
};
class VariableVisibilityControl extends Control {
  getId() {
    return CONTROL_ID$2;
  }
  getTemplate() {
    const { SWITCHER, LABEL } = UIElementType;
    return `<div class="e2e-variable-visibility-control">
                <${LABEL}  ${UEAttr.LABEL.text}="Only visible if link href is undefined"></${LABEL}>
                <${SWITCHER} ${UEAttr.DEFAULT.name}="${SWITCHER_NAME}"></${SWITCHER}>
            </div>`;
  }
  isVisible(node) {
    return !node.querySelector("a").getAttribute("href");
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME, this._toggleClass.bind(this));
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this.api.updateValues({ [SWITCHER_NAME]: this.link.hasClass(this._getClass()) });
  }
  _getClass() {
    return "test-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription("Class added"));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription("Class removed"));
    }
  }
}
const variableVisibilityControl = new ExtensionBuilder().addControl(VariableVisibilityControl).withSettingsPanelRegistry(PanelRegistry$j).build();
const BUTTON_ID$1 = "extendedBlockPaddingsMultipleButton";
let PanelRegistry$i = class PanelRegistry25 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [BUTTON_ID$1])
    ];
  }
};
class ExtendedBlockButtonMarginsControl2 extends ButtonMarginsBuiltInControl {
  getId() {
    return BUTTON_ID$1;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button block paddings desktop") : this.api.translate("Extended button block paddings mobile")
    };
  }
  isVisible(_node) {
    const attrToCheckVisible = _node.getAttribute("data-attr-visible");
    if (attrToCheckVisible !== null && attrToCheckVisible !== void 0) {
      return attrToCheckVisible === "true";
    }
    return true;
  }
}
const extensionVisibleBuiltControl = new ExtensionBuilder().addControl(ExtendedBlockButtonMarginsControl2).withSettingsPanelRegistry(PanelRegistry$i).build();
const ID$k = "extendedImageSize";
let PanelRegistry$h = class PanelRegistry26 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$k, 0);
  }
};
class ExtendedImageSizeControl2 extends ImageSizeBuiltInControl {
  getId() {
    return ID$k;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended image size control") : this.api.translate("Extended image size control on mobile")
    };
  }
}
const imageSizeControlExtension = new ExtensionBuilder().addControl(ExtendedImageSizeControl2).withSettingsPanelRegistry(PanelRegistry$h).build();
const ID$j = "extendedImageVisibility";
let ButtonPanelRegistry$2 = class ButtonPanelRegistry10 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_IMAGE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$j
        ]
      )
    ];
  }
};
class ExtendedImageVisibilityControl extends ImageVisibilityBuiltInControl {
  getId() {
    return ID$j;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended image visibility desktop") : this.api.translate("Extended image visibility mobile")
    };
  }
}
const extensionImageVisibilityControl = new ExtensionBuilder().addControl(ExtendedImageVisibilityControl).withSettingsPanelRegistry(ButtonPanelRegistry$2).build();
const ID$i = "extendedSpacerBackgroundColor";
let PanelRegistry$g = class PanelRegistry27 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_SPACER][0].addControl(ID$i, 0);
  }
};
class ExtendedSpacerBackgroundColorControl extends SpacerBackgroundColorBuiltInControl {
  getId() {
    return ID$i;
  }
  getLabels() {
    return {
      title: "Extended spacer background control"
    };
  }
}
const extensionSpacerBackgroundColorControl = new ExtensionBuilder().addControl(ExtendedSpacerBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$g).build();
const ID$h = "extendedStructureAdapt";
let PanelRegistry$f = class PanelRegistry28 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$h
        ]
      )
    ];
    controls2[BlockType.STRIPE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$h
        ]
      )
    ];
  }
};
class ExtendedStructureAdaptControl extends StructureAdaptBuiltInControl {
  getId() {
    return ID$h;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom structure adapt"),
      description: this.api.translate("Custom structure description")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((n) => {
      modifier.modifyHtml(n).setClass("custom-structure-adapt-applied");
    });
    return modifier;
  }
}
const extensionStructureAdaptControl = new ExtensionBuilder().addControl(ExtendedStructureAdaptControl).withSettingsPanelRegistry(PanelRegistry$f).build();
const ID$g = "extendedStructureBackgroundColor";
let PanelRegistry$e = class PanelRegistry29 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$g, 0);
  }
};
class ExtendedStructureBackgroundColorControl extends StructureBackgroundColorBuiltInControl {
  getId() {
    return ID$g;
  }
  getLabels() {
    return {
      title: "Extended structure background control"
    };
  }
}
const extensionStructureBackgroundControl = new ExtensionBuilder().addControl(ExtendedStructureBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$e).build();
const ID$f = "extendedStructureBackgroundImage";
let PanelRegistry$d = class PanelRegistry30 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$f, 0);
  }
};
class ExtendedStructureBackgroundImageControl extends StructureBackgroundImageBuiltInControl {
  getId() {
    return ID$f;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended structure background image control"),
      titleHint: this.api.translate("Extended structure title hint"),
      repeat: this.api.translate("Extended structure repeat"),
      repeatHint: this.api.translate("Extended structure repeat hint"),
      horizontalPosition: this.api.translate("Extended structure horizontal position"),
      verticalPosition: this.api.translate("Extended structure vertical position"),
      backgroundWidth: this.api.translate("Extended structure background width"),
      backgroundHeight: this.api.translate("Extended structure background height")
    };
  }
}
const extensionStructureBackgroundImageControl = new ExtensionBuilder().addControl(ExtendedStructureBackgroundImageControl).withSettingsPanelRegistry(PanelRegistry$d).build();
const ID$e = "extendedStructureBorder";
let PanelRegistry$c = class PanelRegistry31 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$e, 0);
  }
};
class ExtendedStructureBorderControl extends StructureBorderBuiltInControl {
  getId() {
    return ID$e;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended border"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleTitle: this.api.translate("Custom style label"),
      borderStyleHint: this.api.translate("Custom style hint")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const closestTable = root.closest("table");
    return modifier.modifyHtml(closestTable).setClass("custom-structure-border-applied");
  }
}
const structureBorderControlExtension = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$c).addControl(ExtendedStructureBorderControl).build();
const ID$d = "extendedStructureMargins";
let PanelRegistry$b = class PanelRegistry32 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$d, 0);
  }
};
class ExtendedStructureMarginsControl extends StructureMarginsBuiltInControl {
  getId() {
    return ID$d;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure margins desktop") : this.api.translate("Extended structure margins mobile")
    };
  }
}
const extensionStructureMarginsControl = new ExtensionBuilder().addControl(ExtendedStructureMarginsControl).withLocalization({ "en": {
  "Extended structure margins desktop": "EN Extended structure margins desktop",
  "Extended structure margins mobile": "EN Extended structure margins mobile"
} }).withSettingsPanelRegistry(PanelRegistry$b).build();
const ID$c = "extendedStructurePaddings";
let PanelRegistry$a = class PanelRegistry33 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$c, 0);
  }
};
class ExtendedStructurePaddingsControl extends StructurePaddingsBuiltInControl {
  getId() {
    return ID$c;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure paddings desktop") : this.api.translate("Extended structure paddings mobile")
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-structure-paddings-applied"));
    return modifier;
  }
}
const extendedStructurePaddingsControl = new ExtensionBuilder().addControl(ExtendedStructurePaddingsControl).withLocalization({ "en": {
  "Extended structure paddings desktop": "EN Extended structure paddings desktop",
  "Extended structure paddings mobile": "EN Extended structure paddings mobile"
} }).withSettingsPanelRegistry(PanelRegistry$a).build();
const ID$b = "extendedStructureVisibility";
let ButtonPanelRegistry$1 = class ButtonPanelRegistry11 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$b
        ]
      )
    ];
  }
};
class ExtendedStructureVisibilityControl extends StructureVisibilityBuiltInControl {
  getId() {
    return ID$b;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure visibility desktop") : this.api.translate("Extended structure visibility mobile")
    };
  }
}
const extensionStructureVisibilityControl = new ExtensionBuilder().addControl(ExtendedStructureVisibilityControl).withSettingsPanelRegistry(ButtonPanelRegistry$1).build();
const TEXT_ID = "extendedTextFontFamily";
const BUTTON_ID = "extendedButtonFontFamily";
const MENU_ID = "extendedMenuFontFamily";
let PanelRegistry$9 = class PanelRegistry34 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(TEXT_ID, 0);
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          TEXT_ID,
          BUTTON_ID,
          MENU_ID
        ]
      )
    ];
  }
};
class ExtendedTextFontFamilyControl extends TextFontFamilyBuiltInControl {
  getId() {
    return TEXT_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
  getModificationDescription() {
    return new ModificationDescription("Extended font family control modification.");
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-font-family-applied");
  }
}
class ExtendedButtonFontFamilyControl extends ButtonFontFamilyBuiltInControl {
  getId() {
    return BUTTON_ID;
  }
  getLabels() {
    return {
      title: "Extended button font family control"
    };
  }
}
class ExtendedMenuFontFamilyControl extends MenuFontFamilyBuiltInControl {
  getId() {
    return MENU_ID;
  }
  getLabels() {
    return {
      title: "Extended menu font family control"
    };
  }
}
const fontFamilyControlExtension = new ExtensionBuilder().addControl(ExtendedTextFontFamilyControl).addControl(ExtendedButtonFontFamilyControl).addControl(ExtendedMenuFontFamilyControl).withSettingsPanelRegistry(PanelRegistry$9).build();
const ID$a = "extendedLinkColor";
let PanelRegistry$8 = class PanelRegistry35 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$a, 0);
  }
};
class ExtendedLinkColorControl extends TextLinkColorBuiltInControl {
  getId() {
    return ID$a;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended link color control")
    };
  }
}
const linkColorControlExtension = new ExtensionBuilder().addControl(ExtendedLinkColorControl).withSettingsPanelRegistry(PanelRegistry$8).build();
const ID$9 = "extendedTextAlign";
let PanelRegistry$7 = class PanelRegistry36 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$9])
    ];
  }
};
class ExtendedTextAlignControl extends TextAlignBuiltInControl {
  getId() {
    return ID$9;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text align desktop") : this.api.translate("Extended text align mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-text-align-applied");
    });
    return modifier;
  }
}
const extensionTextAlignControl = new ExtensionBuilder().addControl(ExtendedTextAlignControl).withSettingsPanelRegistry(PanelRegistry$7).build();
const ID$8 = "builtInTextBlockBackground";
let PanelRegistry$6 = class PanelRegistry37 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$8, 0);
  }
};
class ExtendedTextBlockBackgroundControl extends TextBlockBackgroundBuiltInControl {
  getId() {
    return ID$8;
  }
  getLabels() {
    return {
      title: "Extended text block background control"
    };
  }
}
const extensionTextBlockBackgroundControl = new ExtensionBuilder().addControl(ExtendedTextBlockBackgroundControl).withSettingsPanelRegistry(PanelRegistry$6).build();
const ID$7 = "extendedTextColor";
let PanelRegistry$5 = class PanelRegistry38 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$7, 0);
  }
};
class ExtendedTextColorControl2 extends TextColorBuiltInControl {
  getId() {
    return ID$7;
  }
  getLabels() {
    return {
      title: "Extended text color control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-color-applied");
  }
}
const textColorControlExtension = new ExtensionBuilder().addControl(ExtendedTextColorControl2).withSettingsPanelRegistry(PanelRegistry$5).build();
const ID$6 = "extendedTextLineSpacing";
let PanelRegistry$4 = class PanelRegistry39 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$6])
    ];
  }
};
class ExtendedTextLineSpacingControl extends TextLineSpacingBuiltInControl {
  getId() {
    return ID$6;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended line spacing")
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-line-spacing-applied");
  }
}
const textLineSpacingControlExtension = new ExtensionBuilder().addControl(ExtendedTextLineSpacingControl).withSettingsPanelRegistry(PanelRegistry$4).build();
const ID$5 = "extendedTextSize";
let PanelRegistry$3 = class PanelRegistry40 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$5, 0);
  }
};
class ExtendedTextSizeControl extends TextSizeBuiltInControl {
  getId() {
    return ID$5;
  }
  getLabels() {
    return {
      title: "Extended text size control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-size-applied");
  }
}
const textSizeControlExtension = new ExtensionBuilder().addControl(ExtendedTextSizeControl).withSettingsPanelRegistry(PanelRegistry$3).build();
const ID$4 = "extendedTextStyle";
let PanelRegistry$2 = class PanelRegistry41 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$4, 0);
  }
};
class ExtendedTextStyleControl extends TextStyleBuiltInControl {
  getId() {
    return ID$4;
  }
  getLabels() {
    return {
      title: "Extended text style control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-style-applied");
  }
}
const textStyleControlExtension = new ExtensionBuilder().addControl(ExtendedTextStyleControl).withSettingsPanelRegistry(PanelRegistry$2).build();
const ID$3 = "extendedTextVisibility";
class ButtonPanelRegistry12 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$3
        ]
      )
    ];
  }
}
class ExtendedTextVisibilityControl extends TextVisibilityBuiltInControl {
  getId() {
    return ID$3;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text visibility desktop") : this.api.translate("Extended text visibility mobile")
    };
  }
}
const extensionTextVisibilityControl = new ExtensionBuilder().addControl(ExtendedTextVisibilityControl).withSettingsPanelRegistry(ButtonPanelRegistry12).build();
const TEXT_COLOR_ATTR = "textColorAttr";
const TEXT_COLOR_COMPUTED = "textColorComputed";
const FONT_FAMILY_ATTR = "fontFamilyAttr";
const CONTAINER = "container-extension";
const CONTAINER_WITH_CUSTOM_RENDERER = "container-with-custom-renderer-extension";
let PanelRegistry$1 = class PanelRegistry42 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[CONTAINER] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [TEXT_COLOR_ATTR, TEXT_COLOR_COMPUTED, FONT_FAMILY_ATTR])
    ];
    controls2[CONTAINER_WITH_CUSTOM_RENDERER] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [TEXT_COLOR_ATTR, TEXT_COLOR_COMPUTED, FONT_FAMILY_ATTR])
    ];
  }
};
class ContainerExtension2 extends Block {
  getId() {
    return CONTAINER;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Container Extension");
  }
  getDescription() {
    return this.api.translate("Container Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    const { CONTAINER: CONTAINER2 } = BlockType;
    return `<${CONTAINER2}>
                <td class="text-with-color"><p style="color:#00ff00;">Text with color</p></td>                
                <td class="text-in-label"><label><p>Text in label</p></label></td>
                <td class="text-with-font-family"><p style="font-family: arvo,courier,georgia,serif">Text with font family</p></td>
            </${CONTAINER2}>`;
  }
  getBlockCompositionType() {
    return BlockCompositionType.CONTAINER;
  }
  allowInnerBlocksSelection() {
    return false;
  }
}
class CustomRenderer4 extends BlockRenderer {
  getPreviewInnerHtml(node) {
    return "<h1>Custom renderer content</h1>";
  }
}
class ContainerWithCustomRendererExtension extends ContainerExtension2 {
  getId() {
    return CONTAINER_WITH_CUSTOM_RENDERER;
  }
  getName() {
    return this.api.translate("Container With Custom Renderer Extension");
  }
  getDescription() {
    return this.api.translate("Container With Custom Renderer Extension Description");
  }
  getCustomRenderer() {
    return CustomRenderer4;
  }
}
class TextColorAttrControl extends TextColorBuiltInControl {
  getId() {
    return TEXT_COLOR_ATTR;
  }
  getLabels() {
    return {
      title: "Checks style attr color value"
    };
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".text-with-color");
  }
}
class TextColorComputedControl extends TextColorBuiltInControl {
  getId() {
    return TEXT_COLOR_COMPUTED;
  }
  getLabels() {
    return {
      title: "Checks computed style color value"
    };
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".text-in-label");
  }
}
class FontFamilyControl extends TextFontFamilyBuiltInControl {
  getId() {
    return FONT_FAMILY_ATTR;
  }
  getLabels() {
    return {
      title: "Checks style attr font-family value"
    };
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".text-with-font-family");
  }
}
const controlStyleReading = new ExtensionBuilder().addBlock(ContainerExtension2).addBlock(ContainerWithCustomRendererExtension).addControl(TextColorAttrControl).addControl(TextColorComputedControl).addControl(FontFamilyControl).withSettingsPanelRegistry(PanelRegistry$1).build();
const generalSettingsStyles = new ExtensionBuilder().withStyles(".e2e-general-settings button {color: red;}").build();
const previewStyles = new ExtensionBuilder().withPreviewStyles(`
    .ue-action-buttons-wrapper {
      background-color: red;
    }
    .ue-dots-icon {
      background-color: orange;
    }
  `).build();
class ExternalImagesLibraryExample {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "imageSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    const div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalImagesLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Images Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/9091542014595406.png">                        </div>                          <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/95981542014634835.png">                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_0397152026e82dd10a59009fd4c00284/images/53971542021195762.png">                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalImagesLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onImageClick.bind(this));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onImageClick(e) {
    if (!e.target.matches("img")) {
      return;
    }
    const exampleOfCallbackImageObject = {
      originalName: "9091542014595406.png",
      width: 600,
      height: 410,
      size: 169e3,
      url: e.target.getAttribute("src"),
      altText: "text image alt"
    };
    this.imageSelectCallback(exampleOfCallbackImageObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openImageLibrary(currentImageUrl, onImageSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.imageSelectCallback = onImageSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const externalImagesLibrary = new ExtensionBuilder().withExternalImageLibrary(ExternalImagesLibraryExample).build();
class ExternalSmartElementsLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalSmartElementsLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Smart-elements Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png">                            <h4>Product 1</h4>                            <p>Price: <span>1$</span></p>                        </div>                          <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 2" src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/476a8650-10d7-11ed-84c9-c741af01c2be.png">                            <h4>Product 2</h4>                            <p>Price: <span>2$</span></p>                        </div>                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 3" src="https://localfiles.stripocdn.email/content/guids/CABINET_4cadb6ae00602dd6c9de933a7b396358e344a1541c288f2785cd19a41ebe0d35/images/nature.png">                            <h4>Product 3</h4>                            <p>Price: <span>3$</span></p>                        </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalSmartElementsLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onElementClick(e) {
    const exampleOfSmartElementObject = {
      p_title: e.querySelector("h4").innerText,
      p_name: e.querySelector("h4").innerText,
      p_price: e.querySelector("span").innerText,
      p_image: e.querySelector("img").getAttribute("src")
    };
    this.close();
    this.dataSelectCallback(exampleOfSmartElementObject);
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openSmartElementsLibrary(onDataSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const externalSmartElementsLibrary = new ExtensionBuilder().withExternalSmartElementsLibrary(ExternalSmartElementsLibrary).build();
const icon = '<?xml version="1.0" encoding="UTF-8"?>\n<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.94 273.09">\n  <defs>\n  </defs>\n  <path class="cls-1" d="m351.53,138.89c4.05-41.3,4.73-112.53-12.81-106.27-7.33,2.6-16.74,22.73-23.95,40.93-16.88-27.82-46.55-40.48-88.55-45.21C221.82,8.87,209.79,0,177.03,0h0c-32.76,0-44.79,8.87-49.19,28.31-.4.05-.8.09-1.19.14-.82.09-1.62.19-2.41.28-40.34,4.99-68.77,17.65-85.11,44.7-7.21-18.17-16.62-38.21-23.93-40.83C-2.34,26.34-1.68,97.56,2.39,138.87.84,143.71,0,148.84,0,154.13,0,173.89,11.5,191.26,28.68,200.98c9.08,31.75,28.21,50.32,56.99,60.64h.02c3.23,1.15,6.58,2.2,10.04,3.16.19.05.37.09.56.16,3.32.89,6.74,1.71,10.3,2.46.19.05.35.07.54.12h-.05c19.88,4.05,43.17,5.57,69.89,5.57,81.62,0,131.65-14.02,148.28-72.09,17.19-9.69,28.68-27.09,28.68-46.85,0-5.29-.84-10.42-2.39-15.27h-.02Zm-73.78,54.97c-3.39,8.5-8.08,14.61-14.73,19.29-15.01,10.54-42.33,15.43-86.02,15.43s-71.01-4.92-86.02-15.43c-6.65-4.66-11.33-10.79-14.73-19.29-4.35-10.91-6.56-25.83-6.56-44.32s2.06-32.17,6.06-42.94c.16-.47.33-.96.49-1.38,3.25-8.15,7.7-14.09,13.93-18.68.26-.19.52-.42.8-.61,10.86-7.61,28.21-12.29,53.5-14.28,9.67-.77,20.44-1.15,32.52-1.15s22.78.4,32.4,1.15c25.33,1.99,42.73,6.65,53.59,14.28.14.09.26.21.4.3,6.44,4.64,11,10.68,14.33,18.99.26.63.47,1.33.73,2.01,3.86,10.7,5.85,24.91,5.85,42.33,0,18.52-2.2,33.43-6.56,44.32v-.02Z"/>\n  <circle class="cls-1" cx="125.28" cy="149.54" r="25.99" transform="translate(-69.05 132.39) rotate(-45)"/>\n  <path class="cls-1" d="m238.84,133.62h-26.69c-8.78,0-15.92,7.12-15.92,15.92s7.12,15.92,15.92,15.92h26.69c8.78,0,15.92-7.12,15.92-15.92s-7.12-15.92-15.92-15.92Z"/>\n</svg>';
const CLASSIC_BLOCK_ID = "classic-block";
class ClassicBlockIcons extends IconsRegistry {
  registerIconsSvg(iconsMap) {
    iconsMap["robot"] = icon;
  }
}
const CONTEXT_ACTION_ID = "test-block-context-action";
class TestBlockContextAction2 extends ContextAction {
  getId() {
    return CONTEXT_ACTION_ID;
  }
  getLabel() {
    return this.api.translate("Test context action");
  }
  onClick(node) {
    console.log(`Test context action clicked for block: ${node.getOuterHTML()}`);
  }
  getIcon() {
    return "robot";
  }
}
class ClassicBlock extends Block {
  getId() {
    return CLASSIC_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Classic block");
  }
  getDescription() {
    return this.api.translate("Classic block description");
  }
  getTemplate() {
    return `
            <td align="left">
                <p>
                    Hello, User!
                </p>
            </td>
        `;
  }
  getContextActionsIds() {
    return [ContextActionType.REMOVE, CONTEXT_ACTION_ID];
  }
}
const CLASSIC_STRUCTURE_ID = "classic-structure";
class ClassicStructureBlock extends Block {
  getId() {
    return CLASSIC_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Classic Structure");
  }
  getDescription() {
    return this.api.translate("Classic Structure description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="30">
                    <${BlockType.BLOCK_TEXT}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Search
                    </${BlockType.BLOCK_BUTTON}>
                </${BlockType.CONTAINER}>
                
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="65">
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://stripo.email">
                        Visit Stripo
                    </${BlockType.BLOCK_BUTTON}>
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://ext.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}> 
                </${BlockType.CONTAINER}>
            </td>`;
  }
}
const PRODUCT_STRUCTURE_ID = "product-structure";
class ProductStructureBlock3 extends Block {
  getId() {
    return PRODUCT_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Product");
  }
  getDescription() {
    return this.api.translate("Product description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </td>`;
  }
}
const BUTTON_ALIGN_CONTROL_ID = "buttonAlignBuiltInControl";
class ButtonAlignControl extends ButtonAlignBuiltInControl {
  getId() {
    return BUTTON_ALIGN_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button align desktop") : this.api.translate("Extended button align mobile")
    };
  }
}
const BUTTON_BACKGROUND_COLOR_ID = "extendedButtonColor";
class ButtonBackgroundColorControl extends ButtonColorBuiltInControl {
  getId() {
    return BUTTON_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Button built in background color"
    };
  }
}
const BUTTON_BLOCK_BACKGROUND_ID = "extendedButtonBlockBackground";
class ButtonBlockBackground extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return BUTTON_BLOCK_BACKGROUND_ID;
  }
  getLabels() {
    return {
      title: "Extended button block background control"
    };
  }
}
const BUTTON_BORDER_ID = "extendedButtonBorder";
class ButtonBorderControl extends ButtonBorderBuiltInControl {
  getId() {
    return BUTTON_BORDER_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Border built in"),
      titleHint: this.api.translate("Border built in hint"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    modifier.modifyHtml(root).setClass("custom-button-border-applied");
    return modifier;
  }
}
const BUTTON_BORDER_RADIUS_CONTROL_ID = "extendedButtonBorderRadius";
class ButtonBorderRadiusControl extends ButtonBorderRadiusBuiltInControl {
  getId() {
    return BUTTON_BORDER_RADIUS_CONTROL_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button border radius"),
      titleHint: this.api.translate("Extended hint border radius")
    };
  }
}
const BUTTON_FIT_TO_CONTAINER_ID = "extendedFitToContainer";
class ButtonFitToContainerControl extends ButtonFitToContainerBuiltInControl {
  getId() {
    return BUTTON_FIT_TO_CONTAINER_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button fit to container desktop") : this.api.translate("Extended button fit to container mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-fit-to-container-applied");
  }
}
const BUTTON_FIXED_HEIGHT_ID = "extendedButtonFixedHeight";
class ButtonFixedHeightControl extends ButtonFixedHeightBuiltInControl {
  getId() {
    return BUTTON_FIXED_HEIGHT_ID;
  }
  getLabels() {
    return {
      title: "Btn switcher title",
      counterTitle: "Btn counter",
      alignTitle: "Btn align"
    };
  }
}
const BUTTON_FONT_FAMILY_ID = "extendedButtonFontFamilyId";
class ButtonFontFamilyControl extends ButtonFontFamilyBuiltInControl {
  getId() {
    return BUTTON_FONT_FAMILY_ID;
  }
  getLabels() {
    return {
      title: "Button built in font family"
    };
  }
}
const BUTTON_HOVER_BORDER_COLOR_ID = "extendedButtonHoverBorderColor";
class ButtonHoverBorderColorControl extends ButtonHoverBorderColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_BORDER_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover border color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-border-color-applied");
  }
}
const BUTTON_HOVER_COLOR_ID = "extendedButtonHoverColor";
class ButtonHoverColorControl extends ButtonHoverColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-color-applied");
  }
}
const BUTTON_HOVER_TEXT_COLOR_ID = "extendedButtonHoverTextColor";
class ButtonHoverTextColorControl extends ButtonHoverTextColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_TEXT_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover text color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-text-color-applied");
  }
}
const BUTTON_MARGINS_ID = "extendedButtonMargins";
class ButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return BUTTON_MARGINS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button margins desktop") : this.api.translate("Extended button margins mobile")
    };
  }
}
const BUTTON_PADDINGS_ID = "extendedButtonPaddings";
class ButtonPaddingsControl extends ButtonPaddingsBuiltInControl {
  getId() {
    return BUTTON_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button paddings desktop") : this.api.translate("Extended button paddings mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-paddings-applied");
  }
}
const BUTTON_TEXT_CONTROL_ID = "buttonTextBuiltInControl";
class ButtonTextControl extends ButtonTextBuiltInControl {
  /**
   * Gets the unique identifier for this control
   * @returns {string} The control ID
   */
  getId() {
    return BUTTON_TEXT_CONTROL_ID;
  }
  /**
   * Gets the display labels for this control
   * @returns {Object} Object containing title label
   */
  getLabels() {
    return {
      title: this.api.translate("Button text built in control")
    };
  }
}
const BUTTON_TEXT_SIZE_CONTROL_ID = "extendedButtonTextSize";
class ButtonTextSizeControl extends ButtonTextSizeBuiltInControl {
  getId() {
    return BUTTON_TEXT_SIZE_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button text size desktop") : this.api.translate("Extended button text size mobile")
    };
  }
}
const BUTTON_TEST_STYLE_AND_COLOR_ID = "extendedButtonTextStyleAndColor";
class ButtonTextStyleAndColor extends ButtonTextStyleAndFontColorBuiltInControl {
  getId() {
    return BUTTON_TEST_STYLE_AND_COLOR_ID;
  }
  getLabels() {
    return {
      colorTitle: this.api.translate("Button built in text color"),
      styleTitle: this.api.translate("Button built in text style")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-text-color-applied");
  }
}
const BUTTON_VISIBILITY_CONTROL_ID = "extendedButtonVisibility";
class ButtonVisibilityControl extends ButtonVisibilityBuiltInControl {
  getId() {
    return BUTTON_VISIBILITY_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button visibility desktop") : this.api.translate("Extended button visibility mobile")
    };
  }
}
const CONTAINER_BACKGROUND_COLOR_ID = "extendedContainerBackgroundColor";
class ContainerBackgroundColor extends ContainerBackgroundColorBuiltInControl {
  getId() {
    return CONTAINER_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended container background color control"
    };
  }
}
const CONTAINER_BACKGROUND_IMAGE_ID = "extendedContainerBackgroundImage";
class ContainerBackgroundImage extends ContainerBackgroundImageBuiltInControl {
  getId() {
    return CONTAINER_BACKGROUND_IMAGE_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container background image control"),
      titleHint: this.api.translate("Extended title hint"),
      repeat: this.api.translate("Extended repeat"),
      repeatHint: this.api.translate("Extended repeat hint"),
      horizontalPosition: this.api.translate("Extended horizontal position"),
      verticalPosition: this.api.translate("Extended vertical position"),
      backgroundWidth: this.api.translate("Extended background width"),
      backgroundHeight: this.api.translate("Extended background height")
    };
  }
}
const CONTAINER_VISIBILITY_CONTROL_ID = "extendedContainerVisibility";
class ContainerVisibilityControl extends ContainerVisibilityBuiltInControl {
  getId() {
    return CONTAINER_VISIBILITY_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended container visibility desktop") : this.api.translate("Extended container visibility mobile")
    };
  }
}
const BACKGROUND_CONTROL = "backgroundControl";
const EXPANDABLE_ID = "expandableControl";
class ExpandableControl extends Control {
  getId() {
    return EXPANDABLE_ID;
  }
  getTemplate() {
    const { NESTED_CONTROL } = UIElementType;
    return `
            <${UIElementType.EXPANDABLE} ${UEAttr.EXPANDABLE.expanded}="false" name="exp1">
            
                <${UIElementType.EXPANDABLE_HEADER}>
                
                  Product name
                       
                </${UIElementType.EXPANDABLE_HEADER}>
                
                <${UIElementType.EXPANDABLE_CONTENT}>
                
                   <${NESTED_CONTROL} 
                        ${UEAttr.NESTED_CONTROL.name}="${BACKGROUND_CONTROL}" 
                        ${UEAttr.NESTED_CONTROL.controlId}="${BuiltInControlTypes.GENERAL.BACKGROUND_COLOR}">                               
                   </{NESTED_CONTROL}>
                   
                </${UIElementType.EXPANDABLE_CONTENT}> 
                
            </${UIElementType.EXPANDABLE}>
    `;
  }
}
const IMAGE_SIZE_CONTROL_ID = "imageSizeBuiltInControl";
class ImageSizeControl extends ImageSizeBuiltInControl {
  getId() {
    return IMAGE_SIZE_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Built-in Image Size on desktop") : this.api.translate("Built-in Image Size on mobile")
    };
  }
  getTargetNodes(root) {
    const images = root.querySelectorAll(".esd-block-image");
    return images.length ? images : [];
  }
}
const IMAGE_VISIBILITY_CONTROL_ID = "extendedImageVisibility";
class ImageVisibilityControl extends ImageVisibilityBuiltInControl {
  getId() {
    return IMAGE_VISIBILITY_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended image visibility desktop") : this.api.translate("Extended image visibility mobile")
    };
  }
}
const SPACER_BACKGROUND_COLOR_ID = "extendedSpacerBlockBackground";
class SpacerBackgroundColor extends SpacerBackgroundColorBuiltInControl {
  getId() {
    return SPACER_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended spacer background color control"
    };
  }
}
const STRUCTURE_ADAPT_ID = "extendedStructureAdapt";
class StructureAdaptControl extends StructureAdaptBuiltInControl {
  getId() {
    return STRUCTURE_ADAPT_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom structure adapt"),
      description: this.api.translate("Custom structure description")
    };
  }
}
const STRUCTURE_BACKGROUND_COLOR_ID = "extendedStructureBackgroundColor";
class StructureBackgroundColor extends StructureBackgroundColorBuiltInControl {
  getId() {
    return STRUCTURE_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended structure background color control"
    };
  }
}
const STRUCTURE_BACKGROUND_IMAGE_ID = "extendedStructureBackgroundImage";
class StructureBackgroundImage extends StructureBackgroundImageBuiltInControl {
  getId() {
    return STRUCTURE_BACKGROUND_IMAGE_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended structure background image control"),
      titleHint: this.api.translate("Extended structure title hint"),
      repeat: this.api.translate("Extended structure repeat"),
      repeatHint: this.api.translate("Extended structure repeat hint"),
      horizontalPosition: this.api.translate("Extended structure horizontal position"),
      verticalPosition: this.api.translate("Extended structure vertical position"),
      backgroundWidth: this.api.translate("Extended structure background width"),
      backgroundHeight: this.api.translate("Extended structure background height")
    };
  }
}
const STRUCTURE_BORDER_ID = "extendedStructureBorder";
class StructureBorderControl extends StructureBorderBuiltInControl {
  getId() {
    return STRUCTURE_BORDER_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Border built in"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const closestTable = root.closest("table");
    return modifier.modifyHtml(closestTable).setClass("custom-structure-border-applied");
  }
}
const STRUCTURE_MARGINS_ID = "extendedStructureMargins";
class StructureMarginsControl extends StructureMarginsBuiltInControl {
  getId() {
    return STRUCTURE_MARGINS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure margins desktop") : this.api.translate("Extended structure margins mobile")
    };
  }
}
const STRUCTURE_PADDINGS_ID = "extendedStructurePaddings";
class StructurePaddingsControl extends StructurePaddingsBuiltInControl {
  getId() {
    return STRUCTURE_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure paddings desktop") : this.api.translate("Extended structure paddings mobile")
    };
  }
}
const STRUCTURE_VISIBILITY_CONTROL_ID = "extendedStructureVisibility";
class StructureVisibilityControl extends StructureVisibilityBuiltInControl {
  getId() {
    return STRUCTURE_VISIBILITY_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure visibility desktop") : this.api.translate("Extended structure visibility mobile")
    };
  }
}
const TEXT_ALIGN_CONTROL_ID = "extendedTextAlign";
class TextAlignControl extends TextAlignBuiltInControl {
  getId() {
    return TEXT_ALIGN_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text align desktop") : this.api.translate("Extended text align mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-text-align-applied");
    });
    return modifier;
  }
}
const TEXT_BLOCK_BACKGROUND_ID = "extendedTextBlockBackground";
class TextBlockBackground extends TextBlockBackgroundBuiltInControl {
  getId() {
    return TEXT_BLOCK_BACKGROUND_ID;
  }
  getLabels() {
    return {
      title: "Extended text block background control"
    };
  }
}
const TEXT_COLOR_CONTROL_ID = "extendedTextColor";
class TextColorControl extends TextColorBuiltInControl {
  getId() {
    return TEXT_COLOR_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Extended text color control"
    };
  }
}
const TEXT_FIXED_HEIGHT_CONTROL_ID = "extendedTextFixedHeight";
class TextFixedHeightControl3 extends TextFixedHeightBuiltInControl {
  getId() {
    return TEXT_FIXED_HEIGHT_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Text switcher title",
      counterTitle: "Text counter",
      alignTitle: "Text align"
    };
  }
}
const TEXT_FONT_FAMILY_ID = "extendedTextFontFamily";
class TextFontFamily extends TextFontFamilyBuiltInControl {
  getId() {
    return TEXT_FONT_FAMILY_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
}
const TEXT_LINE_SPACING_ID = "extendedTextLineSpacing";
class TextLineSpacingControl extends TextLineSpacingBuiltInControl {
  getId() {
    return TEXT_LINE_SPACING_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended line spacing")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const h2 = root.querySelector("h2");
    const allPSelectors = root.querySelectorAll("p");
    if (allPSelectors.length > 0) {
      allPSelectors.find((p) => {
        modifier.modifyHtml(p).setStyle("color", "#bf0bdd");
      });
    }
    if (h2) {
      modifier.modifyHtml(h2).setClass("custom-line-spacing-applied-h2");
    }
    return modifier.modifyHtml(root).setClass("custom-line-spacing-applied");
  }
}
const LINK_COLOR_CONTROL_ID = "linkColorBuiltInControl";
class TextLinkColorControl extends TextLinkColorBuiltInControl {
  /**
   * Gets the unique identifier for this control
   * @returns {string} The control ID
   */
  getId() {
    return LINK_COLOR_CONTROL_ID;
  }
  /**
   * Gets the display labels for this control
   * @returns {Object} Object containing title label
   */
  getLabels() {
    return {
      title: this.api.translate("Link color built in control")
    };
  }
}
const TEXT_PADDINGS_ID = "extendedTextPaddings";
class TextPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return TEXT_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text paddings desktop") : this.api.translate("Extended text paddings mobile")
    };
  }
}
const TEXT_SIZE_CONTROL_ID = "extendedTextSize";
class TextSizeControl extends TextSizeBuiltInControl {
  getId() {
    return TEXT_SIZE_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Extended text size control"
    };
  }
}
const TEXT_STYLE_CONTROL_ID = "extendedTextStyle";
class TextStyleControl extends TextStyleBuiltInControl {
  getId() {
    return TEXT_STYLE_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Text style control"
    };
  }
}
const TEXT_VISIBILITY_CONTROL_ID = "extendedTextVisibility";
class TextVisibilityControl extends TextVisibilityBuiltInControl {
  getId() {
    return TEXT_VISIBILITY_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text visibility desktop") : this.api.translate("Extended text visibility mobile")
    };
  }
}
class SampleSettingsPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[CLASSIC_BLOCK_ID] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          // LINK_COLOR_CONTROL_ID,
          // TEXT_SIZE_CONTROL_ID,
          // TEXT_STYLE_CONTROL_ID,
          // TEXT_LINE_SPACING_ID,
        ]
      )
    ];
    controls2[CLASSIC_STRUCTURE_ID] = [
      new SettingsPanelTab(
        "Structure",
        [
          STRUCTURE_BORDER_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID
        ]
      ).withLabel(this.api.translate("Structure")),
      new SettingsPanelTab(
        "Button",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BORDER_ID
        ]
      ).withLabel(this.api.translate("Button"))
    ];
    controls2[PRODUCT_STRUCTURE_ID] = [
      new SettingsPanelTab(
        "Product",
        [
          TEXT_FIXED_HEIGHT_CONTROL_ID,
          BUTTON_FIXED_HEIGHT_ID,
          IMAGE_SIZE_CONTROL_ID,
          STRUCTURE_MARGINS_ID,
          STRUCTURE_PADDINGS_ID,
          STRUCTURE_BORDER_ID,
          BUTTON_ALIGN_CONTROL_ID,
          BUTTON_PADDINGS_ID,
          BUTTON_MARGINS_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID,
          TEXT_COLOR_CONTROL_ID,
          TEXT_FONT_FAMILY_ID,
          TEXT_ALIGN_CONTROL_ID,
          BUTTON_VISIBILITY_CONTROL_ID,
          CONTAINER_VISIBILITY_CONTROL_ID,
          IMAGE_VISIBILITY_CONTROL_ID,
          STRUCTURE_VISIBILITY_CONTROL_ID,
          TEXT_VISIBILITY_CONTROL_ID
        ]
      ).withLabel(this.api.translate("Product")),
      new SettingsPanelTab(
        "Card",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_BORDER_ID,
          BUTTON_BORDER_RADIUS_CONTROL_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID,
          BUTTON_FIT_TO_CONTAINER_ID,
          BUTTON_BLOCK_BACKGROUND_ID,
          BUTTON_TEXT_SIZE_CONTROL_ID,
          TEXT_BLOCK_BACKGROUND_ID,
          STRUCTURE_BACKGROUND_COLOR_ID,
          BUTTON_TEST_STYLE_AND_COLOR_ID
        ]
      ).withLabel(this.api.translate("Card"))
    ];
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_ALIGN_CONTROL_ID
        ]
      ),
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          BUTTON_BORDER_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID
        ]
      )
    ];
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_PADDINGS_ID, 0);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_MARGINS_ID, 1);
    controls2[BlockType.STRIPE][0].addControl(BUTTON_MARGINS_ID, 2);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_ADAPT_ID, 3);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_BACKGROUND_IMAGE_ID, 4);
    controls2[BlockType.STRUCTURE][0].addControl(CONTAINER_BACKGROUND_IMAGE_ID, 0);
    controls2[BlockType.STRUCTURE][0].addControl(STRUCTURE_BORDER_ID, 0);
    controls2[BlockType.STRUCTURE][0].addControl(STRUCTURE_BACKGROUND_COLOR_ID, 1);
    controls2[BlockType.STRUCTURE][0].addControl(CONTAINER_BACKGROUND_COLOR_ID, 2);
    controls2[BlockType.STRUCTURE][0].addControl(SPACER_BACKGROUND_COLOR_ID, 3);
  }
}
const controls = [
  ButtonBackgroundColorControl,
  ButtonTextControl,
  StructureBorderControl,
  TextLinkColorControl,
  TextSizeControl,
  TextColorControl,
  TextStyleControl,
  TextFontFamily,
  ButtonBorderControl,
  ButtonHoverTextColorControl,
  ButtonHoverBorderColorControl,
  ButtonHoverColorControl,
  TextLineSpacingControl,
  ButtonAlignControl,
  ButtonTextSizeControl,
  ButtonBorderRadiusControl,
  ButtonPaddingsControl,
  TextPaddingsControl,
  ButtonMarginsControl,
  StructurePaddingsControl,
  StructureMarginsControl,
  StructureAdaptControl,
  ButtonFitToContainerControl,
  ButtonBlockBackground,
  TextBlockBackground,
  StructureBackgroundColor,
  ContainerBackgroundColor,
  SpacerBackgroundColor,
  ContainerBackgroundImage,
  StructureBackgroundImage,
  TextAlignControl,
  ImageSizeControl,
  ButtonTextStyleAndColor,
  ButtonVisibilityControl,
  ContainerVisibilityControl,
  ImageVisibilityControl,
  StructureVisibilityControl,
  TextVisibilityControl,
  ExpandableControl,
  ButtonFontFamilyControl,
  ButtonFixedHeightControl,
  TextFixedHeightControl3
];
const builder = new ExtensionBuilder().addBlock(ClassicBlock).addBlock(ClassicStructureBlock).addBlock(ProductStructureBlock3).addContextAction(TestBlockContextAction2).withSettingsPanelRegistry(SampleSettingsPanelRegistry2).withIconsRegistry(ClassicBlockIcons);
for (const control of controls) {
  builder.addControl(control);
}
const gitSample_10_built_in_controls = builder.build();
const _ImageLibraryTabUI = class _ImageLibraryTabUI {
  constructor() {
    __publicField(this, "container");
    __publicField(this, "imageSelectCallback", () => {
    });
    __publicField(this, "activeCategory", "all");
  }
  /**
   * Initializes the UI and renders content in the provided container
   * @param container - DOM container where content should be rendered
   * @param onImageSelect - Callback to invoke when an image is selected
   * @param onCancel - Callback to invoke when the user cancels
   */
  initialize(container, onImageSelect) {
    this.container = container;
    this.imageSelectCallback = onImageSelect;
    this.renderUI();
    this.initializeFilters();
    this.filterImages("all");
  }
  /**
   * Renders the complete UI structure inside the container
   */
  renderUI() {
    const html = this.generateHTML();
    this.container.innerHTML = html;
    this.attachEventListeners();
  }
  /**
   * Generates the complete HTML structure
   */
  generateHTML() {
    return `
        <div style="${this.styleObjToString(_ImageLibraryTabUI.STYLES.container)}">
            ${this.generateNoticeHTML()}
            ${this.generateHeaderHTML()}
            ${this.generateFilterButtonsHTML()}
            ${this.generateImageGridHTML()}
        </div>
    `;
  }
  /**
   * Generates notice banner HTML
   */
  generateNoticeHTML() {
    return `
        <div style="${this.styleObjToString(_ImageLibraryTabUI.STYLES.notice)}">
            <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
                <span style="font-weight: 700; color: #d97706;">⚠️ Demo Tab:</span> This is a custom tab integrated into the Stripo image gallery. It demonstrates how to add your own image sources.
            </p>
        </div>
    `;
  }
  /**
   * Generates the header section HTML
   */
  generateHeaderHTML() {
    return `
        <div style="${this.styleObjToString(_ImageLibraryTabUI.STYLES.header)}">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #111827;">
                External Image Library
            </h3>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
                Select an image from our custom collection
            </p>
        </div>
    `;
  }
  /**
   * Generates category filter buttons HTML
   */
  generateFilterButtonsHTML() {
    const categories = [
      { id: "all", label: "All", active: true },
      { id: "nature", label: "Nature", active: false },
      { id: "abstract", label: "Abstract", active: false },
      { id: "digital", label: "Digital", active: false },
      { id: "photography", label: "Photography", active: false }
    ];
    const buttons = categories.map((cat) => `
        <button
            data-category="${cat.id}"
            style="${this.styleObjToString(cat.active ? _ImageLibraryTabUI.STYLES.buttonActive : _ImageLibraryTabUI.STYLES.buttonInactive)}">
            ${cat.label}
        </button>
    `).join("");
    return `
        <div class="filter-buttons" style="${this.styleObjToString(_ImageLibraryTabUI.STYLES.filterContainer)}">
            ${buttons}
        </div>
    `;
  }
  /**
   * Generates image grid HTML with thumbnails
   */
  generateImageGridHTML() {
    const thumbnails = _ImageLibraryTabUI.IMAGES.map((image) => `
        <div class="thumbnail"
             data-category="${image.category}"
             style="cursor: pointer; border-radius: 8px; overflow: hidden;
                    background-color: #f9fafb; transition: all 0.3s;
                    position: relative; height: 100%; border: 2px solid transparent;"
             onmouseover="this.style.transform='translateY(-2px)';
                         this.style.borderColor='#3b82f6';
                         this.style.boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1)';"
             onmouseout="this.style.transform='translateY(0)';
                        this.style.borderColor='transparent';
                        this.style.boxShadow='none';">
            <img style="width: 100%; height: 100%; object-fit: cover; display: block;"
                 src="${image.src}"
                 alt="${image.title}"
                 data-title="${image.title}"
                 data-category="${image.category}">
            <div style="position: absolute; bottom: 0; left: 0; right: 0;
                       background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                       padding: 8px; color: white; font-size: 12px; font-weight: 500;">
                ${image.title}
            </div>
        </div>
    `).join("");
    return `
        <div class="image-grid" style="${this.styleObjToString(_ImageLibraryTabUI.STYLES.grid)}">
            ${thumbnails}
        </div>
    `;
  }
  /**
   * Converts a style object to an inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to interactive elements
   */
  attachEventListeners() {
    this.container.addEventListener("click", this.onImageClick.bind(this));
  }
  /**
   * Handles click events on image thumbnail cards
   */
  onImageClick(e) {
    const thumbnail = e.target.closest(".thumbnail");
    if (!thumbnail) {
      return;
    }
    const img = thumbnail.querySelector("img");
    if (!img) {
      return;
    }
    const title = img.getAttribute("data-title") || img.getAttribute("alt") || "";
    const category = img.getAttribute("data-category") || "";
    const labels = {
      category,
      source: "External Library Tab",
      title
    };
    const imageData = {
      originalName: img.src.split("/").pop() || "",
      width: 600,
      height: 410,
      sizeBytes: 169e3,
      url: img.getAttribute("src") || "",
      altText: title,
      labels
    };
    this.imageSelectCallback(imageData);
  }
  /**
   * Initializes category filter button functionality
   */
  initializeFilters() {
    const filterButtons = this.container.querySelectorAll(".filter-buttons button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const category = e.target.getAttribute("data-category");
        if (category) {
          this.filterImages(category);
          this.updateActiveButton(e.target);
        }
      });
    });
  }
  /**
   * Filters displayed images based on the selected category
   */
  filterImages(category) {
    this.activeCategory = category;
    const thumbnails = this.container.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
      const shouldShow = category === "all" || thumbnail.getAttribute("data-category") === category;
      thumbnail.style.display = shouldShow ? "block" : "none";
    });
  }
  /**
   * Updates the visual state of category filter buttons
   */
  updateActiveButton(activeButton) {
    const buttons = this.container.querySelectorAll(".filter-buttons button");
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      const styles = isActive ? _ImageLibraryTabUI.STYLES.buttonActive : _ImageLibraryTabUI.STYLES.buttonInactive;
      Object.assign(button.style, styles);
    });
  }
};
// UI Style configurations
__publicField(_ImageLibraryTabUI, "STYLES", {
  // Container styles
  container: {
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Header styles
  header: {
    marginBottom: "24px",
    paddingBottom: "16px",
    borderBottom: "2px solid #e5e7eb"
  },
  // Filter buttons container
  filterContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "20px",
    flexWrap: "wrap"
  },
  // Grid styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px",
    gridAutoRows: "120px"
  },
  // Button styles
  buttonActive: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonInactive: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  // Notice banner styles
  notice: {
    padding: "12px 16px",
    marginBottom: "20px",
    backgroundColor: "#fef3c7",
    borderRadius: "8px",
    border: "1px solid #fbbf24"
  }
});
// Sample images data
__publicField(_ImageLibraryTabUI, "IMAGES", [
  {
    category: "nature",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g05fb9c707080df68b2b7a48884ecfb678ea72bfba6c4b30a3622d77b4e1fc4d686c2fa0ca69ecb08cb93ebe999a2cffd_640.jpeg",
    title: "Nature Scene"
  },
  {
    category: "abstract",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g039e37b4b08aab63892fa5bcb069ef5a4c3903ffdfe6a266b65d59c96669e69786dd8db7d6d686af5a93c55b5f59cc21_640.jpeg",
    title: "Abstract Art"
  },
  {
    category: "digital",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g865b29f858626ae67bf436c38ea27d23ce34ce2c083b7829929c1ce0f1c7a6f72f2f7654bfe16d837d53df0713b157da_640.jpeg",
    title: "Digital Design"
  },
  {
    category: "photography",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/gf0fe89ba1310967859765c4634e5fdb5abc15576715a0e8793c2bccdd12fabb435f1f62ebf39c017d6c520c6a0cd0e83_640.jpeg",
    title: "Mountain Vista"
  },
  {
    category: "nature",
    src: "https://rf.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/ge472fe8d47d49d6b4f022364cf352302eff394855af35507d5b92fe30d08e0c8a992246d3d813ff21769fd771fab7c90_640.jpeg",
    title: "Ocean"
  },
  {
    category: "nature",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g82fa2ffeb30d400bfa57c908a9716e883b41baf34f6ca09cb0650124ef4f0d10322137d9cfab9ae35aedb1a3d8adfb4e_640.jpeg",
    title: "Waterfall"
  },
  {
    category: "digital",
    src: "https://rf.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g37c2a939530fa27db0025bc0031514973909782c635b82080f91f5c7c15d473e0b3b7c6d41ef5a20d6370c6f58ae8ff0_640.jpeg",
    title: "Lunar Rover"
  },
  {
    category: "photography",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/gfd3e800e20a1305512a60feb3cdf5fbc07ac64b8397398a9c12e3eb73ae28805d1ed5cbc941f302ab7186feedd38e4ff_640.jpeg",
    title: "Ocean Sunset"
  }
]);
let ImageLibraryTabUI = _ImageLibraryTabUI;
class MyExternalImageLibraryTab extends ExternalImageLibraryTab {
  constructor() {
    super();
    __publicField(this, "ui");
    this.ui = new ImageLibraryTabUI();
  }
  /**
   * Required method: Returns the localized name of the tab
   * This name will be displayed as the tab title in the gallery
   * @param translate - Translation function provided by Stripo
   * @returns Localized tab name
   */
  getName() {
    return this.api.translate("Custom Images");
  }
  /**
   * Required method: Called when the tab is opened
   * Delegates rendering to the UI class
   * @param container - DOM container where content should be rendered
   * @param onImageSelect - Callback to invoke when an image is selected
   * @param onCancel - Callback to invoke when the user cancels
   */
  openImageLibraryTab(container, onImageSelect) {
    this.ui.initialize(container, onImageSelect);
  }
}
const extension = new ExtensionBuilder().withExternalImageLibraryTab(MyExternalImageLibraryTab).withLocalization({
  "en": {
    "Custom Images": "Custom Images"
  },
  "uk": {
    "Custom Images": "Власні зображення"
  }
}).build();
class TextCustomControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"] = [
      new SettingsPanelTab("customStyles", ["backgroundColor"]).withLabel(this.api.translate("Custom styles")),
      new SettingsPanelTab("settings", ["paragraphStyleForm"]),
      new SettingsPanelTab("customSettings", ["backgroundColor"]).withLabel(this.api.translate("Custom settings"))
    ];
  }
}
const textBlockWithCustomControls = new ExtensionBuilder().withLocalization({
  "en": {
    "Custom styles": "EN Custom styles"
  },
  "uk": {
    "Custom styles": "UK Custom styles",
    "Custom settings": "UK Custom settings"
  }
}).withSettingsPanelRegistry(TextCustomControls).build();
class TextExtendedControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][1].addControl("textFixedHeightForm", 0);
  }
}
const textBlockWithExtendedControls = new ExtensionBuilder().withSettingsPanelRegistry(TextExtendedControls).build();
class TextRemovedControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][0].deleteControl("paragraphStyleForm");
  }
}
const textBlockWithRemovedControl = new ExtensionBuilder().withSettingsPanelRegistry(TextRemovedControls).build();
const ID$2 = "custom-font-family-select";
const ORIGINAL_ID = "original-font-family-select";
class TagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[ORIGINAL_ID] = uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT];
    uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT] = ID$2;
  }
}
class CustomFontFamilySelect extends UIElement {
  getId() {
    return ID$2;
  }
  onRender(container) {
    this.listener = this._onChange.bind(this);
    this.originalSelect = container.querySelector("#originalSelect");
    this.originalSelect.addEventListener("change", this.listener);
  }
  onAttributeUpdated(name, value) {
    this.originalSelect.setUIEAttribute(name, value);
    super.onAttributeUpdated(name, value);
  }
  onDestroy() {
    this.originalSelect.removeEventListener("change", this.listener);
  }
  _getDialogTemplate() {
    return `<div style="display: flex;
    flex-direction: column;
    width: 320px;
    border: 1px solid gray;
    padding: 10px;
    gap: 10px;
    background: lightgray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);">
      Name:
      <input id="name">
      CSS declaration:
      <input id="fontFamily">
      URL:
      <input id="url">
      <button id="confirm">OK</button>
    </div>`;
  }
  _showDialog() {
    this.dialog = document.createElement("div");
    this.dialog.innerHTML = this._getDialogTemplate();
    this.api.ignoreClickOutside(true);
    document.body.appendChild(this.dialog);
    this.dialog.querySelector("#confirm").addEventListener("click", () => this._submitDialog());
  }
  _submitDialog() {
    const newFont = {
      name: this.dialog.querySelector("#name").value,
      fontFamily: this.dialog.querySelector("#fontFamily").value,
      url: this.dialog.querySelector("#url").value
    };
    this.api.addCustomFont(newFont);
    this.dialog.remove();
    this.dialog = void 0;
    this.api.ignoreClickOutside(false);
  }
  _onChange(event) {
    if (event.target.value !== ADD_CUSTOM_FONT_OPTION) {
      this.api.triggerValueChange(event.target.value);
    } else if (!this.dialog) {
      this._showDialog();
    }
  }
  getValue() {
    return this.originalSelect.value;
  }
  setValue(value) {
    this.originalSelect.value = value;
  }
  getTemplate() {
    const attrs = UEAttr.FONT_FAMILY_SELECT;
    return `<${ORIGINAL_ID} id="originalSelect" style="width: 100%;" ${attrs.addCustomFontOption}="+ Insert custom font"></${ORIGINAL_ID}>`;
  }
}
const fontFamilyExtension = new ExtensionBuilder().addUiElement(CustomFontFamilySelect).withUiElementTagRegistry(TagRegistry).build();
const MessageStyle = {
  DANGER: "error",
  SUCCESS: "success",
  WARNING: "warn",
  INFO: "info"
};
const IMG_URL = "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
const MessageIcon = {
  DANGER: "cross-circle",
  SUCCESS: "check-circle",
  WARNING: "warning",
  INFO: IMG_URL
};
const CONTROL_ID$1 = "ui-elements-demo";
const MESSAGE_ELEMENT = "message";
const TOGGLABLE_CONTAINER = "togglable";
const RADIO_BUTTONS_ELEMENT = "radioButtons";
const SELECT_ELEMENT = "select";
const CHECK_BUTTONS_ELEMENT = "checkButtons";
const CHECKBOX_ELEMENT = "checkbox";
const SWITCHER_ELEMENT = "switcher";
const BUTTON_ELEMENT = "button";
const COLOR_ELEMENT = "color";
const DATEPICKER_ELEMENT = "datepicker";
const COUNTER_ELEMENT = "counter";
const TEXT_ELEMENT = "text";
const TEXT_AREA_ELEMENT = "textArea";
class TestUIElementsDemoPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [new SettingsPanelTab(SettingsTab.SETTINGS, [CONTROL_ID$1])];
  }
}
class TestUIElementsDemoControl extends Control {
  getId() {
    return CONTROL_ID$1;
  }
  _getLabel(text, name = `${Math.random()}`) {
    const tag = UIElementType.LABEL;
    const attr = UEAttr.LABEL;
    return `<${tag} ${attr.text}="${text}" ${attr.name}="${name}"></${tag}>`;
  }
  _getMessage() {
    const tag = UIElementType.MESSAGE;
    const attr = UEAttr.MESSAGE;
    return `       
        <b>Message element allows you to provide user with required information.</b>
        ${this._getLabel("User action:")}           
        <${tag} ${attr.name}="${MESSAGE_ELEMENT}" ${attr.type}="${MessageStyle.INFO}"></${tag}>
    `;
  }
  _getRadioButton(text, value, icon2) {
    const tag = UIElementType.RADIO_ITEM;
    const attr = UEAttr.RADIO_ITEM;
    return `<${tag} ${attr.hint}="${text}" ${attr.icon}="${icon2}" ${attr.value}="${value}"></${tag}>`;
  }
  _getRadioButtons() {
    const tag = UIElementType.RADIO_BUTTONS;
    const attr = UEAttr.RADIO_BUTTONS;
    return `
      <b>Radio buttons allow you to choose one item from the list of options.</b>
      ${this._getLabel("Select message style:")}
      <${tag} ${attr.name}="${RADIO_BUTTONS_ELEMENT}">
          ${Object.keys(MessageStyle).map((key) => this._getRadioButton(key, MessageStyle[key], MessageIcon[key])).join("")}
      </${tag}>
    `;
  }
  _getSelectItem(text, value) {
    const tag = UIElementType.SELECT_ITEM;
    const attr = UEAttr.SELECT_ITEM;
    return `<${tag} ${attr.text}="${text}" ${attr.value}="${value}"></${tag}>`;
  }
  _getSelect() {
    const tag = UIElementType.SELECTPICKER;
    const attr = UEAttr.SELECTPICKER;
    return `
      <b>Select element allows you to choose one or several items from the list of options.</b>
        ${this._getLabel("Select message style:")}
        <${tag} ${attr.name}="${SELECT_ELEMENT}" ${attr.multiSelect}="true">
            ${Object.keys(MessageStyle).map((key) => this._getSelectItem(key, MessageStyle[key])).join("")}
        </${tag}>
    `;
  }
  getCheckItem(name, value, icon2 = "") {
    const tag = UIElementType.CHECK_ITEM;
    const attr = UEAttr.CHECK_ITEM;
    return `<${tag} ${attr.hint}="${name}" ${attr.text}="${name}" ${attr.value}="${value}" ${icon2 ? `${attr.icon}="${icon2}"` : ""}></${tag}>`;
  }
  _getCheckButtons() {
    const tag = UIElementType.CHECK_BUTTONS;
    const attr = UEAttr.CHECK_BUTTONS;
    const img = { "three": IMG_URL };
    return `
      <b>CheckButtons are similar to RadioButtons but also allow to select several items.</b>
        ${this._getLabel("Select some items:")}
        <${tag} ${attr.name}="${CHECK_BUTTONS_ELEMENT}">
            ${["one", "two", "three"].map((key) => this.getCheckItem(key, key, img[key])).join("")}
        </${tag}>
    `;
  }
  _getCheckbox() {
    const tag = UIElementType.CHECKBOX;
    const attr = UEAttr.CHECKBOX;
    return `
      <b>Checkbox allows you to switch boolean state.</b>
      <${tag} ${attr.caption}="Disable inputs above:" ${attr.name}="${CHECKBOX_ELEMENT}"></${tag}>
    `;
  }
  _getSwitcher() {
    const tag = UIElementType.SWITCHER;
    const attr = UEAttr.SWITCHER;
    return `
      <b>Switcher allows you to switch boolean state too.</b>
      ${this._getLabel("Display inputs above:")}
      <${tag} ${attr.name}="${SWITCHER_ELEMENT}"></${tag}>
    `;
  }
  _getButton() {
    const tag = UIElementType.BUTTON;
    const attr = UEAttr.BUTTON;
    return `
      <b>Button allows you to perform single action.</b>
      ${this._getLabel("Clear message area:")}
      <${tag} ${attr.name}="${BUTTON_ELEMENT}" ${attr.icon}="${IMG_URL}" ${attr.caption}="DO IT"></${tag}>
    `;
  }
  _getColor() {
    const tag = UIElementType.COLOR;
    const attr = UEAttr.COLOR;
    return `
      <b>Colorpicker allows you to select color from the default and custom palettes.</b>
      ${this._getLabel("Select color:")}
      <${tag} ${attr.name}="${COLOR_ELEMENT}"></${tag}>
    `;
  }
  _getDatepicker() {
    const tag = UIElementType.DATEPICKER;
    const attr = UEAttr.DATEPICKER;
    return `
      <b>Datepicker allows to select date.</b>
      ${this._getLabel("Select date:")}
      <${tag} ${attr.name}="${DATEPICKER_ELEMENT}"></${tag}>
    `;
  }
  _getCounter() {
    const tag = UIElementType.COUNTER;
    const attr = UEAttr.COUNTER;
    return `
      <b>Counter allows to input numeric value.</b>
      ${this._getLabel("Pick a number between 1 and 10:")}
      <${tag} ${attr.name}="${COUNTER_ELEMENT}" ${attr.minValue}="1" ${attr.maxValue}="10" ${attr.step}="1"></${tag}>
    `;
  }
  _getText() {
    const tag = UIElementType.TEXT;
    const attr = UEAttr.TEXT;
    return `
      <b>Text allows you to input string value.</b>
      ${this._getLabel("What is your name?")}
      <${tag} ${attr.name}="${TEXT_ELEMENT}" ${attr.placeholder}="Enter your name here."></${tag}>
    `;
  }
  _getTextArea() {
    const tag = UIElementType.TEXTAREA;
    const attr = UEAttr.TEXTAREA;
    return `
      <b>Text area allows you to input multi-line text.</b>
      ${this._getLabel("List top 1 of your favourite dinosaurs.", "dinoLabel")}
      <${tag} ${attr.name}="${TEXT_AREA_ELEMENT}" ${attr.placeholder}="Dinosaurs go here."></${tag}>
    `;
  }
  getTemplate() {
    return `
    <div class="e2e-elements-container">
        ${this._getMessage()}    
        <hr>
        <div ${UEAttr.DEFAULT.name}="${TOGGLABLE_CONTAINER}">
          ${this._getRadioButtons()}    
          <hr>
          ${this._getSelect()}        
          <hr>
          ${this._getCheckButtons()}
          <hr>    
          ${this._getButton()}        
          <hr>
          ${this._getCheckbox()}
          <hr>               
        </div>
        ${this._getSwitcher()}      
        <hr>    
        ${this._getColor()}      
        <hr>    
        ${this._getDatepicker()}      
        <hr>    
        ${this._getCounter()}      
        <hr>    
        ${this._getText()}      
        <hr>    
        ${this._getTextArea()}
    </div>
    `;
  }
  onRender() {
    this._setFormValues();
    this._listenToFormUpdates();
  }
  _setFormValues() {
    this.api.updateValues({
      [MESSAGE_ELEMENT]: "Interact with inputs to perform an action.",
      [RADIO_BUTTONS_ELEMENT]: MessageStyle.INFO,
      [SELECT_ELEMENT]: Object.values(MessageStyle),
      [CHECK_BUTTONS_ELEMENT]: { one: true },
      [CHECKBOX_ELEMENT]: false,
      [SWITCHER_ELEMENT]: true,
      [COLOR_ELEMENT]: "#008000",
      [DATEPICKER_ELEMENT]: /* @__PURE__ */ new Date(),
      [COUNTER_ELEMENT]: 1
    });
  }
  _listenToFormUpdates() {
    this.api.onValueChanged(RADIO_BUTTONS_ELEMENT, (value) => this._onRadioButtonsChange(value));
    this.api.onValueChanged(SELECT_ELEMENT, (value) => this._onSelectChange(value));
    this.api.onValueChanged(CHECK_BUTTONS_ELEMENT, (value) => this._onCheckButtonsChange(value));
    this.api.onValueChanged(CHECKBOX_ELEMENT, (value) => this._onCheckboxChange(value));
    this.api.onValueChanged(SWITCHER_ELEMENT, (value) => this._onSwitcherChange(value));
    this.api.onValueChanged(COLOR_ELEMENT, (value) => this._onColorChange(value));
    this.api.onValueChanged(DATEPICKER_ELEMENT, (value) => this._onDateChange(value));
    this.api.onValueChanged(COUNTER_ELEMENT, (value) => this._onCounterChange(value));
    this.api.onValueChanged(TEXT_ELEMENT, (value) => this._onTextChange(value));
    this.api.onValueChanged(TEXT_AREA_ELEMENT, (value) => this._onTextAreaChange(value));
    this.api.onValueChanged(BUTTON_ELEMENT, (value) => this._onButtonClick(value));
  }
  _updateMessage(message, overwrite) {
    const previousMessages = overwrite ? "" : this.api.getValues()[MESSAGE_ELEMENT];
    this.api.updateValues({
      [MESSAGE_ELEMENT]: `${previousMessages ? `${previousMessages}<br>` : ""}${message}`
    });
  }
  _onRadioButtonsChange(value) {
    this.api.setUIEAttribute(MESSAGE_ELEMENT, UEAttr.MESSAGE.type, value);
    this._updateMessage(`<b>Radio item selected</b>: '${value}'`);
  }
  _onSelectChange(value) {
    this.api.setUIEAttribute(
      RADIO_BUTTONS_ELEMENT,
      UEAttr.RADIO_BUTTONS.buttons,
      Object.keys(MessageStyle).filter((key) => value.includes(MessageStyle[key])).map((key) => ({
        [UEAttr.RADIO_ITEM.hint]: key,
        [UEAttr.RADIO_ITEM.text]: key,
        [UEAttr.RADIO_ITEM.value]: MessageStyle[key]
      }))
    );
    this._updateMessage(`<b>Select items selected</b>: '${value.join(", ")}'`);
  }
  _onCheckButtonsChange(value) {
    this._updateMessage(`<b>Check buttons selected</b>: '${JSON.stringify(value).replace(/"/g, "")}'`);
  }
  _onCheckboxChange(value) {
    this._updateMessage(`<b>Checkbox changed</b>: '${value}'`);
    this.api.setUIEAttribute(RADIO_BUTTONS_ELEMENT, UEAttr.RADIO_BUTTONS.disabled, value);
    this.api.setUIEAttribute(SELECT_ELEMENT, UEAttr.SELECTPICKER.disabled, value);
    this.api.setUIEAttribute(CHECK_BUTTONS_ELEMENT, UEAttr.CHECK_BUTTONS.disabled, value);
    this.api.setUIEAttribute(BUTTON_ELEMENT, UEAttr.BUTTON.disabled, value);
  }
  _onSwitcherChange(value) {
    this._updateMessage(`<b>Switcher changed</b>: '${value}'`);
    this.api.setVisibility(TOGGLABLE_CONTAINER, value);
  }
  _onButtonClick() {
    this._updateMessage("All gone!", true);
  }
  _onColorChange(value) {
    this._updateMessage(`<b>Color selected</b>: '<span style="color: ${value}; background: #FFFFFF; font-weight: bold;">${value}</span>'`);
  }
  _onDateChange(value) {
    this._updateMessage(`<b>Date selected</b>: '${value.toLocaleDateString()}'`);
  }
  _onCounterChange(value) {
    let choice = value;
    if (value === 6) {
      choice = "😱";
    }
    if (value === 9) {
      choice = "";
    }
    this._updateMessage(`<b>You've chosen</b>: '${choice}'`);
    this.api.setUIEAttribute("dinoLabel", UEAttr.LABEL.text, `List top ${value} of your favourite dinosaurs.`);
  }
  _onTextChange(value) {
    this._updateMessage(`${value}'s come to see us!`);
  }
  _onTextAreaChange(value = "") {
    value = value.trim();
    const requiredNumber = this.api.getValues()[COUNTER_ELEMENT];
    const enteredNumber = value.split("\n").length;
    if (requiredNumber > enteredNumber) {
      this._updateMessage(`<b>Enter ${requiredNumber - enteredNumber} more dinosaurs!</b>`);
    } else if (requiredNumber < enteredNumber) {
      this._updateMessage("<b>Hold your dinosaurs!</b>");
    } else {
      this._updateMessage(`<b>Top ${requiredNumber} of dinosaurs:</b><hr>${value.replace(/\n/g, "<br>")}`);
    }
  }
  onTemplateNodeUpdated(node) {
  }
}
const demoUiElement = new ExtensionBuilder().addControl(TestUIElementsDemoControl).withSettingsPanelRegistry(TestUIElementsDemoPanelRegistry).build();
class ExternalAiAssistant {
  constructor() {
    __publicField(this, "externalAiAssistant");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalAiAssistant" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Update Text</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="padding: 10px">                            <label style="display: inline-block; width: 100px" for="text">Text</label>                            <textarea style="width: 500px; height: 500px" id="text"></textarea>                        </div>                    </div>                    <div style="padding: 20px">                        <button class="okButton">OK</button>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalAiAssistant = document.getElementById("externalAiAssistant");
    this.externalAiAssistant.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelector(".okButton").addEventListener("click", (e) => this.onOkClick(e));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onOkClick(e) {
    const text = this.externalAiAssistant.querySelector("#text").value;
    this.close();
    this.dataSelectCallback(text);
  }
  close() {
    this.externalAiAssistant.style.visibility = "hidden";
  }
  openAiAssistant({ value, onDataSelectCallback, onCancelCallback, type }) {
    this.externalAiAssistant.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalAiAssistant.querySelector("#text").value = value;
  }
}
const externalAiAssistant = new ExtensionBuilder().withExternalAiAssistant(ExternalAiAssistant).build();
const AVAILABLE_CONDITION_NAMES$2 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$2 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$2 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$2 = {
  name: AVAILABLE_CONDITION_NAMES$2[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$2[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS$2 = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS$2 = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS$2 = "dropdownConcatenation";
let ExternalDisplayConditions$2 = class ExternalDisplayConditions {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector(`select.${identifierClass}`);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector(`select.${identifierClass}`);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS$2).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS$2).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).value;
        const finalCondition = conditions.map(function(condition) {
          return `${condition.operation}('${condition.value}', ${condition.name})`;
        }).join(` ${concatenation} `);
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: `%IF ${finalCondition}%`,
          afterScript: "%/IF%"
        });
      } else {
        this.selectConditionsCallback(null);
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$2;
    }
    const deleteActionClass = `condition-delete-action-${Math.random().toString().replace(".", "d")}`;
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = `<td style="width: 150px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS$2)}</td>                <td style="width: 110px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS$2)}</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ${deleteActionClass}"></span></td>`;
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS$2);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS$2, AVAILABLE_CONDITION_NAMES$2);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS$2);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS$2, AVAILABLE_CONDITION_OPERATIONS$2);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector(`.${deleteActionClass}`).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getCategoryName() {
    return "External display conditions";
  }
  getIsContextActionEnabled() {
    return false;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS$2)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2, AVAILABLE_CONDITION_CONCATENATIONS$2);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).values = AVAILABLE_CONDITION_CONCATENATIONS$2;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$2);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES$2),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS$2),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
};
const externalDisplayConditions = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$2).build();
const AVAILABLE_CONDITION_NAMES$1 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$1 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$1 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$1 = {
  name: AVAILABLE_CONDITION_NAMES$1[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$1[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS$1 = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS$1 = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS$1 = "dropdownConcatenation";
let ExternalDisplayConditions$1 = class ExternalDisplayConditions2 {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector(`select.${identifierClass}`);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector(`select.${identifierClass}`);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS$1).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS$1).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).value;
        const finalCondition = conditions.map(function(condition) {
          return `${condition.operation}('${condition.value}', ${condition.name})`;
        }).join(` ${concatenation} `);
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: `%IF ${finalCondition}%`,
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$1;
    }
    const deleteActionClass = `condition-delete-action-${Math.random().toString().replace(".", "d")}`;
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = `<td style="width: 150px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS$1)}</td>                <td style="width: 110px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS$1)}</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ${deleteActionClass}"></span></td>`;
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS$1);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS$1, AVAILABLE_CONDITION_NAMES$1);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS$1);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS$1, AVAILABLE_CONDITION_OPERATIONS$1);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector(`.${deleteActionClass}`).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getCategoryName() {
    return "External display conditions";
  }
  getIsContextActionEnabled() {
    return true;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS$1)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1, AVAILABLE_CONDITION_CONCATENATIONS$1);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).values = AVAILABLE_CONDITION_CONCATENATIONS$1;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$1);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES$1),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS$1),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
};
const externalDisplayConditionsContextMenu = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$1).build();
const AVAILABLE_CONDITION_NAMES = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION = {
  name: AVAILABLE_CONDITION_NAMES[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS = "dropdownConcatenation";
class ExternalDisplayConditions3 {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector(`select.${identifierClass}`);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector(`select.${identifierClass}`);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS).value,
            value
          });
        }
      }
      if (conditions.length) {
        const extraData = this.getExtraOptionsValues();
        let extraDataString = "";
        try {
          extraDataString = JSON.stringify(extraData);
        } catch (e) {
          console.error("Error stringify extraData", e);
        }
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).value;
        const finalCondition = conditions.map(function(condition) {
          return `${condition.operation}('${condition.value}', ${condition.name})`;
        }).join(` ${concatenation} `);
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: `%IF ${finalCondition}%`,
          afterScript: "%/IF%",
          extraData: extraDataString
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION;
    }
    const deleteActionClass = `condition-delete-action-${Math.random().toString().replace(".", "d")}`;
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = `<td style="width: 150px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS)}</td>                <td style="width: 110px; padding: 0 5px 10px 0;">${this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS)}</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ${deleteActionClass}"></span></td>`;
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS, AVAILABLE_CONDITION_NAMES);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS, AVAILABLE_CONDITION_OPERATIONS);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector(`.${deleteActionClass}`).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  setExtraOptionsValues(appliedCondition) {
    let extraDataObject;
    try {
      extraDataObject = JSON.parse((appliedCondition == null ? void 0 : appliedCondition.extraData) || "{}");
    } catch (e) {
      console.error(e);
      return;
    }
    const inputs = this.conditionsPopupElement.querySelectorAll(".extraOptionsTable input");
    inputs.forEach(function(input) {
      const name = input.name;
      if (extraDataObject[name]) {
        input.value = extraDataObject[name];
      }
    });
  }
  getExtraOptionsValues() {
    const inputs = this.conditionsPopupElement.querySelectorAll(".extraOptionsTable input");
    const extraDataObject = {};
    inputs.forEach(function(input) {
      const name = input.name;
      extraDataObject[name] = input.value;
    });
    return extraDataObject;
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategoryName() {
    return "External display conditions";
  }
  getIsContextActionEnabled() {
    return false;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.setExtraOptionsValues(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <table class="extraOptionsTable" style="border-collapse: collapse" width="100%">
                            <tr>
                                <th> Extra option 1 </th>
                                <td> <input type="text" name="extraOption1" value=""> </td> 
                            </tr>
                            <tr>
                                <th> Extra option 2 </th>
                                <td><input type="text" name="extraOption2" value=""></td>
                             </tr>
                        </table>
</table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS, AVAILABLE_CONDITION_CONCATENATIONS);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).values = AVAILABLE_CONDITION_CONCATENATIONS;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
}
const externalDisplayConditionsExtraData = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions3).build();
const ID$1 = "external-merge-tags-ui-element";
class MergeTagsTagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[UIElementType.MERGETAGS] = ID$1;
  }
}
class DemoMergeTagsUiElementExtension extends UIElement {
  getId() {
    return ID$1;
  }
  onRender(container) {
    this.listener = this._onClick.bind(this);
    this.mergeTagsButton = container.querySelector("#mergeTagsButton");
    this.mergeTagsButton.addEventListener("click", this.listener);
  }
  onDestroy() {
    this.mergeTagsButton.removeEventListener("click", this.listener);
  }
  _onClick(event) {
    this.openMergeTagLibrary();
  }
  openMergeTagLibrary() {
    var _a;
    if (!this.mergeTagsLibrary) {
      this.mergeTagsLibrary = new ExternalMergeTagsLibrary();
    }
    this.mergeTagsLibrary.openMergeTagsLibrary((_a = this.selectedMergeTag) == null ? void 0 : _a.value, this.isModuleNode, (data) => {
      this.api.triggerValueChange(data);
    });
  }
  onAttributeUpdated(name, value) {
    if (name === "blockNode") {
      this.isModuleNode = !!value.getClosestModuleId();
    }
    if (name === "mergeTag") {
      this.selectedMergeTag = value;
      this.selectedMergeTag && this.openMergeTagLibrary();
    }
  }
  getTemplate() {
    return `
            <div>
              <UE-BUTTON id="mergeTagsButton" class="btn btn-primary">${this.api.translate("Open merge tags")}</UE-BUTTON>
            </div>`;
  }
}
class ExternalMergeTagsLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "selectedMergetag", null);
    __publicField(this, "dataSelectCallback", () => {
    });
    const div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '             <div id="externalMergeTags" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">                              Your merge tags                               <span id="moduleLabel" style="display: none; background-color: #ff6b00; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px; font-weight: bold; margin-left: 10px;">MODULE</span>                            </h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" tag-value="*|FNAME|*" tag-label="John Doe" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Name                        </div>                        <div class="thumbnail" tag-value="%%Phone%%" tag-label="User phone number" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Phone                        </div>                        <div class="thumbnail" tag-value="Merge Tag 3" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag 3                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    const style = document.createElement("style");
    style.innerHTML = "#externalMergeTags .thumbnail.selected {color: blue; box-shadow: 0 0 0 2px blue; }";
    document.head.appendChild(style);
    this.externalLibrary = document.getElementById("externalMergeTags");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
  }
  onElementClick(thumbnail) {
    const exampleOfMergeTagValue = thumbnail.getAttribute("tag-value");
    const exampleOfMergeTagLabel = thumbnail.getAttribute("tag-label");
    this.close();
    this.dataSelectCallback({
      value: exampleOfMergeTagValue,
      label: exampleOfMergeTagLabel
    });
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  renderMergeTags() {
    var _a;
    const selectedElement = this.externalLibrary.querySelector(".selected");
    selectedElement && selectedElement.classList.remove("selected");
    if (this.selectedMergetag) {
      (_a = this.externalLibrary.querySelector(`[tag-value="${this.selectedMergetag}"]`)) == null ? void 0 : _a.classList.add("selected");
    }
    const moduleLabel = this.externalLibrary.querySelector("#moduleLabel");
    if (moduleLabel) {
      moduleLabel.style.display = this.isModuleNode ? "inline" : "none";
    }
    this.externalLibrary.style.visibility = "visible";
  }
  openMergeTagsLibrary(mergeTag, isModuleNode, onDataSelectCallback) {
    this.isModuleNode = isModuleNode;
    this.selectedMergetag = mergeTag;
    this.renderMergeTags();
    this.dataSelectCallback = onDataSelectCallback;
  }
}
const externalMergetags = new ExtensionBuilder().addUiElement(DemoMergeTagsUiElementExtension).withLocalization({
  "en": {
    "Open merge tags": "Open merge tags"
  },
  "uk": {
    "Open merge tags": "Відкрити мерж теги"
  }
}).withUiElementTagRegistry(MergeTagsTagRegistry).build();
class ExternalVideoLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "videoSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    const div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalVideoLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; ">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Videos Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/23121555584914821.png"                                 title="Create Easy & Quick Event Reminder Using Template for Food Industry"                                 urlVideo="https://www.youtube.com/watch?v=rNmAdmOMp0Y"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1641555585106902.png"                                 title="How to Get Email Mobile & Browser Preview with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=R4NXtC3h598"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1881555585513981"                                 title="Stripo.email editor"                                 urlVideo="https://www.youtube.com/watch?v=ryqOEPk51Lg"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/24481555585355917"                                 title="How to Add Menu in Email with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=XPFWthaa35Q"                            />                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalVideoLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onSelectImage.bind(this));
  }
  onSelectImage(e) {
    if (!e.target.matches("img")) {
      return;
    }
    const image = e.target;
    const urlImage = image.getAttribute("src");
    const urlVideo = image.getAttribute("urlVideo");
    const hasCustomButton = image.getAttribute("hasButton");
    const originalName = image.getAttribute("title");
    const exampleOfCallbackVideoObject = {
      originalVideoName: originalName,
      originalImageName: originalName,
      urlImage,
      urlVideo,
      hasCustomButton,
      altText: "text video alt"
    };
    this.videoSelectCallback(exampleOfCallbackVideoObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  openExternalVideosLibraryDialog(currentImageUrl, onVideoSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.videoSelectCallback = onVideoSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const externalVideosLibrary = new ExtensionBuilder().withExternalVideosLibrary(ExternalVideoLibrary).build();
const BLOCK_ID = "orderable-block";
const CONTROL_ID = "orderable-control-demo";
const BLOCKS_ORDER = "blocks-order";
const BUTON_TEXT = "button-text";
const HEADER_TEXT = "header-text";
const SPACER_HEIGHT = "spacer-height";
const DISABLE_BUTTON = "disable-button";
class PanelRegistry43 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BLOCK_ID] = [new SettingsPanelTab(SettingsTab.SETTINGS, [CONTROL_ID])];
  }
}
class OrderableControl extends Control {
  constructor() {
    super(...arguments);
    __publicField(this, "disabled", false);
    /**
     *
     * @type {ImmutableHtmlNode}
     */
    __publicField(this, "node");
  }
  getId() {
    return CONTROL_ID;
  }
  _getLabel(text, name = `${Math.random()}`) {
    const tag = UIElementType.LABEL;
    const attr = UEAttr.LABEL;
    return `<${tag} ${attr.text}="${text}" ${attr.name}="${name}"></${tag}>`;
  }
  _getText(name, label) {
    const tag = UIElementType.TEXT;
    const attr = UEAttr.TEXT;
    return `
      ${this._getLabel(label)}
      <${tag} ${attr.name}="${name}" class="e2e-${name}"></${tag}>
    `;
  }
  _getCounter(name, label) {
    const tag = UIElementType.COUNTER;
    const attr = UEAttr.COUNTER;
    return `
      ${this._getLabel(label)}
      <${tag} ${attr.name}="${name}" ${attr.minValue}="1" ${attr.maxValue}="100" ${attr.step}="5" style="width: fit-content;"></${tag}>
    `;
  }
  _getDisableButton() {
    const tag = UIElementType.BUTTON;
    const attr = UEAttr.BUTTON;
    return `<${tag} ${attr.name}="${DISABLE_BUTTON}" ${attr.caption}="Disable" class="e2e-disable-button"></${tag}>`;
  }
  _getOrderable() {
    const { ORDERABLE, ORDERABLE_ITEM, ORDERABLE_ICON } = UIElementType;
    const attrs = UEAttr.ORDERABLE;
    return `
      <h4>Orderable input allows you to order other inputs.</h4>
      <hr>
      ${this._getLabel("Block elements:")}
      <br>
      <${ORDERABLE} ${attrs.name}="${BLOCKS_ORDER}" ${attrs.icon}="forward" ${attrs.position}="${OrderableItemIconPosition.LEFT}">
            <${ORDERABLE_ITEM} ${UEAttr.DEFAULT.name}="button">
                ${this._getText(BUTON_TEXT, "Button text:")}
            </${ORDERABLE_ITEM}>
            <${ORDERABLE_ITEM} ${UEAttr.DEFAULT.name}="header">
                ${this._getText(HEADER_TEXT, "Header text:")}
            </${ORDERABLE_ITEM}>
            <${ORDERABLE_ITEM} ${UEAttr.DEFAULT.name}="spacer">
                ${this._getCounter(SPACER_HEIGHT, "Spacer height:")}
                <${ORDERABLE_ICON} ${UEAttr.ORDERABLE_ICON.icon}="reorder" 
                                   class="icon-button droppable-icon"
                                   style="color: red; position: absolute; right: 60%; top: 46%;">                
                </${ORDERABLE_ICON}>
            </${ORDERABLE_ITEM}>
      </${ORDERABLE}>
      <hr>
      ${this._getDisableButton()}
    `;
  }
  getTemplate() {
    return `<div class="e2e-elements-container">${this._getOrderable()}</div>`;
  }
  onRender() {
    this._listenToFormUpdates();
  }
  _listenToFormUpdates() {
    this.api.onValueChanged(BLOCKS_ORDER, (newValue, oldValue) => this._onOrderChange(newValue, oldValue));
    this.api.onValueChanged(BUTON_TEXT, (newValue, oldValue) => this._onButtonTextChange(newValue, oldValue));
    this.api.onValueChanged(HEADER_TEXT, (newValue, oldValue) => this._onHeaderTextChange(newValue, oldValue));
    this.api.onValueChanged(SPACER_HEIGHT, (newValue, oldValue) => this._onSpacerChange(newValue, oldValue));
    this.api.onValueChanged(DISABLE_BUTTON, (value) => this._onDisableButtonClick());
  }
  _onOrderChange(newValue, oldValue) {
    let newHtml = "";
    newValue.forEach((item) => {
      newHtml += this.node.querySelector(`#${item}`).getOuterHTML() + "\n";
    });
    this.api.getDocumentModifier().modifyHtml(this.node).setInnerHtml(newHtml).apply(new ModificationDescription("Order change."));
  }
  _changeInnerText(node, text) {
    this.api.getDocumentModifier().modifyHtml(node).setInnerHtml(text).apply(new ModificationDescription("Inner text change."));
  }
  _onHeaderTextChange(newValue, oldValue) {
    this._changeInnerText(this.node.querySelector("#header"), newValue);
  }
  _onButtonTextChange(newValue, oldValue) {
    this._changeInnerText(this.node.querySelector("#button>span"), newValue);
  }
  _onSpacerChange(newValue, oldValue) {
    this.api.getDocumentModifier().modifyHtml(this.node.querySelector("#spacer")).setStyle("height", `${newValue}px`).apply(new ModificationDescription("Height change."));
  }
  _onDisableButtonClick() {
    this.disabled = !this.disabled;
    this.api.setUIEAttribute(BLOCKS_ORDER, UEAttr.ORDERABLE.disabled, this.disabled);
  }
  _setFormValues() {
    const items = this.node.querySelectorAll(".orderable-item").map((item) => item.getAttribute("id"));
    const buttonText = this.node.querySelector("#button").getInnerText().trim();
    const headerText = this.node.querySelector("#header").getInnerText().trim();
    const spacerHeight = +this.node.querySelector("#spacer").getStyle("height").replace("px", "");
    this.api.updateValues({
      [BLOCKS_ORDER]: items,
      [BUTON_TEXT]: buttonText,
      [HEADER_TEXT]: headerText,
      [SPACER_HEIGHT]: spacerHeight
    });
  }
  onTemplateNodeUpdated(node) {
    this.node = node;
    this._setFormValues();
  }
}
class OrderableBlock extends Block {
  getId() {
    return BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Orderable Block");
  }
  getDescription() {
    return this.api.translate("Orderable Block Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<td style="display: flex; flex-direction: column; align-items: center;">
                <h1 class="orderable-item" id="header">Header</h1>
                <div class="orderable-item" id="spacer" style="width: 100%; height: 42px; background: lightgrey;"></div>
                <div class="orderable-item" id="button" style="padding: 20px;">
                    <span style="background: green; display: inline-block; padding: 20px; color:white;">Button</span>
                </div>
            </td>`;
  }
}
const orderable = new ExtensionBuilder().addControl(OrderableControl).withSettingsPanelRegistry(PanelRegistry43).addBlock(OrderableBlock).build();
const ID = "text-override-ui-element";
class TestTagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap["original-text"] = uiElementsTagsMap[UIElementType.TEXT];
    uiElementsTagsMap[UIElementType.TEXT] = ID;
  }
}
class UiElementExtensionTextUiElementOverridden extends UIElement {
  getId() {
    return ID;
  }
  onRender(container) {
    this.listener = this._onChange.bind(this);
    this.customTextInput = container.querySelector("#customText");
    this.customTextInput.addEventListener("change", this.listener);
    this.originalTextInput = container.querySelector("#originalText");
    this.originalTextInput.addEventListener("change", this.listener);
  }
  onDestroy() {
    this.customTextInput.removeEventListener("change", this.listener);
    this.originalTextInput.removeEventListener("change", this.listener);
  }
  _onChange(event) {
    this.api.triggerValueChange(`${event.target.id}_${event.target.value}`);
  }
  getValue() {
    return this.customTextInput.value;
  }
  setValue(value) {
    this.customTextInput.value = value;
    this.originalTextInput.value = value;
  }
  getTemplate() {
    return `
            <div>
                <original-text id="originalText"></original-text>
                <input id="customText"/>
            </div>`;
  }
}
const textUiElementOverridden = new ExtensionBuilder().addUiElement(UiElementExtensionTextUiElementOverridden).withUiElementTagRegistry(TestTagRegistry).build();
const extensionsMap = {
  variableVisibilityControl,
  textBlockWithCustomControls,
  textBlockWithExtendedControls,
  textBlockWithRemovedControl,
  baseImageBlockExtension,
  containerExtension,
  customBlockBasic,
  atomicBlockAlias,
  customBlockWithCustomRenderer,
  customBlockWithDeprecatedCustomRenderer,
  customRendererRestrictions,
  customRendererControls,
  customBlockWithCustomContextAction,
  customStructure,
  customEmptyContainer,
  textUiElementOverridden,
  demoUiElement,
  orderable,
  generalSettingsStyles,
  previewStyles,
  emptyContainerLayouts,
  containerLayouts,
  initActionsBlock,
  interactionConstraints,
  externalSmartElementsLibrary,
  externalMergetags,
  externalImagesLibrary,
  fontFamilyExtension,
  fontFamilyControlExtension,
  extensionButtonBackgroundControl,
  textColorControlExtension,
  textStyleControlExtension,
  textSizeControlExtension,
  nestedBackgroundControl,
  nestedControlVisibility,
  stateChangeSubscriber,
  variableModeExtendedControl,
  reinitializedExtension,
  externalAiAssistant,
  externalDisplayConditions,
  externalDisplayConditionsContextMenu,
  externalDisplayConditionsExtraData,
  externalVideosLibrary,
  extendedBlockPaddingsControl,
  extendedStructurePaddingsControl,
  extendedButtonPaddingsControl,
  buttonColorControlExtension,
  linkColorControlExtension,
  structureBorderControlExtension,
  buttonTextControlExtension,
  buttonBorderControlExtension,
  textLineSpacingControlExtension,
  buttonAlignControlExtension,
  extensionButtonTextSizeControl,
  buttonBorderRadiusExtension,
  extensionBuiltInButtonHoverColor,
  extensionBuiltInButtonBorderHover,
  extensionBuiltInButtonHoverTextColor,
  extensionBuiltInButtonFitToContainer,
  extensionStructureMarginsControl,
  extensionButtonMarginsControl,
  extensionButtonBlockBackgroundControl,
  extensionTextBlockBackgroundControl,
  extensionStructureBackgroundControl,
  extensionContainerBackgroundControl,
  extensionSpacerBackgroundColorControl,
  extensionTextAlignControl,
  extensionStructureAdaptControl,
  imageSizeControlExtension,
  customTitleWithPopover,
  extensionMultiplePaddings,
  multipleTextAlignExtension,
  extensionStructureBackgroundImageControl,
  extensionContainerBackgroundImageControl,
  extensionButtonTextStyleAndColorControl,
  extensionButtonVisibilityControl,
  extensionContainerVisibilityControl,
  extensionImageVisibilityControl,
  extensionStructureVisibilityControl,
  extensionTextVisibilityControl,
  controlStyleReading,
  extensionContainerBorderControl,
  expandableControlExtension: expandableControlExtension$1,
  buttonExtensionBlock,
  extensionVisibleBuiltControl,
  extensionCustomTitle,
  onlyBlocksExtensionBlock,
  extensionMultirowModifierBlock,
  extensionCustomBlockMultiRowModifier,
  extensionFixedHeightControl,
  blockWithDocumentChangedHook,
  // new E2E lib type test extensions
  esmLib,
  cjsLib,
  // gitSample_01_Simple_Block,
  // gitSample_02_Structure_Block,
  // gitSample_03_External_Merge_Tags,
  // gitSample_04_External_Image_library,
  // gitSample_05_External_Smart_library,
  // gitSample_06_External_AI_Assistant,
  // gitSample_07_External_Custom_Font,
  // gitSample_08_External_Display_Conditions,
  // gitSample_09_External_Display_Conditions_With_Context_Menu,
  // gitSample_10_External_Videos_Library,
  // gitSample_11_Blocks_Panel,
  // gitSample_12_Logo_Block,
  gitSample_10_built_in_controls,
  getSample_externalImageGalleryTab: extension
};
export {
  extensionsMap as default
};
