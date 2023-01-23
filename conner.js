const button = document.querySelector("#btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const h2 = document.querySelectorAll(".h2");
const caption = document.querySelectorAll(".caption");
const img = document.querySelectorAll(".img");


const changeColor = () => {
    body.style.backgroundColor = "darkred";
    h1.style.color = "darkgoldenrod";
    h3.style.color = "coral";
    let index = 0, length = h2.length;
    for (index = 0; index < length; index++) {
        h2[index].style.color = "burlywood";
    }
    let index2 = 0, length2 = caption.length;
    for (index2 = 0; index2 < length2; index2++) {
        caption[index2].style.color = "black";
    }
    let index3 = 0, length3 = img.length;
    for (index3 = 0; index3 < length3; index3++) {
        img[index3].style.color = "chocolate";
    }
};

button.addEventListener('click', changeColor)
