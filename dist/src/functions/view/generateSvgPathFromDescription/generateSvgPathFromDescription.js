export function generateSvgPathFromDescription({ id, beginX, beginY, endX, endY }) {
    return `<svg id="svg_container_${id}" >
                <line id="svg_line_${id}" x1="0" y1="0" x2="100" y2="100" stroke="black" />
            </svg>
    `;
}
