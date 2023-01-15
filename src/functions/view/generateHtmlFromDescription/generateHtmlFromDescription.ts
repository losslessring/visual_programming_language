import { Render } from "src/interfaces/Render/Render.js"

export function generateHtmlFromDescription({id, positionX, positionY, height, width}: Render): string {
    return `<div class="node-container" id="node_container_${id}" style="width: ${width}px; height: ${height}px; top: ${positionY}px; left:${positionX}px; background:#777; border-radius: 8px;position:absolute;box-shadow: 3px 3px 0px 0px rgb(0 0 0 / 20%)">
                <div class="node-title" id="node_title_${id}" style="background-color: #c3fa9e;cursor: grabbing;border-radius: 8px 8px 0 0; padding: 2px 4px 0px 4px">Title</div>
                
                <div id="node_input_conatiner_${id}">
                <form class="node-code-form" id="node_code_form_${id}" onsubmit="return false" style="display:flex;">
                    <input type="text" id="node_code_input_${id}" style="width: 100%;">    
                </form>
                </div>
                <div draggable="true" class="node-output-dot-parent"
                    style="
                        position: absolute;
                        top: 0px;
                        right: -10px;
                        padding: 3px;
                        cursor: alias;
                ">
                    <div class="node-output-dot" 
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
            </div>
            
            `

}