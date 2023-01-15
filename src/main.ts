import { Node } from "./classes/Node/Node.js"
import { generateHtmlFromDescription } from "./functions/view/generateHtmlFromDescription/generateHtmlFromDescription.js"

import { dragElement } from "./functions/behaviour/dragElement/dragElement.js"
import { addListenerOnInputForm } from './functions/behaviour/addListenerOnInputForm/addListenerOnInputForm.js'

let message = "Hello New Brave World!"
console.log(message)

const node0 = new Node({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 100,
    positionY: 200,
    height: 100,
    width: 100,
})

const node1 = new Node({
    id: Math.floor(100000000 + Math.random() * 900000000),
    positionX: 150,
    positionY: 400,
    height: 100,
    width: 100,
})



const canvas = document.querySelector("#canvas")


canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node0.getRenderProps()))))
canvas === null ? null : (canvas.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node1.getRenderProps()))))



console.log(node0.getId())
console.log(node1.getId())


dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`))
dragElement(document.getElementById(`node_container_${node1.getId().toString()}`), document.getElementById(`node_title_${node1.getId().toString()}`))



addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node0.getId().toString()}`),
                         input: <HTMLInputElement>document.getElementById(`node_code_input_${node0.getId().toString()}`),
                         event: 'submit',
                         onEventFunction: (inputValue: string) => console.log(eval(inputValue))
})

addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node1.getId().toString()}`),
                         input: <HTMLInputElement>document.getElementById(`node_code_input_${node1.getId().toString()}`),
                         event: 'submit',
                         onEventFunction: (inputValue: string) => console.log(eval(inputValue))
})
