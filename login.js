function login(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please enter username and password.");
        return;
    }

    alert("Login Successful!");
}