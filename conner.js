console.log('hit')

const button = document.querySelector("#btn")
const body = document.querySelector('body')



const changeColor = () => {
    body.style.backgroundColor = "red"
}

button.addEventListener('click', changeColor)
