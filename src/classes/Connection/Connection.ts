export class Connection {
    id: number
    fromElement: any
    toElement: any

    constructor({ id, fromElement, toElement }: any) {
        this.id = id
        this.fromElement = fromElement
        this.toElement = toElement
        // console.log(id)
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

        const rect = this.fromElement.getBoundingClientRect()
        //console.log(rect.top, rect.right, rect.bottom, rect.left)
        console.log(rect)
        
        
        const { left: x1, bottom: y1 } = this.fromElement.getBoundingClientRect()
        const { left: x2, bottom: y2 } = this.toElement.getBoundingClientRect()

        // const x2 = this.toElement.getBoundingClientRect().left
        // const y2 = this.toElement.getBoundingClientRect().bottom
        
        console.log(x1)
        console.log(y1)
        console.log(x2)
        console.log(y2)
        //const { x: x2, y: y2 } = this.toElement
        //const coords = this.fromElement.getBoundingClientRect()


        document
            .querySelector(`#svg_container_${this.id}`)
            ?.insertAdjacentHTML(
                "beforeend",
                `<line id="svg_line_${this.id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" />`
            )
    }

    update() {
        // console.log(this.fromElement)
        // console.log(this.toElement)
        const line = document.querySelector(`#svg_line_${this.id}`)
        // line?.setAttribute('x1', '0')
        // line?.setAttribute('y1', '0')
        // line?.setAttribute('x2', '150')
        // line?.setAttribute('y2', '150')
    }
}
