import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";

const solutions= () =>{
  return (
    <React.Fragment>
      <Header />
      <section style={{ background: 'url(images/banner.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="blog-hero-area">
                <div className="blog-category-title Platform custom_subheader">
                  <h2> <br /><span><strong>Business Solutions  </strong></span> </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className='col-md-12 col-sm-12 text-center'>
            <Card className="m-3">
              <CardBody>
                <h2 className="my-3">Coming Soon!</h2>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default solutions;