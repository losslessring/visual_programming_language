import { Render } from "src/interfaces/Render/Render.js"

export function generateHtmlFromDescription({positionX, positionY, height, width}: Render): string {
    return `<div id="div1" style="width: ${width}px; height: ${height}px; top: ${positionY}px; left:${positionX}px; background:#777; position:absolute;"></div>`

}