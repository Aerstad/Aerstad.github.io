document.getElementById("btn").addEventListener("click", onclick)

function onclick () {
  
    let first = document.getElementById("n1").valueAsNumber
    let second = document.getElementById("n2").valueAsNumber
    let third = document.getElementById("n3").valueAsNumber

   if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                document.getElementById('result').textContent = '6';
                return;
            }

            // Find the maximum number using Math.max()
            const maximum = Math.max(n1, n2, n3);

            // Display the result
            document.getElementById('result').textContent = maximum

}