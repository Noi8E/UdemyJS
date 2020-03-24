//записываемв в переменные сущности, с которыми будем работать.
let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv');
    promptBlock = document.getElementById('prompt');
    

//Восстановить порядок в меню
menu.insertBefore(menuItems[2], menuItems[1]); 
//добавить пятый пункт в меню
let newLiElem = document.createElement("li");
newLiElem.classList.add("menu-item");
newLiElem.textContent = "Пятый";
menu.appendChild(newLiElem);
//меняем фон, стучимся через body
document.body.style.background = 'url(img/apple_true.jpg)';
//меняем заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';
// Дропаем рекламу
adv.remove();
// отношение к технике эпл
const appleOpinion = function() {
    promptBlock.textContent =  prompt('Как вам техника эпол?');
};


//ехали таймауты через таймауты
setTimeout(appleOpinion, 1000);



console.log(promptBlock.textContent);












//2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

// ·        Восстановить порядок в меню, добавить пятый пункт

// ·        Заменить картинку заднего фона на другую из папки img

// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

// ·        Удалить рекламу со страницы

// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"