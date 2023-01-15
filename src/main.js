import { Node } from "./classes/Node/Node.js"
import { generateHtmlFromDescription } from "./functions/generateHtmlFromDescription/generateHtmlFromDescription.js"

import {dragElement} from "./functions/dragElement/dragElement.js"

let message = "Hello New Brave World!"
console.log(message)

const node0 = new Node({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 100,
    positionY: 200,
    height: 100,
    width: 100,
    renderFunction: generateHtmlFromDescription,
})

const node1 = new Node({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 150,
    positionY: 400,
    height: 100,
    width: 100,
    renderFunction: generateHtmlFromDescription,
})



const canvas = document.querySelector("#canvas")

canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', node0.render()))
canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', node1.render()))



console.log(node0.getId())
console.log(node1.getId())

//console.log(document.getElementById(`node_title_${node1.getId().toString()}`)?.id)

//dragElement(document.getElementById(`${node0.getId().toString()}`), "node_title_");
//dragElement(document.getElementById(`${node1.getId().toString()}`), "node_title_");

dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`))
dragElement(document.getElementById(`node_container_${node1.getId().toString()}`), document.getElementById(`node_title_${node1.getId().toString()}`))

var codeInput = document.getElementById(`node_code_input_${node0.getId().toString()}`)

document.getElementById(`node_code_form_${node0.getId().toString()}`).addEventListener('submit', function (e) {

    // prevent the normal submission of the form
    e.preventDefault();

    console.log(eval(codeInput.value))
});