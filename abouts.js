var display = document.getElementById("display");

function  getEnters(params) {
    display.value += params;
}

function getEnte(){
    display.value = eval(display.value);
}

function getEnter(){
    display.value = "";
}