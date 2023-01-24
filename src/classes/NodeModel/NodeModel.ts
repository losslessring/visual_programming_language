import { Container } from "src/interfaces/Container/Container.js"
import { Node } from "src/interfaces/Node/Node"
import { NodeSetup } from "src/interfaces/NodeSetup/NodeSetup.js"

export class NodeModel implements Node {
    
    private id: number
    private root: boolean | undefined
    // private positionX: number
    // private positionY: number
    // private height: number
    // private width: number
    private value: any
    private input: Node | undefined
    private output: Node[] | undefined

    

    constructor(setup: any) {
        
        this.id = setup.id
        // this.positionX = setup.positionX
        // this.positionY = setup.positionY
        // this.height = setup.height
        // this.width = setup.width
        this.value = setup.value
        this.output = []
    }

    getId(){
        return this.id
    }

    setId(id: number) {
        this.id = id
    }

    setRoot(flag: boolean) {
        this.root = flag
    }

    isRoot() {
        return this.root
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
        this.output?.push(node)
    }

    getValue() {
        return this.value
    }

    setValue(value: any) {
        this.value = value
    }



    // getRenderProps() {
    //     return {    
    //         id: this.id,
    //         positionX: this.positionX,
    //         positionY: this.positionY,
    //         height: this.height,
    //         width: this.width
    //     }
    // }

    // print() {
    //     console.log(`this.positionX: ${this.positionX} this.positionY: ${this.positionY}`)
    // }
}
