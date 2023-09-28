const createProfile = document.getElementById("createProfile");
const submit = document.getAnimations("submitButton");

createProfile
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("emailInput").value;
    let username = document.getElementById("usernameInput").value.trim();
    let password = document.getElementById("passwordInput").value.trim();
    let confirm = document.getElementById("confirmInput").value.trim();
    let genres = document.querySelectorAll(".checkbox").value;
    let avatar = document.getElementById("avatarInput").value;
    let aboutMe = document.getElementById("textArea").value;

    // Create object with the new profile info
    const newProfile = {
      email,
      username,
      password,
      confirm,
      genres,
      avatar,
      aboutMe,
    };

    // Fetch POST request to the server
    fetch("api/user", {
      method: "POST",
      body: JSON.stringify(newProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        email = "";
        username = "";
        password = "";
        confirm = "";
        genres = "";
        avatar = "";
        aboutMe = "";
      });

    console.log(newProfile);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
