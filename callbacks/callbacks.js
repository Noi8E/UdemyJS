//Способ 1. Когда коллбэк прописывается в теле функции  
// doHomework('JS',() => {
//     alert('Finished my homework');
//   });

//Способ 2. Когда коллбэк прописывается отдельно и затем
//пробрасывается как аргумент в функцию.
doHomework('JS', finishCall);

function finishCall() {
    alert('Finished my homework');
};

function first() {
    setTimeout(() => {
        console.log(second());
    }, 2000)
    
}
function second() {
    console.log(2);
}
first();
second();