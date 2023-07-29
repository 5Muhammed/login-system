var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("userEmail");
var passwordInput = document.getElementById("userPassword");
var users = [];




function regexName(){
    var nameValue = nameInput.value;
    var regex = /^[a-zA-Z]{5,30}$/;
    document.getElementById("sucessSign").classList.add("d-none");
    document.getElementById("InvalidData").classList.add("d-none");
    if (regex.test(nameValue))
        document.getElementById("nameAlert").classList.add("d-none");
    else 
        document.getElementById("nameAlert").classList.remove("d-none");
    return regex.test(nameValue);
}

function regexPassword(){
    document.getElementById("sucessSign").classList.add("d-none");
    document.getElementById("InvalidData").classList.add("d-none");
    var passwordValue = passwordInput.value;
    var regex = /(\w|[0-9]|[@,#,$,%,^,&,*,-]){5,30}/;
    if (regex.test(passwordValue))
        document.getElementById("alertPassword").classList.add("d-none");
    else 
        document.getElementById("alertPassword").classList.remove("d-none");
    return regex.test(passwordValue);
}

function regexEmail(){
    document.getElementById("sucessSign").classList.add("d-none");
    document.getElementById("InvalidData").classList.add("d-none");
    var emailValue = emailInput.value;
    var regex = /^[A-Za-z_]{5,20}[0-9]*@[a-z]{3,8}(\.com)$/;
    if (regex.test(emailValue))
        document.getElementById("alertEmail").classList.add("d-none");
    else 
        document.getElementById("alertEmail").classList.remove("d-none");
    return regex.test(emailValue);
}

function checkEmail(newEamil){
    var allUsers = JSON.parse(localStorage.getItem("users"));
    if (allUsers == null)
        return true;
    else{
        for (var i = 0; i < allUsers.length; i++){
            if (allUsers[i].email == newEamil)
                return false;
        }
    }
    return true;
}

console.log(checkEmail("muhammed@gmail.com"));

function clearFields(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}


function signup(){
    var nameValue = nameInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var user = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    }

    if (nameValue.length == 0 || emailValue.length == 0 || passwordValue.length == 0){
        document.getElementById("emptyAlert").classList.remove("d-none");
        document.getElementById("InvalidData").classList.add("d-none");
    }
    else{
        document.getElementById("emptyAlert").classList.add("d-none");
        if (regexName() && regexEmail() && regexPassword() && checkEmail(emailValue)){
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                document.getElementById("InvalidData").classList.add("d-none");
                document.getElementById("sucessSign").classList.remove("d-none");
            
        }
        else{
            document.getElementById("InvalidData").classList.remove("d-none");
        }
    }
    clearFields();
}

document.getElementById("signLink").addEventListener("click", function (){
    window.location = "./index.html";
})