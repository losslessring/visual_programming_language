export class Connection {
    id: number
    fromElement: any
    toElement: any
    private fromX: number | undefined
    private fromY: number | undefined
    private toX: number | undefined
    private toY: number | undefined

    constructor({ id, fromElement, toElement }: any) {
        this.id = id
        this.fromElement = fromElement
        this.toElement = toElement
        console.log(fromElement)
        console.log(toElement)
    }

    initializeDraw(workspace: any) {
        workspace?.insertAdjacentHTML(
            "beforeend",
            `<svg id="svg_container_${this.id}" style="
                position:fixed; 
                top:0; 
                left:0; 
                height:100%; 
                width:100%;
                z-index: -1;
                "
            >
            </svg>
    `
        )
    }

    draw() {

        const fromBoundingRect = this.fromElement.getBoundingClientRect()
        const toBoundingRect = this.toElement.getBoundingClientRect()
        //console.log(rect.top, rect.right, rect.bottom, rect.left)
        
        
        this.fromX = fromBoundingRect.left + (fromBoundingRect.right - fromBoundingRect.left) / 2
        this.fromY = fromBoundingRect.top + (fromBoundingRect.bottom - fromBoundingRect.top) / 2

        this.toX = toBoundingRect.left + (toBoundingRect.right - toBoundingRect.left) / 2
        this.toY = toBoundingRect.top + (toBoundingRect.bottom - toBoundingRect.top) / 2
        
        //const { left: x1, bottom: y1 } = this.fromElement.getBoundingClientRect()
        //const { left: x2, bottom: y2 } = this.toElement.getBoundingClientRect()

        // const x2 = this.toElement.getBoundingClientRect().left
        // const y2 = this.toElement.getBoundingClientRect().bottom
        
        // console.log(x1)
        // console.log(y1)
        // console.log(x2)
        // console.log(y2)
        //const { x: x2, y: y2 } = this.toElement
        //const coords = this.fromElement.getBoundingClientRect()


        document
            .querySelector(`#svg_container_${this.id}`)
            ?.insertAdjacentHTML(
                "beforeend",
                `<line id="svg_line_${this.id}" x1="${this.fromX}" y1="${this.fromY}" x2="${this.toX}" y2="${this.toY}" stroke="black"  stroke-width="1"/>`
            )
    }

    erase() {
        document.querySelector(`#svg_line_${this.id}`)?.remove()
    }

    update() {
        // console.log(this.fromElement)
        // console.log(this.toElement)
        // this.draw()
        
        const line = document.querySelector(`#svg_line_${this.id}`)

        this.erase()
        this.draw()
        // line?.setAttribute('x1', `${this.fromX}`)
        // line?.setAttribute('y1', `${this.fromY}`)
        // line?.setAttribute('x2', `${this.toX}`)
        // line?.setAttribute('y2', `${this.toY}`)
        
        
    }
}
