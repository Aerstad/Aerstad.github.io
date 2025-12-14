let pen = document.getElementById("game").getContext("2d")
let x = 200// left for the player
let y = 100// top for the player
let dx = 10// speed along x
let dy = 5// speed along y, delta y, increasment of y
let g = 2// increasment of dy
let is_left = false// state to indicate if i press a down a 
let is_right = false // state to indicate if i press down d
const JUMP_POWER = -20
const LIMIT = 3
let jump_times = LIMIT

let plat1_x = 250
let plat1_y = 300
let plat1_w = 20
let plat1_h = 100

let plat2_x = 25
let plat2_y = 250
let plat2_w = 20
let plat2_h = 150

let plat3_x = 150
let plat3_y = 150
let plat3_w = 20
let plat3_h = 75

let plat4_x = 275
let plat4_y = 75
let plat4_w = 20
let plat4_h = 50

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()

function onkeydown (event_object) {
    if(event_object.key === "a") {
        is_left = true
    } else if(event_object.key === "d") {
        is_right = true
    } else if(event_object.key === "Enter") {
        setInterval(drawFrame, 50)
    } else if(event_object.key === " ") {
        if (jump_times > 0) {
        dy = JUMP_POWER
        jump_times -= 1
        }
    }
}
function onkeyup (event_object) {
    if(event_object.key === "a") {
        is_left = false
    } else if(event_object.key === "d") {
        is_right = false
    }
}
function drawFrame () {
    dy = dy + g
    y = y + dy
    if (y + 20 > 400) {
        y = 400 - 20
        dy = 0
        jump_times = LIMIT
    }
    if (is_left) {
        x = x - dx
        if (x+20 < 0) {
            x = 400
        }
    }
    if (is_right) {
        x = x + dx
        if (x > 400) {
            x = -20
        }
    }
    if (
    x + 150 > plat1_x &&
    x < plat1_x + plat1_w &&
    y + 20 >= plat1_y &&
    y < plat1_y) {

    y = plat1_y - 20
    dy = 0
    jump_times = LIMIT
}


    drawBackground()
    drawPlat1()
    drawPlat2()
    drawPlat3()
    drawPlat4()
    drawPlayer(x, y)
}

function drawBackground() {
    pen.fillStyle = "#f4139aff"
    pen.fillRect(0, 0, 400, 400)
}   

function drawPlayer(x, y) {
    pen.fillStyle = "#f7f705ff"
    pen.fillRect(x, y, 20, 20)
}


function drawPlat1() {
    pen.fillStyle = "#ffffff"
    pen.fillRect(plat1_x, plat1_y, plat1_h, plat1_w)
}

function drawPlat2() {
    pen.fillStyle = "#ffffff"
    pen.fillRect(plat2_x, plat2_y, plat2_h, plat2_w)
}

function drawPlat3() {
    pen.fillStyle = "#ffffff"
    pen.fillRect(plat3_x, plat3_y, plat3_h, plat3_w)
}

function drawPlat4() {
    pen.fillStyle = "#ffffff"
    pen.fillRect(plat4_x, plat4_y, plat4_h, plat4_w)
}