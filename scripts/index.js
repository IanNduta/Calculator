"use strict";

window.onload = init;
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const number1Field = document.getElementById("nuber1Field");
const number2Field = document.getElementById("nuber2Field");
const answerField = document.getElementById("anserField");

function init(){

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
    
}

function onAddBtnClicked(){
    
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 + num2;
    answerField.value = answer;
}

function onSubtractBtnClicked(){
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 - num2;
    answerField.value = answer;
    
}
function onMultiplyBtnClicked(){
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 * num2;
    answerField.value = answer;
    
}
function onDivideBtnClicked(){
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 / num2;
    answerField.value = answer;
    
}