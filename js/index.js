function convertButton() {
    cToF();
}

function resetButton() {
    let celsius = document.getElementById("input-field").value = 0;
    let fahrenheit = document.getElementById("output-field").value = 0;
    let solution = document.getElementById("output-field2").value = "-";
}

    let i = 0;

function reverseButton () {
    i++;
    if (i % 2 !== 0) {
        fToC();
        updateLabels("Fahrenheit (°F)", "Celsius (°C)");
    }
    else {
        cToF();
        updateLabels("Celsius (°C)", "Fahrenheit (°F)");
    }
} 


function cToF() {
    let celsius = document.getElementById("input-field").value;
    let fahrenheit = (celsius * 9/5) + 32;
    let solution = (celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F");

    document.getElementById("output-field").value = fahrenheit;
    document.getElementById("output-field2").value = solution;
}

function fToC() {
    let fahrenheit = document.getElementById("input-field").value;
    let celsius = (fahrenheit - 32) * 5 / 9;
    let solution = (fahrenheit + "°F - 32 * (5/9) = " + celsius + "°C");

    document.getElementById("output-field").value = celsius;
    document.getElementById("output-field2").value = solution;
}

function updateLabels(inputLabel, outputLabel) {
    document.getElementById("infi").innerText = inputLabel;
    document.getElementById("oufi").innerText = outputLabel;
}