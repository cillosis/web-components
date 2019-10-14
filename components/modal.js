/**
 * @Attributes game, stepper (requires game set to true)
 * @Slots content-heading, step-1-text, step-2-text, step-3-text, game-content, basic-content
 */
// import './stepper';
import * as stepper from './stepper.js'; // changed the import to work with es6 modules

/**
 * added the 'export default' to this
 */
export default class ModalMain extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        this.game = this.getAttribute('game');
        this.stepper = this.getAttribute('stepper');

        this.shadowRoot.innerHTML = `
        <style>
            .modal {
                position: absolute;
                display: flex;
                flex-flow: column;

                background-color: #015294;

                width: 100%;
            }

            .modal__content-wrapper {
                margin: 0 auto;
            }

            .modal__content {
                text-align: center;
                color: white;
                padding: 0 2.4rem;
            }

            .modal__content-heading {
                margin-top: 2.4rem;
            }

            .modal__actions {
                margin-top: 2.4rem;
            }

            .modal__button {
                background-color: #C0CF30;
                border: none;
                border-radius: 8px;
                color: inherit;
                cursor: pointer;
                font-size: $font-size-xl;
                font-weight: 400;
                height: 48px;
                padding: 8px 16px;
                text-transform: uppercase;
                transition: 0.25s background-color ease-in-out;
            }

            .modal__text {
                margin-top: 2.4rem;
            }

            *[data-is-visible="true"] {
                display: inline-block !important;
            }

            *[data-is-visible="false"] {
                display: none !important;
            }
        </style>
            <div class="modal">
                <div class="modal__content-wrapper">
                    <div class="modal__content">
                        <slot name="content-heading">
                            <h2 class="modal__content-heading">Default Text</h2>
                        </slot>
                        ${(() => {
                            if (this.game === 'true') {
                                return `<div class="modal__game">
                                    <div class="modal__game-content">
                                        ${(() => {
                                            if (this.stepper === 'enabled') {
                                                return `
                                                    <modal-stepper step="0" data-is-visible="false">
                                                        <span slot="step-1-text">Guess</span>
                                                        <span slot="step-2-text">Share</span>
                                                        <span slot="step-3-text">Finish</span>
                                                    </modal-stepper>
                                                `;
                                            } else {
                                                return ``;
                                            }
                                        })()}
                                        <div class="modal__text">
                                            <div class="step" data-is-visible="true">
                                                <slot name="game-content-step-0">Invalid slot name. Please use game-content in the slot name.</slot>
                                            </div>
                                            <div class="step" data-is-visible="false">
                                                <slot name="game-content-step-1">Invalid slot name. Please use game-content in the slot name.</slot>
                                            </div>
                                            <div class="step" data-is-visible="false">
                                                <slot name="game-content-step-2">Invalid slot name. Please use game-content in the slot name.</slot>
                                            </div>
                                            <div class="step" data-is-visible="false">
                                                <slot name="game-content-step-3">Invalid slot name. Please use game-content in the slot name.</slot>
                                            </div>
                                        </div> 
                                    </div>
                                </div>`;
                            } else if (this.game === 'false') {
                                return `<div class="modal__text">
                                    <slot name="basic-content">Invalid slot name. Please use basic-content in the slot name.</slot>
                                `;
                            } else {
                                return `<span>Invalid attribute value. Please use true or false in the game attribute.</span>`;
                            }
                        })()}
                        <div class="modal__actions">
                            <button class="modal__button" step="0" type="button" aria-label="">
                                ${(() => {
                                    if (this.game === 'true') return `Play Now`;
                                    else return `Next`;
                                })()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        let el = this.shadowRoot.querySelectorAll('.step');
        let stepper, stepperStep;

        let button = this.shadowRoot.querySelector('.modal__button');
        if (this.shadowRoot.querySelector('modal-stepper') != undefined) {
            stepper = this.shadowRoot.querySelector('modal-stepper');
        }

        button.addEventListener('click', function() {
            let step = button.getAttribute('step');
            if (stepper != undefined) stepperStep = stepper.getAttribute('step');

            _showHide(step);

            if (step <= el.length - 2) button.setAttribute('step', ++step);
            if (stepper != undefined && stepperStep <= el.length - 2) stepper.setAttribute('step', ++stepperStep);
            if (step == '1' && this.game === 'true') button.innerHTML = 'Next';
            else if (step == '3') button.setAttribute('data-is-visible', 'false');
        });

        function _showHide(step) {
            switch (step) {
                case '0':
                    el[0].setAttribute('data-is-visible', 'false');
                    el[1].setAttribute('data-is-visible', 'true');
                    if (stepper != undefined) stepper.setAttribute('data-is-visible', 'true');
                    break;
                case '1':
                    el[1].setAttribute('data-is-visible', 'false');
                    el[2].setAttribute('data-is-visible', 'true');
                    break;
                case '2':
                    el[2].setAttribute('data-is-visible', 'false');
                    el[3].setAttribute('data-is-visible', 'true');
                    break;
                default:
                    break;
            }
        }
    }

    static get observedAttributes() {
        return ['game', 'stepper'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.table({ name, oldVal, newVal });
    }
    // attributeChangeCallback() {
    //     console.log('hey');
    // }

    // attributeChangeCallback() {}

    adoptedCallback() {}

    disconnectedCallBack() {}
}

customElements.define('modal-main', ModalMain);
