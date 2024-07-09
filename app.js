const qus = document.querySelector('#pro');
const btnEasy =document.querySelector('#easy');
const btnmed =document.querySelector('#med');
const btnhard =document.querySelector('#hard');
const btnveryHard =document.querySelector('#Veryhard');
const sloution = document.getElementById('text');
const enter = document.querySelector('#enter');
const result = document.querySelector('tital');
const count = document.querySelector('#timer');
const rest = document.querySelector('#rest');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function restart(){
    btnmed.disabled=false;
    btnhard.disabled=false;
    btnveryHard.disabled=false;
    btnEasy.disabled=false;
    enter.disabled=false;
    clearInterval(timer)
    count.innerText='';
    sloution.value='';
    qus.innerText='';
    tital.innerText='Choose your level skill of mathmatic';
  }
  rest.addEventListener('click',restart)

let timer
btnEasy.addEventListener('click',()=>{
    let num1 =getRandomInt(30);
    let num2 = getRandomInt(40);
    let slove = num1+num2
    qus.innerText = `${num1} + ${num2}`
    btnmed.disabled=true;
    btnhard.disabled=true;
    btnveryHard.disabled=true;
    btnEasy.disabled=true;
 tital.innerText='Solve the problem';
      let counter = 30
     timer = setInterval(function() {
    count.innerText= counter;
    counter--;
   
    if (counter === 0) {
    clearInterval(timer);
    enter.disabled=true;
    count.innerText='Time is up'
    tital.innerText=`Time is up the sloution is ${slove} `
    }
    }, 1000);

 enter.addEventListener('click',()=>
    {if(parseInt(sloution.value)===slove){
    tital.innerText='You win';
    clearInterval(timer);
    enter.disabled=true
   }
   else if(parseInt(sloution.value)!==slove){
    tital.innerText='Try aging'}})})



btnmed.addEventListener('click',()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(30);
    let slove = num1-num2;
    qus.innerText = `${num1} - ${num2}`
    btnEasy.disabled=true;
btnhard.disabled=true;
btnveryHard.disabled=true;
btnmed.disabled=true;

tital.innerText='Solve the problem';
let counter = 30;
 timer = setInterval(function() {
counter--;
count.innerText= counter;
if (counter === 0) {
clearInterval(timer);
enter.disabled=true;
count.innerText='Time is up'
tital.innerText=`Time is up the sloution is ${slove} `
}
}, 1000);

    enter.addEventListener('click',()=>{
        {if(parseInt(sloution.value)===slove){
            tital.innerText='You win';
            clearInterval(timer);
            enter.disabled=true
           }
           else if(parseInt(sloution.value)!==slove){
            tital.innerText='Try aging'
           }
        }
    })

} )
btnhard.addEventListener('click', ()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(40);
    let num3 = getRandomInt(20);
    let slove = num1+num2*num3;
    qus.innerText = `${num1} + ${num2} * ${num3}` 
    btnmed.disabled=true;
    btnEasy.disabled=true;
    btnveryHard.disabled=true;
    btnhard.disabled=true;
    let counter = 30;
    tital.innerText='Solve the problem';
     timer = setInterval(function() {
    counter--;
    count.innerText= counter;
    if (counter === 0) {
    clearInterval(timer);
    enter.disabled=true;
    count.innerText='Time is up'
    tital.innerText=`Time is up the sloution is ${slove} `
    }
    }, 1000);

    enter.addEventListener('click',()=>{
        {if(parseInt(sloution.value)===slove){
            tital.innerText='You win';
            clearInterval(timer);
            enter.disabled=true
           }
           else if(parseInt(sloution.value)!==slove){
            tital.innerText='Try aging'
           }
        }
    })})
btnveryHard.addEventListener('click',()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(40);
    let num3 = getRandomInt(20);
    let num4 = getRandomInt(20)
    let slove = num1+num2*num3/num4;
    qus.innerText = `${num1} + ${num2} * ${num3} / ${num4}`
    btnEasy.disabled=true;
    btnhard.disabled=true;
    btnmed.disabled=true;
    btnveryHard.disabled=true;
    tital.innerText='Solve the problem';
    let counter = 30;
     timer = setInterval(function() {
    counter--;
    count.innerText= counter;
    if (counter === 0) {
    clearInterval(timer);
    enter.disabled=true;
    count.innerText='Time is up'
    tital.innerText=`Time is up the sloution is ${slove} `
    }
    }, 1000);

     enter.addEventListener('click',()=>{
        {if(parseInt(sloution.value)===slove){
            tital.innerText='You win';
            clearInterval(timer);
            enter.disabled=true
           }
           else if(parseInt(sloution.value)!==slove){
            tital.innerText='Try aging'
           }
        }
     
     })

})