const header = document.getElementById("header-title");
header.innerHTML = "Title";
const mainHeader = document.getElementById("main-header");
mainHeader.style.borderBottom = "solid 3px #000";

const title = document.getElementById("add");
title.style.color = 'green';

const lists = document.getElementsByClassName('list-group-item');
for(var i = 0; i < lists.length; i++){
    lists[i].style.fontWeight = "bold";
}

lists[2].style.backgroundColor = "green";

const lis = document.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
    lis[i].style.fontWeight = "bold";
}

var second = document.querySelector('.list-group-item');
console.log(second);
second.style.backgroundColor = 'green';