
function validateForm() {
    var firstName = document.getElementById("first-name").value.trim();
    var email = document.getElementById("email").value.trim();
    var feedback = document.getElementById("feedback").value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName === "" || feedback === "") {
        alert("Please fill in all required fields.");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    } 
  
       else if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
            alert("First letter of the first name should be capitalized");
            return false;
        }
       else{
        alert("thanks for your feedback....");
        document.getElementById('myform').reset();
       }
    }

    
function clearForm() {
    var firstName = document.getElementById("first-name").value.trim();
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value.trim();
  
    if (firstName == "" && email == "" && feedback == ""  ) 
    {
        alert("There are no filled input fields to clear.");
        return false;
    }
     else {
        if (confirm("Are you sure you want to clear the form?")) {
            document.getElementById('myform').reset();
            return true;
        }
    }
  }

