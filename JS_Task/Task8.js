const userType = document.getElementById("userType");
const rollField = document.getElementById("rollField");
const departmentField = document.getElementById("departmentField");

function update(){
    const selectUserType = userType.value;

    if(selectUserType == "Student"){
        rollField.style.display ="block";
        departmentField.style.display ="none";
    }

    else if(selectUserType == "Teacher"){
         rollField.style.display = "none";
        departmentField.style.display = "block";

    }
    else{
         rollField.style.display = "none";
        departmentField.style.display = "none";
    }
}

userType.addEventListener("change", update);