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
    count.classList.remove('red')
    count.classList.remove('yellow')
    count.classList.remove('green')
    c=0;
  }
  rest.addEventListener('click',restart)

 let timer
 let num1
 let num2
 let num3
 let num4
let slove
let counter
let c=0;

function geratAddtion(){
    num1 =getRandomInt(30);
    num2 = getRandomInt(40);
    slove = num1+num2
    qus.innerText = `${num1} + ${num2}`
    btnmed.disabled=true;
    btnhard.disabled=true;
    btnveryHard.disabled=true;
    btnEasy.disabled=true;
 tital.innerText='Solve the problem';
 

}

btnEasy.addEventListener('click',()=>{
    geratAddtion()
    counter = 20
    timer = setInterval(function() {
   count.innerText= counter;
   counter--;
   if (counter === 0) {
   clearInterval(timer);
   enter.disabled=true;
   count.innerText='Time is up'
   tital.innerText=`Time is up the sloution is ${slove} `
   }
   else if(counter>=10){
       count.classList.add('green')
   }
   else if ( counter>=6){
       count.classList.remove('green')
       count.classList.add('yellow')
   }else if (counter<=5){
       count.classList.remove('yellow')
       count.classList.add('red')
   }
   }, 1000);
    
 }) 
 enter.addEventListener('click',()=>
    // if we haven't reached 3 turns AND the answer is correct, continue
    //  else if we haven't reached 3 turns AND the answer is inccorrect, try again
    //  else if we have reached 3 turns AND counter === 3, you win
        
    {
        if(c===2) {
            tital.innerText='you win'
            clearInterval(timer);
            
           }else{
        if(parseInt(sloution.value)===slove && c<=3){
            
            geratAddtion()
            
            c++;
           
          
       } else{tital.innerText='Try aging'}
    }
         
     
    })


    function genratSubtraction(){
        
    }
btnmed.addEventListener('click',()=>{
     num1 = getRandomInt(40);
     num2 =getRandomInt(30);
     num3=getRandomInt(30)
     slove = num1-num2+num3;
    qus.innerText = `${num1} - ${num2} +${num3}`
    btnEasy.disabled=true;
btnhard.disabled=true;
btnveryHard.disabled=true;
btnmed.disabled=true;

tital.innerText='Solve the problem';
 counter = 20;
 timer = setInterval(function() {
counter--;
count.innerText= counter;
if (counter === 0) {
clearInterval(timer);
enter.disabled=true;
count.innerText='Time is up'
tital.innerText=`Time is up the sloution is ${slove} `
}
else if(counter>=10){
    count.classList.add('green')
}
else if ( counter>=6){
    count.classList.remove('green')
    count.classList.add('yellow')
}else if (counter<=5){
    count.classList.remove('yellow')
    count.classList.add('red')
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
     num1 = getRandomInt(40);
     num2 =getRandomInt(40);
     num3 = getRandomInt(20);
     slove = num1+num2*num3;
    qus.innerText = `${num1} + ${num2} * ${num3}` 
    btnmed.disabled=true;
    btnEasy.disabled=true;
    btnveryHard.disabled=true;
    btnhard.disabled=true;
     counter = 35;
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
    else if(counter>=20){
        count.classList.add('green')
    }
    else if ( counter>=10){
        count.classList.remove('green')
        count.classList.add('yellow')
    }else if (counter<=9){
        count.classList.remove('yellow')
        count.classList.add('red')
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
     num1 = getRandomInt(40);
     num2 =getRandomInt(40);
     num3 = getRandomInt(20);
     num4 = getRandomInt(20)
     slove = num1+num2*num3/num4;
    qus.innerText = `${num1} + ${num2} * ${num3} / ${num4}`
    btnEasy.disabled=true;
    btnhard.disabled=true;
    btnmed.disabled=true;
    btnveryHard.disabled=true;
    tital.innerText='Solve the problem';
     counter = 30;
     timer = setInterval(function() {
    counter--;
    count.innerText= counter;
    if (counter === 0) {
    clearInterval(timer);
    enter.disabled=true;
    count.innerText='Time is up'
    tital.innerText=`Time is up the sloution is ${slove} `
    }
    else if(counter>=20){
        count.classList.add('green')
    }
    else if ( counter>=10){
        count.classList.remove('green')
        count.classList.add('yellow')
    }else if (counter<=9){
        count.classList.remove('yellow')
        count.classList.add('red')
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