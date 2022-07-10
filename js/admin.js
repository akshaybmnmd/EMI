const loginButton = document.getElementById("login_button");
const loginErrorMessege = document.getElementById("login_error_messege");
const userNameField = document.getElementById("user_name_field");
const passwordField = document.getElementById("user_password_field");

loginButton.addEventListener("click", () => {
  const userNameValue = userNameField.value;
  const userPasswordValue = passwordField.value;
  login(userNameValue, userPasswordValue);
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (getCookie("userName")) {
  if (getCookie("password")) {
    login(getCookie("userName"), getCookie("password"));
  }
}

function login(uName, pWord) {
  if (uName === "akshay" && pWord === "admin") {
    setCookie("userName", uName, 365);
    setCookie("password", pWord, 365);
    window.location.href = "Dashboard.php";
  } else {
    document.cookie =
      "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    loginErrorMessege.innerHTML = "Invalid username or password";
  }
}
