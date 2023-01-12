import { Node } from "./classes/Node/Node.js"
import { generateHtmlFromDescription } from "./functions/generateHtmlFromDescription/generateHtmlFromDescription.js"

let message: string = "Hello New Brave World!"
console.log(message)

const node0 = new Node({
    positionX: 100,
    positionY: 200,
    height: 50,
    width: 100,
    renderFunction: generateHtmlFromDescription,
})

const node1 = new Node({
    positionX: 150,
    positionY: 400,
    height: 100,
    width: 50,
    renderFunction: generateHtmlFromDescription,
})



const canvas = document.querySelector("#canvas")

canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', node0.render()))
canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', node1.render()))