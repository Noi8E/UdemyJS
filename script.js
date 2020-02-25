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

//пишем внутрь вложенного объекта статьи и расходы. Расходы приходят в стринге!!!



for(let i = 0; i < 2; i++) {
    // тут непонятно, как конкретезировать пару вопрос-ответ?
     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
         spendValue = +prompt("Во сколько обойдется?");

     if ( (typeof(requiredExpense)) === 'string' && (typeof(spendValue)) != null 
     && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
            appData.expenses[requiredExpense] = spendValue;
     }
     else {

     }

};

appData.moneyPerDay = Math.floor(appData.budget / 30);

// считаем расход на день. Скругление до целого в меньшую сторону. Можно и через ифы, но пока рановато усложнять.

//Показать юзеру средний расход за день при известном доходе
alert(`ваш расход за день в месяц где-то ${appData.moneyPerDay}`);
// 
// 
if (appData.moneyPerDay < 1500) {
    alert("вы нищеброд");
}
 if(appData.moneyPerDay > 1500 && appData.moneyPerDay >=4000) {
    alert('больше работайте');
}
else {
    console.log("что-то пошло не так");
};

console.log(appData);