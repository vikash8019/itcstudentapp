import React from 'react'

function Login() {

  async function sendData(e){
    e.preventDefault();
    
    const email=e.target.email.value;
    const password=e.target.password.value;
    alert(email+password);
        const response=await fetch("https://itcstudentapp-backend-4cdf.onrender.com/login",{
          method:'POST',
          body:JSON.stringify({email,password}),
          headers:{'Content-Type':'application/json'}
        })
        const res=await response.json();
        alert(res.msg);
  }
  return (
    <div>Login
<div>
<form onSubmit={sendData}>
      
  <div>
    <label>Email address</label>
    <input type="email" name='email' id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div>
    <label>Password</label>
    <input type="password" name='password'  id="pass1" placeholder="Password" />
  </div>
  
  <button type="submit">Login</button>
</form>

</div>

    </div>
  )
}

export default Login