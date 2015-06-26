// EMULATES A DATABASE STORE OF A USER
var storedUser = {
    name: 'Rachel',
    password: 'flowers7'
};
var authed = false;

// CHECKS USER AND PASSWORD IS CORRECT BEFORE REDIRECTING TO ADMIN PANEL
function login() {
    var user = {
        name: document.getElementById("nameEntry").value,
        password: document.getElementById("passwordEntry").value
    };
    if ((user.name === storedUser.name) && (user.password === storedUser.password)) {
        var authed = true;
        document.cookie = "name=" + user.name;
        window.location = '/admin';
    } else {
        var authed = false;
        alert('Unfortunately your username or password was incorrect.  Please try again.');
    };
};

/*function checkAuth() {
    if (authed = true) {
        document.getElementById("adminNavText").innerHTML = "Admin";
        document.getElementById("adminNavText").href = "/admin";
    } else {
        document.getElementById("adminNavText").innerHTML = "Login";
        document.getElementById("adminNavText").href = "/login";
    }
    console.log(authed);
}*/

// GET COOKIE

//function getCookie(cname) {
  //  var name = cname + "=";
    //var cookieArray = document.cookie.split(';');
    //for (var i=0; i < cookieArray.length; i++) {
      //  var c = cookieArray[i];
        //while (c.charAt (0)=='') {
          //  c = c.substring(1);
            //if (c.indexOf(name) === 0) {   
              //  return c.substring(name.length,c.length);
        //    } else {
          //      return "";
        //    }
          //  console.log(name);
           // }
//    }
//}

function checkAuth(){
    var cookieSplit = document.cookie.split('name=');
    var user = {
        name: cookieSplit[1]
    };
    console.log(user.name);
    if (user.name === storedUser.name) {
        window.location = '/admin';
    };
};

// SPLITS COOKIES AND LOGS TO CONSOLE
function cookieTest() {
    var cookieSplit = document.cookie.split('name=');
    var user = {
        name: cookieSplit[1]
    };
    if (user.name === storedUser.name) {
        var authed = true;
    } else {
        var authed = false;
    };
    console.log(authed);
    console.log(user.name);
    document.getElementById("welcomeHeader").innerHTML = "Welcome Back, " + user.name;
};


// COOKIE STUFF FOR HOMEPAGE

function cookieHomepage() {
    var cookieSplit = document.cookie.split('name=');
    var user = {
        name: cookieSplit[1]
    };
    if (user.name === storedUser.name) {
        var authed = true;
    } else {
        var authed = false;
    };
    console.log(authed);
    console.log(user.name);
    if (authed === true) {
        document.getElementById("adminText").innerHTML = "Admin";
        document.getElementById("adminText").href = "/admin";
    } else {
        document.getElementById("adminText").innerHTML = "Login";
        document.getElementById("adminText").href = "/login";
    };
};