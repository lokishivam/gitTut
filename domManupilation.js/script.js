// const header = document.getElementById("header-title");
// header.innerHTML = "Title";
// const mainHeader = document.getElementById("main-header");
// mainHeader.style.borderBottom = "solid 3px #000";

// const title = document.getElementById("add");
// title.style.color = 'green';

// const lists = document.getElementsByClassName('list-group-item');
// for(var i = 0; i < lists.length; i++){
//     lists[i].style.fontWeight = "bold";
// }

// lists[2].style.backgroundColor = "green";

// const lis = document.getElementsByTagName('li');
// for(var i = 0; i < lis.length; i++){
//     lis[i].style.fontWeight = "bold";
// }

// var second = document.querySelector('.list-group-item');
// console.log(second);
// second.style.backgroundColor = 'green';




var itemList = document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);



console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';



console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);