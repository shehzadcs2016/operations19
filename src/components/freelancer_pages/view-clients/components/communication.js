import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectFreelancerClientsChatMessages, makeSelectFreelancerClientsLoadingStatus } from "../selectors";
import { freelancerClientsLoadChatMessages, freelancerClientsSendMessage } from "../actions";
import ReactTimeAgo from 'react-time-ago'
import en from 'javascript-time-ago/locale/en'
import JavascriptTimeAgo from 'javascript-time-ago'
import { store } from "../../../../Redux/store"
import { CustomTextfield } from "../../../shared/formComponents"
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import CommunicationLoader from "./loaders/communicationLoader";
import ChatLoader from "./loaders/chatLoader"

const Communication = (props) => {
	JavascriptTimeAgo.addLocale(en)
	const {
		selectedClient,
		dispatchfetchFreelancerClientMessages,
		freelancerClientMessages,
		dispatchFreelancerClientSendMessage,
		value,
		loadingStatus,
	} = props;
	useEffect(() => {
		if (selectedClient) {
			dispatchfetchFreelancerClientMessages({
				clientId: selectedClient.id,
				page: 1,
			})
		}
	}, [selectedClient, value])

	useEffect(() => {
		if (freelancerClientMessages.length > 0) {
			const objDiv = document.getElementById('chat-box-id');
			if (objDiv) {
				objDiv.scrollTop = objDiv.scrollHeight;
			}
		}
	}, [freelancerClientMessages])

	const [message, setMessage] = useState("");

	const messageHandler = (e) => {
		setMessage(e.target.value);
	}

	const sendMessageHandler = (e) => {
		e.preventDefault();
		if (message !== "") {
			dispatchFreelancerClientSendMessage({
				recipient_id: selectedClient.id,
				message: message,
			})
			setMessage("");
		} else
			return false
	}

	return (
		<div className="col-md-12 mt-4">
			{selectedClient ?
				<Card>
					<CardHeader>
						<h3 className="h5 m-0 main_h"><strong>All Communications</strong></h3>
					</CardHeader>
					<CardBody>
						<div id="chat-box-id" className="w-100" style={{ maxHeight: "60vh", "overflow-y": "scroll", "overflow-x": "hidden" }}>

							{loadingStatus === false ? freelancerClientMessages.map((messageData) => {
								return (
									<div key={"message-" + messageData.id} className="row p-3">
										<div className=" pb-2">
											<Avatar
												alt="Profile"
												src={messageData.sender.user_profile.profile_image_folder_name ?
													`http://3.211.37.133/${messageData.sender.user_profile.profile_image_folder_name}${messageData.sender.user_profile.user_profile_image}` : null}
												style={{ width: "50px", height: "50px" }}
											/>
										</div>
										<div className="col-md-9">
											<p className="mb-2 all_com_p1"><strong>{messageData.sender.id !== store.getState().login.id ?
												messageData.sender.user_profile.full_name : "You"}</strong></p>
											<p className="all_com_p2">{messageData.message}</p>
											<p className="small mt-2 text-muted all_com_p2"><ReactTimeAgo date={messageData.created_at} locale="en" /></p>
										</div>
									</div>
								)
							})
								: <ChatLoader />}
						</div>
						<div className="col-md-12 mt-3">
							<form onSubmit={sendMessageHandler}>
								<div className="input-group form-material attach_file_css">
									<div className="pr-3 ">
										{/* file upload icon comment because back-end functionality pending */}
										<label for="input-file" className="mt-2">
											<AttachFileOutlinedIcon
												className="chat-attachment-icon"
											/>
											<input type="file" id="input-file" />
										</label>
									</div>
									<CustomTextfield
										placeholder="Type your message"
										name="message"
										value={message}
										className="form-control p-0"
										spellcheck="false"
										onChange={messageHandler}
									/>
									<div className="pl-2">
										<button
											type="button"
											className="perposal_color2_popup chat_send_btn"
											// className="btn btn-pure btn-default icon message-send waves-effect waves-light waves-round"
											onClick={sendMessageHandler}
										>Send</button>
									</div>
								</div>
							</form>
						</div>
					</CardBody>
				</Card>
				: null}
		</div>
	)
}


const mapStateToProps = createStructuredSelector({
	freelancerClientMessages: makeSelectFreelancerClientsChatMessages(),
	loadingStatus: makeSelectFreelancerClientsLoadingStatus(),
})

const mapDispatchToProps = (dispatch) => ({
	dispatchFreelancerClientSendMessage: (payload) => { dispatch(freelancerClientsSendMessage(payload)) },
	dispatchfetchFreelancerClientMessages: (payload) => { dispatch(freelancerClientsLoadChatMessages(payload)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Communication)