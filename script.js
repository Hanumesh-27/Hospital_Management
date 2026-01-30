// Registration Validation
function validateRegistration() {
    if (
        name.value === "" ||
        age.value === "" ||
        contact.value === "" ||
        email.value === ""
    ) {
        alert("All fields are required!");
        return false;
    }
    alert("Registration Successful!");
    return true;
}

// Doctor Search
function filterDoctors() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.getElementById("doctorTable").rows;

    for (let i = 1; i < rows.length; i++) {
        let specialization = rows[i].cells[1].innerText.toLowerCase();
        rows[i].style.display = specialization.includes(input) ? "" : "none";
    }
}

// Medicine Sorting
function sortTable() {
    let table = document.getElementById("medicineTable");
    let rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) =>
        parseInt(a.cells[1].innerText) - parseInt(b.cells[1].innerText)
    );

    rows.forEach(row => table.appendChild(row));
}

// Login Validation
function validateLogin() {
    if (username.value === "" || password.value === "") {
        alert("Enter login details!");
        return false;
    }
    alert("Login Successful!");
    return true;
}

// Feedback Rating
function rate(stars) {
    document.getElementById("ratingResult").innerText =
        "You rated: " + stars + " star(s)";
}
