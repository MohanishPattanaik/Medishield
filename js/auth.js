document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get the entered registration number and password
    const regNo = document.getElementById("regNo").value;
    const password = document.getElementById("password").value;
  
    // Hardcoded group member details for login
    const members = {
      "23BHI10049": "password123",
      "23BHI10081": "password123",
      "23BHI10069": "password123",
      "23BHI10051": "password123",
      "23BHI10140": "password123"
    };
  
    // Check if the entered registration number and password match the hardcoded data
    if (members[regNo] === password) {
      // Redirect to the dashboard after successful login
      window.location.href = "dashboard.html";  // Use window.location.href for redirection
    } else {
      // Display an error message if the login fails
      document.getElementById("login-error").textContent = "Invalid credentials!";
    }
  });
  