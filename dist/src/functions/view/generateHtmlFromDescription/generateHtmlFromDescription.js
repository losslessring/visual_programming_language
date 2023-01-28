export function generateHtmlFromDescription({ id, positionX, positionY, height, width }) {
    return `<div class="node-container" id="node_container_${id}" style="
                width: ${width}px; 
                height: ${height}px; 
                top: ${positionY}px; 
                left:${positionX}px; 
                background:#777; 
                border-radius: 8px;
                position:absolute;
                padding: 2px;
            ">
                <div class="node-title" id="node_title_${id}" style="
                    background-color: #c3fa9e;
                    cursor: grabbing;
                    border-radius: 6px 6px 0 0; 
                    padding: 2px 0px 2px 0px; 
                    text-align: center;
                ">${id}
                </div>
                
                <div id="node_form_container_${id}">
                <form class="node-code-form" id="node_code_form_${id}" onsubmit="return false" style="display:flex;">
                    <input type="text" id="node_code_input_${id}" style="
                        width: 100%;
                        border: none;
                        border-radius: 2px;
                        margin: 3px 1px 0px 1px
                    ">    
                </form>
                </div>
               
                <div id="node_output_container_${id}"
                    style="
                        position: absolute;
                        top: 4px;
                        right: -6px;
                        cursor: alias;
                ">
                    <div id="node_output_${id}" data-node_id=${id}
                        style="
                            width: 16px;
                            height: 16px;
                            background-color: #c3fa9e;
                            border-radius: 50%;
                            box-sizing: border-box;
                            border: 2px solid #6a6a6a;
                    ">
                    </div>
                </div>
                <div id="node_input_container_${id}"
                    style="
                        position: absolute;
                        top: 4px;
                        right: 94px;
                        cursor: alias;
                ">
                    <div id="node_input_${id}" data-node_id=${id}
                        style="
                            width: 16px;
                            height: 16px;
                            background-color: #c3fa9e;
                            border-radius: 50%;
                            box-sizing: border-box;
                            border: 2px solid #6a6a6a;
                    ">
                    </div>
                </div>
                <div id="node_action_container_${id}">
                    <div id="node_action_${id}" style="
                        background-color: #c3fa9e;
                        cursor: default;
                        border-radius: 6px 6px 6px 6px; 
                        padding: 2px 0px 2px 0px; 
                        text-align: center;
                        margin: 3px 1px 0px 1px;
                    ">
                        action
                    </div>
                </div>
            </div>
            `;
}
