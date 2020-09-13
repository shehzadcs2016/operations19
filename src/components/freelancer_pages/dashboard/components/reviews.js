import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core"
import { createStructuredSelector } from 'reselect';
import Rating from '@material-ui/lab/Rating';
import { makeSelectReviewsRequests } from '../selectors';
import { loadFreelancerReviews } from '../actions';
import { connect } from 'react-redux';
import ReviewsSidebar from './reviewsSideBar'
import ReviewsLoader from './reviewsLoader';
import PublicReviewReply from './publicReviewReply';
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en'
import JavascriptTimeAgo from 'javascript-time-ago'

const Reviews = (props) => {
	JavascriptTimeAgo.addLocale(en)
	const {reviewsData, limit} = props;
	const [showReviews, setShowReviews] = React.useState([]);
	const [clientData, setclientData] = React.useState('');
	const [publicReviewReplyModal, setPublicReviewReplyModal] = React.useState(false);
	
	const publicReviewReplyModalToggle = (clientObj) => {
      if (publicReviewReplyModal === false){
		  console.log("==",clientObj)
		setclientData(clientObj)
      }
        setPublicReviewReplyModal(!publicReviewReplyModal);
    };
	React.useEffect(() => {
		props.dispatchFreelancerReviews();
	  }, [])

	React.useEffect(() => {
		if (reviewsData){
		  try{
			  if (limit){
				  setShowReviews(reviewsData[0].client_reviews.slice(0,limit))
				}else{
					setShowReviews(reviewsData[0].client_reviews)
			  }
		  }
		  catch(error){
			setShowReviews(reviewsData[0].client_reviews)
		  }
		 
		}
	  }, [reviewsData])

	return(
		<>
			<PublicReviewReply 
				modal={publicReviewReplyModal}
				toggleModal={publicReviewReplyModalToggle}
				onRequestProject = {props.onRequestProject}
				clientData={clientData} 
          	/>

		{reviewsData ?
		 <Card className="mt-4 mb-4">
			<CardHeader className="d-flex flex-column flex-md-row service_req_dash ">
			<h3 className="h4 m-0 main_h main_head">
				Reviews <p>({reviewsData ? reviewsData[0].total_reviews : ""}) reviews</p>
				<Button id="Popover1" className="info_icon text-white p-0">
				</Button>
			</h3>
			{props.hideViewAll ? null :<Link className="ml-auto arrow_width" to="/freelancer-reviews" >View All</Link>}
			</CardHeader>
			<CardBody className="p-3">
				<div className="container">
					<div className="row">
						<div className={props.hideSideCard ? "col-md-12" :"col-md-9"}>
							{ showReviews ? showReviews.map((client)=>{
							return(
								<div key={client.id} className="row border_bottom pb-2 mb-3">
									<div className="col-md-1 p-0">
										<Avatar
											alt="Profile"
											 src={client.client.user_profile.profile_image_folder_name ?
												 `http://3.211.37.133/${client.client.user_profile.profile_image_folder_name}${client.client.user_profile.user_profile_image}`: null }
											style={{ width: "60px", height: "60px" }}
											className="mx-auto mx-0"
										/>
									</div>
									<div className="col-md-11 review start_color_font">
										<p>{client.client.user_profile.company_name}</p>
										<p className="text_muted_review">{client.client.user_profile.full_name}</p>
										
										<Rating name="half-rating-read" defaultValue={client.rate_by_star} precision={0.5} readOnly />
										<p className="time_review"><ReactTimeAgo date={client.created_at} locale="en"/></p>
										<p className="text_opacity">{client.text}</p>
										<div className="review_button text-right pt-2">
											<button className="color_1">
												Request Removal
											</button>
											<button 
												onClick={()=>publicReviewReplyModalToggle(client)}
												className="color_2">
												Post A Public Reply
											</button>
										</div>
									</div>
								</div>
							);
							})
							: null }
							
						</div>
						{props.hideSideCard ?
							null
							: 
							<div className="col-md-3 pr-0">
								<ReviewsSidebar reviewsData={reviewsData[0]} />
							</div>
						}
					</div>
				</div>
			</CardBody>
		</Card> : <ReviewsLoader/>}
		</>
	)
}

const mapStateToProps = createStructuredSelector({
	reviewsData: makeSelectReviewsRequests(),
  });
  
  function mapDispatchToProps(dispatch) {
	return {
	  dispatchFreelancerReviews: () => dispatch(loadFreelancerReviews()),
	};
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Reviews);