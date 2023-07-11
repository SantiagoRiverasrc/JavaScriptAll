

//NAVBAR PROJECT
const $buttonMenu = document.querySelector(".logo__menu");
const $listElements = document.querySelectorAll(".list__nav");




//Function for show the links when click in the button

$buttonMenu.addEventListener('click', (e) => {
    $buttonMenu.classList.toggle("animation__button");


    $listElements.forEach(item => {
        item.classList.toggle("new");
        
    })
})







//BINARY TO INTEGER PROJECT


const $formBinary = document.querySelector(".form__binary");
const $inputBinary = document.getElementById('input__binary');
const $resultadoBinary = document.querySelector(".integer__binary")




//Function take the value of input and convet in integer

$formBinary.addEventListener("submit", (e) => {
    e.preventDefault();
        let array = $inputBinary.value.split("").map(x => parseInt(x))
    let resultado = parseInt(array.join(""), 2)
    $resultadoBinary.style.textAlign = "center";
    $resultadoBinary.textContent = resultado;
})




















//COUNTDOWN







//List where put the datas
const countdown__datas = document.querySelector(".list__countdown")


setInterval(() => {
    //Variables date now and date future
    let date_actually = new Date();
    let date_future = new Date('2023-12-09T23:59:59')

    //Calculing days, hours, minutes and seconds
    let different_time = date_future - date_actually;

    let seconds_total = Math.floor(different_time / 1000)
    let days = Math.floor(seconds_total / (60*60*24));
    let hours = Math.floor((seconds_total / (60 * 60))%24);
    let minutes = Math.floor((seconds_total / 60) % 60)
    let seconds = seconds_total % 60;

    countdown__datas.innerHTML = 
    `
        <li>${days}<br><span>DAYS</span></li>
        <li>${hours}<br><span>HOURS</span></li>
        <li>${minutes}<br><span>MINS</span></li>
        <li>${seconds}<br><span>SECS</span></li>
    `
},1000)