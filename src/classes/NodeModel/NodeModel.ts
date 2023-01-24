import { Container } from "src/interfaces/Container/Container.js"
import { Node } from "src/interfaces/Node/Node"
import { NodeSetup } from "src/interfaces/NodeSetup/NodeSetup.js"

export class NodeModel implements Node {
    
    private id: number
    private positionX: number
    private positionY: number
    private height: number
    private width: number
    private input: Node | undefined
    private output: Node | undefined

    

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

    getInput() {
        return this.input
    }

    setInput(node: Node) {
        this.input = node
    }

    getOutput() {
        return this.output
    }

    setOutput(node: Node) {
        this.output = node
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
