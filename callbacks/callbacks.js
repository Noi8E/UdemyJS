function test(num,someFunc) {
someFunc;
console.log(num);
}


//для варианта 1
function someFunc() {
    console.log(2+2);
}



//вариант 1 когда функция объявлена вне (выше по коду) и когда ты ее вызываешь в ро
// test(12,someFunc);

//вариант 2 когда функция объявляется внутри вызова первой функции.
test(12, someFunc);

console.log(someFunc());

