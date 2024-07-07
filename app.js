const qus = document.querySelector('#pro');
const btnEasy =document.querySelector('#easy');
const btnmed =document.querySelector('#med');
const btnhard =document.querySelector('#hard');
const btnveryHard =document.querySelector('#Veryhard');
const sloution = document.querySelector('#text');



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
btnEasy.addEventListener('click',()=>{
qus.innerText = `${getRandomInt(30)} + ${getRandomInt(20)}`
if(sloution.innerText){

}
})
btnmed.addEventListener('click',()=>{
    qus.innerText = `${getRandomInt(40)} - ${getRandomInt(20)}`} )
btnhard.addEventListener('click', ()=>{
    qus.innerText = `${getRandomInt(30)} + ${getRandomInt(20)} * ${getRandomInt(10)}` })
btnveryHard.addEventListener('click',()=>{
    qus.innerText = `${getRandomInt(30)} + ${getRandomInt(20)} * ${getRandomInt(10)} / ${getRandomInt(10)}`})