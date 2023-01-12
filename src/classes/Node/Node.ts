import { Container } from "src/interfaces/Container/Container.js"

export class Node implements Container {
    private positionX: number
    private positionY: number

    constructor(position: { positionX: number; positionY: number }) {
        this.positionX = position.positionX
        this.positionY = position.positionY
    }

    setPositionX(x: number): void {
        this.positionX = x
    }

    setPositionY(y: number): void {
        this.positionY = y
    }

    setSizeX(arg: number): void {

    }

    setSizeY(arg: number): void {

    }

    setColor(arg: number): void {
        
    }

    print() {
        console.log(`this.positionX: ${this.positionX} this.positionY: ${this.positionY}`)
    }
}
