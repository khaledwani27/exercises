const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Khaled Wani"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

const STEP = 15


const moveRight = function () {
    let left = parseInt(ball.style.left) || 0
    if(left <= 402){
      left += STEP
    }
    ball.style.left = left + "px"
}

const moveLeft = function () {
    let left = parseInt(ball.style.left) || 0
    left -= STEP
    ball.style.left = left + "px"
}

const moveUp = function () {
    let up = parseInt(ball.style.top) || 0
    up -= STEP
    ball.style.top = up + "px"
}

const moveDown = function () {
    let up = parseInt(ball.style.top) || 0
    up += STEP
    ball.style.top = up + "px"
}