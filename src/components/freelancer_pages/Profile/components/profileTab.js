import React from "react";
import FreelancerDetails from "../../../client_Pages/hireFreelancers/viewProfile/components/freelancerDetails"
import { Avatar, Button } from "@material-ui/core"
import { Card, CardHeader, CardBody } from "reactstrap"
import StarRatingComponent from "react-star-rating-component"
import { getFormatedDate } from "../../../../utils"
import AboutMe from "../components/modals/aboutModal"
const profileTab = (props) => {
    return(
        <>
            <div className="row pb-3 px-3">
              <div className="offset-xl-2 col-xl-8 pb-3 p-3 bg-white">
                <div className="col-md-12 pb-3">
                    <h4 className="h5 font-weight-bold">Personal Information</h4>
                    <p style={{ fontSize: "17px" }}>{props.aboutme}</p>
                </div>
                <div className="row">
                    <div className="col-md-4 pb-4">
                    <Avatar
                        alt="Profile"
                        src={`http://3.211.37.133/${props.profile_image_folder_name}${props.profile_image}`}
                        style={{ width: "180px", height: "180px" }}
                        className="mx-auto mx-0"
                    />
                    </div>
                    <div className="col-md-8 pb-4 pt-0 pt-lg-3">
                        <h5 className="text-color pb-2">
                            Profile Picture
                        </h5>
                        <p className="pb-2">
                            Add a profile picture of yourself so customers will know exactly who they’ll be working with.
                        </p>
                    </div>
                    <div className="col-md-12">
                    <AboutMe
                        modal={props.modalAboutMe}
                        toggleModal={props.addAboutToggleModal}
                        dispatchFetchFreelancerProfile={props.dispatchFetchFreelancerProfile}
                        aboutme_data={props.freelancerProfile.freelance_aboutme}
                        user_profile={props.freelancerProfile.user_profile}
                    />
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default profileTab;