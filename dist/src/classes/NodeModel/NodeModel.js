export class NodeModel {
    constructor(setup) {
        this.id = setup.id;
        // this.positionX = setup.positionX
        // this.positionY = setup.positionY
        // this.height = setup.height
        // this.width = setup.width
        this.value = setup.value;
        this.output = [];
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setRoot(flag) {
        this.root = flag;
    }
    isRoot() {
        return this.root;
    }
    getInput() {
        return this.input;
    }
    setInput(node) {
        this.input = node;
    }
    getOutput() {
        return this.output;
    }
    setOutput(node) {
        var _a;
        (_a = this.output) === null || _a === void 0 ? void 0 : _a.push(node);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
