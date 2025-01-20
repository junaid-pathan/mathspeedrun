document.addEventListener("DOMContentLoaded",click)
function click(){ 
    document.querySelectorAll('button').forEach((button)=>{
        button.onclick = function(){ 
            if (button.dataset.operation === 'add'){
                add()
            }
            else{
                multiply()
            }
        }
    })
}

function add(){ 
    document.querySelector('#firstpage').style.display = 'none'
    document.querySelector('#hide').style.display='block'
    let num1 = Math.ceil(Math.random()*10)
    let num2 = Math.ceil(Math.random()*10)
    console.log(num1,num2)
}
function multiply(){ 

}