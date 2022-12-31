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