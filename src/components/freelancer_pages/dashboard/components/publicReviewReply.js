import React from "react";
import { CustomTextfield, CheckBox } from "../../../shared/formComponents";
import CustomModal from "../../../shared/modal";
import { Avatar } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';
import { postPublicReply } from '../actions';
import { connect } from 'react-redux';

const PublicReviewReply = (props) => {
	const { clientData } = props;
	const [response, setResponse] = React.useState("");
	const [errResponse, setErrResponse] = React.useState("");
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!response) {
			setErrResponse("Required")
			return false
		}
		props.toggleModal()
		props.dispatchPostPublicReply({
			reply: response,
			client_review_id: clientData.id
		})
		setResponse("");
	}
	let userProfileImage = null
	if (clientData.client)
		if (clientData.client.user_profile.profile_image_folder_name) {
			userProfileImage = `http://3.211.37.133/${clientData.client.user_profile.profile_image_folder_name}${clientData.client.user_profile.user_profile_image}`
		}
	React.useEffect(() => {
		setResponse("")
		}, [props.modal])
	return (
		<CustomModal modal={props.modal}
			toggleModal={props.toggleModal}
			title="Post a Public Reply"
			className="pt-4"
			modalClass="modal-lg"
		>
			<div className="container">
				<div className="row border_bottom">
					<div className="col-md-2 p-0">
						<Avatar
							alt="Profile"
							src={userProfileImage}
							style={{ width: "60px", height: "60px" }}
							className="mx-auto mx-0"
						/>
					</div>
					<div className="col-md-10 mb-4 review start_color_font">
						<p><strong>{clientData.client ? clientData.client.user_profile.company_name : null}</strong></p>
						<p className="text-muted">{clientData.client ? clientData.client.user_profile.full_name : null}</p>
						<Rating name="half-rating-read" defaultValue={clientData.rate_by_star} precision={0.5} readOnly />
						<p className="text_opacity">{clientData.text}</p>
					</div>
				</div>
				<div className="row mt-4 pb-5 border_bottom">
					<div className="col-md-12">
						<div className="w-100 mb-4">
							<h5><strong>Important notes about seller responses:</strong></h5>
						</div>
						<div className="w-100">
							<ul className="disc">
								<li>
									Do not provide any private information about yourself or the buyer including personal information such as contact information (names, e-mail, phone numbers, addresses) or payment information.
                                </li>
								<li>Leaving a response will not have a numerical impact on your feedback score.</li>
								<li>Once submitted, responses can be removed, but they cannot be changed.</li>
								<li>Do not ask the buyer questions or start a dialogue because buyers cannot respond to your public reply.</li>
								<li>If the buyer’s feedback is suppressed in the future, this response will also be suppressed.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row mt-4 mb-4">
					<div className="col-md-12">
						<form method="post" onSubmit={handleSubmit}>
							<div className="w-100">
								<div className="w-100">
									<p style={{ display: "inline-flex" }}>Write Your Response</p>
									<p className="text-muted pull-right">{400 - response.length} {400 - response.length < 2 ? "word" : "words"} remaining</p>
								</div>
								<CustomTextfield
									multiline
									rows="6"
									value={response}
									onChange={(e) => {
										setResponse(e.target.value)
									}}
									inputProps={{ maxLength: 400 }}
									error={errResponse ? true : false}
									helperText={errResponse}
								/>
							</div>
							<div className="w-100 mt-4 mb-4">
								<CheckBox
									required
									label="By clicking Submit you aggree that you understand the “Important notes about seller responses” above."
								/>

							</div>
							<div className="w-100 pull-right">
								<button
									className="w-25 fm_custom_btn pull-right"
									type="submit">
									Submit
                                </button>
								<span
									className="w-25 mr-3 pt-2 btn fillter_button_side pull-right"
									onClick={props.toggleModal}
								>
									Cancel
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</CustomModal>
	)
}

function mapDispatchToProps(dispatch) {
	return {
		dispatchPostPublicReply: (payload) => dispatch(postPublicReply(payload)),
	};
}

export default connect(null, mapDispatchToProps)(PublicReviewReply);