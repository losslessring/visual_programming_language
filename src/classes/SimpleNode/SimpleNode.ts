export class SimpleNode {
    public id: number
    public input: SimpleNode | undefined
    public output: SimpleNode | undefined
    public data: any
    public func: any

    constructor({id}: any) {
        this.id = id
    }
}