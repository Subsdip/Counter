const feed = document.querySelector(".feed");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

let d = 0;
let r = 0;
let i = 0;

decreaseButton.addEventListener('click', () => {
    d--;
    feed.innerHTML = d;
    feed.style.color = "Red";
    i = 0;
})

resetButton.addEventListener('click', () => {
    feed.innerHTML = r;
    feed.style.color = "black";
    d = 0;
    i = 0;
})

increaseButton.addEventListener('click', () => {
    i++;
    feed.innerHTML = i;
    feed.style.color = "blue";
    d = 0;

})
