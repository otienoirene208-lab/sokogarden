import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-primary text-light mt-5'>
            <div className='container py-4'>
                <div className='row'>


                    {/* brand /about website */}
                    <div className='col-md-4 mb-3'>
                        <h5 className='fw-bold bg-warning '>Sokogarden App</h5>
                        <p className='small'>
                            Bulding Modern Web Application With User Experience
                        </p>
                    </div>



                    {/* links  */}
                    <div className='col-md-4 mb-4'>
                        <h5 className='fw-bold bg-warning'> 
                            Quick links
                        </h5>
                        <ul className='list-unstyled'>
                            <li><a href="/" className='text-light text-decoration-none'>Home</a></li>
                            <li><a href="/about"  className='text-light text-decoration-none'>about</a></li>
                            <li><a href="/addproduct"  className='text-light text-decoration-none'>addproduct</a></li>
                            <li><a href="/contact"  className='text-light text-decoration-none'>contact</a></li>

                        </ul>
                    </div>



                    {/* website contact infomation */}
                    <div className='col-md-4 mb-3  text-shadow: 0 0 10px rgb(255, 214, 12);'>
                        <h5 className='bg-warning'> contacts</h5>
                        <p>Email:Support@Sokogarden.com</p>
                        <p>phone:+254 784 457</p>
                        <p>location:Karen</p>
                    </div>

                </div>
                
            </div>

            {/* this the buttom bar */}
            <div className='bg-secondary text-center py-2'>
                <p> &copy; {new Date().getFullYear()} tikwet.All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer