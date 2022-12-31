const name = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(name.value, email.value)   
    let users = localStorage.getItem("users"); 
    if(users == null){
        users = [];
        users.push({name : name.value , email : email.value});
        localStorage.setItem("users" , JSON.stringify(users));
    }
    else{
        let data = JSON.parse(users);
        data.push({name : name.value , email : email.value})
        localStorage.setItem("users" , JSON.stringify(data));
    }
    }
  );