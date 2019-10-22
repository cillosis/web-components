class Template extends Object {
    constructor() {
        super();
        this.template = document.createElement('template');
        return this;
    }
    setStyle(style) {
        this.style = style;
        this.immutableStyle = style;
        return this;
    }
    setHtml(html) {
        if (typeof html == 'string') {
            this.html = html;
            this.immutableHtml = html;
        } else if (typeof html == 'function') {
            this.html = html();
            this.immutableStyle = this.html;
        }
        return this;
    }
    setAttributes(attributes) {
        if (typeof attributes == 'object') {
            // Merge attributes
            this.attributes = { ...this.attributes, ...attributes };
            this.render();
        }
    }
    getAttribute(name) {
        return this.attributes[name] || null;
    }
    getTemplate() {
        return this.template;
    }
    getCloned() {
        return this.template.content.cloneNode(true);
    }
    updateAttributePlaceholders() {
        const that = this;
        const matcher = /({{)([a-zA-Z0-9\-_]*)(}})/gi;
        if (that.attributes) {
            if (matcher.test(this.immutableHtml)) {
                const newHtml = this.immutableHtml.replace(matcher, function ($match, $open, $attribute, $close) {
                    return that.attributes[$attribute];
                });
                this.html = newHtml;
            }
        }

    }
    render() {
        this.updateAttributePlaceholders();
        this.template.innerHTML = `<style>${this.style}</style>${this.html}`;
        return this;
    }
}
export default Template;