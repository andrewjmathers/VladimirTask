const 
    loginGreeting = document.getElementById('loginGreeting'),
    usernameInput = document.getElementById('usernameInput'),
    loginNotYou = document.getElementById('loginNotYou'),
    loginContinue = document.getElementById('loginContinue'),
    wrapperLogin = document.getElementById('wrapperLogin');

function loginScreen(username){

    loginGreeting.innerHTML = 
        `Welcome to the testing center, ${username || 'Stranger! <br /> Please enter your name if you wish to proceed.'}`;
    
    if(username){
        usernameInput.classList.add("invisible");
        loginNotYou.classList.remove("invisible");
    }
}

loginContinue.onclick = () =>{
    if(!!usernameInput.value.trim()){
        localStorage.username = usernameInput.value.trim()
    }

    if(localStorage.username){
        wrapperLogin.classList.add("invisible");
        loadTests();
    }else{
        alert("please enter a username")
    }
}

loginNotYou.onclick = () =>{ 
    localStorage.clear(); 
    location.reload();
};
window.onload = loginScreen(localStorage.username);
