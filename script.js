const data = [
    { dp: './images/Gustavo-img.png', story: './images/Abram-img.png' },
    { dp: './images/Abram-img.png', story: './images/Gustavo-img.png' },
    { dp: './images/Phillip-img.png', story: './images/Talan-img.png' },
    { dp: './images/Talan-img.png', story: './images/Phillip-img.png' },
    { dp: './images/Gustavo-img.png', story: './images/Abram-img.png' },
    { dp: './images/Abram-img.png', story: './images/Gustavo-img.png' },
    { dp: './images/Phillip-img.png', story: './images/Talan-img.png' },
    { dp: './images/Talan-img.png', story: './images/Phillip-img.png' }

]

let storiyan = document.querySelector(".storiyan")
let fullScreenStory = document.querySelector(".fullscreen");
// console.log(fullScreenStory);
let clutter = "";
data.forEach((elem, index) => {
    clutter += `<div class="story"><img id="${index}" src="${elem.dp}" alt="#"></div>`
    storiyan.innerHTML = clutter;
})
storiyan.addEventListener("click", (e) => {
    let value = data[e.target.id].story
    fullScreenStory.style.display = "block"
    fullScreenStory.style.backgroundImage = `url(${value})`
    setTimeout(() => {
        fullScreenStory.style.display = "none"

    }, 2000)
})
