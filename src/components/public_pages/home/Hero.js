import React from "react";
import { Link } from "react-router-dom";
import addFlashMessage from "../../../Redux/actions/flashMessages";
import { connect } from "react-redux/";
// import FlashMessagesList from "../../shared/FlashMessagesList"; 

export const Hero = props => {
  const style = { backgroundImage: "url(images/banner-2_simple.png)" };
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   props.addFlashMessage({
  //     type: "danger",
  //     text: "test message for testing..."
  //   });
  //   console.log("flash message example");
  // }, []);
  return (
    <section id="hero" style={style}>
      <div className="container"  >
        <div className="row mx-0 mt-3" style={{ position: "absolute", top: "15%", bottom: "20%" }}>
          <div className="col-xl-6 col-lg-6 col-md-12 fm_banner col-sm-12 justify-content-start">
            <h2>
              <span>
                Book Services From The World’s Top-Rated Professionals
                </span>
            </h2>
            <div className="row">
              <div className="col-md-10">
                <p className="mt-4 mr-3">
                  Operations19 is a best-in-class “service for hire” platform that connects businesses with digital services from today’s industry-leading experts. Book one-time or repetitive tasks from proven top-rated professionals.
                </p>
              </div>
            </div>
            <div className="get-button float-left mt-4">
              <Link to="clients-signup" className="fm_custom_btn landing">
                Submit a Service Request
              </Link>
            </div> 
            {/* <p className="mt-5">
                Stop micromanaging virtual assistants with limited experience. Our handpicked professionals are leaders in their industries and apply proven methods for guaranteed success and scalability. 
            </p> */}

          </div>
          <div className="col-lg-6 col-md-6 mt-4 main_banner_img">
          <img src="images/man.png" alt="" />
          </div>
        </div>
      </div>
      {/* <FlashMessagesList /> */}
    </section>
  );
};

export default connect(null, { addFlashMessage })(Hero);
// export default Hero;
