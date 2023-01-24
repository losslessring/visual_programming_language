
import { NodesConnector } from "./classes/NodesConnector/NodesConnector.js"
import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js"




const workspace = document.querySelector("#workspace")

const nodesConnector = new NodesConnector({workspace})

const node0 = new NodeBuilder({nodesConnector, positionX: 90, positionY: 180})
const node1 = new NodeBuilder({nodesConnector, positionX: 350, positionY: 250})
const node2 = new NodeBuilder({nodesConnector, positionX: 350, positionY: 100})

