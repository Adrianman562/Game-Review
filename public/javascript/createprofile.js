const signupFormHandler = async (event) => {
  event.preventDefault();

  try {
    const email = document.getElementById("emailInput").value.trim();
    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    console.log(password, username, email);

    if (username && email && password) {
      const response = await fetch("/api/users/createprofile", { 
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
  .getElementById("createProfileform") 
  .addEventListener("submit", signupFormHandler);
