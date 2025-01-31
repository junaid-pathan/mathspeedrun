let run = true
initializeGame()
function initializeGame() {
    console.log(run)
    clearInterval(timer)

    // Reset button event listeners
    document.querySelectorAll('button').forEach((button) => {
        // Remove existing event listeners by replacing the button element
        button.replaceWith(button.cloneNode(true)); 
    });
    if (run === false){
        setTimeout(function(){
            document.querySelector('#hide').style.display='none'
            document.querySelector('#resultpage').style.display='block'
        },1000)
        result()
        
        return
    }

    // Add new event listeners
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', function() {
            if (button.dataset.operation === 'add') {
                timer();
                add();
            }
        });
    });
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
    let num1 = Math.ceil(Math.random()*100)
    let num2 = Math.ceil(Math.random()*100)
    document.querySelector('#num1').innerHTML=num1;
    document.querySelector('#num2').innerHTML=num2;
    check(num1,num2)//Since num is local variable better to give it in the function
}



function timer(){
    let timeleft = 29; 
    let timercount = document.querySelector('#time')
    window.timerInterval  = setInterval(() => {   //Have to give it a variable to store the name of the timer
        timercount.innerHTML=timeleft;
        timeleft--  
        if (timeleft===0){
            timercount.innerHTML="TIME'S UP"
            document.querySelector('#input').disabled=true;
            run=false
            clearInterval(  window.timerInterval )
            initializeGame()
            return
            
            
        }
    }, 1000);
}

function check(num1,num2){
    let score = parseInt(document.querySelector('#value').innerHTML)
    let bar =  document.getElementById('input')
    bar.onkeydown= function(event){ 
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
    let restart = document.getElementById('restart')
    run = true
    restart.onclick=function(){ 
        document.querySelector('#firstpage').style.display = 'block' //firstpage div is hidden and hide div is shown
        document.querySelector('#resultpage').style.display='none'
        document.querySelector('#input').disabled=false;
        document.querySelector("#value").innerHTML=0
        document.querySelector('#time').innerHTML=30
        document.getElementById('input').value = ""
        initializeGame()

    }

}
