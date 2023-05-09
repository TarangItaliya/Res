import React from "react";
import image from "../../assets/image/1.png";

const Education = () => {
  return (
    <>
    <section id="education">
      <div className="main_education">
        <div className="container">
          <div className="sub_education ">
            <div className="text_education_heading">
              <div className="row">
                <div className="col-12">
                  <div className="about_heading education_heading d-flex justify-content-center animate__animated animate__bounceInLeft ">
                    EDUCATION
                  </div>
                </div>  
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-5">
                <div className="main_left_education">
                  <div className="">
                    <div className="sub_main_content animate__animated animate__bounceInLeft ">
                      <div className="bca fw-bold">
                        BECHOLOR COMPUTER ENGINEERING
                      </div>
                      <div className="education_year fw-semibold">
                        PURSUING - 2021 |
                        <span className="university fw-bold">
                          {" "}
                          SAURASHTRA UNIVERSITY{" "}
                        </span>
                      </div>
                      <div className="education_paragraph mt-2 fw-light fs-5">
                        <div>
                          I want to get explore my skills related to design and
                          development, and to strengthen my professional career
                          with reputed work culture, I have doing work properly
                          and senciarlly.
                        </div>
                      </div>
                    </div>

                    <div className="sub_main_content hsc_sub_content animate__animated animate__bounceInLeft  ">
                      <div className="bca fw-bold">
                        Higher Secondary Certificate.
                      </div>
                      <div className="education_year fw-semibold">
                        MAY - 2021 |
                        <span className="university fw-bold">
                          {" "}
                          MAUNI INTERNATIONAL SCHOOL
                        </span>
                      </div>
                      <div className="education_paragraph mt-2 fw-light fs-5">
                        <div>
                          I want to get explore my skills related to design and
                          development, and to strengthen my professional career
                          with reputed work culture, I have doing work properly
                          and senciarlly.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="main_image animate__animated animate__pulse">
                  <img className="" src={image} alt="" />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="right_education_content">
                  <div className="sub_main_content hsc_sub_content  animate__animated animate__bounceInRight ">
                    <div className="bca fw-bold">
                    Staff Selection Commission
                    </div>
                    <div className="education_year fw-semibold">
                      MARCH - 2019 |
                      <span className="university fw-bold">
                        {" "}
                        MAUNI INTERNATIONAL SCHOOL
                      </span>
                    </div>
                    <div className="education_paragraph mt-2 fw-light fs-5">
                      <div>
                        I want to get explore my skills related to design and
                        development, and to strengthen my professional career
                        with reputed work culture, I have doing work properly
                        and senciarlly.
                      </div>
                    </div>
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

export default Education;
