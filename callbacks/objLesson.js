let sameObj = {
    first: "js",
    second: "ko4alo4ka",
    third: "tyan",
    fouth: 1488,
    five: NaN,
};

sameObj.bool = false;

//delete something
delete sameObj.first;


sameObj.func = function forObj() {
    console.log('это функция внутри объекта');
};
sameObj.childObj = {
    color: ['blue', 'red', 'white'],
    race: ['russki', 'nerusski'],
}
// for(let key in sameObj) {
//     console.log(`${key} is ${sameObj[key]}`);
// } 

console.log(Object.keys(sameObj).length);
