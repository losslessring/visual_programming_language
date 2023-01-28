import { Connection } from "../Connection/Connection.js";
export class TwoNodesConnector {
    constructor({ workspace }) {
        this.workspace = workspace;
        this.connections = [];
    }
    createConnection({ fromElement, toElement }) {
        var _a;
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const connection = new Connection({ id, fromElement, toElement });
        connection.initializeDraw(this.workspace);
        connection.draw();
        (_a = this.connections) === null || _a === void 0 ? void 0 : _a.push(connection);
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
