let box = document.getElementById("box"),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'pink';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'yellow';
circle[1].style.backgroundColor = 'red';

// for (let i  = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

heart.forEach (function(item, i, hearts) {
    item.style.backgroundColor = 'green';
})

let div = document.createElement('div');

div.classList.add('green');
// document.body.appendChild(div);

// wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]);
wrapper.removeChild(heart[0]);
document.body.replaceChild(btn[3], circle[1]);


console.log(div);