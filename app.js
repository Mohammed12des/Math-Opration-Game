const qus = document.querySelector('#pro');
const btnEasy =document.querySelector('#easy');
const btnmed =document.querySelector('#med');
const btnhard =document.querySelector('#hard');
const btnveryHard =document.querySelector('#Veryhard');
const sloution = document.getElementById('text');
const enter = document.querySelector('#enter');
const result = document.querySelector('tital');
const count = document.querySelector('#timer')



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  
btnEasy.addEventListener('click',()=>{
    let num1 =getRandomInt(30);
    let num2 = getRandomInt(40);
    let slove = num1+num2
qus.innerText = `${num1} + ${num2}`
let counter = 30;
const timer = setInterval(function() {
  counter--;
  count.innerText= counter;
  if (counter === 0) {
    clearInterval(timer);
   count.innerText='time is up'
  }
}, 1000);
enter.addEventListener('click',()=>
    {if(parseInt(sloution.value)===slove){
    tital.innerText='You win';
    clearInterval(timer);
   }
   else if(counter===0  ){tital.innerText='Time is up try aging'}
   else if(parseInt(sloution.value)!==slove){
    tital.innerText='Try aging'
   }
})
})



btnmed.addEventListener('click',()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(30);
    solve = num1-num2;
    qus.innerText = `${num1} - ${num2}`
    enter.addEventListener('click',()=>{
        {if(sloution.innerText===slove){
            tital.innerText='you win';
           }
           else{tital.innerText='you fail'}
        }
    })

} )
btnhard.addEventListener('click', ()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(40);
    let num3 = getRandomInt(20);
    solve = num1+num2*num3;
    qus.innerText = `${num1} + ${num2} * ${num3}` 
    enter.addEventListener('click',()=>{
        {if(sloution.innerText===slove){
            tital.innerText='you win';}
           
           else {tital.innerText='you fail'}
        }
    })})
btnveryHard.addEventListener('click',()=>{
    let num1 = getRandomInt(40);
    let num2 =getRandomInt(40);
    let num3 = getRandomInt(20);
    let num4 = getRandomInt(20)
    solve = num1+num2*num3/num4;
    qus.innerText = `${num1} + ${num2} * ${num3} / ${num4}`
     enter.addEventListener('click',()=>{
        {if(sloution.innerText===slove){
            tital.innerText='you win';
           }
           else{tital.innerText='you fail'}
        }
     
     })

})