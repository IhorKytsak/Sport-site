let comentList = document.querySelector('.fan-coments__items');
let textArea = document.querySelector('.write-comment__area');
let button = document.querySelector('.write-comment__btn');

button.addEventListener('click', addComent);

let date = new Date();
let curr_date = ('0' + date.getDate()).slice(-2);
let curr_month = ('0' + (date.getMonth() + 1)).slice(-2);
let curr_year = date.getFullYear();
let curr__hour = date.getHours();
let curr__min = date.getMinutes();
let now = `${curr_date}.${curr_month}.${curr_year}, 
${curr__hour}:${curr__min}`

function addComent(event) {
   event.preventDefault();

   if (textArea.value.length < 10) {
      textArea.style.cssText = `box-shadow: inset 0px 0px 15px 5px red;`
      textArea.value = '';
      return;
   }
   let comentItem = document
      .querySelector('.fan-coments__items .fan-coments__item')
      .cloneNode(true);
   let textItem = comentItem.querySelector('.fan-coments__text');
   textItem.style.wordBreak = 'break-all';

   textItem.innerHTML = `"${textArea.value}"`;
   comentItem.querySelector('h2').innerHTML = 'Unknown User';
   comentItem.querySelector('.fan-coments__date').innerHTML = now;

   comentList.append(comentItem);

   textArea.value = '';
   textArea.style.cssText = `box-shadow: none`
}