function validate(callback) {
    let username = document.getElementById("uname").value.trim();
    let password = document.getElementById("pwd").value.trim();

    if (username === "admin" && password === "12345") {
        alert("Login successful");
        callback();
    } else {
        alert("Invalid login credentials!!");
        document.getElementById("myForm").reset();
    }

    return false;
}

function redirectToMainPage() {
    window.location.href = "todo.html";
}

document.getElementById("myForm").addEventListener("submit",function(e){
    e.preventDefault(); 
    validate(redirectToMainPage);
});
