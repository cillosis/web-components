import Template from "./template";

class WebComponent extends HTMLElement {
    /**
     * Set Template
     *
     * @description Set the Template object that will be used for the component. This lets us isolate the
     *              composition of the template outside of the component logic.
     * @param {Template} template Instance of Template class.
     * @return {WebComponent} Returns self for method chaining.
     */
    setTemplate(template) {

        // Ensure valid template instance
        if (!template instanceof Template) {
            throw Error('Template must be an instance of the Template class!');
        }

        // Assign template locally
        this.template = template;

        return this;
    }
    /**
     * Set Template
     *
     * @description Set the shadow DOM mode to open or closed. This is not necessary to call if you are ok with an
     *              open mode (highly recommended).
     * @param {String} mode Either "open" or "closed"
     * @return {WebComponent} Returns self for method chaining.
     */
    setMode(mode) {

        // Ensure valid mode
        if (mode !== "open" && mode !== "closed") {
            throw Error('Invalid shadom mode set. Expecting "open" or "closed".');
        }

        // Assign mode locally
        this.mode = mode;

        return this;
    }

    /**
     * Set Attributes
     *
     * @description Set or update attributes in the Template instance.
     * @param {Object} attributes
     */
    setAttributes(attributes) {

        // Pass attributes to the template
        if (this.template instanceof Template) {
            this.template.setAttributes(attributes);
        }

        // Method chaining
        return this;
    }

    /**
     * Connected Callback
     *
     * @description Called when the custom component connects to the DOM. If component inheriting this class
     *              implements an onConnect() method, we will call it.
     */
    connectedCallback() {

        // Ensure we have a template
        if (!this.template instanceof Template) {
            throw Error('Cannot append template to shadow. Please use setTemplate() in the constructor!');
        }

        // Attach component to shadow DOM and append the template
        this._shadowRoot = this.attachShadow({ "mode": (this.mode || "open") });
        this._shadowRoot.appendChild(this.template.getCloned());

        // Call the component's own connectedCallback handler
        if (typeof this.onConnect == 'function') {
            return this.onConnect();
        }
    }

    /**
     * Disconnected Callback
     *
     * @description Called when the custom component disconnects from the DOM. If component inheriting this class
     *              implements an onDisconnect() method, we will call it.
     */
    disconnectedCallback() {
        // Call the component's own disconnectedCallback handler
        if (typeof this.onDisconnect == 'function') {
            return this.onDisconnect();
        }
    }

    /**
     * Attribute Changed Callback
     *
     * @description Automatic callback in web components when an observed attribute is modified as defined in the
     *              "static get observedAttributes()" method on the component. We take the new attribute and pass
     *              it on to the template. If an element contains a data attribute with a matching name, we will
     *              automatically update the value within the shadow DOM. Finally, if the component inheriting this
     *              class implements an onAttributeChanged method, we call it with the values as well.
     * @param {String} name Name of the attribute
     * @param {String} oldValue Previous value of the attribute
     * @param {String} newValue New value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {

        // Pass updated attribute to template
        const newAttributes = {};
        newAttributes[name] = newValue;
        this.setAttributes(newAttributes);

        // If a data-* selector exists, update the value
        this._updateDataElement(name, newValue);

        // Call downstream callback
        if (typeof this.onAttributeChanged == 'function') {
            return this.onAttributeChanged(name, oldValue, newValue);
        }
    }

    /**
     * Adopted Callback
     *
     * @description Called when the custom element is moved from on HTML document to another (such as an iframe)
     *              using the adoptNode() method. Only used in a multi-document context. If the component iheriting
     *              this class implements an onAdopted() method, we will call it.
     */
    adoptedCallback() {
        if (typeof this.onAdopted == 'function') {
            return this.onAdopted();
        }
    }

    /**
     * Update element with data attribute
     *
     * @param {String} name Name of the data-* attribute
     * @param {Mixed} value Value to set in the inner HTML
     */
    _updateDataElement(name, value) {
        // Only update if the shadow root has been defined
        if (this._shadowRoot) {
            const el = this._shadowRoot.querySelector('[data-' + name + ']');
            if (el) {
                el.innerHTML = value;
            }
        }
    }

    /**
     * Add Custom Element
     *
     * @static
     * @description Wrapper around addition of custom elements to the window
     * @param {String} name Name of custom component. Must be lowercase with a hyphen.
     * @param {HTMLElement} element The custom component class
     */
    static addCustomElement(name, element) {
        window.customElements.define(name, element);
    }
}

export default WebComponent;