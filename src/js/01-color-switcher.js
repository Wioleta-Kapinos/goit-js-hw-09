
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop');
let timerId = null;
buttonStop.disabled = true;
buttonStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    document.body.style.backgroundColor = getRandomHexColor(); 
    buttonStart.disabled = true;
    buttonStop.disabled = false;  
}, 1000);
});;
buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
});