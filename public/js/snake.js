function addName() {
    var player = {
        name: document.getElementById("nameEntry").value
    };
    console.log(player.name);
    document.getElementById("welcomeHeader").innerHTML = "Welcome " + player.name;
};


