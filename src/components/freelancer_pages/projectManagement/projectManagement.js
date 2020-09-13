import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopIcon from '@material-ui/icons/Stop';
import EditIcon from '@material-ui/icons/Edit';

const ProjectManagement = () => {
	const [timerStatus, setTimerStatus] = React.useState(false);
	const handleStartTimer = ()=>{
		setTimerStatus(true) 
	}
	const handleStopTimer= ()=>{
		setTimerStatus(false)
	}
	return(
		<section id="ProjectManagement" className="dashboard_color">
			<div className="container p-5">
				<div className="row mx-0 ">
					<div className="col-md-12 mx-0 p-0	">
						<div className="w-75 mb-4 dashboard_heading">
							<h2 className="mb-0 "> Project Management </h2>
							<p className="mt-3 w-75 Project_Management_fp">
								Manage all of your projects from a single interface. Mark tasks as complete, Clock hours per task, track progress & much more. Clients have a similar interface to track your progress.
							</p>
						</div>
						<Card>
							<CardHeader className="d-flex flex-column flex-md-row service_req_dash card_heading_dash ">
								<h3 className="main_h"><strong>Ongoing Projects</strong></h3>
							</CardHeader>
							<CardBody className="p-0 project_manegment_table">
								<div className="table-responsive">
								<table className="table dashboard_heading">
									<thead>
										<tr>
										<th>Start Date</th>
										<th>Client</th>
										<th>Timer</th>
										<th>Total Hours</th>
										<th>Weekly Limit</th>
										<th>Service</th>
										<th>Service Type</th>
										<th>Delivery Date</th>
										<th>Status</th>
										<th>Review</th>
										<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Jul 22, 20</td>
											<td>Gravity Payments<br /><span className="text-muted small">Cody fisher</span></td>
											<td>
												{
													timerStatus === true ? 
													<div className="d-flex">
														<button 
															className="projectManagementStopIcon_btn"
															onClick={handleStopTimer}>
															<StopIcon/>
														</button>
														<span>11:11:1</span>
													</div>
													:  <div className="d-flex">
															<button className="projectManagementIcon_btn mr-1" onClick={handleStartTimer}><PlayCircleOutlineIcon/></button>
															<button className="projectManagementIcon_btn mr-1" 
																// onClick={}
															 >
																<AccessTimeIcon/>
															</button>
															<button
																className="projectManagementIcon_btn mr-1"
																// onClick={}
															>
																<EditIcon/>
															</button>
														</div>
												}
												
											</td>
											<td>25</td>
											<td>Native ios</td>
											<td>Native ios</td>
											<td>Once</td>
											<td>jul 22</td>
											<td><button className="perposal_color float-left">Pending</button></td>
											<td>jul 22</td>
											<td>jul 22</td>
										</tr>
										<tr>
											<td>Jul 22, 20</td>
											<td>Gravity Payments<br /><span className="text-muted small">Cody fisher</span></td>
											<td>25</td>
											<td>25</td>
											<td>Native ios</td>
											<td>Native ios</td>
											<td>Once</td>
											<td>jul 22</td>
											<td><button className="perposal_color float-left">Pending</button></td>
											<td>Review</td>
											<td>
												Contact Buyer
												View Proposal
											</td>
										</tr>
									</tbody>
								</table>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectManagement;


