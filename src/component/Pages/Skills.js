import React from "react";

const Skills = () => {
  // const progress = document.querySelector('.progress');
  
  // progress.addEventListener('input', function() {
  //   const value = this.value;
  //   this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
  // })
  
  return (
    <>
    <section id="skills">
      <div className="main_skills">
        <div className="container">
          <div className="sub_skills">
            <div className="about_heading education_heading d-flex justify-content-center animate__animated animate__bounceInLeft ">
              PROFFESIONAL SKILLS
            </div>
            <div className="animate__animated animate__fadeIn">
            <div className="row tarang  ">
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4 ">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">REACT JS</div>
                      <div className="html_covrage react_">70%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input  type="range" className="progress" id="myinput" value={70}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4 ">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">HTML</div>
                      <div className="html_covrage html_">85%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={85}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row tarang">
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">CSS</div>
                      <div className="html_covrage css_">80%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={80}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">JAVASCRIPT</div>
                      <div className="html_covrage javascript_">75%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={75}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row tarang ">
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4 ">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">C LANGUAGE</div>
                      <div className="html_covrage c_">60%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={60}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4 ">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">WEB DESIGN</div>
                      <div className="html_covrage web_">85%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={85}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row tarang ">
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">UI-UX DESIGN</div>
                      <div className="html_covrage ui_">55%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={55}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex justify-content-center">
                  <div className="skill_slider my-4">
                    <div className="sub_skill_slider d-flex">
                      <div className="text_html fw-semibold">PHOTOSHOP</div>
                      <div className="html_covrage pho_">90%</div>
                    </div>
                    <div className="single_slider">
                      {" "}
                      <input type="range" className="progress" id="myinput" value={90}></input>
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

export default Skills;
