const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"; //중요한 정보를 담은게 아니라서 대문자로 쓰는 관습
const USERNAME_KEY = 'username'

function onLoginSubmit(info){
    info.preventDefault(); //어떤 이벤트의 기본 행동 발생 막기
   const username=loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
   localStorage.setItem(USERNAME_KEY,username);
}

function paintGreetings (username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

//button 이나 input 이 form 태그로 감싸져 있으면, 
// button을 누르거나 input type="submit"인 input을 누르면
//새로고침되고, form이  submit 된다. 

//브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 onLoginSubmit 함수 실행 버튼을 누르는거임 






