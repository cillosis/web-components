import Template from '../base/template';
import WebComponent from '../base/webcomponent';

/**
 * Build Template
 *
 * Wrap template build inside a function so we can pass the component context through
 * @param {WebComponent}
 */
const _CCPATemplate = function (context) {

    const options = {};

    return new Template(context)
        .setStyle(/*css*/`
            *, *:after {
                box-sizing: border-box;
            }
            :host {
                display: flex;
                flex-direction: row;
                justify-content: center;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: #e4e4e4;
                color: #ffffff;
                padding: 10px;
                text-align: center;
            }
            :host([hidden]) { display: none }
            .ux-ccpa-footer {
                display: flex;
                width: 100%;
                justify-content: center;
                line-height: 5rem;
            }
            .ux-ccpa-footer__logo {
                display: flex;
                justify-content: flex-end;
                width: 50%;
                text-align: right;
                margin-right: 5px;
            }
            .ux-ccpa-footer__link {
                display: flex;
                justify-content: flex-start;
                width: 50%;
                text-align: left;
                margin-left: 5px;
            }
            .ux-ccpa-footer__link a,
            .ux-ccpa-footer__link a:hover,
            .ux-ccpa-footer__link a:visited,
            .ux-ccpa-footer__link a:active {
                color: #335e7a;
            }
        `)
        .setHtml(/*html*/`
            <div class="ux-ccpa-footer">
                <div class="ux-ccpa-footer__logo">
                    <img
                        src="https://www.sos.ca.gov/packages/theme_sos/themes/theme_sos/css/i/seal.png"
                        width="50px"
                        height="50px"
                    >
                </div>
                <div class="ux-ccpa-footer__link">
                    <a
                        href="https://www.oag.ca.gov/sites/all/files/agweb/pdfs/privacy/ccpa-proposed-regs.pdf"
                        target="_blank"
                    >
                        Do Not Sell My Personal Information
                    </a>
                </div>
            </div>
        `);

};

class CCPAFooter extends WebComponent {
    /**
     * Attributes MUST be set here in order to use within components onAttributeChanged event
     */
    static get observedAttributes() {
        return [];
    }
    /**
     * Initialize Component
     */
    constructor() {
        super();
        this.setTemplate(_CCPATemplate(this));
        this.template.render();
    }

    /**
     * On Connect
     */
    onConnect() {
        console.log('[COMPONENT_NOTICE] <ccpa-footer> component connected.');
    }
}

WebComponent.addCustomElement('ccpa-footer', CCPAFooter);