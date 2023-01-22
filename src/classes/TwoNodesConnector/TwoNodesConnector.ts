export class TwoNodesConnector {

    private input: MouseEvent | undefined
    private output: MouseEvent | undefined
    
    public onConnection: Function | undefined

    constructor(f: Function) {
        this.onConnection = f
    }

    setInput(e: any) { 

        if (this.output) {
            this.onConnection?.({fromElement: this.output.srcElement, toElement: e.srcElement})
            this.setOutput(undefined)
            
        }
        
    }

    setOutput(target: any) {
        this.output = target
    }
    
}
