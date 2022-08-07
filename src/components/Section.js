export default class Section {
    constructor({ renderer }, containerSelector) {
        this._containerSelector = document.querySelector(containerSelector);
        this._renderer = renderer;
    }
    renderItems(items) {
        items.forEach(data => this._renderer(data));
    }

    addItem(element) {
        this._containerSelector.prepend(element);
    }

}