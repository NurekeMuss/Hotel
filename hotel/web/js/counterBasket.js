// Проверка состояния входа
function checkLoginStatus() {
    localStorage.removeItem("orderCount");  // обновление 0 
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (!isLoggedIn) {
      // Если пользователь не вошел в систему, показываем сообщение о регистрации/авторизации
      alert("Пожалуйста, зарегистрируйтесь или авторизуйтесь!"); 
    } else {
      // Если пользователь вошел в систему, увеличиваем и выводим счетчик заказов и сумму в консоль
      let orderCount = parseInt(localStorage.getItem("orderCount")) || 0;
      orderCount++;
      localStorage.setItem("orderCount", orderCount);
      const users = JSON.parse(localStorage.getItem("users")) || [];

const userList = document.getElementById("user-list");

users.forEach((user) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `Имя: ${user.email}, Пароль: ${user.password},
    Количество ${localStorage.getItem("orderCount")},Цена ${localStorage.getItem("orderCount") * 147}`;
  
      let orderTotal = orderCount * 147; // Замените 147 на актуальную стоимость заказа
  
      console.log("Счетчик заказов:", orderCount);
      console.log("Сумма заказов:", orderTotal);
    }
  )
}
  

  function placeOrder() {
  checkLoginStatus();
  
  // Получите выбранное количество товара
  const quantity = parseInt(document.getElementById("quantity").value);
  
  // Обновите счетчик заказов в локальном хранилище
  let orderCount = parseInt(localStorage.getItem("orderCount")) || 0;
  orderCount += quantity;
  localStorage.setItem("orderCount", orderCount);
  
  // Вычислите общую стоимость заказа
  let orderTotal = orderCount * 147; // Замените 147 на актуальную стоимость заказа
  
  // Выведите количество и цену в консоль
  console.log("Количество заказов:", orderCount);
  console.log("Сумма заказов:", orderTotal);
}
}
