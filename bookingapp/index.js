const name = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const phone = document.getElementById('phone');
const list = document.getElementById('users');

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(name.value, email.value) 
    localStorage.setItem(email.value, JSON.stringify({name : name.value , phone : phone.value ,email : email.value}));  
    const li =  document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'delete';
    button.className = 'delete';
    li.innerText = `${name.value} ${email.value} ${phone.value}`;
    li.appendChild(button);
    list.appendChild(li);

    //let users = localStorage.getItem("users"); 
    // if(users == null){
    //     users = [];
    //     users.push({name : name.value , email : email.value});
    //     localStorage.setItem("users" , JSON.stringify(users));
    // }
    // else{
    //     let data = JSON.parse(users);
    //     data.push({name : name.value , email : email.value})
    //     localStorage.setItem("users" , JSON.stringify(data));
    // }
    }
  );


  list.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.classList.contains('delete')){
        const par = e.target.parentElement;
        par.remove();
    }
  });