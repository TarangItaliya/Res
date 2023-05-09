import React from "react";

const Contact = () => {
  return (
    <>
    <section id="contact">
      <div className="main_head_work pb-5">
        <div className="container">
          <div className="sub_head_work">
            <div className="about_heading d-flex justify-content-center  animate__animated animate__bounceInLeft">
              CONTACT 
            </div>
            <div className="row m-5 p-5  ">
              <div className="col-lg-6 ">
                <div className="d-flex justify-content-center m-4">
                  <div className="name_form  ">
                    <input
                      type="text"
                      placeholder="NAME *"
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="d-flex justify-content-center m-4">
                  <div className="name_form">
                    <input
                      type="text"
                      placeholder="E-MAIL *"
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="main_msg ">
                  <div className="sub_msg  ">
                    <div className="text-secondary mb-5">MASSEGE *</div>
                    <input type="" className="mt-5" />
                  </div>
                  <div className="last_button d-flex justify-content-center">
                    <button className="py-3 px-5">SEND MASSEGE</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_last_icon animate__animated animate__zoomIn">
              <div className="row">
                <div className="col-sm-12">
                  <div className="sub_last_icon d-flex justify-content-center ">
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-behance"></i>
                    </div>
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-dribbble"></i>
                    </div>
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-facebook-f"></i>
                    </div>
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-twitter"></i>
                    </div>
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-linkedin-in"></i>
                    </div>
                    <div className="single_last_icon  rounded-circle m-4">
                      <i className="fs-5 fa-brands mt-4 d-flex justify-content-center fa-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="main_hr">
                  <hr />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="main_last_text p-4">
                  <div className="d-flex justify-content-center">
                    COMEOUT © 2023. ALL RIGHTS RESERVED.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
