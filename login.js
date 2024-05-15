document.getElementById('toggle').addEventListener('change', function()
{
    const loginForm=document.getElementById('login-form');
    const signupForm=document.getElementById('signup-form');


    if(this.checked){
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
    else{
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
});
document.getElementById('toggle').addEventListener('change', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (this.checked) {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    } else {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    }
});

function validateLoginForm() {
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (email === "" || password === "") {
        alert("Both Email and password fields must be filled out for login");
        return false;
    } else {
        
        alert("You are logging into Dhass & Co Recipes !");
        document.getElementById('login-email').value = "";
        document.getElementById('login-password').value = "";
        window.location.href = 'index.html';
        return true;
    }
}

function validateSignupForm() {
    var username = document.getElementById('signup-username').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var password = document.getElementById('signup-password').value;

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out for sign-up");
        return false;
    } else {
       
        alert("Thank you for Creating an Account with us!");
        window.location.href = 'index.html';
        return true;
    }
}
