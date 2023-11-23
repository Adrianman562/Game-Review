const signupFormHandler = async (event) => {
  event.preventDefault();

  try {
    let email = document.getElementById("emailInput").value.trim();
    let username = document.getElementById("usernameInput").value.trim();
    let password = document.getElementById("passwordInput").value.trim();

    console.log(password, username, email);

    if (username && email && password) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
      }
    }
  } catch (err) {
    res.json({ message: "Check signup endpoint!", err });
  }
};

document
  .getElementById("submitButton")
  .addEventListener("submit", signupFormHandler);
