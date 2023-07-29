var emailInput = document.getElementById("userEmail");
var passwordInput = document.getElementById("userPassword");


function clearFields(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}


function login(){
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;
    var users = JSON.parse(localStorage.getItem("users"));
    var userName = "";
    if (users == null)
        document.getElementById("incorrectData").classList.remove("d-none")
    else {
        for (var i = 0; i < users.length; i++)
            if (emailValue == users[i].email && passwordValue == users[i].password){
                document.getElementById("incorrectData").classList.add("d-none")
                userName = users[i].name;
                localStorage.setItem("userName", userName);
                document.getElementById("loginBtn").addEventListener("click", function(){
                    window.location = "./home.html";})
            }
    }
}

document.getElementById("signLink").addEventListener("click", function(){
    window.location = "./signup.html";
})

