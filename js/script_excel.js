/*
Excel Page JavaScript
*/

let result; // Declare the result variable globally

document.getElementById("calculateBtn").addEventListener("click", myExcelFuns);

function myExcelFuns() {
    let numberStr = document.getElementById("numbers").value.trim();

    if (numberStr === "") {
        alert("Please enter some numbers.");
        return;
    } else {
        let numberArr = numberStr.split(" ");
        
        let finalNumericArray = [];
        for (let i = 0; i < numberArr.length; i++) {
            let num = Number(numberArr[i].trim()); 
            if (!isNaN(num) && numberArr[i].trim() !== "") { 
                finalNumericArray.push(num);
            }
        }

        // Check if the final array is empty after filtering
        if (finalNumericArray.length === 0) {
            alert("No valid numbers entered.");
            return;
        }

        // Initialize the result variable
        result = null;

        if (document.getElementById("sum").checked) {
            // AutoSum: sum of all numbers
            result = finalNumericArray.reduce((acc, curr) => acc + curr, 0);
        } else if (document.getElementById("avg").checked) {
            // Average: average of all numbers
            let total = finalNumericArray.reduce((acc, curr) => acc + curr, 0);
            result = total / finalNumericArray.length;
        } else if (document.getElementById("max").checked) {
            // Maximum: max of all numbers
            result = Math.max(...finalNumericArray);
        } else if (document.getElementById("min").checked) {
            // Minimum: min of all numbers
            result = Math.min(...finalNumericArray);
        } else {
            alert("Please select an operation (AutoSum, Average, Max, Min).");
            return;
        }

        document.getElementById("result").innerText = `Result: ${result}`;
    }
}

function changeColor(color) {
    const wrapperDiv = document.getElementById("wrapper");

    if (color === 1) {
        wrapperDiv.className = "blue-theme";
    } else {
        wrapperDiv.className = "red-theme";
    }
}
