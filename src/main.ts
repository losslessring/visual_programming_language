import { Node } from "./classes/Node/Node.js"
import { generateHtmlFromDescription } from "./functions/generateHtmlFromDescription/generateHtmlFromDescription.js"

import {dragElement} from "./functions/dragElement/dragElement.js"

let message: string = "Hello New Brave World!"
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

dragElement(document.getElementById(`node_container_${node0.getId().toString()}`));
dragElement(document.getElementById(`node_container_${node1.getId().toString()}`));

