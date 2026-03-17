const display = document.getElementById('display');

function insert(num) {
    if (display.innerText === '0') {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

function limpaDisplay() {
    display.innerText = '0';
}

function backspace() {
    let current = display.innerText;
    if (current.length > 1) {
        display.innerText = current.substring(0, current.length - 1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    let result = display.innerText;
    if (result) {
        try {
            display.innerText = eval(result);
        } catch (e) {
            display.innerText = "Erro";
            setTimeout(clearDisplay, 1500);
        }
    }
}