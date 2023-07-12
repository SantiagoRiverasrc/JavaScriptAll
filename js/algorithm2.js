//NAVBAR PROJECT------------]
const $buttonMenu = document.querySelector(".logo__menu");
const $listElements = document.querySelectorAll(".list__nav");


//Function for show the links when click in the button

$buttonMenu.addEventListener('click', (e) => {
    $buttonMenu.classList.toggle("animation__button");


    $listElements.forEach(item => {
        item.classList.toggle("new");
        
    })
})



//BINARY TO INTEGER PROJECT--------]


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



//COUNTDOWN-------------]

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









//GENERATOR PARAGRAPH--------]

const inputParagraph = document.querySelector(".input__generator");
const paragraphResult = document.querySelector(".paragraph");
const formParagraph = document.querySelector(".form__generator__paragraph");



async function getDatasApi(number){
    try{
        let parrafo = "";
        const response = await fetch(`https://clientes.api.greenborn.com.ar/public-random-word?c=${number*6}&l=6`);

        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        data.forEach(element => {
            parrafo += element + " ";
        })

        return parrafo.trimEnd()
    }catch(error){
        console.log(error);
    }

}





formParagraph.addEventListener('submit', (e) => {
    e.preventDefault();
    let number = parseInt(inputParagraph.value);
    
    if(number === 0) paragraphResult.textContent = "Cannot Enter Zero";
    else if(number > 15) paragraphResult.textContent = "The limit is 15";
    else{
        
        paragraphResult.innerHTML = `<h2>Generator Paragraph...</h2>`
        const miPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                const resultado = getDatasApi(number);
                resolve(resultado)
            },3000)
        });

        miPromesa.then((result) => {paragraphResult.textContent = result;}
        ).catch((error) => console.log(error))
    }

})





