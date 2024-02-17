const display = document.getElementById('display');
let bracketsOpened = false;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        if (expression.includes('%')) {
            expression = expression.replace(/%/g, '/100');
        }

        const result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Undefined";
        } else {
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}

function openthebrackets() {
    if (!bracketsOpened) {
        appendToDisplay('(');
        bracketsOpened = true;
    } else {
        appendToDisplay(')');
        bracketsOpened = false; 
    }
}
function updateResult() {
    calculate();
}