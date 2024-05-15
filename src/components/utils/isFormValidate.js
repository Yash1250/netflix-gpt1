const isFormValidate = (email , password) => {
    let emailResult = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    let passResult = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // console.log(emailResult , passResult)
    if(emailResult && passResult){
        // console.log("email and password validated")
        return null;
    }
    else if(!emailResult && passResult){
        return "email";
    }
    else if(emailResult && !passResult){
        return "password";
    }
    else{
        return "both";
    }
}

export default isFormValidate
