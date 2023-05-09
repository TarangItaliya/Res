import React, { useRef } from "react";
import Navbar from "./Navbar";
import image6 from "../../assets/image/6.jpg";
import video from "../../assets/video/1.mp4";

const Home = () => {
  // const a = useRef(null)
  return (
    <>
      <section id="home">
        <div className="main_home tarang">
          <img src={image6} alt="" className="top_image position-relative" />
          {/* <video  width="100%" controls={false} autoPlay src={video} type="" ref={a} loop> */}

          {/* </video> */}
          <div className="container ">
            <div className="row ">
              <div className="col-12 ">
                <div className="main_home_text  text-white position-absolute ">
                  <div className="text_hello fw-regular ">HELLO!</div>
                  <div className=" text_tarang fw-medium">
                    I'm Tarang Italiya
                  </div>
                  <div className="text_react fw-medium animate__animated animate__backInLeft">React Js Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
