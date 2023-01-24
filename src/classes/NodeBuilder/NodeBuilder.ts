import { NodeModel } from "../NodeModel/NodeModel.js"
import { generateHtmlFromDescription } from "../../functions/view/generateHtmlFromDescription/generateHtmlFromDescription.js"

import { dragElement } from "../../functions/behaviour/dragElement/dragElement.js"
import { addListenerOnInputForm } from '../../functions/behaviour/addListenerOnInputForm/addListenerOnInputForm.js'
import { Connection } from "../Connection/Connection.js"
import { Node } from "src/interfaces/Node/Node.js"

export class NodeBuilder {

    private node: NodeModel

    constructor({nodesConnector, root = false, value = undefined, positionX = 100, positionY = 200}: any) {

        const id = Math.floor(100000000 + Math.random() * 900000000)
        
        const node0 = new NodeModel({
            id,
            value
            // positionX,
            // positionY,
            // height: 100,
            // width: 100,
        })

        if (root) {
            node0.setRoot(true)
        }

        this.node = node0

        nodesConnector.addNode(node0)

        const workspace = document.querySelector("#workspace")

        const nodeRenderProps = {
            id,
            positionX,
            positionY,
            height: 100,
            width: 100

        }


        workspace?.insertAdjacentHTML('beforeend', generateHtmlFromDescription((nodeRenderProps)))
        

        const onDrag = (e: any) => {
            nodesConnector.getConnections().forEach((connection: Connection) => connection?.update())
        }

        dragElement(document.getElementById(`node_container_${node0.getId().toString()}`), document.getElementById(`node_title_${node0.getId().toString()}`), onDrag)



        addListenerOnInputForm({ form: document.getElementById(`node_code_form_${node0.getId().toString()}`),
                                input: <HTMLInputElement>document.getElementById(`node_code_input_${node0.getId().toString()}`),
                                event: 'submit',
                                onEventFunction: (inputValue: string) => {
                                    // console.log(eval(inputValue))
                                    node0.setValue(inputValue)
                                    console.log(node0.getValue())
                                }
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

    getNode() {
        return this.node
    }
}