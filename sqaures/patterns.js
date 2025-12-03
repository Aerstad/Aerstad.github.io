const size = 20;
const gap = 10;
const canvasSize = 400;

const c1 = document.getElementById("canvas1");
const ctx1 = c1.getContext("2d");

function drawCheckerboard() {
    let y = gap;

    while (y + size <= canvasSize - gap) {
        let x = gap

        while (x + size <= canvasSize - gap) {
            let xIndex = Math.floor((x - gap) / (size + gap));
            let yIndex = Math.floor((y - gap) / (size + gap));

            if ((xIndex + yIndex) % 2 === 0) {
                ctx1.fillStyle = "red";
                ctx1.fillRect(x, y, size, size);
            }

            x += size + gap;
        }
        y += size + gap;
    }
}

drawCheckerboard();

const c2 = document.getElementById("canvas2")
const ctx2 = c2.getContext("2d");

function drawDiagnol() {
    let row = 0

    for (let y = gap; y + size <= canvasSize - gap; y += size + gap) {

        let x = gap; + row * (size + gap);

        if (x + size <= canvasSize - gap) {
            ctx2.fillStyle = "red";
            ctx2.fillRect(x, y, size, size);
        }
        
        row++;
    }
}

drawDiagnol();
