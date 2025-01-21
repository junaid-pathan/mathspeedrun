document.addEventListener("DOMContentLoaded",click)
function click(){  //to see which button u clicked
    document.querySelectorAll('button').forEach((button)=>{ 
        button.onclick = function(){  //only when clicked this function runs. 
            if (button.dataset.operation === 'add'){ //data-operation is the field in the button
                add()
            }
            else{
                multiply()
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
                document.querySelector("#value").innerHTML=`${score-5}`
                
            }
            setTimeout(() => {
                     black()
                     add();
                }, 250);

            
            bar.value=""
            bar.removeEventListener('keydown',handlekeydown)
        }
             
        }   
    }

function multiply(){ 

}