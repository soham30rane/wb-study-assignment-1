let progress = 0;
const progressBar = document.getElementById("progressBar");

function updateProgress() {
    if (progress < 90) {
        progress += 10;
        progressBar.style.width = progress + "%";
    } else {
        progress = 100;
        progressBar.style.width = progress + "%";
        setTimeout(()=>{
            alert("Task completed!");
        },500)
    }
}

function resetProgress() {
    progress = 0;
    progressBar.style.width = progress + "%";
}