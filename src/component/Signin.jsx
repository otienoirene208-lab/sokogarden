import React from 'react'

const Signin = () => {
  return (
    <div className='row  justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
            <h1>Signin</h1>
            <form action="">
              <input type="text"placeholder='Enter your username'className='form-control' />
              <br />
              <br />

              <input type="password"placeholder='Enter your password'className='form-control' />
            </form>
            </div>
    </div>
  )
}

export default Signin
