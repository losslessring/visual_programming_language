export class Node {
    constructor(setup) {
        this.id = setup.id;
        this.positionX = setup.positionX;
        this.positionY = setup.positionY;
        this.height = setup.height;
        this.width = setup.width;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
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
        this.output = node;
    }
    getRenderProps() {
        return {
            id: this.id,
            positionX: this.positionX,
            positionY: this.positionY,
            height: this.height,
            width: this.width
        };
    }
    print() {
        console.log(`this.positionX: ${this.positionX} this.positionY: ${this.positionY}`);
    }
}
