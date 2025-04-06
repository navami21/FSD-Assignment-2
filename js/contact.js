function validate(){
    let name = document.getElementById("name1").value.trim();
    let email = document.getElementById("email1").value.trim();
    let num = document.getElementById("phone").value.trim();
    let msg = document.getElementById("msg").value.trim();
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    let phoneRegex = /^[6-9]\d{9}$/;

    if(name==""){
        alert("Name must be filled out!")
        return false;
    }
    if (email === "") {
        alert("Email must be filled out!");
        return false;
    }

    if (!regex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    if (!phoneRegex.test(num)) {
        alert("Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9!");
        return false;
    }
    if(msg === ""){
        alert("Please enter the message!")
        return false;
    }
    alert("Message sent successfully!!")
}
