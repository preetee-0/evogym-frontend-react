import React from 'react'

const login = () => {
  return (
    <div>
      ths is login page
      <form action="">
        <label > UserName:</label>
        <input type="text" name='username' />
           <label >Email:</label>
           <input type="email" name='email' />
              <label >Password:</label>
              <input type="text" name="password" id="password" />
                 <label >Phone NO.:</label>
                 <input type="number" name="number" id="" />
      </form>
    </div>
  )
}

export default login
