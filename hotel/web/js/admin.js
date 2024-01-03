const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});



/* ADMIN PAGE JS  */

const users = JSON.parse(localStorage.getItem("users")) || [];

const userList = document.getElementById("user-list");

users.forEach((user, index) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `Имя: ${user.email}, Пароль: ${user.password}`; 
/* 
    if(user.email === currentUser){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Имя: ${user.email}, Пароль: ${user.password},Количество: ${localStorage.getItem("orderCount")}
        Цена: ${localStorage.getItem("orderCount") * 147} `;
    } */
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    deleteButton.innerText = "Удалить";
    deleteButton.style.marginLeft="15px"
    deleteButton.style.backgroundColor = "#D83F31"; // Цвет фона
    deleteButton.style.color = "#fff"; // Цвет текста
    deleteButton.style.fontSize = "1.2rem"; // Размер шрифта
    deleteButton.style.fontWeight = "500"; // Толщина шрифта
    deleteButton.style.letterSpacing = "1px"; // Межбуквенное расстояние
    deleteButton.style.marginTop = "1.7rem"; // Верхний отступ
    deleteButton.style.cursor = "pointer"; // Стиль курсора
    deleteButton.style.transition = "0.4s"; // Время анимации
    deleteButton.style.height = "45px"; // Высота
    deleteButton.style.padding = "0 15px"; // Отступы внутри кнопки
    deleteButton.style.fontSize = "17px"; // Размер шрифта
    deleteButton.style.marginBottom = "1.3rem"; // Нижний отступ
    deleteButton.style.border = "1px solid #ddd"; // Граница
    deleteButton.style.borderRadius = "6px"; // Скругленные углы
    deleteButton.style.outline = "none"; // Убираем контур
    deleteButton.onclick = function() {
        // Удаление пользователя из массива и обновление отображения
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
})

