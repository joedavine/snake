function addName() {
    var user = {
        name: document.getElementById("nameEntry").value
    };
    console.log(user.name);
    document.getElementById("welcomeHeader").innerHTML = "Welcome " + user.name;
};


