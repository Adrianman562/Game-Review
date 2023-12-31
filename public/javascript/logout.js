const btn = document.getElementById("logout");

const logoutHandler = async () => {
  // Make a POST request to destroy the session on the back end
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successfully logged out, redirect to the login page
    document.location.replace("/login");
  } else {
  }
};

btn.addEventListener("click", logoutHandler);
