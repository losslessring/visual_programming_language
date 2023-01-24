
import { NodesConnector } from "./classes/NodesConnector/NodesConnector.js"
import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js"




const workspace = document.querySelector("#workspace")

const nodesConnector = new NodesConnector({workspace})

const node0 = new NodeBuilder({nodesConnector})
const node1 = new NodeBuilder({nodesConnector})
const node2 = new NodeBuilder({nodesConnector})

