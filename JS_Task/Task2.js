const image = [
    "./JsImage/483579.webp",
    "./JsImage/766004.webp",
    "./JsImage/3293568.webp"
];

let index=0;

const mainImage = document.getElementById("mainImage");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.addEventListener("click", ()=>{
    index ++;
    if(index >= image.length){
        index = 0;
    }

    mainImage.src = image[index];
} );

previous.addEventListener("click", ()=>{
    index --;
    if(index < 0){
        index = image.length - 1;
    }

    mainImage.src = image[index];
} );

setInterval (()=>{
    index ++;
    if(index >= image.length){
        index = 0;
    }

    mainImage.src = image[index];
},3000);