import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const article = (props) => {

  return (
    <React.Fragment>
      <Header />
      <div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3>Article page</h3>
					</div>
				</div>
			</div>
      <Footer />
    </React.Fragment>
  )
}

export default article;