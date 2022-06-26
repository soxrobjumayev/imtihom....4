async function loginRequest(credentials) {
  try{ const response =  await fetch (`${API}/api/auth`,{
    method: "POST",
    headers:{
      "Content-type": "application/json"
    },
    body:JSON.stringify(credentials)
  })

  if(!response){
    alert("xatolik")
    return
  }

  const result = await response.json()
  if(response.ststus >300)throw new Error(result.error)
  return result
  
} catch(err){
  alert(err)
}

}




var formEl = document.querySelector(".login-form")
var loginEl = document.querySelector(".login-input")
var passwordEl = document.querySelector(".password-input")

formEl.addEventListener('submit', async event => {
  event.preventDefault()
  console.log(loginEl, passwordEl);
  const credentials = {
    email: loginEl.value,
    password: passwordEl.value,
  }
  const { name, isAdmin, ...loginCreadentials } = credentials
  const result = await loginRequest(credentials)
  localStorage.setItem('token', result['Authorization'])
  window.location.href = "/index.html"
}
)