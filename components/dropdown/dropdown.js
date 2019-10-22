import Template from '../base/template';
import WebComponent from '../base/webcomponent';

/**
 * Build Template
 *
 * Wrap template build inside a function so we can pass the component context through
 * @param {WebComponent}
 */
const _DropDownTemplate = function (context) {

    const options = {
        toggleHeight: "4.7rem",
        menuHeight: "4.8rem", // Account for borders
        colors: {
            toggleBackground: '#335E7A', // SLATE D1
            toggleText: '#FFFFFF', // WHITE
            menuBorder: '#EAEEF1', // MYSTICK GREY L3
            menuBackground: '#F6F8FA', // MYSTICK GREY L2
            menuText: '#335E7A', // SLATE D1
            menuHoverBackground: '#EAEEF1', // MYSTICK GREY L3
            menuHoverText: '#335E7A', // SLATE D1
        }
    };

    return new Template(context)
        .setStyle(/*css*/`
            *, *:after {
                box-sizing: border-box;
            }
            :host {
                display: flex;
                flex-direction: column;
                width: auto;
                padding: 0rem;
                border: 0px;
            }
            :host([hidden]) { display: none }
            .ux-dropdown {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
            }
            .ux-dropdown__toggle {
                display: flex;
                flex-direction: row;
                width: 100%;
                padding: 0rem;
                background-color: ${options.colors.toggleBackground};
                color: ${options.colors.toggleText};
                border: 1px solid ${options.colors.toggleBackground};
                height: ${options.toggleHeight};
            }
            .ux-dropdown__toggle__label {
                display: inline-block;
                width: 90%;
                color: ${options.colors.toggleText};
                margin: 0.8rem;
                line-height: 3rem;
            }
            .ux-dropdown__toggle:hover {
                cursor: pointer;
            }
            .ux-dropdown__toggle__icon {
                display: inline-block;
                width: 10%;
                text-align: right;
                color: ${options.colors.toggleText};
                margin: 0.8rem;
                -webkit-transform:rotate(-360deg);
                -moz-transform: rotate(-360deg);
                -ms-transform: rotate(-360deg);
                -o-transform: rotate(-360deg);
                transform: rotate(-360deg);
                transition: transform 150ms ease;
            }
            .ux-dropdown__toggle__icon svg {
                fill: ${options.colors.toggleText};
                max-height: 3rem;
            }
            .ux-dropdown--open .ux-dropdown__toggle__icon {
                -webkit-transform:rotate(-180deg);
                -moz-transform: rotate(-180deg);
                -ms-transform: rotate(-180deg);
                -o-transform: rotate(-180deg);
                transform: rotate(-180deg);
                transition: transform 150ms ease;
            }
            .ux-dropdown__menu {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                position: absolute;
                top: ${options.toggleHeight};
                width: 100%;
                padding: 0rem;
                border-width: 0px;
                max-height: 0;
                visibility: hidden;
                -webkit-animation: slideUp 0.3s ease-out forwards;
                -moz-animation: slideUp 0.3s ease-out forwards;
                -o-animation: slideUp 0.3s ease-out forwards;
                animation: slideUp 0.3s ease-out forwards;
            }
            .ux-dropdown--open > .ux-dropdown__menu {
                overflow: initial;
                z-index: 10000;
                visibility: visible;
                overflow-y: hidden;
                -webkit-animation: slideDown 10s ease-out forwards;
                -moz-animation: slideDown 10s ease-out forwards;
                -o-animation: slideDown 10s ease-out forwards;
                animation: slideDown 10s ease-out forwards;
            }
            .ux-dropdown__menu__item {
                display: flex;
                flex-direction: column;
                width: 100%;
                background-color: ${options.colors.menuBackground};
                color: ${options.colors.menuText};
                list-style: none;
                margin: 0rem;
                padding: 0rem;
            }
            .ux-dropdown__menu__item:hover {
                background-color: ${options.colors.menuHoverBackground};
                color: ${options.colors.menuHoverText};
                cursor: pointer;
            }
            .ux-dropdown__menu__divider {
                display: flex;
                flex-direction: column;
                width: 100%;
                background-color: ${options.colors.menuBackground};
                color: ${options.colors.menuText};
                list-style: none;
                margin: 0rem;
                padding: 0rem;
            }
            .ux-dropdown__menu__divider hr {
                border: 1px solid transparent;
                border-top: 1px solid ${options.colors.menuBorder};
                height: 1px;
                width: 100%;
                margin: 0rem;
            }
            .ux-dropdown__menu__item span,
            .ux-dropdown__menu__item a {
                margin: 0.8rem;
            }
            .ux-dropdown__menu__item a,
            .ux-dropdown__menu__item a:hover,
            .ux-dropdown__menu__item a:visited,
            .ux-dropdown__menu__item a:active {
                text-decoration: none;
                color: ${options.colors.menuText};
            }
            @keyframes slideDown {
                from {
                    max-height: 0;
                }
                to {
                    max-height: 5000px;
                }
            }
            @keyframes slideUp {
                from {
                    max-height: 5000px;
                }
                to {
                    max-height: 0px;
                }
            }
        `)
        .setHtml(/*html*/`
            <div class="ux-dropdown">
                <div class="ux-dropdown__toggle">
                    <div class="ux-dropdown__toggle__label" data-label>
                        ${context.getAttribute('label')}
                    </div>
                    <div class="ux-dropdown__toggle__icon" data-icon>
                        ${(context.getAttribute('icon') == "false" ? "" : context.getAttribute('icon'))}
                    </div>
                </div>
                <div class="ux-dropdown__menu"></div>
            </div>
        `);

};

class DropDown extends WebComponent {
    /**
     * Attributes MUST be set here in order to use within components onAttributeChanged event
     */
    static get observedAttributes() {
        return [
            'id',
            'label',
            'icon',
            'trigger'
        ];
    }
    /**
     * Initialize Component
     *
     * @description We setup the dynamic icon, initialize the template, set the component mode, and then
     *              render the template content with dynamic contextual parameters.
     */
    constructor() {
        //Parent initialization
        super();

        // Dynamically set the icon
        this._setIcon(this.getAttribute('icon'));

        // Set the template instance to be used with component. We pass this component to the template for
        // variable context, which allows for dynamic templating.
        this.setTemplate(_DropDownTemplate(this));

        // Set the default mode of the component to open. There is almost never a reason to use "closed".
        this.setMode("open");

        // Make the template render with it's context
        this.template.render();
    }

    /**
     * On Connect
     *
     * @description This is a callback from the parent when "connectedCallback" is called. The WebComponent we extend
     *              handles the initialization of the template and attaches the shadow DOM for us. Here we want to
     *              get element references, load the menu items, and setup event listeners.
     */
    onConnect() {
        console.log('[COMPONENT_NOTICE] <drop-down> component connected.');

        // Init
        this._id = this.getAttribute('id');
        this._toggleTrigger = this.getAttribute('trigger');
        this._mouseOnElement = false;

        // Store Element References
        this.$dropDown = this._shadowRoot.querySelector('.ux-dropdown');
        this.$dropDownToggle = this._shadowRoot.querySelector('.ux-dropdown__toggle');
        this.$dropDownMenu = this._shadowRoot.querySelector('.ux-dropdown__menu');

        // Load items
        this._loadMenuItems();

        // Set open close handler based on the trigger mode: "click" or "hover". Click is default.
        if (this._toggleTrigger == "hover") {
            this.$dropDown.addEventListener('mouseover', this._handleMouseOver.bind(this));
            this.$dropDown.addEventListener('mouseout', this._handleMouseOut.bind(this));
        } else {
            this.$dropDownToggle.addEventListener('click', this._toggleOpen.bind(this));
        }
    }

    /**
     * On Disconnect
     *
     * @description This is a callback from the parent when "disconnectedCallback" is called. We can perform any 
     *              cleanup we need to do here.
     */
    onDisconnect() {
        console.log('[COMPONENT_NOTICE] <drop-down> component disconnected.');
    }

    /**
     * On Attribute Changed
     *
     * @description This is a callback from the parent when "attributeChangedCallback" is called. The parent
     *              WebComponent class handles notifying the template of attribute updates and any dynamic
     *              updates by using data-* attributes matching the attribute name.
     */
    onAttributeChanged(name, oldVal, newVal) {
        console.log(`[COMPONENT_NOTICE] <drop-down> component attribtute changed: ${name} changed from "${oldVal}" to "${newVal}"`);
    }

    /**
     * On Adopted
     *
     * @description This is a callback from the parent when "adoptedCallback" is called. This occurs when component
     *              moves to another document, such as an iframe, using adoptNode(). This is not a common behavior
     *              and handling this method within your component is often unnecessary.
     */
    onAdopted() {
        console.log('[COMPONENT_NOTICE] <drop-down> component adopted.');
    }

    /**
     * Toggle Menu Class to Open Menu
     *
     * @description Toggle the CSS class on the dropdown in order to open/close the menu.
     * @param {Event} event
     * @param {Boolean} force An option to force the toggle despite mouse position
     */
    _toggleOpen(event, force) {
        if (force) {
            this._mouseOnElement = false;
        }
        this.$dropDown.classList.toggle('ux-dropdown--open');
    }

    _handleMouseOver(e) {
        e.stopPropagation();
        if (this._mouseOnElement === false) {
            this._mouseOnElement = true;
            this._toggleOpen();
        }
    }

    _handleMouseOut(e) {
        e.stopPropagation();
        if (this._mouseOnElement === true) {
            this._mouseOnElement = false;
            this._toggleOpen();
        }
    }

    /**
     * Set Toggle Icon
     *
     * @param {String} icon An image path, "false" to disable, or empty to default to chevron
     */
    _setIcon(icon) {

        // No icon option
        if (icon === false || icon === "false") {
            return;
        }

        // Image source option
        if (typeof icon === 'string' && icon.length > 1) {
            this.setAttribute('icon', `
                <img src="${icon}" alt="Toggle Dropdown" />
            `);
            return;
        }

        // Default option -- uses SVG chevron that Google Material UI uses
        this.setAttribute('icon', `
            <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
        `);
    }

    /**
     * Load Menu Items
     *
     * @description Pull in the elements inside the <drop-down> and initialize them as menu items.
     */
    _loadMenuItems() {
        // IMPORTANT NOTE: A unique ID is REQUIRED to be placed as an attribute on the component
        // or loading the menu items will not work correctly!
        const items = document.querySelectorAll(`drop-down[id="${this._id}"] > *`);
        if (items.length > 0) {
            for (const item of items) {

                // Set handler to close dropdown when item is selected
                const that = this;
                item.onclick = function (event) {
                    that._toggleOpen(event, true);
                    return event;
                }

                if (item.getAttribute('type') === "divider") {
                    // Divider type
                    item.className = "ux-dropdown__menu__item ux-dropdown__menu__divider";
                    item.innerHTML = "<hr />";
                } else if (item.getAttribute('type') === "link") {
                    // Link type
                    let href = item.getAttribute('href');
                    item.className = "ux-dropdown__menu__item";
                    item.innerHTML = "<a href=\"" + href + "\">" + item.innerHTML + "</a>";
                } else {
                    item.className = "ux-dropdown__menu__item";
                    item.innerHTML = "<span>" + item.innerHTML + "</span>";
                }

                this.$dropDownMenu.appendChild(item);

            }
        } else {
            console.log('[COMPONENT_ERROR] <drop-down> component cannot initialize with empty items.');
        }
    }
}

WebComponent.addCustomElement('drop-down', DropDown);