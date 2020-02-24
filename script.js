//блок с первыми вопросами
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

// блок с вопросиками записываем в переменные 
let requiredExpense1 = prompt("Введите обязательную статью расходов в этом месяце");
let spendValue1 = prompt("Во сколько обойдется?");
let requiredExpense2 = prompt("Введите еще одну обязательную статью расходов в этом месяце");
let spendValue2 = prompt("а это во сколько обойдется?");

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
appData.expenses.requiredExpense1 = spendValue1;
appData.expenses.requiredExpense2 = spendValue2;

// считаем расход на день. Скругление до целого в меньшую сторону. Можно и через ифы, но пока рановато усложнять.
const moneyPerDay = Math.floor(appData.budget / 30);

//Показать юзеру средний расход за день при известном доходе
alert(`ваш расход за день в месяц где-то ${moneyPerDay}`);
// проверяем что внутри appData
console.log(appData);






// присваиваем объекту expenses, который УЖЕ объявлен, данны



// console.log(appData.budget);


