import { Node } from "./classes/Node/Node.js"
import { generateHtmlFromDescription } from "./functions/view/generateHtmlFromDescription/generateHtmlFromDescription.js"

import { dragElement } from "./functions/behaviour/dragElement/dragElement.js"
import { addListenerOnInputForm } from './functions/behaviour/addListenerOnInputForm/addListenerOnInputForm.js'
import { Path } from "./interfaces/Path/Path.js"
import { createSvgLine } from "./functions/view/createSvgLine/createSvgLine.js"
import { TwoNodesConnector } from "./classes/TwoNodesConnector/TwoNodesConnector.js"
import { Connection } from "./classes/Connection/Connection.js"

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
    positionX: 350,
    positionY: 220,
    height: 100,
    width: 100,
})

const line0: Path = {
    id: Math.floor(100000000 + Math.random() * 900000000),
    beginX: 0,
    beginY: 0,
    endX: 500,
    endY: 500
}


const workspace = document.querySelector("#workspace")


workspace?.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node0.getRenderProps())))
workspace?.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node1.getRenderProps())))

// workspace?.insertAdjacentHTML('beforeend', createSvgLine(line0))


console.log(node0.getId())
console.log(node1.getId())

const nodesConnector = new TwoNodesConnector({workspace})

const onDrag = (e: any) => {
    nodesConnector.getConnections().forEach(connection => connection?.update())
}

dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`), onDrag)
dragElement(document.getElementById(`node_container_${node1.getId().toString()}`), document.getElementById(`node_title_${node1.getId().toString()}`), onDrag)

// document.addEventListener(
//     "drag",
//     (e) => {  
//     nodesConnector.getConnections().forEach(connection => connection?.update())
    
// })

// document.getElementById(`node_container_${node0.getId().toString()}`)?.addEventListener(
//     "click",
//     () => {
//         const connection = nodesConnector.getConnection()
//         connection?.update()
//     }
// )

// document.getElementById(`node_container_${node1.getId().toString()}`)?.addEventListener(
//     "click",
//     () => {
//         const connection = nodesConnector.getConnection()
//         connection?.update()
//     }
// )

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



// const nodesConnector = new TwoNodesConnector(({fromElement, toElement}: any) => {
    // const id = Math.floor(100000000 + Math.random() * 900000000)
    
    // const connection = new Connection({id, fromElement, toElement})
    // connection.initializeDraw(workspace)
    // connection.draw()
// }
// )

// let connectionObserver: any = {
//     _input: undefined,
//     _output: undefined,
//     targetDomElement: workspace,
//     callOnConnection: createSvgLine,

//     setInput(e: any) { 

//         if (this._output) {
//             this.targetDomElement?.insertAdjacentHTML('beforeend', this.callOnConnection({ 
//                                     id: Math.floor(100000000 + Math.random() * 900000000), 
//                                     beginX: this._output.x, 
//                                     beginY:this._output.y, 
//                                     endX: e.x, 
//                                     endY: e.y
//                                 }))
//             this.setOutput(undefined)
            
//         }
        
//     },
//     setOutput(target: any) {
//         this._output = target
//     },
    
// }

const el0 = document.getElementById(`node_output_${node0.getId().toString()}`)
el0?.addEventListener("mousedown", (e) => {
    nodesConnector.setOutput(e)
    
})



const el1 = document.getElementById(`node_input_${node1.getId().toString()}`)
el1?.addEventListener("mouseup", (e) => {
    nodesConnector.setInput(e)
    
})

