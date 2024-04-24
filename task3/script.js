function copyToClipboard() {
    const textToCopy = document.getElementById("copyText").value;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            document.getElementById("result").innerText = "Copying...";
            setTimeout(()=>{
                document.getElementById("result").innerText = "Text copied to clipboard!";
            },200)
        })
        .catch((error) => {
            document.getElementById("result").innerText = "Failed to copy text to clipboard: " + error;
        });
}