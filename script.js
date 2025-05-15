const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

if (textInput === ""){
    alert("please retrun a value");
}


const entree = textInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase
const entree2  = [...entree].reverse().join()

if (entree !== entree2)