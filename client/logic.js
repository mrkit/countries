const ol = document.getElementById('countriesList');
const gameForm = document.getElementById('gameForm');
const message = document.getElementById('gameMessage');
const signUpForm = document.getElementById('signUpForm');
const scoreText = document.getElementById('scoreText');
let score = 0;

const reset = document.getElementById('reset');

reset.addEventListener('click', function(e){
  deleteCountries('/api/countries');
  location.reload();
});

scoreText.innerText = score;

window.addEventListener('load', function(){
  get('/api/countries');
});

gameForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = e.target.name.value;
  const data = `name=${name}`;

  post('/api/countries', data);

  e.target.name.value = '';
});

signUpForm.addEventListener('submit', function(e){
  e.preventDefault();
  const { username, password } = e.target;
  const data = `username=${username.value}&password=${password}`;
  userPost('/api/users/signup', data);
  
  e.target.username.value = '';
  e.target.password.value = '';
});

//Ajax Requests;
function userPost(url, data){
  const xhr = new XMLHttpRequest();
  xhr.open('post', url);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.response);
    }
  }
  xhr.send(data);
}


function post(url, data){
  const xhr = new XMLHttpRequest();
  xhr.open('post', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function(){
    if(xhr.status === 200){
      if(this.response !== 'Validation error'){
        const country = JSON.parse(this.response);
        const li = document.createElement('li');
        li.innerText = country.name;
        ol.appendChild(li);
        message.innerText = 'Good Job!'
        message.style.border = '3px solid #a6f0a6';
        
        scoreText.innerText = ++score;
      } else {
        message.innerText = 'You tried that already!';
        message.style.border = '3px solid red';
      }
    } else if(xhr.status === 500){
      message.innerText = `"${this.responseText}" is not a country!`;
      message.style.border = '3px solid red'; 
    }
  }

  xhr.send(data);
}

function get(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url)
  
  xhr.onload = function(){
    if(this.status === 200){
      const countries = JSON.parse(this.response);
      
      countries.forEach(country => {
          const li = document.createElement('li');
          li.innerText = country.name;
          ol.appendChild(li);
      })
    }
  }
  xhr.send();
}

function deleteCountries(url){
  const xhr = new XMLHttpRequest();
  xhr.open('delete', url)
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.response);
    }
  }
  
  xhr.send();
}