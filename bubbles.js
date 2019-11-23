let count = 18;
const renderPosition = (bubblesElem) => {
    let posX = `${Math.floor(Math.random()* 18)}vw`;
    let posY = `${Math.floor(Math.random()* 39)}vh`;
    bubblesElem.style.left = posX;
    bubblesElem.style.top = posY;
}
const container = document.querySelector(`.container`);
for (let i = 0; i < count; i++) {
    let bubbles = document.createElement("div");
    bubbles.classList.add("bubble");
    container.appendChild(bubbles);
    renderPosition(bubbles);
}
setInterval(() => {
    let bubbless = document.getElementsByClassName('bubble');
    console.log(bubbless);
    for (let j = 0; j < bubbless.length; j++) {
        let bubbles = bubbless[j];
        renderPosition(bubbles);
    }
}, 2000);