export default class Stepper extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        this.step = this.getAttribute('step');

        this.shadowRoot.innerHTML = `
            <style>
                .stepper {
                    display: flex;
                    flex-flow: row nowrap;
                    margin: 2.4rem auto 0 auto;
                    width: 450px;
                    position: relative;
                    overflow: hidden;
                }

                .stepper__step {
                    width: 100%;
                }

                .stepper__step-text {
                    padding-bottom: 1.5rem;
                    position: relative;
                    width: 100%;
                }

                .stepper__icon {
                    align-content: center;
                    align-items: center;
                    background-image: url("http://www.coloniallife.com/-/media/CL/campaign/UofSC/football2019/grey-dot.ashx");
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    display: flex;
                    height: 22px;
                    justify-content: center;
                    margin: 0.8rem auto 0 auto;
                    position: initial;
                    width: 22px;
                }

                .stepper__bar:after {
                    border-top: 1px solid #5b7183;
                    content: "";
                    position: absolute;
                    margin-left: 30px;
                    width: 20%;
                }

                .stepper__bar--last:after {
                    border: none;
                    content: none;
                }
            </style>
            <div class="stepper">

                <div class="stepper__step">
                    <slot name="step-1-text">
                        <span
                            id="step-1"
                            class="stepper__step-text"
                            >Default Text</span
                        >
                    </slot>
                    <div
                        id="icon-step-1"
                        class="stepper__icon"
                    >
                        <span
                            class="stepper__bar"
                        ></span>
                    </div>
                </div>

                <div class="stepper__step">
                    <slot name="step-2-text">
                        <span class="stepper__step-text"
                            >Default Text</span
                        >
                    </slot>
                    <div class="stepper__icon">
                        <span
                            class="stepper__bar"
                        ></span>
                    </div>
                </div>

                <div class="stepper__step">
                    <slot name="step-3-text">
                        <span class="stepper__step-text"
                            >Default Text</span
                        >
                    </slot>
                    <div
                        class="stepper__icon stepper__icon--last"
                    >
                        <span
                            class="stepper__bar stepper__bar--last"
                        ></span>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {}

    static get observedAttributes() {
        return ['step'];
    }
    // attributeChangeCallback() {
    //     console.log('hey');
    // }
    attributeChangedCallback(name, oldVal, newVal) {
        console.table({ name, oldVal, newVal });
    }

    adoptedCallback() {}

    disconnectedCallBack() {}
}

customElements.define('modal-stepper', Stepper);
