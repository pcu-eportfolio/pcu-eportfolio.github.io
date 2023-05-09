function Login() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var ind = document.getElementById('ind');

    if(email == "") {
        ind.innerHTML = "Username cannot be empty.";
    }

    else if(pass == "") {
        ind.innerHTML = "Password cannot be empty.";
    }

    else if(email != "user" || pass != "pass") {
        ind.innerHTML = "You have entered invalid credentials.";
    }

    else {
        ind.innerHTML = "You are being redirected...";
        setTimeout("document.location.href = 'home/home.html';", 3000);
    }
}

function SignUp() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var ind = document.getElementById('ind');

    if(email == "") {
        ind.innerHTML = "Username cannot be empty.";
    }

    else if(pass == "") {
        ind.innerHTML = "Password cannot be empty.";
    }

    else {
        ind.innerHTML = "Your account has been created.<br>You are being redirected to Login page...";
        setTimeout("document.location.href = 'index.html';", 5000);
    }
}