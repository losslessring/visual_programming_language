import { Render } from "src/interfaces/Render/Render.js"

export function generateHtmlFromDescription({id, positionX, positionY, height, width}: Render): string {
    return `<div class="node-container" id="node_container_${id}" style="width: ${width}px; height: ${height}px; top: ${positionY}px; left:${positionX}px; background:#777; border-radius: 8px;position:absolute;box-shadow: 3px 3px 0px 0px rgb(0 0 0 / 20%)">
                <div class="node-title" id="node_title_${id}" style="background-color: #c3fa9e;cursor: default;border-radius: 8px 8px 0 0; padding: 2px 4px 0px 4px">Title</div>
            </div>`

}