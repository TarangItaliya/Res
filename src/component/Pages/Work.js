import React from "react";
import image3 from "../../assets/image/3.jpg";

const Work = () => {
  return (
    <>

    <section id="work">
      <div className="main_head_work pb-5">
        <div className="container">
          <div className="sub_head_work">
            <div className="about_heading d-flex justify-content-center animate__animated animate__bounceInLeft ">
              SOME OF MY WORK
            </div>
          </div>
        </div>
      </div>

      <div className="main_work_image animate__animated animate__fadeInUp">
        <div className="container">
          <div className="sub_work_image">
            <div className="row mx-5 py-5">
              <div className="col-lg-4 col-md-6 p-4 ">
                <div className="single_work_image first_hoverable">
                  <img src={image3} alt="" />
                <div className="hover_text ">
                  CRUD OPERATION  
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <div className="single_work_image">
                  <img src={image3} alt="" />
                  <div className="hover_text ">
                  FORM VALIDATION 
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <div className="single_work_image">
                  <img src={image3} alt="" />
                  <div className="hover_text ">
                  PRODUCT GALLARY VIEW 
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <div className="single_work_image">
                  <img src={image3} alt="" />
                  <div className="hover_text ">
                  TESTIMONIALS
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <div className="single_work_image">
                  <img src={image3} alt="" />
                  <div className="hover_text ">
                  WEB LAYOUT  
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <div className="single_work_image">
                  <img src={image3} alt="" />
                  <div className="hover_text ">
                  API  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work_button d-flex justify-content-center p-5">
          <button className="py-3 px-5">LOAD MORE</button>
        </div>
      </div>
      </section>
    </>
  );
};

export default Work;
