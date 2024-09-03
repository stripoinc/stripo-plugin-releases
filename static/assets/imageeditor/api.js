import {AssetsUtils} from '../../app/tools/AssetsUtils';
import {NotificationUtils} from "../../app/store/facades/notifications/notification-utils";
import {message} from '@services/localization/Message';
import copy from 'fast-copy';

export const ESDEV_POPUP_PIXIE_EDITOR = 'esdev-popup-pixie-editor';

let pixieEditor;
let localeConfig;

/**
 * @description Initialize the image editor (Pixie)
 * @param config - full application configuration @see {@link ApplicationConfig}
 * @param languageBundle: {[key: string]: string}
 */
export function init(config, languageBundle) {
    localeConfig = {
        active: config.locale,
        custom: {
            [`${config.locale}`]: languageBundle
        }
    };
    const shadowRoot = document.querySelector('ui-editor').shadowRoot;
    shadowRoot.querySelector(`.${ESDEV_POPUP_PIXIE_EDITOR}`).innerHTML = '<ui-pixie-editor style="position: absolute"></ui-pixie-editor>';

    let pixieConfig = {
        crossOrigin: config.useCredentialsForAssets ? 'use-credentials' : 'anonymous',
        urls: {
            assets: `${AssetsUtils.createAbsolutePath('assets/imageeditor/')}`,
        },
        ui: {
            openImageDialog: false,
            mode: 'overlay',
            toolbar: {hideCloseButton: false}
        },
        onLoad: close,
    };

    pixieEditor = new EditorPixie(pixieConfig);
}

export function openEditor(imgId, imgSrc, config, saveCallback, closeCallback, onOpenStartCallback, onOpenedCallback) {
    onOpenStartCallback && onOpenStartCallback();
    if (!pixieEditor) {
        console.error('no pixie initialized');
        return;
    }

    pixieEditor.setConfig('languages', localeConfig);
    pixieEditor.setConfig('onOpen', () => {
        onOpenedCallback && onOpenedCallback();
    });
    pixieEditor.setConfig('onSave', function (data, name) {
        saveCallback(data, name);
    }.bind(this));
    pixieEditor.setConfig('onClose', function () {
        closeCallback && closeCallback();
    }.bind(this));
    pixieEditor.setConfig('onImageLoadError', function () {
        NotificationUtils.showError(message.IMAGE_EDIT_LOAD_ERROR);
    }.bind(this));

    const fileFormat = imgSrc && (imgSrc.endsWith('.jpg') || imgSrc.endsWith('.jpeg')) ? 'jpeg' : 'png';
    pixieEditor.setConfig('tools.export.defaultFormat', fileFormat);

    const shadowRoot = document.querySelector('ui-editor').shadowRoot;
    shadowRoot.querySelector(`.${ESDEV_POPUP_PIXIE_EDITOR}`).style.display = 'none';

    const emotIconsConfig = config?.imageEditor?.stickers?.emotIcons;
    if (emotIconsConfig) {
        const stickers = copy(EditorPixie.prototype.getDefaultConfig("tools.stickers"));
        const emotIcons = stickers.items.find(s => s.name === 'emoticons');
        if (emotIconsConfig.exclude && emotIconsConfig.exclude.length) {
            emotIcons.list = emotIcons.list.filter(icon => !emotIconsConfig.exclude.includes(icon));
        }
        if (emotIconsConfig.include && emotIconsConfig.include.length) {
            emotIcons.list = emotIcons.list.filter(icon => emotIconsConfig.include.includes(icon));
        }
        pixieEditor.tools = {stickers};
    }

    // Disable stickers if config.imageEditor.stickersEnable is false
    if (config?.imageEditor?.stickersEnable === false) {
        const nav = EditorPixie.prototype.getDefaultConfig("ui.nav");
        const editorNavItems = nav.items.filter(item => item.name !== 'stickers');
        pixieEditor.setConfig('ui.nav', { items: editorNavItems });
    }

    pixieEditor.resetAndOpenEditor('image', createImageSrcProxy(imgSrc, config)).then(() => {
        shadowRoot.querySelector(`.${ESDEV_POPUP_PIXIE_EDITOR}`).style.display = 'block';
    }, () => {});
}

export function close() {
  pixieEditor.close();
}

export function destroy() {
    if (pixieEditor) {
        pixieEditor.destroyEditor();
        pixieEditor = null;
    }
}

function createImageSrcProxy(imgSrc, config) {
    const proxyUrl = config.proxyUrl;
    return proxyUrl ? `${proxyUrl}?url=${imgSrc}` : imgSrc;
}
