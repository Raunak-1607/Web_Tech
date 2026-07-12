const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");

const toggleBtn = document.getElementById("toggleBtn");

let darkmode = false; 

toggleBtn.addEventListener("click", ()=>{

    if(darkmode == false){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    header.style.background="black";
    header.style.color="white";
    content.style.background="black";
    content.style.color="white";
    footer.style.background="black";
    footer.style.color="white";
    toggleBtn.style.background="white";
    toggleBtn.style.color="black";

    toggleBtn.innerText="Switch to Normal Mode"

    darkmode = true;
    }

    else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    header.style.background="white";
    header.style.color="black";
    content.style.background="white";
    content.style.color="black";
    footer.style.background="white";
    footer.style.color="white";
    toggleBtn.style.background="black";
    toggleBtn.style.color="white";

    toggleBtn.innerText="Switch to Dark Mode"

    darkmode = false;

    }

})