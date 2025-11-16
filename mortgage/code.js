document.getElementById("btn").addEventListener("click", onclick)

function onclick (e) {//callback function
    let P = document.getElementById("P").valueAsNumber
    let n = 12*document.getElementById("Years").valueAsNumber
    let r = document.getElementById("Rate").valueAsNumber /100 / 12
    let A = P * r * (1+r)**n / ((1+r)**n - 1)

    let result = "The Monthly Payment Is $" + A.toFixed(2) +
                "<br>The Total Payment Is $" + (A*n).toFixed(2) +
                "<br>The Total Interest Is $" + (A*n - P).toFixed(2)


    document.getElementById("result").innerHTML = result;
}