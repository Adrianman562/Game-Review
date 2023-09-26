const loginForm = document.getElementById("form");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.getElementById("username").value.trim;
  const password = document.getElementById("password").value.trim;


  if(userName && password){
    const response = await fetch('/api/users/login')
  }
};
