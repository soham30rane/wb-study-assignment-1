function removeCharacter() {
    const inputString = document.getElementById("inputString").value;
    const position = parseInt(document.getElementById("position").value) - 1;

    if (isNaN(position) || position < 0 || position >= inputString.length) {
        document.getElementById("result").innerText = "Invalid position. Please enter a valid position.";
        return;
    }

    const modifiedString = inputString.slice(0, position) + inputString.slice(position + 1);
    document.getElementById("result").innerText = "Modified string: " + modifiedString;
}