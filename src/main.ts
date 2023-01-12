import { Node } from "./classes/Node/Node.js"
let message: string = "Hello New Brave World!"
console.log(message)

const node = new Node({ positionX: 10, positionY: 20 })
node.print()

// let div = document.createElement('test')

// div.className = `window-container`
// div.id = `window-container-${id}`
// div.innerHTML = this.renderHtml
// container.append(div)

// let div = document.createElement("div")
// let p = document.createElement("p")
// div.append("Some text", p)

var tag = document.createElement("div")
var text = document.createTextNode("Test text")
tag.appendChild(text)
var element = document.getElementById("canvas")
element?.appendChild(tag)

// console.log(div.childNodes) // NodeList [ #text "Some text", <p> ]
