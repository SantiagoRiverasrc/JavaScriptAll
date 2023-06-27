

/*ALGORITHM OF CHANGE COLOR */



/*Variables of DOM */
const $background = document.querySelector(".proColor");
const $titleColor = document.querySelector(".title__color");
const $buttonChangeColor = document.querySelector(".button__color");




/*Function for change color when click in the botton */
const changeColor = () => {
    let r = Math.floor(Math.random()*256);  let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let texto = `rgb(${r},${g},${b})`;
    $background.style.backgroundColor = `rgb(${r},${g},${b})`;
    $titleColor.textContent = `Background Color: ${texto}`;
}

/*Calling the function */
$buttonChangeColor.addEventListener('click', changeColor);











/*----ALGORITHM OF COUNTER ---*/




/*Variables of DOM */

const $increaseCounter = document.querySelector(".increase");
const $decreaseCounter = document.querySelector(".decrease");
const $resetCounter = document.querySelector(".reset");
const $number = document.querySelector(".counter__number");
let number = 0



//Functions for the buttons

const increaseNumber = () => {
    number++;  $number.textContent = number; 
    if(number > 0)$number.style.color = "darkgreen";
    else if(number == 0)$number.style.color = "black";
}

const resetNumber = () => {
    number = 0; $number.textContent = number; 
    if(number == 0)$number.style.color = "black"

}


const decreaseNumber = () => {
    number = number - 1; $number.textContent = number;
    if(number < 0) $number.style.color = "darkred";
    else if(number == 0)$number.style.color = "black";
}



$increaseCounter.addEventListener('click', increaseNumber);
$resetCounter.addEventListener('click', resetNumber);
$decreaseCounter.addEventListener('click', decreaseNumber)

