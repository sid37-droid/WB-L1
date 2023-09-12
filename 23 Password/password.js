// Получаем элемент с id "pswrd" и сохраняем его в переменную "password"
let password = document.getElementById("pswrd"); 
// Выводим значение переменной "password" в консоль
console.log(password); 
// Получаем элемент с id "toggleBtn" и сохраняем его в переменную "toggleBtn"
let toggleBtn = document.getElementById("toggleBtn"); 
// Получаем элемент с id "lower" и сохраняем его в переменную "lowerEl"
let lowerEl = document.getElementById("lower"); 
// Получаем элемент с id "upper" и сохраняем его в переменную "upperEl"
let upperEl = document.getElementById("upper"); 
// Получаем элемент с id "digit" и сохраняем его в переменную "digitEl"
let digitEl = document.getElementById("digit"); 
// Получаем элемент с id "char" и сохраняем его в переменную "charsEl"
let charsEl = document.getElementById("char"); 
// Получаем элемент с id "length" и сохраняем его в переменную "lengthEl"
let lengthEl = document.getElementById("length"); 
// Получаем элемент с id "btn" и сохраняем его в переменную "btnEl"
let btnEl = document.getElementById("btn"); 
// Получаем элемент с id "checker" и сохраняем его в переменную "checkerEl"
let checkerEl = document.getElementById("checker"); 
// Функция для проверки пароля
function checkPassword(inputValue) { 
   // Создаем регулярное выражение для проверки наличия строчной буквы
   const lower = new RegExp("(?=.*[a-z])"); 
   // Создаем регулярное выражение для проверки наличия заглавной буквы
   const upper = new RegExp("(?=.*[A-Z])"); 
   // Создаем регулярное выражение для проверки наличия цифры
   const number = new RegExp("(?=.*[0-9])"); 
   // Создаем регулярное выражение для проверки наличия специального символа
   const specialChars = new RegExp("(?=.*[!@#$%^&*])"); 
   // Создаем регулярное выражение для проверки длины пароля (минимум 8 символов)
   const length = new RegExp("(?=.{8,})"); 
   // Проверяем наличие строчной буквы в пароле
   if (lower.test(inputValue)) { 
      lowerEl.classList.add("valid"); 
   } else { 
      lowerEl.classList.remove("valid"); 
   } 
   // Проверяем наличие заглавной буквы в пароле
   if (upper.test(inputValue)) { 
      upperEl.classList.add("valid"); 
   } else { 
      upperEl.classList.remove("valid"); 
   } 
   // Проверяем наличие цифры в пароле
   if (number.test(inputValue)) { 
      digitEl.classList.add("valid"); 
   } else { 
      digitEl.classList.remove("valid"); 
   } 
   // Проверяем наличие специального символа в пароле
   if (specialChars.test(inputValue)) { 
      charsEl.classList.add("valid"); 
   } else { 
      charsEl.classList.remove("valid"); 
   } 
   // Проверяем длину пароля
   if (length.test(inputValue)) { 
      lengthEl.classList.add("valid"); 
   } else { 
      lengthEl.classList.remove("valid"); 
   } 
   // Получаем все элементы с классом "valid"
   let validation = document.querySelectorAll(".valid"); 
   // Вызываем функцию для определения силы пароля
   pswrdStength(validation); 
} 
// Функция для определения силы пароля
function pswrdStength(data) { 
   // Если количество элементов с классом "valid" больше или равно 5, то пароль сильный
   if (data.length >= 5) { 
      // Разблокируем кнопку
      btnEl.disabled = false; 
      // Выводим сообщение о хорошем пароле
      checkerEl.innerHTML = "<p class='strong'>Хороший пароль!</p>"; 
      // Добавляем класс "active" к кнопке
      btnEl.classList.add("active"); 
   } 
   // Если количество элементов с классом "valid" меньше 5 и больше 0, то пароль слабый
   else if (data.length < 5 && data.length > 0) { 
      // Выводим сообщение о недостаточной надежности пароля
      checkerEl.innerHTML = "<p class='weak'>Ваш пароль недостаточно надежный!</p>"; 
      // Блокируем кнопку
      btnEl.disabled = true; 
      // Удаляем класс "active" у кнопки
      btnEl.classList.remove("active"); 
   } 
   // Если количество элементов с классом "valid" равно 0, то пароль не введен
   else if (data.length === 0) { 
      // Выводим сообщение о необходимости придумать пароль
      check
erEl.innerHTML = "<p>придумайте пароль</p>"; 
      // Блокируем кнопку
      btnEl.disabled = true; 
      // Удаляем класс "active" у кнопки
      btnEl.classList.remove("active"); 
   } 
} 
// Обработчик события клика на кнопку "toggleBtn"
toggleBtn.onclick = function () { 
   // Если тип элемента "password", то меняем его на "text"
   if (password.type === "password") { 
      password.setAttribute("type", "text"); 
      // Добавляем класс "hide" к кнопке
      toggleBtn.classList.add("hide"); 
   } 
   // Если тип элемента "text", то меняем его на "password"
   else { 
      password.setAttribute("type", "password"); 
      // Удаляем класс "hide" у кнопки
      toggleBtn.classList.remove("hide"); 
   } 
};