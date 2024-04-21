const handleSignup = async (event, roleValue) => {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      username: username,
      password: password,
      role: roleValue,
    }),
  });
  const res = await response.json();
  if (res.status === "ok") {
    if (roleValue == 0) {
      window.location.href =
        "file:///D:/0WIN-SEM-2024/CSE2016-SWE/LAB/SWE/jobfinder.html";
    } else if (roleValue == 1) {
      window.location.href =
        "file:///D:/0WIN-SEM-2024/CSE2016-SWE/LAB/SWE/employer.html";
    }
  } else {
    document.getElementById("error-text").innerHTML =
      "An error occurred. Please try again.";
  }
};

const handleLogin = async (event) => {
  event.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const res = await response.json();
  if (res.status === "ok") {
    if (res.role === 0) {
      window.location.href =
        "file:///D:/0WIN-SEM-2024/CSE2016-SWE/LAB/SWE/jobfinder.html";
    } else if (res.role === 1) {
      window.location.href =
        "file:///D:/0WIN-SEM-2024/CSE2016-SWE/LAB/SWE/employer.html";
    }
  } else {
    document.getElementById("error-text").innerHTML =
      "Invalid username or password.";
  }
};
