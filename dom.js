/*
    Examine the document object 
*/
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Item Display";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";

// console.log(document.forms);
// console.log(document.links)
// console.log(document.forms[0]);
// console.log(document.images);

/*
    getElementById 
*/

// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent= 'Hello';
// headerTitle.innerText = 'Goodbye'
// console.log(headerTitle.textContent); //Item Lister 123
// console.log(headerTitle.innerText); //Item Lister
// headerTitle.innerHTML = '<h3>Hello World</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'
// header.style.borderBottom = 'solid 3px #000';

/*
    getElementsByClassName
*/

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // gives error;
// // items.style.backgroundColor = 'pink';

// for(let i = 0;i < items.length; i++){
//     items[i].style.backgroundColor = 'pink';
// }


/*
    getElementsByTagName
*/

// const listItems = document.getElementsByTagName('li');

// console.log(listItems);
// let listItem2 = listItems[2];
// console.log(listItem2);
// listItem2.textContent = 'world';
// listItem2.style.fontWeight = 'bold';
// listItem2.style.backgroundColor = 'red';

// for (let index = 0; index < listItems.length; index++) {
//     let element = listItems[index];
//     element.style.backgroundColor = 'pink';
    
// }

/*
    querySelector
*/

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// //selects first element in the group
// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

/*
    querySelectorAll
*/

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

const odds = document.querySelectorAll('li:nth-child(odd)');
const evens =  document.querySelectorAll('li:nth-child(even)');

for(const oddItem of odds){
    oddItem.style.backgroundColor = 'blue';
}


for(const evenItem of evens){
    evenItem.style.backgroundColor = 'yellow';
}