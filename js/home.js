document.getElementById("logoutBtn").addEventListener("click", function (){
    window.location = './index.html';
})


document.getElementById("myTitle").innerHTML += " " + localStorage.getItem("userName");