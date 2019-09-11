/**
 * The advantages of using and defining web componets is that we can have a library of ready to use UI items that we can plug into any code, including Sitecore. It will be a lot of legwork, but increase our consistency and productivity.
 * These web components are self contained in the shadow DOM, therefore the styles that we apply to other elements will not override our custom components. The advantage to this is that we can create different "themes" (I.E. Unum or CL)
 * We can even import external stylesheets and use class names to apply the styles we need.
 *
 * One major drawback is currently this solution DOES NOT work in IE11 or Edge. It is still in development BUT we can use Polyfills in the meantime that are smart enough to know when to be applied. I'm still researching this.
 * Another drawback may be a performance dip. See article -> https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/
 *
 * A maybe drawback is that it will be HIGHLY beneficial to create documentation about our components and what slots/attributes they take.
 *
 * Once we have our componenets built, we can distribute using CDN anywhere we need it.
 *
 * Example/Learning : https://blog.bitsrc.io/web-components-without-a-framework-lets-build-a-modal-a450a4536340
 */

class CardsTest extends HTMLElement {
    // This where we define all of properties & markup.
    constructor() {
        // Default initializations
        super();

        // We want to use the Shadow DOM here because this is what allows us to "hide" our componenet from outside stylings or any other manipulations.
        const shadowRoot = this.attachShadow({ mode: "open" });

        // Initialize our attributes. We can also assign these to variables
        this.text = this.getAttribute("text");
        this.link = this.getAttribute("link");

        // We can do our styles (imported or inline) + markup in templated however we need
        this.shadowRoot.innerHTML = `
            <style>
                @import url("https://unumux.github.io/uofsc/main.9f5e0934.css");

                ::slotted(span) {
                    font-size: 2.8rem;

                }
            </style>
                <h2 class="card__sec-heading">${this.text}</h2>
                <div class="card__overlay">
                    <a class="card tabbable" href=${this.link}>
                        <div class="card__graphic"></div>
                        <div class="card__content">
                            <slot name="card-heading">
                                <h1 class="card__heading">Default Text</h1>
                            </slot>
                            <div class="card__summary">
                                <slot name="card-content">
                                    <p>Default Text</p>
                                </slot>
                            </div>
                        </div>
                        <ul class="card__actions">
                            <li class="card__action">
                                <slot name="card-action-text">
                                    <span class="card__link">Default Text</span>
                                </slot>
                                <slot name="card-action-icon">
                                    <img class="card__action-img" src="" alt="" />
                                </slot>
                            </li>
                        </ul>
                    </a>

                    <a class="card card--inverse tabbable" href="https://www.coloniallife.com/employers" target="_blank">
                        <div class="card__graphic card__graphic--employers"></div>
                        <div class="card__content">
                            <h1 class="card__heading">
                                Want to provide extra benefits protection for
                                your employees?
                            </h1>
                            <div class="card__summary">
                                <p>
                                    Your employees are the backbone of your
                                    company. When the unexpected happens, you
                                    want to ensure they are protected, recover
                                    and return to work happy and healthy. Find
                                    out how voluntary benefits can protect your
                                    employees at no cost to you.
                                </p>
                            </div>
                        </div>
                        <ul class="card__actions">
                            <li class="card__action">
                                <span class="card__link">Start offering extra protection</span>
                                <img class="card__action-img"
                                    src="https://www.coloniallife.com/-/media/CL/campaign/UofSC/football2019/arrow.ashx"
                                    alt="Go to the employers site" />
                            </li>
                        </ul>
                    </a>
                </div>
        `;
    }

    /**
     * Life Cycle callbacks. More research is needed to see the full breadth of how these helper functions can be used to our advantage
     *
     * More info:
     * https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
     * https://stackoverflow.com/questions/40492330/difference-between-constructor-and-connectedcallback-in-custom-elements-v1
     */

    // Called after the custom element is connected to the DOM
    connectedCallback() {
        // Typical JS calls such as action listeners
        this._cardLink = this.shadowRoot.querySelector(".card");
        this._cardLink.addEventListener("click", this._alert.bind(this));
    }

    // When the custom elements attributes are changed
    attributeChangeCallback() {}

    // When the custom element is disconnected from the DOM
    disconnectedCallback() {
        // We can remove anything that may interfere with usability when the custom element is no longer in the DOM
        this._cardLink.removeEventListener("click", this._alert);
    }

    // When the custom element is moved to a new document
    adoptedCallback() {}

    // Custom Functions
    _alert() {
        alert("Click!");
    }
}
customElements.define("cards-test", CardsTest);

/** Inline styling
  * h2 {
        align-content: center;
        align-items: center;
        display: flex;
        font-size: 1.9rem;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        width: 100%;
    }
    
    h2:before,
    h2:after {
        border-top: 1px solid white;
        content: "";
        flex-basis: 3.8%;
    }
    
    h2:before {
        margin-right: 0.8rem;
    }
    
    h2:after {
        margin-left: 0.8rem;
    }
  */
