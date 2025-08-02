function checkLogin() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const feedback = document.getElementById("feedback");

  if (username === "joy" && password === "peace") {
    feedback.style.color = "green";
    feedback.textContent = "Welcome back 💜 You're safe here.";
  } else {
    feedback.style.color = "red";
    feedback.textContent = "Incorrect details. Try again or talk to someone.";
  }

  return false; // prevent actual form submission
}
