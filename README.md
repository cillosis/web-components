# Web Components Test

Testing writing web components. Includes a WebComponent class to extend and a Template class for wrapping templates.

### DropDown Component

---

The dropdown component provides a generic way to create dropdowns. It extends the `WebComponent` class in the **./base** folder and utilizes the `Template` class in the **./base** folder to wrap the styles and html logic cleanly.

##### DropDown Attribute Options

-   **id** - A unique ID is REQUIRED in order for the component to be able to grab it's own menu items from the light DOM when multiple dropdowns exist.
-   **label** - The text content to display on the menu toggle.
-   **trigger** - Whether the dropdown should be triggered to open via "hover" or "click". The default is "click".
-   **icon** - The icon to use for the toggle.
    -   Image URL - You can pass a URL here to an image you would specifically like to use.
    -   No Icon - Passing the string "false" to the icon attribute will disable it.
    -   Default - If you do not include the attribute or leave it empty, it will load a default SVG chevron.

##### DropDown Item Attribute Options

-   **type** - The type of menu item. Options supported are "link" and "divider".
-   **href** - If the type is "link", then this attribute points at the target URL.

##### Usage Examples

Example of a hovor triggered dropdown with the default icon.

```html
<drop-down id="drop1" label="Hover Here" trigger="hover" icon="">
    <div type="link" href="#?item1">Item 1</div>
    <div type="link" href="#?item2">Item 2</div>
    <div type="link" href="#?item3">Item 3</div>
    <div type="divider"></div>
    <div type="link" href="#?item4">Item 4</div>
</drop-down>
```

Example of a click triggered dropdown with the custom icon.

```html
<drop-down id="drop2" label="Click Here" trigger="click" icon="https://via.placeholder.com/30">
    <div type="link" href="#?item5">Item 5</div>
    <div type="link" href="#?item5">Item 6</div>
    <div type="link" href="#?item6">Item 7</div>
    <div type="divider"></div>
    <div type="link" href="#?item8">Item 8</div>
</drop-down>
```
