
function checkSession(){
    const getUser = localStorage.getItem('User');
    if(getUser){
        return window.location.href= 'profile.html'
    }
}


function generateAccessToken() {
    const tokenAarray = new Uint8Array(16);
    window.crypto.getRandomValues(tokenAarray)
    return Array.from(tokenAarray, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}

function handleSignup(event) {
    event.preventDefault();
    

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const accessToken = generateAccessToken();
    const user = {
        name: name,
        email: email,
        password: password,
        accessToken: accessToken,
        isLoggedIn: true
    }
    const userData = JSON.stringify(user)
    localStorage.setItem("User", userData)
    // localStorage.setItem('Name', name)
    // localStorage.setItem('Email', email)
    // localStorage.setItem('Password', password)
    // localStorage.setItem('accessToken', accessToken)

    // alert('SignUp Successful. Redirecting to profile page')
    console.log(user)

    function profile() {
       window.location.href = 'profile.html'
    }
    profile()
}

const signUp = document.getElementById('signUpForm');
signUp.addEventListener('submit', handleSignup)
window.addEventListener('load', checkSession)

