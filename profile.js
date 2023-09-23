

// profile page

function getUserDetails() {
    // console.log(localStorage.getItem('User'))
    return userData = JSON.parse(localStorage.getItem('User'))
    
}

function displayUserDetails() {
    const userDetails = getUserDetails();
    console.log(userDetails)
    if(!userDetails || !userDetails.isLoggedIn){
        window.location.href = 'index.html'
    }
    const userData = document.getElementById('userDetails')
    userData.innerHTML= `<p>Name:${userDetails.name}</p> <p>Email:${userDetails.email}</p> <p>Password:${userDetails.password}</p> <p>AccessToken:${userDetails.accessToken}</p>`
}

function logoutSession() {
    localStorage.clear()
    window.location.href = 'index.html'
}

const logoutbtn = document.getElementById('logout');
logoutbtn.addEventListener('click', logoutSession)

// Call the displayUserDetails function when the profile page loads
window.addEventListener('load', displayUserDetails);