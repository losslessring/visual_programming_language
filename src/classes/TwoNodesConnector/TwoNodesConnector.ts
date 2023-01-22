import { Connection } from "../Connection/Connection.js"

export class TwoNodesConnector {

    private input: MouseEvent | undefined
    private output: MouseEvent | undefined
    private workspace: any
    private connection: Connection | undefined 
    // public onConnection: Function | undefined

    // constructor(f: Function) {
    //     this.onConnection = f
    // }

    constructor({workspace}: any) {
        this.workspace = workspace
    }

    private createConnection({fromElement, toElement}: any) {
        const id = Math.floor(100000000 + Math.random() * 900000000)
        
        this.connection = new Connection({id, fromElement, toElement})
        this.connection.initializeDraw(this.workspace)
        this.connection.draw()
    }

    getConnection() {
        return this.connection
    }


    setInput(e: any) { 
        console.log(this)
        if (this.output) {
            this.createConnection({fromElement: this.output.srcElement, toElement: e.srcElement})
            this.setOutput(undefined)
            
        }
        
    }

    setOutput(target: any) {
        this.output = target
    }
    
}
