function validateForm(email, password) {

    if (email === "admin@gmail.com" && password === "123456") {
        return true;
    } else {
        return false;
    }   

}

console.log(validateForm("admin@gmail.com", "123456"));
