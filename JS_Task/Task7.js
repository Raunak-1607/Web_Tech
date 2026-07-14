const text = document.getElementById("text");

const backgroundBtn = document.getElementById("backgroundBtn");
const fontBtn = document.getElementById("fontBtn");
const centerBtn = document.getElementById("centerBtn");
const resetBtn = document.getElementById("resetBtn");

let fontsize = 16;

function updateBackground(){
    text.style.background = "pink";
}

backgroundBtn.addEventListener("click", updateBackground);

fontBtn.addEventListener("click", ()=>{
    fontsize = fontsize + 2;
    text.style.fontSize = fontsize + "px";
});

function center(){
       text.style.textAlign = "center";
}

function reset(){
    text.style.background = "white";
    text.style.fontSize = "16px";
    text.style.textAlign = "left";

    fontsize = 16;
}

centerBtn.addEventListener("click", center);
resetBtn.addEventListener("click", reset);
