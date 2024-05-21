// get the value of the input with id 'name', 'email', 'interest', and 'signup'
var full_name = document.getElementById('name');
var email = document.getElementById('email');
var interest = document.getElementById('interest');
var signup = document.getElementById('signup');

// email validation inside a function that accepts an email and validates it's in the correct format
const validateEmail = (email) => {
    // regular expression to validate email
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// collect all the error messages in an array
let errors = [];

// check if value of name is empty, if yes push error message to array
const checkName = () => {
    if (full_name.value === '') {
        errors.push('Name is required');
    }
}

// check if value of email is empty, if yes push error message to array
const checkEmail = () => {
    if (email.value === '') {
        errors.push('Email is required');
    }
}

// check if email is in the correct format, if not push error message to array
const validateEmailFormat = () => {
    if (!validateEmail(email.value)) {
        errors.push('Email must be in the correct format');
    }
}

// check if value of interest is empty, if yes push error message to array
const checkSelect = () => {
    if (interest.value === '') {
        errors.push('Please select a topic');
    }
}

// event listner for signup button on click with preventDefault to stop the form 
// from submitting. run the functions to check name, email, interest, and 
// if there are errors, it's going to append to the array, otherwise send an 
// alert message "Form submitted successfuly!"
signup.addEventListener('click', (e) => {
    e.preventDefault();
    errors = [];
    checkName();
    checkEmail();
    validateEmailFormat();
    checkSelect();
    if (errors.length > 0) {
        alert(errors.join(', '));
    } else {
        alert('Form submitted successfully!');
    }
});



