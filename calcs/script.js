function calculate() {
    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "add":
            result = operand1 + operand2;
            break;
        case "subtract":
            result = operand1 - operand2;
            break;
        case "multiply":
            result = operand1 * operand2;
            break;
        case "divide":
            result = operand1 / operand2;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").value = result;
}