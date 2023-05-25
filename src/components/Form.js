import React from 'react'


function Form({formdata,handleChange}) {
    const {username,password}= formdata
  return (
    <form>
        {/* <label htmlFor="username-input">username</label> */}
      <input   
      type="text"
      id="username-input"
      value={formdata.username}
      placeholder="username"
      onChange={handleChange}
      name='username'
      />
          <br />
       {/* <label htmlFor="passward-input">password</label> */}
      <input
      type="password"
      id="password-input"
      value={formdata.password}
      placeholder="password"
     onChange={handleChange}
     name='password'
      />
      <br></br>
      <button 
      type='submit' id='login-button' disabled={username === '' && password === ''
    }>submit</button>
    </form>
  )
}

export default Form