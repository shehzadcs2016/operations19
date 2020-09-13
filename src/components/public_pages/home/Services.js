import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function SimpleCard() {
  return (
    <section id="Services" className="padding_80"> 
      <div className="container ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="titles custom_editing">
            <h2 className="titles__main-title"> 
            <strong> 
              Explore Trending Freelance Publications
            </strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
        <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon fa fa-code"></i></div>
								<a href="#" class="dez-tilte">Engineering</a>
								<p class="m-a0">Explore in-depth developer tutorials and a new technology
                  announcments created by professional engineers in the
                  freelancer network.</p>
								<div class="rotate-icon"><i class="ti-location-pin"></i></div> 
							</div>
						</div>				
					</div>
          <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon fa fa-paint-brush"></i></div>
								<a href="#" class="dez-tilte">Design</a>
								<p class="m-a0"> Explore advanced design topics ranging from detailed design
                  tutorials to comprehensive coverage of new design techniques
                  and technologies.</p>
								<div class="rotate-icon"><i class="fa fa-paint-brush"></i></div> 
							</div>
						</div>				
					</div>
          <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon far fa-chart-bar"></i></div>
								<a href="#" class="dez-tilte">Finance</a>
								<p class="m-a0"> Your hub of cutting-edge finance studies and analysis,
                  including innovative strategies on raising capital and few
                  finance trends and tech.</p>
								<div class="rotate-icon"><i class="far fa-chart-bar"></i></div> 
							</div>
						</div>				
					</div>
          <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon far fa-calendar-check"></i></div>
								<a href="#" class="dez-tilte">Projects</a>
								<p class="m-a0"> A focal point of current best practices, tricks of the trade,
                  and state of knowledge in project Management and Agile
                  leadership.</p>
								<div class="rotate-icon"><i class="far fa-calendar-check"></i></div> 
							</div>
						</div>				
					</div>
          <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon  fa fa-cube"></i></div>
								<a href="#" class="dez-tilte">Product</a>
								<p class="m-a0"> Your source of cutting edge resedearch and writing on the
                  practice of Product Management,ranging from rapid prototyping
                  to advanced pricing models and more.</p>
								<div class="rotate-icon"><i class="ti-location-pin"></i></div> 
							</div>
						</div>				
					</div>
          <div class="col-lg-4 col-md-6 col-sm-6 trending_publications">
						<div class="icon-bx-wraper">
							<div class="icon-content">
								<div class="icon-md m-b20"><i className=" main_icon fa fa-users"></i></div>
								<a href="#" class="dez-tilte">Insights</a>
								<p class="m-a0"> Explore research and experts analysis on future of Work, with
                  articles on workplace effciency and innovation.</p>
								<div class="rotate-icon"><i class="ti-location-pin"></i></div> 
							</div>
						</div>				
					</div>
           
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category"
              style={{ height: "300px", cursor: "pointer" }}
            >
              <div className="category__image">
                <img src="img/category/cat1.png" alt="" />
                <span className="category__icon icon-color-one">
                  <i className="far fa-calendar-check"></i>
                </span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Projects</Link>
                </h6>
                <Typography
                  style={{ color: "dimgrey" }}
                  variant="body2"
                  component="p"
                >
                  A focal point of current best practices, tricks of the trade,
                  and state of knowledge in project Management and Agile
                  leadership.
                  <br />
                </Typography>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category"
              style={{ height: "300px", cursor: "pointer" }}
            >
              <div className="category__image">
                <img src="img/category/cat1.png" alt="" />
                <span className="category__icon icon-color-one">
                  <i className="fa fa-cube" aria-hidden="true"></i>
                </span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">Product</Link>
                </h6>
                <Typography
                  style={{ color: "dimgrey" }}
                  variant="body2"
                  component="p"
                >
                  Your source of cutting edge research and writing on the
                  practice of Product Management,ranging from rapid prototyping
                  to advanced pricing models and more.
                  <br />
                </Typography>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="category"
              style={{ height: "300px", cursor: "pointer" }}
            >
              <div className="category__image">
                <img src="img/category/cat1.png" alt="" />
                <span className="category__icon icon-color-one">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </span>
              </div>
              <div className="category__info">
                <h6>
                  <Link to="# ">FreeeUp Insights</Link>
                </h6>
                <Typography
                  style={{ color: "dimgrey" }}
                  variant="body2"
                  component="p"
                >
                  Explore research and experts analysis on future of Work, with
                  articles on workplace efficiency and innovation.
                  <br />
                </Typography>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
