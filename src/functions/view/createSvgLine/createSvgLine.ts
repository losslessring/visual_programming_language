import { Path } from "src/interfaces/Path/Path.js"

export function createSvgLine({
    id,
    beginX,
    beginY,
    endX,
    endY
    }: Path){
    return `<svg id="svg_container_${id}" style="
                position:fixed; 
                top:0; 
                left:0; 
                height:100%; 
                width:100%;
                z-index: -1;
                "
            >
                <line id="svg_line_${id}" x1="${beginX}" y1="${beginY}" x2="${endX}" y2="${endY}" stroke="black" />
            </svg>
    `

}