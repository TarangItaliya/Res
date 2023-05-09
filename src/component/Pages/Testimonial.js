import React from "react";

const Testimonial = () => {
  return (
    <>
    <section id="testimonial">
      <div className="main_testimonial">
        <div className="container">
          <div className="sub_testimonial">
            <div className="row m-5 animate__animated animate__zoomInUp">
              <div className="col-lg-4  bg-dark py-5">
                <div className="single_testimonial  py-5 px-4  ">
                    <div className="number fs-1 fw-bold text-white">
                        02.
                    </div>
                    <div className="field field_2 fs-3 mt-2 fw-semibold">
                        WEB DESIGN
                    </div>
                    <div className="testimonial_paragraph mt-2 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                    </div>
                </div>
              </div>
 
              <div className="col-lg-4 py-5 spe_bg">
                <div className="single_testimonial  py-5 px-4 animate__animated animate__lightSpeedInRight">
                    <div className="number fs-1 fw-bold">
                        01.
                    </div>
                    <div className="field fs-3 fw-semibold mt-2">
                        REACT JS
                    </div>
                    <div className="testimonial_paragraph mt-2 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
                    </div>
                </div>
              </div>

              <div className="col-lg-4 bg-dark py-5">
                <div className="single_testimonial  py-5 px-4 ">
                    <div className="number fs-1 fw-bold text-white">
                        03.
                    </div>
                    <div className="field field_2 fs-3 mt-2 fw-semibold">
                        UI-UX DESIGN
                    </div>
                    <div className="testimonial_paragraph mt-2 fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.
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

export default Testimonial;
