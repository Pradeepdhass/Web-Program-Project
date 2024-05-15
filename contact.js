   //-------------Contact function -------------//
   function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value; 
    var phoneNumber = document.getElementById('phone-number').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;

    if (firstName == "" || lastName == "" || password == "" || confirmPassword == "" || address =="" ) {
        alert("All fields must be filled out");
        return false;
    }

    
    firstName = firstName.trim();
    lastName = lastName.trim();

    if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
        alert("First letter of the first name should be capitalized");
        return false;
    }


    else if (lastName.charAt(0) !== lastName.charAt(0).toLowerCase()) {
        alert("First letter of the last name should be lowercase");
        return false;
    }


  if (password.length < 6 || !/[!@#$%^&*]/.test(password)) {
    alert("Password must have at least 6 characters and at least one special character (!@#$%^&*)");
    return false;
}
    else if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var domainPattern = /\.(com|edu)$/;

    if (!emailPattern.test(email)) {
        alert("Invalid email address format. Please enter an email in the format xyz@gmail.com");
        return false;
    } else if (!domainPattern.test(email)) {
        alert("Email address must end with '.com' or '.edu'");
        return false;
    }

   
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        alert("Invalid phone number. Please enter a 10-digit number");
        return false;
    }

 
    if (age >= 110) {
        alert("Age must be below 110");
        return false;
    }

    alert("Thank you for registering!");
    return true;
}


function clearForm() {
    document.getElementById('myforms').reset();
}
