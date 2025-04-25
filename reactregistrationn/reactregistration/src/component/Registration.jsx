import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration() {
  async function sendData(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    alert(name+email+password);
        const response=await fetch("https://itcstudentapp-backend-4cdf.onrender.com/register",{
          method:'POST',
          body:JSON.stringify({name,email,password}),
          headers:{'Content-Type':'application/json'}
        })
        const res=await response.json();
        alert(res.msg);
  }
  return (
    <div>Registration
      <div>
      <form onSubmit={sendData}>
      <div>
    <label>Name</label>
    <input type="text" name="name" id="name1" aria-describedby="emailHelp" placeholder="Enter name" />
  
  </div>
  <div>
    <label>Email address</label>
    <input type="email" name="email" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div>
    <label>Password</label>
    <input type="password" name="password"  id="pass1" placeholder="Password" />
  </div>
  
  <button type="submit">Submit</button>
</form>
      </div>
    </div>
  )
}

export default Registration