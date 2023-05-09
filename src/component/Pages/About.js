import React from "react";
import image from "../../assets/image/1.jpg";


const   About = () => {
  return (
   
  
    
    <>
      <section id="about">
        <div className="main_about  ">
          <div className="container">
            <div className="sub_about">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex juustify-content-center">
                    <div className="main_left_content">
                      <div className="left_image">
                        <div className="border_image position-relative">
                          <div className="profile_image position-absolute animate__animated animate__rotateIn">
                            <img src={image} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="resume_button mt-5 pt-5 ms-5 ps-5">
                        <button className="fw-bold p-3 text-white">
                          <span className="me-2">
                            <i className="fa fa-cloud-download"></i>
                          </span>
                          Download Resume
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  ">
                  <div className="d-flex justify-content-end mt-5">
                    <div className="about_right_text  text-white">
                      <div className="about_heading   animate__animated animate__bounceInRight "> ABOUT ME</div>
                      <div className="about_paragraph w-75">
                        I want to get explore my skills related to design and
                        development, and to strengthen my professional career
                        with reputed work culture, I have doing work properly
                        and senciarlly.I want to get explore my skills related
                        to design and development, and to strengthen my
                        professional career with reputed work culture, I have
                        doing work properly and senciarlly.
                      </div>
                      <div className="about_details mt-4">
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">NAME:</span>
                          Tarang Italiya
                        </div>
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">DATE OF BIRTH:</span>9
                          July, 2003
                        </div>
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">NATIONALITY:</span>
                          Indian
                        </div>
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">LANGUAGE:</span>
                          Hindi, Gujarati, English.
                        </div>
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">PHONE:</span>
                          +91 63513 22528
                        </div>
                        <div className="details_name fw-regular mt-3">
                          <span className="me-2 fw-bold">E-MAIL:</span>
                          italiyatarang@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section id="interest">
              <div className="main_interest mx-5 ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="interest_heading mb-5 d-flex justify-content-center animate__animated animate__backInLeft">
                      MY INTERESTS
                    </div>
                  </div>
                </div>
                <div className="row animate__animated animate__backInUp">
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-pen-fancy  align-bottom"> </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Drawing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-plane align-bottom"> </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Travel
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-headphones align-bottom"> </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Music
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-person-running align-bottom">
                          {" "}
                        </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Playing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-car-side align-bottom"> </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Driving
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="main_interest_icon m-2 d-flex justify-content-center">
                      <div className="sub_interest_icon rounded-circle text-center ">
                        <i className="fa-solid fa-paintbrush align-bottom"> </i>
                        <div className="interest_text fs-4 mt-4 text-white ">
                          Art
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="main_scroll ">
          <a href="#goTop">
          <div className="sub_scroll ">
            <div className="m-3 text-white">
              <i class="fa-solid fa-greater-than fa-rotate-270  d-flex justify-content-center "></i>
            </div>
          </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
