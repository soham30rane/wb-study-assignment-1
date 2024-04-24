function checkRange() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const inRange = (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);

    if (inRange) {
        document.getElementById("result").innerText = "At least one of the integers is in the range 50 to 99 (inclusive).";
    } else {
        document.getElementById("result").innerText = "Neither of the integers is in the range 50 to 99 (inclusive).";
    }
}