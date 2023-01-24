import { NodeModel } from "../NodeModel/NodeModel.js"
import { generateHtmlFromDescription } from "../../functions/view/generateHtmlFromDescription/generateHtmlFromDescription.js"

import { dragElement } from "../../functions/behaviour/dragElement/dragElement.js"
import { addListenerOnInputForm } from '../../functions/behaviour/addListenerOnInputForm/addListenerOnInputForm.js'
import { Path } from "../../interfaces/Path/Path.js"
import { createSvgLine } from "../../functions/view/createSvgLine/createSvgLine.js"
import { NodesConnector } from "../NodesConnector/NodesConnector.js"
import { Connection } from "../Connection/Connection.js"

export class NodeBuilder {



    constructor({nodesConnector}: any) {

        const node0 = new NodeModel({
            id: Math.floor(100000000 + Math.random() * 900000000),
            positionX: 100,
            positionY: 200,
            height: 100,
            width: 100,
        })


        const workspace = document.querySelector("#workspace")


        workspace?.insertAdjacentHTML('beforeend', generateHtmlFromDescription((node0.getRenderProps())))
        

        const onDrag = (e: any) => {
            nodesConnector.getConnections().forEach((connection: Connection) => connection?.update())
        }

        dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`), onDrag)



        addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node0.getId().toString()}`),
                                input: <HTMLInputElement>document.getElementById(`node_code_input_${node0.getId().toString()}`),
                                event: 'submit',
                                onEventFunction: (inputValue: string) => console.log(eval(inputValue))
        })



        document.getElementById(`node_output_${node0.getId().toString()}`)
            ?.addEventListener("mousedown", (e) => {
                nodesConnector.setOutput(e)
            })

        document.getElementById(`node_input_${node0.getId().toString()}`)
            ?.addEventListener("mouseup", (e) => {
                nodesConnector.setInput(e)
            })


        document
            .getElementById(`node_action_${node0.getId().toString()}`)
            ?.addEventListener("mousedown", (e) => {
                console.log(node0)
        })


    }
}