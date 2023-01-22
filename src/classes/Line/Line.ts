import { Path } from "src/interfaces/Path/Path.js"

export class Line {
    id: number
    beginX: number
    beginY: number
    endX: number
    endY: number

    constructor(setup: Path) {
        this.id = setup.id
        this.beginX = setup.beginX
        this.beginY = setup.beginY
        this.endX = setup.endX
        this.endY = setup.endY
    }


}