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

function add(){ 
    document.querySelector('#firstpage').style.display = 'none' //firstpage div is hidden and hide div is shown
    document.querySelector('#hide').style.display='block'
    let num1 = Math.ceil(Math.random()*10)
    let num2 = Math.ceil(Math.random()*10)
    console.log(num1,num2)
    document.querySelector('#num1').innerHTML=num1
    document.querySelector('#num2').innerHTML=num2
}
function multiply(){ 

}