const qus = document.querySelector('#pro');
const btnEasy =document.querySelector('#easy');
const btnmed =document.querySelector('#med');
const btnhard =document.querySelector('#hard');
const btnveryHard =document.querySelector('#Veryhard');
const sloution = document.querySelector('#text');
const enter = document.querySelector('#enter');
const result = document.querySelector('tital');



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
btnEasy.addEventListener('click',()=>{
    let num1 =getRandomInt(30);
    let num2 = getRandomInt(40);
    let slove = num1+num2
    
qus.innerText = `${num1} + ${num2}`
enter.addEventListener('click',()=>
    {if(sloution.value===slove){
    tital.innerText='you win';
   }
   else{tital.innerText='you fail'}
})
})



btnmed.addEventListener('click',()=>{
    qus.innerText = `${getRandomInt(40)} - ${getRandomInt(20)}`} )
btnhard.addEventListener('click', ()=>{
    qus.innerText = `${getRandomInt(30)} + ${getRandomInt(20)} * ${getRandomInt(10)}` })
btnveryHard.addEventListener('click',()=>{
    qus.innerText = `${getRandomInt(30)} + ${getRandomInt(20)} * ${getRandomInt(10)} / ${getRandomInt(10)}`})