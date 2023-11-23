const loginFormHandler = async (event) => {
  event.preventDefault();
  try {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    console.log(username, password);

    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        console.log("try again!");
      }
    }
  } catch (err) {
    res.status(500).json({ message: "check public/javscript file", err });
  }
};
document
  .getElementById("loginform")
  .addEventListener("submit", loginFormHandler);
