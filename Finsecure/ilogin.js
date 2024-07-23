 function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example: Check username and password (for demonstration purposes)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect or proceed to next page
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}
