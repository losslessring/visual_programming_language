import { Connection } from "../Connection/Connection.js";
export class NodesConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
        this.nodes = [];
    }
    addNode(node) {
        this.nodes.push(node);
    }
    getNodes() {
        return this.nodes;
    }
    createConnection({ fromElement, toElement }) {
        var _a;
        const fromId = fromElement.getAttribute('data-node_id');
        const toId = toElement.getAttribute('data-node_id');
        const connection = new Connection({ id: `${fromId}_${toId}`, fromElement, toElement });
        connection.initializeDraw(this.workspace);
        connection.draw();
        (_a = this.connections) === null || _a === void 0 ? void 0 : _a.push(connection);
        // console.log(this.nodes.find((node: any) => node.getId() === Number(fromId)))
        // console.log(this.nodes.find((node: any) => node.getId() === Number(toId)))
        // console.log(this.nodes)
        const outputFromNode = this.nodes.find((node) => node.getId() === Number(fromId));
        const inputToNode = this.nodes.find((node) => node.getId() === Number(toId));
        if (inputToNode) {
            outputFromNode === null || outputFromNode === void 0 ? void 0 : outputFromNode.setOutput(inputToNode);
        }
        console.log(this.nodes);
    }
    getConnections() {
        return this.connections;
    }
    setInput(e) {
        if (this.output) {
            const currentFromElement = this.output.target;
            const currentToElement = e.target;
            // console.log(currentFromElement.id)
            // console.log(currentToElement.id)
            // console.log(this.getConnections())
            if (!this.getConnections().find(connection => connection.fromElement.id === currentFromElement.id && connection.toElement.id === currentToElement.id)) {
                this.createConnection({ fromElement: this.output.target, toElement: e.target });
            }
            this.setOutput(undefined);
        }
    }
    setOutput(target) {
        this.output = target;
    }
}
