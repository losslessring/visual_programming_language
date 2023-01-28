var _a;
import { NodesConnector } from "./classes/NodesConnector/NodesConnector.js";
import { NodeBuilder } from "./classes/NodeBuilder/NodeBuilder.js";
const workspace = document.querySelector("#workspace");
const nodesConnector = new NodesConnector({ workspace });
const node0 = new NodeBuilder({ nodesConnector, root: true, positionX: 90, positionY: 180 }).getNode();
const node1 = new NodeBuilder({ nodesConnector, positionX: 350, positionY: 250 }).getNode();
const node2 = new NodeBuilder({ nodesConnector, positionX: 350, positionY: 100 }).getNode();
const nodes = [node0, node1, node2];
console.log(nodes);
// console.log(nodes.filter(node => node.isRoot() === true))
// console.log(document.getElementById(`eval_button`))
(_a = document.getElementById(`eval_button`)) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseup", (e) => {
    // const rootNode = nodes.find(node => node.isRoot() === true)
    // console.log(rootNode?.getOutput())
    evalNodeGraph(node0, node0.getValue());
});
function evalNodeGraph(node, accumulator) {
    if (node.output.length === 0) {
        // return value
        //return console.log(node.value)
        //return accumulator
        const evaluated = eval(node.value);
        console.log(`Type of evaluated node value type is ${typeof evaluated}`);
        console.log(`Value of evaluated node is ${evaluated}`);
        if (typeof evaluated === "function") {
            const newValueAfterFunctionApply = evaluated(accumulator);
            console.log(`Final value is ${newValueAfterFunctionApply}`);
            return newValueAfterFunctionApply;
        }
        else {
            console.log(`Final value is ${evaluated}`);
            return evaluated;
        }
    }
    const evaluated = eval(node.value);
    console.log(`Type of evaluated node value type is ${typeof evaluated}`);
    console.log(`Value of evaluated node is ${evaluated}`);
    if (typeof evaluated === "function") {
        const newValueAfterFunctionApply = evaluated(accumulator);
        node.output.forEach((childNode) => {
            evalNodeGraph(childNode, newValueAfterFunctionApply);
        });
    }
    else {
        node.output.forEach((childNode) => {
            evalNodeGraph(childNode, evaluated);
        });
    }
}
