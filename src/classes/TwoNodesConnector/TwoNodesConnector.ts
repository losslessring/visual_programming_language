import { Connection } from "../Connection/Connection.js"

export class TwoNodesConnector {

    private input: MouseEvent | undefined
    private output: MouseEvent | undefined
    private workspace: any
    private connections: Connection[]


    constructor({workspace}: any) {
        this.workspace = workspace
        this.connections = []
    }

    private createConnection({fromElement, toElement}: any) {
        const id = Math.floor(100000000 + Math.random() * 900000000)
        
        const connection = new Connection({id, fromElement, toElement})
        connection.initializeDraw(this.workspace)
        connection.draw()
        this.connections?.push(connection)
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
