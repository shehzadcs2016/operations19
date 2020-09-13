import React from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Avatar } from "@material-ui/core";
import { fetchFreelancerProfile, postReviewReply } from '../actions';
import { makeSelectFreelancerProfile } from '../selectors';
import FreelancerDetails from './components/freelancerDetails';
import ContactInfo from './components/contactInfo';
import WorkHistory from './components/workHistory';
import DegreesAndCertificates from './components/degreesAndCertificates'
import { getFormatedDate } from '../../../../utils/index';
import ViewProfileLoader from './loader';
import StarRatingComponent from 'react-star-rating-component';
import { buttonStyle } from "../../../../utils";
import {
  Button,
} from "@material-ui/core";
import AddReviewModal from './components/addReviewModal';
import { addReview } from '../actions';
import ReviewCard from './components/reviewCard';
import Breakdown from './components/breakdown';
import ViewRepliesModal from '../../../freelancer_pages/Profile/components/modals/viewRepliesModal';
import ReviewReplyModal from '../../../freelancer_pages/Profile/components/modals/replyModal';

export const BodyViewProfile = ({
  dispatchFetchFreelancerProfile,
  dispatchPostReviewReply,
  dispatchAddReview,
  freelancerProfile,
  location
}) => {

  const [addReviewModal, setAddReviewModa] = React.useState(false);
  const [projectId, setProjectId] = React.useState(null);
  const [viewRepliesModalOpen, setViewRepliesModalOpen] = React.useState(false)
  const [replyModalOpen, setReplyModalOpen] = React.useState(false);
  const [reply, setReply] = React.useState("");
  const [reviewId, setReviewId] = React.useState(null);
  const [selectedReplies, setSelectedReplies] = React.useState(null)

  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const params = new URLSearchParams(location.search);
    console.log("profile id ", params.get('profileId'))
    setProjectId(params.get('profileId'));
    dispatchFetchFreelancerProfile({
      profileId: params.get('profileId')
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleAddReviewModal = () => {
    setAddReviewModa(!addReviewModal);
  }

  const toggleReplyModal = (id) => {
    setReplyModalOpen(!replyModalOpen);
    setReviewId(id);
    setReply("");
  }

  const toggleViewRepliesModal = (selectedReplies) => {
    !viewRepliesModalOpen? setSelectedReplies(selectedReplies): setSelectedReplies(null)
    setViewRepliesModalOpen(!viewRepliesModalOpen);
  }

  const onAddReview = (review) => {
    review['freelancer_id'] = projectId;
    dispatchAddReview(review);
    setAddReviewModa(false)
  } 

  const onReplyReview = () => {
    dispatchPostReviewReply({
      client_review_id:reviewId,
      reply: reply
    })
    setReplyModalOpen(false);
    setReply("");
  }

  const onReplyChange = (e) => {
    setReply(e.target.value);
  } 

  if(!freelancerProfile) return (
    <div className="mt-5 pt-5 mx-3">
      <div className="row pb-3 px-3">
      <div className="offset-xl-2 col-xl-6 pb-3">
      <ViewProfileLoader />
      </div>
      </div>
      </div>
  )
  const { 
    freelance_work_histories,
    freelance_degree_certificates,
    email,
    freelance_aboutme: { aboutme, expertise, skills, profile_link, profile_image },
    created_at,
    user_profile: {
      first_name, last_name, phone_number, skype_id
    },
    average_rating,
    total_reviews,
    client_reviews

   } = freelancerProfile && freelancerProfile;
   console.log("freelancer profile is ", freelancerProfile)
  return (
    <div className="mt-5 pt-5 mx-3">
      <AddReviewModal 
        modal={addReviewModal} 
        toggleModal={toggleAddReviewModal}
        onAddReview={onAddReview}
        />
        <ViewRepliesModal
          modal={viewRepliesModalOpen} 
          toggleModal={toggleViewRepliesModal}
          selectedReplies={selectedReplies}
        />
        <ReviewReplyModal 
        modal={replyModalOpen} 
        reply={reply}
        handleChange={onReplyChange}
        toggleModal={toggleReplyModal}
        onPostReply={onReplyReview}
        />
      <div className="row pb-3 px-3">
        <div className="offset-xl-2 col-xl-6 pb-3">
          <Card className="h-100">
            <CardBody>
              <div className="row">
                <div className="col-md-4 pb-4 ">
                  <Avatar
                    alt="Profile"
                    src={profile_image}
                    style={{ width: "180px", height: "180px" }}
                    className="mx-auto mx-0"
                  />
                </div>
                <div className="col-md-6 pb-4 pt-0 pt-lg-3">
                  <h4 className="text-color pb-2 h2">
                    {`${first_name} ${last_name}`}
                  </h4>
                  <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={Number(average_rating)}
                    onStarClick={() => {}}
                  />
                  <p className="pb-2">
                  {`${Number(average_rating).toFixed(1)} (${total_reviews})`}
                  </p>
                  <p className="pb-2">
                      <strong>{freelancerProfile.freelance_aboutme.location}</strong>
                  </p>
                  <p>
                    {`Joined the Operation19 on ${getFormatedDate(created_at)}`}
                  </p>
                </div>
                <div className="col-md-12 pb-3">
                  <h4 className="h5 font-weight-bold">About</h4>
                  <p style={{ fontSize: "17px" }}>
                    {aboutme}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className=" col-xl-2 pb-3">
          <FreelancerDetails expertise={expertise} skills={skills} profileLink={profile_link}/>
        </div>
      </div>
      <div className="row pb-3 px-3">
      <div className="offset-xl-2 w-100 col-xl-6 pb-3">
        {freelance_work_histories.length > 0 && 
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Past Projects and Work History</h3>
            </CardHeader>
            <CardBody>
              {
                freelance_work_histories
                .map((project, key) => 
                <WorkHistory 
                  project={project} 
                  key={`work-history-${project.id}`}
                  length = {freelance_work_histories.length}
                  />
                )
              }
            </CardBody>
          </Card>
        }
        </div>
        <div className=" col-xl-2  pb-3">
          <ContactInfo info={{email, phone_number, skype_id}}/>
        </div>
      </div>
      <div className="row pb-3 px-3">
      <div className="offset-xl-2 w-100 col-xl-6 pb-3">
      {
        freelance_degree_certificates.length > 0 && 
        
          <Card className="h-100">
            <CardHeader>
              <h3 className="h4">Degrees & Certifications</h3>
            </CardHeader>
            <CardBody>
            {
                freelance_degree_certificates
                .map((acedemicRecord, key) => 
                <DegreesAndCertificates 
                  acedemicRecord={acedemicRecord} 
                  key={`acedemic-record-${acedemicRecord.id}`}
                  length = {freelance_work_histories.length}
                  />
                )
              }
            </CardBody>
          </Card>
      }
      </div>
      </div>
      <div className="row pb-3 px-3">
      <div className="offset-xl-2 w-100 col-xl-6 pb-3">
          <Card className="h-100">
            <CardHeader>
              <div className="clearfix">
              <h3 className="h4 float-left">Reviews</h3>
              <Button
                    variant="contained"
                    style={buttonStyle}
                    className="ml-0 mx-lg-auto mb-2 float-right"
                    onClick={toggleAddReviewModal}
                    name="addReview"
                    >
                    Add Review
                    </Button>
              </div>
            </CardHeader>
            <CardBody>
              {
                client_reviews.map((review) => <ReviewCard 
                key={`reviewCard-${review.id}`} 
                review={review}
                onViewRepliesClick={toggleViewRepliesModal}
                withReplyButton
                onReplyClick={toggleReplyModal}
                />)
              }
            </CardBody>
          </Card>
      </div>
      <div className=" col-xl-2  pb-3">
          <Breakdown freelancerProfile={freelancerProfile}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  freelancerProfile: makeSelectFreelancerProfile()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchFreelancerProfile: (payload) => dispatch(fetchFreelancerProfile(payload)),
    dispatchAddReview: (payload) => dispatch(addReview(payload)),
    dispatchPostReviewReply: (payload) => dispatch(postReviewReply(payload))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BodyViewProfile))