var formEl = document.querySelector(".login-for")
var nameEl = document.querySelector(".name-input")
var loginEl = document.querySelector(".login-input")
var passwordEl = document.querySelector(".password-input")

formEl.addEventListener('submit', async event => {
    event.preventDefault()

    console.log(nameEl);

    const credentials = {
        email: loginEl.value,
        password: passwordEl.value,
        name: nameEl.value,
        isAdmin: true
    }
    const { name, isAdmin, ...loginCreadentials } = credentials
    const result = await registerRequest(credentials)
    localStorage.setItem('token',result['Authorization'])
    window.location.href = "/index.html"

      
    }
)