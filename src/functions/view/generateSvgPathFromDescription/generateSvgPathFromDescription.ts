import { Path } from "src/interfaces/Path/Path.js"

export function generateSvgPathFromDescription({
    id,
    beginX,
    beginY,
    endX,
    endY
    }: Path){
    return `<svg id="svg_container_${id}" style="
                width: 100px;
                height: 100px" 
                viewBox="0 0 100 100"
            >
                <line id="svg_line_${id}" x1="0" y1="80" x2="100" y2="20" stroke="black" />
            </svg>
    `

}