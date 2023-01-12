import { Container } from "src/interfaces/Container/Container.js"

export class Node implements Container {
    private positionX: number
    private positionY: number
    private height: number
    private width: number
    private renderFunction: Function

    constructor(setup: { positionX: number; positionY: number; height: number; width: number; renderFunction: Function }) {
        this.positionX = setup.positionX
        this.positionY = setup.positionY
        this.height = setup.height
        this.width = setup.width,
        this.renderFunction = setup.renderFunction
    }

    setPositionX(x: number): void {
        this.positionX = x
    }

    setPositionY(y: number): void {
        this.positionY = y
    }

    setHeight(arg: number): void {

    }

    setWidth(arg: number): void {

    }

    setColor(arg: number): void {

    }

    setRenderFunction(renderFunction: Function) {
        this.renderFunction = renderFunction
    }

    render() {
        return this.renderFunction({
            positionX: this.positionX,
            positionY: this.positionY,
            height: this.height,
            width: this.width
        })
    }

    print() {
        console.log(`this.positionX: ${this.positionX} this.positionY: ${this.positionY}`)
    }
}
