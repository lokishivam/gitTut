const name = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const phone = document.getElementById('phone');
const list = document.getElementById('users');


btn.addEventListener('click', e => {
    e.preventDefault();
    
    localStorage.setItem(email.value, JSON.stringify({name : name.value , phone : phone.value ,email : email.value}));  
    const li =  document.createElement('li');
    const button = document.createElement('button');
    const button2 = document.createElement('button');
    button.innerText = 'delete';
    button.className = 'delete';
    button2.innerText = 'edit';
    button2.className = 'edit';
    li.innerText = `${name.value}-${email.value}-${phone.value}`;
    li.appendChild(button);
    li.appendChild(button2);
    list.appendChild(li);
    name.value = '';
    email.value = '';
    phone.value = '';
    }
  );


  list.addEventListener('click', (e) => {
   
    if(e.target.classList.contains('delete')){
        const par = e.target.parentElement;
        par.remove();
    }
    if(e.target.classList.contains('edit')){
        const par = e.target.parentElement;
        console.log(typeof par.childNodes[0].textContent);
        let data = (par.childNodes[0].textContent).split('-')[1];
        
        let user = JSON.parse(localStorage.getItem(data));
        
        name.value = user.name;
        email.value = user.email;
        phone.value = user.phone;
        par.remove();
    }
  });