const check = document.getElementById('submited');
let attemptCount = document.getElementById('attempts');
const resultBox = document.getElementById('result_box');
let randomNumber = Math.floor(Math.random() * 100 ) + 1;
let tempResultText1 = document.getElementById('result_txt1');
let tempResultText2 = document.getElementById('result_txt2');
let enteredNumber = document.getElementById('guessed_number');
let tempResultText = document.getElementById('temp_result_text');
let attemptCountBox = document.getElementById('attempt_count_box');
let number;
let Attempts = 10;
attempts.innerHTML = Attempts;

check.addEventListener('click', (event) => {
    if (enteredNumber.value == '') {
        tempResultText.innerHTML = "PLEASE ENTER A NUMBER."
    } else {
        event.preventDefault();
        Attempts--;
        attempts.innerHTML = Attempts;
        if (Attempts == 0) {
            activateResultBox('SORRY BETTER LUCK', 'NEXT TIME.');
        }
        number = enteredNumber.value
        checkEnteredNumber(number);
        enteredNumber.value = "";
    }
});

function activateResultBox(msg1, msg2) {
    resultBox.classList.add('active');
    tempResultText1.innerHTML = msg1;
    tempResultText2.innerHTML = msg2;
    tempResultText.innerHTML = "";
    attemptCountBox.classList.remove('active');
}

function checkEnteredNumber(num) {
    if (num == randomNumber) {
        activateResultBox('CONGRATS YOU HAVE WON','THE GAME.');
    } else if (num > randomNumber){
        tempResultText.innerHTML = "GUSSED NUMBER IS LARGE."
    }  else{
        tempResultText.innerHTML = "GUSSED NUMBER IS SMALL."
    }
}