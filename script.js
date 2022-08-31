let n = parseInt(prompt("What is your number?"));
timer.innerHTML = n;

function decreaseNumber() {
    if (n >= 1) {
        n = n - 1;
        timer.innerHTML = n;
    }

    if (n == 0) {
        alert('time out!');
        n = n-1;
    }        
}
let canStart = false;

let myInterval = setInterval(decreaseNumber, 1000);

function resumeInterval() {
    if (canStart == true) {
        myInterval = setInterval(decreaseNumber, 1000);
    }
    canStart = false;    
}

function stopInterval() {
    clearInterval(myInterval);
    canStart = true;
}

function resetInterval() {
    clearInterval(myInterval);
    n = parseInt(prompt("What is your number?"));
    timer.innerHTML = n;
    canStart = false;
    resumeInterval();
}

Start.addEventListener('click', resumeInterval);
Stop.addEventListener('click', stopInterval);
Reset.addEventListener('click', resetInterval);



























