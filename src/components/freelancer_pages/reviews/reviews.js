import React from 'react'
import { Card, CardHeader, CardBody } from "reactstrap";
import Reviews from "../dashboard/components/reviews"
import { makeSelectReviewsRequests } from '../dashboard/selectors';
import ReviewsSidebar from '../dashboard/components/reviewsSideBar';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const reviews = (props) => {
	return (
		<>
			<section id="Reviews" className="dashboard_color">
				<div className="container pt-5 pb-5">
					<div className="row mx-0">
						<div className="col-xl-12 pr-5 pl-5">
							<h4><strong>Reviews</strong></h4>
							<div className="row">
								<div className="col-md-9">
									<Reviews hideSideCard={true} hideViewAll={true} />
								</div>
								<div className="col-md-3 mt-4">
									<Card>
										<CardHeader>
											<div className="d-flex flex-column flex-md-row service_req_dash ">
												<h3 className="h4 m-0 main_h main_head"> Rating </h3>
											</div>
										</CardHeader>
										<CardBody>
											<div className="w-100 start_color_fonts review">
												<ReviewsSidebar reviewsData={props.reviewsData ? props.reviewsData[0] : null} />
											</div>
										</CardBody>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const mapStateToProps = createStructuredSelector({
	reviewsData: makeSelectReviewsRequests(),
});

export default connect(mapStateToProps)(reviews);