function validateForm(event) {
    if (event) {
        event.preventDefault();
    }
    var nameInput = document.getElementById("pname");
    var ageInput = document.getElementById("age");
    var mobileInput = document.getElementById("mobile") || document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var dobInput = document.getElementById("dob");
    var patientIdInput = document.getElementById("patientId");
    var errors = [];
    var nameRegex = /^[A-Za-z ]+$/;
    var mobileRegex = /^\d{10}$/;
    var patientIdRegex = /^PAT-\d{4}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nameInput) {
        nameInput.style.border = "";
        if (!nameInput.value.trim() || !nameRegex.test(nameInput.value.trim())) {
            nameInput.style.border = "2px solid red";
            errors.push("Full Name must contain only alphabets and spaces.");
        }
    }
    if (ageInput) {
        ageInput.style.border = "";
        var ageVal = Number(ageInput.value);
        if (!ageInput.value || ageVal < 1 || ageVal > 120) {
            ageInput.style.border = "2px solid red";
            errors.push("Please enter a valid age between 1 and 120.");
        }
    }
    if (mobileInput) {
        mobileInput.style.border = "";
        if (!mobileInput.value.trim() || !mobileRegex.test(mobileInput.value.trim())) {
            mobileInput.style.border = "2px solid red";
            errors.push("Mobile number must be exactly 10 digits.");
        }
    }
    if (emailInput && emailInput.value.trim()) {
        emailInput.style.border = "";
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.style.border = "2px solid red";
            errors.push("Please enter a valid email address.");
        }
    }
    if (patientIdInput && patientIdInput.value.trim()) {
        patientIdInput.style.border = "";
        if (!patientIdRegex.test(patientIdInput.value.trim())) {
            patientIdInput.style.border = "2px solid red";
            errors.push("Patient ID must follow the format PAT-1234.");
        }
    }
    if (dobInput) {
        dobInput.style.border = "";
        if (!dobInput.value) {
            dobInput.style.border = "2px solid red";
            errors.push("Please enter your date of birth.");
        }
    }
    var messageBox = document.getElementById("formMessage");
    if (!messageBox) {
        messageBox = document.createElement("div");
        messageBox.id = "formMessage";
        messageBox.style.marginTop = "15px";
        messageBox.style.padding = "10px";
        messageBox.style.borderRadius = "4px";
        messageBox.style.fontWeight = "bold";
        var form = document.querySelector("form");
        if (form) {
            form.appendChild(messageBox);
        }
    }
    if (errors.length > 0) {
        messageBox.style.color = "#b00020";
        messageBox.style.backgroundColor = "#fde8e8";
        messageBox.style.border = "1px solid #f8b4b4";
        messageBox.innerHTML = "Registration failed:<br>&bull; " + errors.join("<br>&bull; ");
        return false;
    } else {
        messageBox.style.color = "#087a32";
        messageBox.style.backgroundColor = "#e6f4ea";
        messageBox.style.border = "1px solid #a8dab5";
        messageBox.textContent = "Registration successful! All details are valid.";
        return true;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});
