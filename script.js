
function randomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}
let intervalId;
function startChangingColor() {
    intervalId = setInterval(function changeColor() {
        document.body.style.background = randomColor();
    }, 1000)
}

function stopChangingColor() {
    clearInterval(intervalId);
}

const start = document.querySelector("#start");
start.addEventListener("click", startChangingColor);

const stop = document.querySelector("#stop");
stop.addEventListener("click", stopChangingColor);