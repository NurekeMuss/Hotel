/* Вход на Adminky */
document.getElementById("loginButton").addEventListener("click", function () {
const username = document.getElementById("exampleInputEmail1").value;
const password = document.getElementById("exampleInputPassword1").value;

// Здесь вы можете добавить проверку имени пользователя и пароля.
// Предположим, что успешный логин происходит, если имя пользователя и пароль равны "admin".
if (username === "admin@gmail.com" && password === "123123") {
    // Перенаправление на страницу администратора
    var successMessage = document.getElementById("success");
    successMessage.style.display = "block";
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 3000);
    window.location.href = "admin.html";
}
});
/* --------------------------- */

/* Forgot  */
function forgot(){
  var forgotPasswd = document.getElementById("forgot");
  forgotPasswd.style.display = "block";
  setTimeout(function() {
    forgotPasswd.style.display = "none";
  }, 3000); 
}
/* ----------------- */

 /* LOGIN FUNCTON */
 function login() {
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");

  const users = getUsersFromLocalStorage();
  const user = users.some((u) => u.email === email && u.password === password);

  if (user) {
    var successMessage = document.getElementById("success");
    successMessage.style.display = "block";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 3000);
    profile.style.display = "block";
    dropdown.style.display = "block";

    // Store login state in localStorage
    localStorage.setItem("isLoggedIn", "true");
  } else {
    var errorMessage = document.getElementById("error");
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red";
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 3000);
  }
}

// Check login state on page load
window.addEventListener("load", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    const profile = document.getElementById("profile");
    const dropdown = document.getElementById("dropdown");

    profile.style.display = "block";
    dropdown.style.display = "block";
  }
});

/* ----------------------------- */

/* Register */

function register() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const isLoggedIn = localStorage.getItem("isLoggedIn"); //чекает за логинелся или нет

  if (isLoggedIn) {
    var sighUpAgain = document.getElementById("again");
    sighUpAgain.style.display = "block";
    sighUpAgain.style.backgroundColor = "red";
    setTimeout(function () {
      sighUpAgain.style.display = "none";
    }, 3000);
  /*   alert("You are already logged in. You cannot sign up again."); */
    return;
  }
//до сюда

  if (email.trim() === "" || password.trim() === "") {
    var validMessage = document.getElementById("validation");
    validMessage.style.display = "block";
    validMessage.style.backgroundColor = "red";
    setTimeout(function () {
      validMessage.style.display = "none";
    }, 3000);
    return;
  }

  checkEmail();
  createPass();
  confirmPass();

  const users = getUsersFromLocalStorage();

  if (
    emailField.classList.contains("invalid") ||
    passField.classList.contains("invalid") ||
    cPassField.classList.contains("invalid")
  ) {
    var fixValidation = document.getElementById("fix");
    fixValidation.style.display = "block";
    fixValidation.style.backgroundColor = "red";
    setTimeout(function() {
      fixValidation.style.display = "none";
    }, 3000);
    return;
  }

  if (users.some(u => u.email === email)) {
    var errorMessage = document.getElementById("errorMessage");/* Всплышаюший сообщение */
    errorMessage.style.display = "block";
    errorMessage.style.backgroundColor = "red";
    setTimeout(function() {
      errorMessage.style.display = "none";
    }, 3000);
  } 

  else {
    users.push({ email, password });
    var successMessage = document.getElementById("successMessage");/* Всплышаюший сообщение */
    successMessage.innerHTML = `<p> Вы успешно зарегистрировались как ${email}! `
     successMessage.style.display = "block"; 
    setTimeout(function() {
      successMessage.innerHTML = `<p> Вы успешно зарегистрировались как ${email}! `;
    }, 3000);
    saveUsersToLocalStorage(users);
    updateAdminInfo();
  }
}


/* Update Admin Info (Инфы поступают когда зарегался) */
const adminInfo = document.getElementById("admin-info");
function updateAdminInfo() {
  const users = getUsersFromLocalStorage();
  
  for (const user of users) {
    adminInfo.innerHTML += `<p>Имя: ${user.email}, Пароль: ${user.password}</p>`;
  }


}

function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
}

updateAdminInfo();


/* ------------------------------- */

/* Logout */

function logout() {

  localStorage.removeItem("currentUser");

  // Удаляем счетчик заказов и цену
  localStorage.removeItem("orderCount");
  localStorage.removeItem("orderTotal");
  
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");

  // Очистка состояния входа в localStorage
  localStorage.removeItem("isLoggedIn");

  // Скрытие профиля и выпадающего меню
  profile.style.display = "none";
  dropdown.style.display = "none";
}

/* --------------------------- */
