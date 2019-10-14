class Template extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = ``;
    }

    connectedCallback() {}

    attributeChangeCallback() {}

    adoptedCallback() {}

    disconnectedCallBack() {}

    _customFunction() {
        // This is how you define new functions
    }
}

customElements.define("template", Template);
