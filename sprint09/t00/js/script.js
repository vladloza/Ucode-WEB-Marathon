let form = document.forms.regist;
let mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validate() {
    if(form.login.value == "") {
        alert("Incorrect login");
        return false;
    }
    if(form.FullName.value == "") {
        alert("Incorrect name");
        return false;
    }
    if(form.email.value == "" || !mailReg.test(form.email.value)) {
        alert("Incorrect mail");
        return false;
    }
    if(form.password.value == "" || form.confirm.value == "" || form.password.value != form.confirm.value) {
        alert("Incorrect password");
        return false;
    }
    // alert("You are successfuly registered");
    return true;
}