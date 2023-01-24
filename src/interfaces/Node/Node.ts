import { NodeSetup } from "../NodeSetup/NodeSetup.js"

export interface Node {

    getId(): number

    setId(id: number): void

    getInput(): Node | undefined

    setInput(node: Node): void

    getOutput(): Node[] | undefined

    setOutput(node: Node): void


    // print(): void
}
