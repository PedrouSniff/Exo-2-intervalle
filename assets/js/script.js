let count = document.getElementById("countdown");
let countdown = 5

const intervalId = setInterval(function() {
    count.textContent = countdown;

if (countdown === 0 ) {
    count.textContent = "GO !";
    clearInterval(intervalId);
} else {
    countdown--;
}
}, 1000)
