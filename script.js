//блок с первыми вопросами
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

// блок с вопросиками записываем в переменные 
// объект с данными юзера
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// !делаем через for () {}
for(let i = 0; i < 2; i++) {
    // тут непонятно, как конкретезировать пару вопрос-ответ?
     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
         spendValue = +prompt("Во сколько обойдется?");

     if ( (typeof(requiredExpense)) === 'string' && (typeof(spendValue)) != null 
     && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
            appData.expenses[requiredExpense] = spendValue;
     }
     else {
        alert("Данные введены некорректно, обновите страницу");
     }

};
// !делаем через while-loop
// let i = 0;
// while ( i < 2) {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//         spendValue = +prompt("Во сколько обойдется?");
//     i += 1;    

//     if ( (typeof(requiredExpense) ) === 'string' && (typeof(spendValue)) != null 
//      && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
//             appData.expenses[requiredExpense] = spendValue;
//     }

//      else {
//         alert("Данные введены некорректно, обновите страницу");
//     }
// };
// !делаем через do {} while()
// let i = 0;
// do {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//         spendValue = +prompt("Во сколько обойдется?");
       
    
//     if ( (typeof(requiredExpense) ) === 'string' && (typeof(spendValue)) != null && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
//                 appData.expenses[requiredExpense] = spendValue; 
//                 i += 1; }
//     else {
//         alert("Данные введены некорректно, обновите страницу");
//     }            
    
//     } while ( i < 2);

appData.moneyPerDay = Math.floor(appData.budget / 30);

// считаем расход на день. Скругление до целого в меньшую сторону. Можно и через ифы, но пока рановато усложнять.

//Показать юзеру средний расход за день при известном доходе
alert(`ваш расход за день в месяц где-то ${appData.moneyPerDay}`);
// 
// 
if (appData.moneyPerDay < 700) {
    alert("вы нищеброд");
}
if (appData.moneyPerDay > 700 && appData.moneyPerDay < 1000) {
    console.log("нормально");
}
if(appData.moneyPerDay > 1000 && appData.moneyPerDay >=4000) {
    alert('у нас Рокфеллер!');
}
else {
    console.log("что-то пошло не так");
}

console.log(appData);