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
    GetElementById 
*/

// console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent= 'Hello';
// headerTitle.innerText = 'Goodbye'
// console.log(headerTitle.textContent); //Item Lister 123
// console.log(headerTitle.innerText); //Item Lister
// headerTitle.innerHTML = '<h3>Hello World</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'
header.style.borderBottom = 'solid 3px #000';