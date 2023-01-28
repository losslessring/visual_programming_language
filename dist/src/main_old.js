var _a;
import { NodeModel } from "./classes/NodeModel/NodeModel.js";
import { generateHtmlFromDescription } from "./functions/view/generateHtmlFromDescription/generateHtmlFromDescription.js";
import { dragElement } from "./functions/behaviour/dragElement/dragElement.js";
import { addListenerOnInputForm } from './functions/behaviour/addListenerOnInputForm/addListenerOnInputForm.js';
import { NodesConnector } from "./classes/NodesConnector/NodesConnector.js";
//let message = "Hello New Brave World!"
//console.log(message)
const node0 = new NodeModel({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 100,
    positionY: 200,
    height: 100,
    width: 100,
});
const node1 = new NodeModel({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 350,
    positionY: 220,
    height: 100,
    width: 100,
});
const nodes = [node0, node1];
const workspace = document.querySelector("#workspace");
workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node0.getRenderProps())));
workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node1.getRenderProps())));
//console.log(node0.getId())
//console.log(node1.getId())
const nodesConnector = new NodesConnector({ workspace });
const onDrag = (e) => {
    nodesConnector.getConnections().forEach(connection => connection === null || connection === void 0 ? void 0 : connection.update());
};
dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`), onDrag);
dragElement(document.getElementById(`node_container_${node1.getId().toString()}`), document.getElementById(`node_title_${node1.getId().toString()}`), onDrag);
addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node0.getId().toString()}`),
    input: document.getElementById(`node_code_input_${node0.getId().toString()}`),
    event: 'submit',
    onEventFunction: (inputValue) => console.log(eval(inputValue))
});
addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node1.getId().toString()}`),
    input: document.getElementById(`node_code_input_${node1.getId().toString()}`),
    event: 'submit',
    onEventFunction: (inputValue) => console.log(eval(inputValue))
});
const el0 = document.getElementById(`node_output_${node0.getId().toString()}`);
el0 === null || el0 === void 0 ? void 0 : el0.addEventListener("mousedown", (e) => {
    nodesConnector.setOutput(e);
});
const el1 = document.getElementById(`node_input_${node1.getId().toString()}`);
el1 === null || el1 === void 0 ? void 0 : el1.addEventListener("mouseup", (e) => {
    nodesConnector.setInput(e);
});
(_a = document
    .getElementById(`node_action_${node0.getId().toString()}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("mousedown", (e) => {
    console.log(node0);
});
