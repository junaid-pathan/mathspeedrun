document.addEventListener("DOMContentLoaded",()=>{
    initializeGame()
})
function initializeGame(){  //to see which button u clicked\
    document.querySelectorAll('button').forEach((button) => {
        button.removeEventListener('click', button.onclick);
    });
   
    document.querySelectorAll('button').forEach((button)=>{ 
        button.onclick = function(){   //only when clicked this function runs. 
            if (button.dataset.operation === 'add'){ //data-operation is the field in the button
                timer()
                add()
                
            }
        }
    })
}

function green(){
    document.querySelectorAll(".operation").forEach(number=>{
    number.style.color='green'
    })
}
function black(){
    document.querySelectorAll(".operation").forEach(number=>{
    number.style.color='black'
    })
}
function red(){
    document.querySelectorAll(".operation").forEach(number=>{
    number.style.color='red'
    })
}

function add(){ 
    document.querySelector('#firstpage').style.display = 'none' //firstpage div is hidden and hide div is shown
    document.querySelector('#hide').style.display='block'
    let num1 = Math.ceil(Math.random()*10)
    let num2 = Math.ceil(Math.random()*10)
    document.querySelector('#num1').innerHTML=num1;
    document.querySelector('#num2').innerHTML=num2;
    check(num1,num2)//Since num is local variable better to give it in the function
}



function timer(){
    let timeleft = 29; 
    let timer = document.querySelector('#time')
    window.timerInterval  = setInterval(() => {   //Have to give it a variable to store the name of the timer
        timer.innerHTML=timeleft;
        timeleft--  
        if (timeleft<0){
            timer.innerHTML="TIME'S UP"
            document.querySelector('#input').disabled=true;
            clearInterval(  window.timerInterval )
            setTimeout(function(){
                document.querySelector('#hide').style.display='none'
                document.querySelector('#resultpage').style.display='block'
                result()
            },1000)
            
        }
    }, 1000);
}

function check(num1,num2){
    let score = parseInt(document.querySelector('#value').innerHTML)
    let bar =  document.querySelector('#input')
    bar.addEventListener('keydown',handlekeydown)
    function handlekeydown(event){
        if (event.key==="Enter"){
            let useranswer= parseInt(bar.value); 
            let correctanswer= num1+num2
            console.log(useranswer,correctanswer)
            if (useranswer===correctanswer){
                green()
                document.querySelector("#value").innerHTML=`${score+5}`
            }
            else{
                red()
                document.querySelector("#value").innerHTML=`${score-7}`
            }
            setTimeout(() => {
                     black();
                     add();
                }, 250);
            bar.value=""
            bar.removeEventListener('keydown',handlekeydown)
        }
             
        }   
    }

function result(){ 
    let userscore = document.querySelector('#displayscore')
    let highanimation = document.querySelector('#highscore')
    let highscore=document.querySelector('#maxscore')
    userscore.style.animationPlayState = "running"
    highanimation.style.animationPlayState = "running"

    let finalscore = parseInt(document.querySelector('#value').innerHTML)
    console.log(finalscore)
    if (!localStorage.getItem('maxscore')){
        localStorage.setItem('maxscore',0)
    }
    let maxscore = parseInt(localStorage.getItem('maxscore'))
    if (maxscore<=finalscore){
        localStorage.setItem('maxscore',finalscore)
        maxscore=finalscore
    }
    userscore.innerHTML=finalscore
    highscore.innerHTML=maxscore
    let restart = document.querySelector('#restart')
    restart.addEventListener('click',gamerestart)
}
function gamerestart(){
    resetvalues()
    document.querySelector('#firstpage').style.display = 'block'
    document.querySelector('#resultpage').style.display= 'none'
    initializeGame()
   
}
function resetvalues(){
    document.querySelector('#value').innerHTML = 0;
    document.querySelector('#input').disabled=false;
    document.querySelector('#input').value = "";
    let timer = document.querySelector('#time');
    clearInterval(window.timerInterval);
    timer.innerHTML='30'}