// Task 1
let ul = document.getElementById('list').children;

let li1 = ul[0].textContent;
let li2 = ul[1].textContent;
let li3 = ul[2].textContent;
let li4 = ul[3].textContent;
let li5 = ul[4].textContent;

console.log(li1, li5, li2, li4, li3);


let ul_ = document.querySelector('#list');

let li_1 = ul_.firstElementChild.innerHTML;
let li_2 = ul_.firstElementChild.nextElementSibling.innerHTML;
let li_3 = ul_.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
let li_4 = ul_.lastElementChild.previousElementSibling.innerHTML;
let li_5 = ul_.lastElementChild.innerHTML;

console.log(li_1, li_5, li_2, li_4, li_3);


// Task 2

let h1 = document.querySelector('h1');
let p = document.querySelectorAll('p');
let ulHorizontal = document.querySelector('#myList');
let liList = ulHorizontal.children;
let span = document.getElementsByTagName('span');


h1.style.cssText = `background-color:#96f796`
p[0].style.fontWeight = '700';
p[1].style.color = 'red';
p[2].style.textDecoration = 'underline';
p[3].style.fontStyle = 'italic';
ulHorizontal.style.display = 'flex';

for (let elem of liList) {
   elem.style.listStyleType = 'none';
}

span[0].style.visibility = 'hidden';


// Task 3

let fild = document.querySelector('.task3');

fild.style.cssText = `
   padding: 10px;
   margin-bottom: 200px;
   border:1px solid #000;
   width: 200px;
   height: auto;
   min-height: 100px;`

let button = fild.firstElementChild;

button.style.marginBottom = '10px';
button.addEventListener('click', pressed);
button.addEventListener('mouseover', moveOn);
button.addEventListener('mouseout', moveOut);

function pressed() {
   let text = document.createElement('p');
   text.textContent = 'I was pressed!'
   text.style.margin = '0';
   fild.append(text);
}

function moveOn() {
   let text = document.createElement('p');
   text.textContent = 'Mouse on me!'
   text.style.margin = '0';
   fild.append(text);
}

function moveOut() {
   let text = document.createElement('p');
   text.textContent = 'Mouse is not on me!'
   text.style.margin = '0';
   fild.append(text);
}