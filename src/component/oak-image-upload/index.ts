import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import Cropper from 'cropperjs';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakImageUploadStyles} from './index-styles';
import '../oak-input';
import '../oak-button';
import '../oak-click-area';
import {oakImageUploadCropperStyles} from './cropper-style';
import {IMAGE_UPLOADED} from '../../event/OakImageUploadEvent';
import {
  base64ToFile,
  fileToBase64,
  urlToBase64,
} from '../../service/OakImageService';

let elementIdCounter = 0;

/**
 * Image upload and crop image component.
 *
 */
const customElementName = 'oak-image-upload';
@customElement(customElementName)
export class OakImageUpload extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private inputElementId = `${this.elementId}-input`;

  @property({type: String})
  name = '';

  @property({type: String})
  toolbarPosition?: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  @property({type: Number})
  private aspectRatio: number | null | undefined = null;

  @property({type: String})
  private initialFile: string | null | undefined = null;

  @property({type: String})
  private _cropUrl: string | null = null;

  @property({type: Object})
  private _file: any[] | null = null;

  @property({type: Object})
  private _canvas: any = null;

  @property({type: Object})
  private _cropper: any = null;

  constructor() {
    super();
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === '_cropUrl') {
        if (this.initialFile) {
          urlToBase64(this.initialFile).then((result: any) => {
            console.log('checking with initial file', this._cropUrl !== result);
            if (this._cropUrl !== result) {
              this._propagateEvent(IMAGE_UPLOADED);
            }
          });
        } else {
          this._propagateEvent(IMAGE_UPLOADED);
        }
      }
      if (propName === 'initialFile' && this.initialFile) {
        urlToBase64(this.initialFile).then((result: any) => {
          this._cropUrl = result;
          this._file = [base64ToFile(result)];
        });
      }
    });
    return true;
  }

  private _chooseFile(event: any) {
    this._file = event.detail.value;
    if (event.detail.value && event.detail.value.length > 0) {
      // const url = window.URL.createObjectURL(event.detail.value[0]);
      console.log('**converting file to base64');
      fileToBase64(event.detail.value[0]).then((result: any) => {
        this._cropUrl = result;
      });
    } else {
      this._cropUrl = '';
    }
  }

  private _triggerBrowse() {
    this.shadowRoot?.getElementById(this.inputElementId)?.click();
  }

  private _chooseFileManual(event: any) {
    let filesToProcess = Array.from(event.target.files);
    if (filesToProcess.length > 1) {
      filesToProcess = [filesToProcess[0]];
    }
    this._file = filesToProcess;
    if (filesToProcess && filesToProcess.length > 0) {
      // const url = window.URL.createObjectURL(filesToProcess[0]);
      console.log('**converting file to base64');
      fileToBase64(filesToProcess[0]).then((result: any) => {
        this._cropUrl = result;
      });
    } else {
      this._cropUrl = '';
    }
  }

  private _startCrop() {
    if (this._file) {
      const originalFileUrl = window.URL.createObjectURL(this._file[0]);
      const el: any = this.shadowRoot?.getElementById(this.elementId);
      console.log(el);
      if (el) {
        el.src = originalFileUrl;
        const cropperOptions: any = {
          viewMode: 1,
          autoCropArea: 1,
          crop: () => {
            const _canvas = _cropper.getCroppedCanvas();
            this._canvas = _canvas;
          },
        };
        if (this.aspectRatio) {
          cropperOptions.aspectRatio = this.aspectRatio;
        }
        const _cropper = new Cropper(el, cropperOptions);
        this._cropper = _cropper;
      }
    }
  }

  private _finalizeCrop() {
    const canvasUrl = this._canvas.toDataURL('image/png');
    this._cropUrl = canvasUrl;
    const el: any = this.shadowRoot?.getElementById(this.elementId);
    if (el) {
      el.src = canvasUrl;
    }
    this._cropper.destroy();
    this._cropper = null;
  }

  private _clearFile() {
    this._file = null;
    this._cropUrl = null;
    if (this._cropper) {
      this._cropper.destroy();
      this._cropper = null;
    }
  }

  private _propagateEvent = (eventName: string) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          format: 'base64',
          value: this._cropUrl,
        },
      })
    );
  };

  private getClassMap(
    baseClass: 'base' | 'action' | 'image-container' | 'button-content'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--${this.toolbarPosition}`]: true,
        };
      case 'action':
        return {
          [customElementName]: true,
          [`${customElementName}__${baseClass}--${this.toolbarPosition}`]: true,
        };
      case 'image-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'button-content':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakImageUploadStyles, oakImageUploadCropperStyles];
  }

  render() {
    return html` <div class=${classMap(this.getClassMap('base'))}>
      <div class=${classMap(this.getClassMap('image-container'))}>
        ${this._cropUrl
          ? html`<img
              src=${this._cropUrl}
              id=${this.elementId}
              alt="Cropping uploaded image"
            />`
          : html``}
        ${!this._cropUrl
          ? html`<div class="oak-image-upload__container__noimage">
              No image
            </div>`
          : html``}
      </div>
      <div class=${classMap(this.getClassMap('action'))}>
        <div class="oak-image-upload__action__upload">
          <!-- <label class="oak-image-upload__action__upload__label"> -->
          <input
            id=${this.inputElementId}
            class="oak-image-upload__action__upload__label__input"
            type="file"
            @change=${this._chooseFileManual}
          />
          <oak-click-area @click-area-click=${this._triggerBrowse}>
            <div class="oak-image-upload__button">
              <svg id="icon-folder11" viewBox="0 0 16 16">
                <path
                  d="M6.656 2.656l1.344 1.344h5.344q0.531 0 0.922 0.406t0.391 0.938v6.656q0 0.531-0.391 0.938t-0.922 0.406h-10.688q-0.531 0-0.922-0.406t-0.391-0.938v-8q0-0.531 0.391-0.938t0.922-0.406h4z"
                ></path>
              </svg>
            </div>
          </oak-click-area>
          <!-- <div class="oak-image-upload__action__upload__label__action">
              <div class="text">Browse</div>
            </div>
          </label> -->
        </div>
        <!-- <oak-input
          name="file"
          .value=${this._file}
          type="file"
          @file-selected=${this._chooseFile}
        ></oak-input> -->
        ${this._cropUrl && !this._cropper
          ? html` <oak-click-area @click-area-click=${this._startCrop}>
              <div class="oak-image-upload__button">
                <svg id="icon-crop" viewBox="0 0 16 16">
                  <path
                    d="M4.718 4.718l5.955-0.051c0.179 0 0.344 0.074 0.465 0.195s0.195 0.287 0.195 0.471v6h-6c-0.184 0-0.35-0.074-0.471-0.195s-0.195-0.287-0.195-0.465zM0.673 4.753l2.712-0.023-0.051 5.931c0 0.558 0.225 1.059 0.586 1.42s0.862 0.586 1.414 0.586h6v2.667c0 0.368 0.299 0.667 0.667 0.667s0.667-0.299 0.667-0.667v-2.667h2.667c0.368 0 0.667-0.299 0.667-0.667s-0.299-0.667-0.667-0.667h-2.667v-6c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.42-0.586l-5.931 0.051 0.023-2.712c0.003-0.369-0.293-0.669-0.661-0.673s-0.669 0.293-0.673 0.661l-0.024 2.735-2.735 0.024c-0.368 0.003-0.664 0.304-0.661 0.673s0.304 0.664 0.673 0.661z"
                  ></path>
                </svg>
              </div>
            </oak-click-area>`
          : html``}
        ${this._cropUrl && this._cropper
          ? html` <oak-click-area @click-area-click=${this._finalizeCrop}>
              <div class="oak-image-upload__button">
                <svg id="icon-check" viewBox="0 0 16 16">
                  <path
                    d="M12.862 3.529l-6.862 6.862-2.862-2.862c-0.261-0.261-0.683-0.261-0.943 0s-0.261 0.683 0 0.943l3.333 3.333c0.261 0.261 0.683 0.261 0.943 0l7.333-7.333c0.261-0.261 0.261-0.683 0-0.943s-0.683-0.261-0.943 0z"
                  ></path>
                </svg>
              </div>
            </oak-click-area>`
          : html``}
        ${this._cropUrl && !this._cropper
          ? html` <oak-click-area @click-area-click=${this._clearFile}>
              <div class="oak-image-upload__button">
                <svg id="icon-trash" viewBox="0 0 16 16">
                  <path
                    d="M12 4.667v8.667c0 0.184-0.074 0.35-0.195 0.471s-0.287 0.195-0.471 0.195h-6.667c-0.184 0-0.35-0.074-0.471-0.195s-0.195-0.287-0.195-0.471v-8.667zM11.333 3.333v-0.667c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586h-2.667c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414v0.667h-2.667c-0.368 0-0.667 0.299-0.667 0.667s0.299 0.667 0.667 0.667h0.667v8.667c0 0.552 0.225 1.053 0.586 1.414s0.862 0.586 1.414 0.586h6.667c0.552 0 1.053-0.225 1.414-0.586s0.586-0.862 0.586-1.414v-8.667h0.667c0.368 0 0.667-0.299 0.667-0.667s-0.299-0.667-0.667-0.667zM6 3.333v-0.667c0-0.184 0.074-0.35 0.195-0.471s0.287-0.195 0.471-0.195h2.667c0.184 0 0.35 0.074 0.471 0.195s0.195 0.287 0.195 0.471v0.667z"
                  ></path>
                </svg>
              </div>
            </oak-click-area>`
          : html``}
      </div>
    </div>`;
  }
}
