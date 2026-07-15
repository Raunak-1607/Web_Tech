const form = document.getElementById("studentForm");
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Cpassword = document.getElementById("Cpassword").value;
    const Pnumber = document.getElementById("Pnumber").value;


    document.getElementById("nameError").innerText= "";
    document.getElementById("emailError").innerText= "";
    document.getElementById("passwordError").innerText= "";
    document.getElementById("CpasswordError").innerText= "";
    document.getElementById("numberError").innerText= "";

    let valid = true;
    const namePattern = /^[A-Za-z ]+$/;

    if(fullname=="" || !namePattern.test(fullname)){
        document.getElementById("nameError").innerText="Invalid Name";
        valid=false;
    }

    


     if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText="Invalid Email";
        valid=false;
    }
     
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

   if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").innerText = "Password must contain uppercase, lowercase, number, special character and at least 6 characters";
    valid = false;
}

    if(password!==Cpassword){
        document.getElementById("CpasswordError").innerText="Do not match password";
        valid = false;
    }

    if(isNaN(Pnumber) || Pnumber.length<11){
        document.getElementById("numberError").innerText="Enter valid number";
        valid = false;
    }

    if(valid){
        document.getElementById("success").innerText="Registration Successful!";
    }

})