const qus = document.querySelector('#pro');
const btnEasy =document.querySelector('#easy');
const btnmed =document.querySelector('#med');
const btnhard =document.querySelector('#hard');
const btnveryHard =document.querySelector('#Veryhard');
const sloution = document.querySelector('#text');
const enter = document.querySelector('#enter');
const result = document.querySelector('tital');
const count = document.querySelector('#timer');
const rest = document.querySelector('#rest');
const dark =document.querySelector('#dark');
const sun =document.querySelector('#sun');
const body =document.querySelector('#body')
const score =document.querySelector('#result')
const sound =document.querySelector('#sound')
let clock = new Audio('clock.mp3');
let millon = new Audio('million.mp3');
let win = new Audio('win.wav');
let loss = new Audio('loss.mp3')



dark.addEventListener('click',()=>{
    body.classList.add('dark');
})
sun.addEventListener('click',()=>{
    body.classList.remove('dark');
})
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
    q=1;
    clock.pause();
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
let q=1;
let easy =false;
let mid =false;
let hard=false;
let vHard =false;
let time
let numberQueestion;


function geratAddtion(){
    num1 =getRandomInt(30);
    num2 = getRandomInt(40);
    slove = num1+num2
    qus.innerText = `${num1} + ${num2}`
    btnmed.disabled=true;
    btnhard.disabled=true;
    btnveryHard.disabled=true;
    btnEasy.disabled=true;
 tital.innerText=`Solve the problem, number ${q} `;
}

btnEasy.addEventListener('click',()=>{
    geratAddtion()
    clock.play()
    easy=true;
    time=30
    numberQueestion=2
    counter = 30
    timer = setInterval(function() {
   count.innerText= counter;
   counter--;
   if (counter === 0) {
    sound.pause()
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
   }, 1000); })
    
 
 enter.addEventListener('click',()=>
    // if we haven't reached 3 turns AND the answer is correct, continue
    //  else if we haven't reached 3 turns AND the answer is inccorrect, try again
    //  else if we have reached 3 turns AND counter === 3, you win
        
    {
        if(c===numberQueestion) {
            tital.innerText='You Win, your level is not here go up'
            let  remain=parseInt(count.innerText)
            clock.pause()
            win.play()
            score.innerText=`You Answer 3 question in ${time-remain } second`
           
            clearInterval(timer);
            enter.disabled=true;
            
            
           }else{
        if(parseInt(sloution.value)===slove && c<=3 && easy===true){
            q++
            geratAddtion()
            sloution.value=''
            c++;
       }
       else if(parseInt(sloution.value)===slove && c<=3 && mid===true){
        q++
        geratSubtraction()
        sloution.value=''
        c++;
       }
       else if(parseInt(sloution.value)===slove && c<=3 && hard===true){
        q++
        gnratMitplay()
        sloution.value=''
        c++;
       } else if(parseInt(sloution.value)===slove && c<=3 && vHard===true){
        q++
        genratDived()
        sloution.value=''
        c++;
       }else{tital.innerText='Try aging'
        loss.play();
       }
    }
         
     
    })

function geratSubtraction(){
num1 = getRandomInt(40);
num2 =getRandomInt(30);
num3=getRandomInt(30)
slove = num1-num2+num3;
qus.innerText = `${num1} - ${num2} +${num3}`
btnEasy.disabled=true;
btnhard.disabled=true;
btnveryHard.disabled=true;
btnmed.disabled=true;
tital.innerText=`Solve the problem, number ${q} `;
}

  btnmed.addEventListener('click',()=>{
     geratSubtraction()
     numberQueestion=3;
     clock.play()
     mid=true;
  counter = 40;
  time=40;
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
}, 1000);} )



function gnratMitplay(){
    num1 = getRandomInt(40);
    num2 =getRandomInt(40);
    num3 = getRandomInt(20);
    slove = num1+num2*num3;
   qus.innerText = `${num1} + ${num2} * ${num3}` 
   btnmed.disabled=true;
   btnEasy.disabled=true;
   btnveryHard.disabled=true;
   btnhard.disabled=true;
    
   tital.innerText=`Solve the problem, number ${q} `
}
btnhard.addEventListener('click', ()=>{
    gnratMitplay()
    clock.play()
    numberQueestion=4;
    hard=true;
    counter = 45;
    time=45
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

    })

    function genratDived(){
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
       tital.innerText=`Solve the problem, number ${q} `
    }
btnveryHard.addEventListener('click',()=>{
    genratDived()
    clock.play()
    numberQueestion=5;
    vHard=true;
    time=60;
     counter = 60;
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

})