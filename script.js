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
function add() {
    // Hide the first page and show the "hide" div
    document.querySelector('#firstpage').style.display = 'none';
    document.querySelector('#hide').style.display = 'block';

    // Generate random numbers
    let num1 = Math.ceil(Math.random() * 10);
    let num2 = Math.ceil(Math.random() * 10);

    // Display the random numbers in the respective elements
    document.querySelector('#num1').innerHTML = num1;
    document.querySelector('#num2').innerHTML = num2;

    // Call the check function
    check(num1, num2); // Pass the local variables to the function
}

function check(num1, num2) {
    let score = parseInt(document.querySelector('#value').innerHTML) || 0;
    let bar = document.querySelector('#input');

    // Add the event listener to listen for "Enter" key only
    bar.addEventListener('keydown', function handlekeydown(event) {
        if (event.key === "Enter") { // Only run logic when "Enter" is pressed
            let useranswer = parseInt(bar.value); // Get user input
            let correctanswer = num1 + num2; // Calculate correct answer

            console.log("User Answer:", useranswer, "Correct Answer:", correctanswer);

            if (useranswer === correctanswer) {
                green();
                score += 5;
            } else {
                red();
                score -= 5;
            }

            // Update the score display
            document.querySelector("#value").innerHTML = `${score}`;

            // Clear the input box
            bar.value = "";

            // After a short delay, reset the background and call `add()` to continue
            setTimeout(() => {
                black(); // Reset background
                add();   // Generate a new question
            }, 250);

            // Remove this event listener to prevent multiple calls
            bar.removeEventListener('keydown', handlekeydown);
        }
    });
}


function multiply(){ 

}