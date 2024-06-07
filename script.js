const name1 = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const department = document.getElementById("department");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const aadhar = document.getElementById("aadhar");
const panno = document.getElementById("panno");
const form = document.querySelector("form");
const male = document.getElementById("male");
const female = document.getElementById("female");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();

    const sendingpassowrd = password.value;

    // Store password in localStorage
    localStorage.setItem('signupPassword', sendingpassowrd);


})

function validation() {
    let check = true

    namevalue = name1.value.trim();
    emailvalue = email.value.trim();
    departmentvalue = department.value.trim();
    phonevalue = phone.value.trim();
    usernamevalue = username.value.trim();
    aadharvalue = aadhar.value.trim();
    pannovalue = panno.value.trim();
    passwordvalue = password.value.trim();

    //name
    if (namevalue === "") {
        errormessage(name1, "name cannot be blank");
        check = false;
    } else {
        successmessage(name1);
    }

    //email
    if (emailvalue === "") {
        errormessage(email, "email cannot be blank");
        check = false;
    } else if (!isEmail(emailvalue)) {
        errormessage(email, "not a valid email")
    }
    else {
        successmessage(email)
    }

    // Gender
    if (!male.checked && !female.checked) {
        errormessage(male, "Gender  cannot be blank");
        check = false;

    } else {
        successmessage(male)
    }

    //department
    if (departmentvalue === "") {
        errormessage(department, "email cannot be blank");
        check = false;
    } else {
        successmessage(department)
    }
    //phone
    if (phonevalue === "") {
        errormessage(phone, "phone number cannot be blank");
        check = false;
    } else if (phonevalue.length < 10) {
        errormessage(phone, "phone number should have 10 digit")
    }
    else {
        successmessage(phone)
    }

    //username
    if (usernamevalue === "") {
        errormessage(username, "username cannot be blank");
        check = false;
    } else {
        successmessage(username)
    }
    //aadhar
    if (aadharvalue === "") {
        errormessage(aadhar, "email cannot be blank");
        check = false;
    } else if (!isAadhar(aadharvalue)) {
        errormessage(aadhar, "Aadhar no can't valided")
    }
    else {
        successmessage(aadhar)
    }
    //panno
    if (pannovalue === "") {
        errormessage(panno, "pan no cannot be blank");
        check = false;
    } else if (!ispan(pannovalue)) {
        errormessage(panno, "pan number can't valided")
    }
    else {
        successmessage(panno)
    }
    //password
    if (passwordvalue === "") {
        errormessage(password, "pan no cannot be blank");
        check = false;
    }
    else {
        successmessage(password)
    }

    //redirect
    if (check) {
        window.location.href = 'loginpage.html'
    }




}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function isAadhar(aadhar) {
    return /^\d{12}$/.test(aadhar);
}

function ispan(panno) {
    return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(panno)
}

function errormessage(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerHTML = message;
    inputControl.classList.add('warning');
    inputControl.classList.remove('successfully');

}

function successmessage(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerHTML = "";
    inputControl.classList.remove('warning');
    inputControl.classList.add('successfully');
}