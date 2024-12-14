document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
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
  
    if (members[regNo] === password) {
      location.href = "dashboard.html";
    } else {
      document.getElementById("login-error").textContent = "Invalid credentials!";
    }
  });
  