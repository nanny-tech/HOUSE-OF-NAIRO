// Signup Function
function signup() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
  
    if (!username || !password) {
      document.getElementById("signupMsg").innerText = "Please fill in all fields.";
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.find(user => user.username === username);
  
    if (userExists) {
      document.getElementById("signupMsg").innerText = "Username already taken 😬";
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("signupMsg").style.color = "green";
      document.getElementById("signupMsg").innerText = "Account created! Redirecting to login...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  }
  
  // Login Function
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const validUser = users.find(user => user.username === username && user.password === password);
  
    if (validUser) {
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      window.location.href = "index.html";
    } else {
      document.getElementById("loginError").innerText = "Invalid username or password.";
    }
  }
  