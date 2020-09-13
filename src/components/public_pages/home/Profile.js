import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  return (
    <section id="profiles" className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="titles custom_editing">
              <h2 className="titles__main-title">
                <strong>Our top talent</strong>
              </h2> 
              <p className="pt-1 mb-0">The world talent specializing in E-commerce, Amazon, Marketing, Development, Business Admin & Much More.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="category" style={{ cursor: "pointer" }}>
              <div className="category__image">
                <img src="img/category/cat1.png" alt="" />
                <span className="category__icon icon-color-one">
                  <i className="fas fa-atom"></i>
                </span>
              </div>
              <div className="category__count">
                <span className="category__count-color-one">250</span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Data Science & Analytics</Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="category" style={{ cursor: "pointer" }}>
              <div className="category__image">
                <img src="img/category/cat2.png" alt="" />
                <span className="category__icon icon-color-two">
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </div>
              <div className="category__count">
                <span className="category__count-color-two">330</span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Web Design & Illustration</Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="category" style={{ cursor: "pointer" }}>
              <div className="category__image">
                <img src="img/category/cat3.png" alt="" />
                <span className="category__icon icon-color-three">
                  <i className="fas fa-book"></i>
                </span>
              </div>
              <div className="category__count">
                <span className="category__count-color-three">250</span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Education & Training</Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="category" style={{ cursor: "pointer" }}>
              <div className="category__image">
                <img src="img/category/cat4.png" alt="" />
                <span className="category__icon icon-color-four">
                  <i className="fas fa-user-tie"></i>
                </span>
              </div>
              <div className="category__count">
                <span className="category__count-color-four">250</span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Sales Marketing</Link>
                </h6>
              </div>
            </div>
          </div> */}
           <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t1.jpg" alt=""/></div>
                <div className="team-detail">
                <h3><Link to="# "> Juan Suso</Link></h3>
                  <span>Virtual Assistants</span>
                  </div>
              </div> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t2.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# ">Senimae Zuis</Link></h3>
                  <span>Customer Services</span>
                  </div>
              </div> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t3.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# ">Elex Gil </Link></h3>
                  <span>Digital Marketing</span>
                  </div>
              </div> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t4.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# "> killy Suso</Link></h3>
                  <span>Amazon</span>
                  </div>
              </div> 
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t4.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# "> killy Suso</Link></h3>
                  <span>Amazon</span>
                  </div>
              </div> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t1.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# "> Juan Suso</Link></h3>
                  <span>Virtual Assistants</span>
                  </div>
              </div> 
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t2.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# ">Senimae Zuis</Link></h3>
                  <span>Customer Services</span>
                  </div>
              </div> 
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-12 top_talant">
              <div className="team">
                <div className="team-img"><img src="images/t3.jpg" alt=""/></div>
                <div className="team-detail">
                  <h3><Link to="# ">Elex Gil </Link></h3>
                  <span>Digital Marketing</span>
                  </div>
              </div> 
            </div>
            
          {/* <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="category" style={{ cursor: "pointer" }}>
              <div className="category__image">
                <span>
                  <img
                    className=" rounded-circle img-fluid"
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 150 / 2,
                      overflow: "hidden",
                      borderWidth: 3,
                      borderColor: "red"
                    }}
                    src="images/person3.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Kelly Smith</Link>
                </h6>
              </div>
            </div>
          </div> */}
           
        </div>
      </div>
    </section>
  );
};

export default Profile;
