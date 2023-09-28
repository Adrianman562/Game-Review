const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();

  console.log(email, username, password);
  /*
try{
  if (aboutme) {
    const aboutme = await fetch("/api/aboutme", {
      method: "POST",
      body: JSON.stringify({ aboutme }),
      headers: { "Content-Type": "application/json" },
    });
    if (!aboutme.ok) {
      alert("Failed to send aboutme!");
    }
  }
}catch(err){
  console.log("failed to send about me!")
};
*/

  try {
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        alert("Failed to sign up!");
      }
    }
  } catch (err) {
    console.log("Failed to send singup!");
  }
};

const createProfile = document
  .getElementById("form")
  .addEventListener("submit", signupFormHandler);
