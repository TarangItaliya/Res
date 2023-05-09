import React from 'react'

const Navbar = () => {
  return (
    <>
    <section id="goTop">
    <div className="top_header position-fixed z-3 w-100">
        <div className="container">
            <div className="sub_header d-flex justify-content-between text-white">
                <div className="header_icon d-flex ">
                    <div className="facebook_icon my-3 me-4 fs-5">
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="facebook_icon my-3 me-4 fs-5">
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div className="facebook_icon my-3 me-4 fs-5">
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="bar_icon m-3 fs-4">
                <i class="fa-solid fa-bars-staggered"></i>
                </div>

                {/* <div className="main_header_menu"> */}
                  <div className="sub_header_menu">
                    <ul className='d-flex'>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#home">Home</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#about">About</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#interest">Interest</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#education">Education</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#skills">Skills</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#testimonial">Testimonial</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#work">Work</a></li>
                      <li className='m-3  '><a className='text-white fw-light fs-5' href="#contact">Contact</a></li>
                    </ul>
                  </div>
                {/* </div> */}
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Navbar