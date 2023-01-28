export class Connection {
    constructor({ id, fromElement, toElement }) {
        this.id = id;
        this.fromElement = fromElement;
        this.toElement = toElement;
    }
    initializeDraw(workspace) {
        workspace === null || workspace === void 0 ? void 0 : workspace.insertAdjacentHTML("beforeend", `<svg id="svg_container_${this.id}" style="
                position:fixed; 
                top:0; 
                left:0; 
                height:100%; 
                width:100%;
                z-index: -1;
                "
            >
            </svg>
    `);
    }
    draw() {
        var _a;
        const fromBoundingRect = this.fromElement.getBoundingClientRect();
        const toBoundingRect = this.toElement.getBoundingClientRect();
        //console.log(rect.top, rect.right, rect.bottom, rect.left)
        this.fromX = fromBoundingRect.left + (fromBoundingRect.right - fromBoundingRect.left) / 2;
        this.fromY = fromBoundingRect.top + (fromBoundingRect.bottom - fromBoundingRect.top) / 2;
        this.toX = toBoundingRect.left + (toBoundingRect.right - toBoundingRect.left) / 2;
        this.toY = toBoundingRect.top + (toBoundingRect.bottom - toBoundingRect.top) / 2;
        (_a = document
            .querySelector(`#svg_container_${this.id}`)) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("beforeend", `<line id="svg_line_${this.id}" x1="${this.fromX}" y1="${this.fromY}" x2="${this.toX}" y2="${this.toY}" stroke="black"  stroke-width="1"/>`);
    }
    erase() {
        var _a;
        (_a = document.querySelector(`#svg_line_${this.id}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    update() {
        this.erase();
        this.draw();
        // const line = document.querySelector(`#svg_line_${this.id}`)
        // line?.setAttribute('x1', `${this.fromX}`)
        // line?.setAttribute('y1', `${this.fromY}`)
        // line?.setAttribute('x2', `${this.toX}`)
        // line?.setAttribute('y2', `${this.toY}`)
    }
}
