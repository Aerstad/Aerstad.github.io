document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
            const scoreInput = document.getElementById('scoreInput');
            let score = parseInt(scoreInput.value); // Truncate fractions using parseInt

    let gradeLetter;
            if (score >= 97) {
                gradeLetter = "A+";
            } else if (score >= 93) {
                gradeLetter = "A";
            } else if (score >= 90) {
                gradeLetter = "A-";
            } else if (score >= 87) {
                gradeLetter = "B+";
            } else if (score >= 83) {
                gradeLetter = "B";
            } else if (score >= 80) {
                gradeLetter = "B-";
            } else if (score >= 77) {
                gradeLetter = "C+";
            } else if (score >= 73) {
                gradeLetter = "C";
            } else if (score >= 70) {
                gradeLetter = "C-";
            } else if (score >= 67) {
                gradeLetter = "D+";
            } else if (score >= 63) {
                gradeLetter = "D";
            } else if (score >= 60) {
                gradeLetter = "D-";
            } else {
                gradeLetter = "F";
            }
         document.getElementById("result").innerHTML

        }