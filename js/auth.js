function signup() {
  let user = username.value;
  let pass = password.value;

  if (!user || !pass) {
    msg.innerText = "All fields required";
    return;
  }

  localStorage.setItem("user", JSON.stringify({ user, pass }));
  msg.innerText = "Signup successful!";
}

function login() {
  let saved = JSON.parse(localStorage.getItem("user"));

  if (!saved) {
    msg.innerText = "No user found. Please signup.";
    return;
  }

  if (saved.user === username.value && saved.pass === password.value) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "player.html";
  } else {
    msg.innerText = "Invalid credentials";
  }
}
