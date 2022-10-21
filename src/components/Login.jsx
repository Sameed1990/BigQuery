import React from 'react'

export default function Login() {
  return (
    <>
    <div className="main-login ">
    <div className="main-heading">
        <h1>Login Form</h1>
    </div>
    <form className='bg-light p-5'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <div className="submit-btn">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
    </>
  )
}
