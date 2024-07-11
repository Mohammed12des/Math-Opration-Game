
/*-------------------------------- Constants --------------------------------*/
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
/*---------------------------- Variables (state) ----------------------------*/
 
let clock = new Audio('clock.mp3');
let millon = new Audio('million.mp3');
let win = new Audio('win.wav');
let loss = new Audio('loss.mp3');
let correct = new Audio('coorect.mp3');
let wrong = new Audio('Time.wav')
let timer;
let num1;
let num2;
let num3;
let num4;
let slove;
let counter;
let c=0;
let q=1;
let easy =false;
let mid =false;
let hard=false;
let vHard =false;
let time;
let numberQueestion;


/*------------------------ Cached Element References ------------------------*/





/*-------------------------------- Functions --------------------------------*/


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
    score.innerText=''
    
  }
 
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
  



/*----------------------------- Event Listeners -----------------------------*/
     

dark.addEventListener('click',()=>{
    body.classList.add('dark');
})
sun.addEventListener('click',()=>{
    body.classList.remove('dark');
})

  rest.addEventListener('click',restart)






   btnEasy.addEventListener('click',()=>{
     easy=true; 
     geratAddtion()
     clock.play()
     numberQueestion=2;
     counter = 30;
     time=30;
     timer = setInterval(function() {
     counter--;
     count.innerText= counter;
      if (counter === 0) {
          clearInterval(timer);
         clock.pause();
         wrong.play();
         enter.disabled=true;
        count.innerText='Time is up'
        tital.innerText=`Time is up the sloution is ${slove} `
         }
        else if(counter>=10){
        count.classList.add('green')}

       else if ( counter>=6){
        count.classList.remove('green')
        count.classList.add('yellow')}

        else if (counter<=5){
        count.classList.remove('yellow')
        count.classList.add('red')} } , 1000);} )
    
 
        btnmed.addEventListener('click',()=>{
            mid=true; 
            geratSubtraction()
            clock.play()
            numberQueestion=3; 
            counter = 40;
            time=40;
           timer = setInterval(function() {
           counter--;
           count.innerText= counter;
           if (counter === 0) {
           clearInterval(timer);
           clock.pause();
           wrong.play();
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
           }
           else if (counter<=5){
           count.classList.remove('yellow')
           count.classList.add('red')
             }}, 1000);} )


        btnhard.addEventListener('click', ()=>{
                hard=true;
                gnratMitplay()
               clock.play()
               numberQueestion=4;
               counter = 45;
               time=45
               timer = setInterval(function() {
              counter--;
              count.innerText= counter;
              if (counter === 0) {
              clearInterval(timer);
              clock.pause();
              wrong.play();
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


        btnveryHard.addEventListener('click',()=>{
            vHard=true;
            genratDived()
            clock.play()
            numberQueestion=5;
            time=60;
            counter = 60;
            timer = setInterval(function() {
            counter--;
            count.innerText= counter;
            if (counter === 0) {
             clearInterval(timer);
             clock.pause();
             wrong.play();
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

    enter.addEventListener('click',()=> 
       {
        if(c===numberQueestion) {
            clock.pause();
            win.play();
            let  remain=parseInt(count.innerText);
            tital.innerText='WOW, You Win, Your level is not here go up'; clearInterval(timer);
            score.innerText =`You Answer All Questions in ${time-remain } second`;
            enter.disabled=true;
           }
        else{
        if(parseInt(sloution.value)===slove && c<=numberQueestion && easy===true){
            q++;  
            correct.play();
            geratAddtion();
            sloution.value=''
            c++;
        }
         else if(parseInt(sloution.value)===slove && c<=numberQueestion && mid===true){
          q++;
          correct.play();
          geratSubtraction();
          sloution.value='';
          c++;
          }
       else if(parseInt(sloution.value)===slove && c<=numberQueestion && hard===true){
         q++;
         correct.play();
         gnratMitplay();
         sloution.value='';
         c++;
        } 
       else if(parseInt(sloution.value)===slove && c<=numberQueestion && vHard===true){
         q++;
         correct.play();
         genratDived();
         sloution.value='';
         c++;
         }
          else{tital.innerText='Try aging'
           loss.play();
           }
       }
    })



  




    

  
   