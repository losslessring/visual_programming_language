import { Container } from "src/interfaces/Container/Container.js"
import { NodeSetup } from "src/interfaces/NodeSetup/NodeSetup.js"

export class Node implements Container {
    
    private id: number
    private positionX: number
    private positionY: number
    private height: number
    private width: number

    

    constructor(setup: NodeSetup) {
        
        this.id = setup.id
        this.positionX = setup.positionX
        this.positionY = setup.positionY
        this.height = setup.height
        this.width = setup.width
    }

    getId(){
        return this.id
    }

    setId(id: number) {
        this.id = id
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

    getRenderProps() {
        return {    
            id: this.id,
            positionX: this.positionX,
            positionY: this.positionY,
            height: this.height,
            width: this.width
        }
    }

    print() {
        console.log(`this.positionX: ${this.positionX} this.positionY: ${this.positionY}`)
    }
}
