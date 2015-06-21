function addName() {
    var user = {
        name: document.getElementById("nameEntry").value,
        password: document.getElementById("passwordEntry").value
    };
    console.log(user.name);
    console.log(user.password);
    document.getElementById("welcomeHeader").innerHTML = "Welcome " + user.name;
};


