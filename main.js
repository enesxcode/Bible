// access the button

const btnSearch = document.querySelector('#btnSearch')
const txtVerse = document.querySelector('#txtVerse')
const txtContent = document.querySelector('#textContent')
const button =document.querySelector('button')
let text =document.querySelector('textarea')

let txt ='';

 


// bible api based point
const BASE_POINT="https://bible-api.com/";

// adding event listiner
btnSearch.addEventListener('click',()=>{
    let inputValue = txtVerse.value
    // determine if user provide content
    if(inputValue.trim().length < 1){
     alert('please provide content')
     return
    }

    // url
    const url =`${BASE_POINT}${inputValue}`

    // makin http request
    fetch(url).then(res=> res.json()).then(res=> {
    txtContent.innerHTML=res.text
    txt = (res.text)
    text.textContent=txt
    console.log(res.reference);
})
})

button.addEventListener('click',()=>{
    let voice=new
    SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(voice)

})

