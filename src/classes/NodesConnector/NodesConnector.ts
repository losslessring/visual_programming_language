import { Node } from "src/interfaces/Node/Node.js"
import { Connection } from "../Connection/Connection.js"
import { NodeModel } from "../NodeModel/NodeModel.js"

export class NodesConnector {

    private input: MouseEvent | undefined
    private output: MouseEvent | undefined
    private workspace: any
    private connections: Connection[]
    private nodes: Node[]

    constructor({workspace}: any) {
        this.workspace = workspace
        this.connections = []
        this.nodes = []
    }

    public addNode(node: Node) {
        this.nodes.push(node)
    }

    public getNodes() {
        return this.nodes
    }

    private createConnection({fromElement, toElement}: any) {
        

        const fromId = fromElement.getAttribute('data-node_id')
        const toId = toElement.getAttribute('data-node_id')

        
        const connection = new Connection({id: `${fromId}_${toId}`, fromElement, toElement})
        connection.initializeDraw(this.workspace)
        connection.draw()
        this.connections?.push(connection)
        
        // console.log(this.nodes.find((node: any) => node.getId() === Number(fromId)))
        // console.log(this.nodes.find((node: any) => node.getId() === Number(toId)))
        // console.log(this.nodes)
        const outputFromNode = this.nodes.find((node: any) => node.getId() === Number(fromId))
        const inputToNode = this.nodes.find((node: any) => node.getId() === Number(toId))
        if (inputToNode) {
            outputFromNode?.setOutput(inputToNode)
        }
        console.log(this.nodes)
    }

    getConnections() {
        return this.connections
    }


    setInput(e: any) { 
        if (this.output) {

            const currentFromElement = this.output.target as any
            const currentToElement = e.target as any
            
            // console.log(currentFromElement.id)
            // console.log(currentToElement.id)

            // console.log(this.getConnections())
            if (!this.getConnections().find(connection => connection.fromElement.id === currentFromElement.id && connection.toElement.id === currentToElement.id)) {
                this.createConnection({fromElement: this.output.target, toElement: e.target})
            }
            
            this.setOutput(undefined)
            
            
            
        }
        
    }

    setOutput(target: any) {
        this.output = target
    }
    
}
