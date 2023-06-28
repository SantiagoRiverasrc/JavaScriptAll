

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























/*ALGORITH OF CARRUSEL WORK */

const $buttonLeft = document.querySelector(".left");
const $buttonRight = document.querySelector(".right");
const $imgPerson = document.querySelector(".img__reviews");
const $namesPerson = document.querySelector(".name__reviews");
const $workPerson = document.querySelector(".work__reviews");
const $descriptionPerson = document.querySelector(".paragraph__reviews");
let carrouselNumber = 0;





/*ARRAYS OF INFORMATION AND IMAGES */
let img = ["./img/face1.jpg","./img/face2.jpg","./img/face3.jpg"];
let names = ["Mike Tayler", "Jack Freshlee", "Susan Miranda"];
let works = ["web developer", "graphic designer", "system engineer"];
let description = [
    "Designing, building, and maintaining websites, you'll need a consistent, easy-to-use online portal for customers, co-workers, and other stakeholders in the process. They incorporate content, images, graphics, videos, and other utilities to create engaging sites that users will prefer to interact with.",

    "Create designs using illustrations, typography, photography and, most commonly, graphic arts programs. Prepare preliminary designs (concepts) or sketches to start, experiment with different ideas, colors, styles and layouts.",

    "oversee all aspects of a project or system in a variety of fields, such as software, transportation, product development, and manufacturing."
];




/*Function botton Right */
$buttonRight.addEventListener("click", () => {

    carrouselNumber++;
    if(carrouselNumber == img.length) carrouselNumber = 0;

    changeInformation(carrouselNumber);

})




/*Function botton Left */
$buttonLeft.addEventListener('click', () => {
    let menor = img.length + 1
    carrouselNumber--;
    if(carrouselNumber == img.length - menor) carrouselNumber = img.length - 1;
    
    changeInformation(carrouselNumber);

})


/*function that receives number as parameter and changes the properties */

const changeInformation = number => {
    $imgPerson.setAttribute("src", img[number]);
    $namesPerson.innerHTML = names[number];
    $workPerson.innerHTML = works[number];
    $descriptionPerson.innerHTML = description[number];
}