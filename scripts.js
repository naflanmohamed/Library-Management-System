document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var validCredentials = {
        "admin": "admin123",
        "student": "student123",
        "teacher": "teacher123"
    };
    
    if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {

        if (username === "admin") {
            window.location.href = "admin.html";
        } else if (username === "student") {
            window.location.href = "student.html";
        } else if (username === "teacher") {
            window.location.href = "teacher.html";
        }
    } else {
        alert("Invalid username or password");
    }
});
