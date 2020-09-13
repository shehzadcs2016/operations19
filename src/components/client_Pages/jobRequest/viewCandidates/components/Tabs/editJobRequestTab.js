import React, {useEffect, useState} from 'react';
import { Button } from "@material-ui/core";
import { CardHeader, Card, CardBody } from "reactstrap";
import TabPanel from '../tabPanel';
import axios from "../../../../../../config/axios";
import { useHistory } from 'react-router'
import { store } from "../../../../../../Redux/store";
import { getFormatedDate } from '../../../../../../utils/index';

const EditJobRequestTab =  (props) => {
	const {push} = useHistory();
	const [data, setData] = useState({
		hourly_rates:[]
	})
    
      useEffect(() => {

        if (props.id) {
         //  setIsLoading(true);
          (async () => {
            try {
              const url = `freelancer/request/${props.id}`;
            //   const url = `freelancer/request/34`;
              const res = await axios.get(url, {
                headers: {
                  Authorization: `Bearer ${store.getState().login.token}`,
                },
              });
				  console.log("::::::::",res.data.data[0]);
				  
              if (res.data.data && res.data.data.length) {
					 const data = res.data.data[0];
					
                const {
                  client_availibility,
                  client_budget,
                  client_preference,
                  client_service,
                } = data;
                let values = [];
                client_budget.map(data=>{
                  const value = Object.values(data['hourly_rate'])
                  values.push(value)
					 })
					 console.log("values",values)
					
					 setData({...data,
						created_at: data.created_at,
						status: data.status,
						is_approved: data.is_approved,
                  description_attachment: data.description_attachment,
                  client_category_id: client_service.client_category_id || "",
                  client_sub_category_id: client_service.client_sub_category_id || "",
    
                  service_title: client_service.service_title || "",
                  service_frequency: client_service.service_frequency.toString() || "",
                  service_frequency_other: client_service.service_frequency_other || "",
    
                  budget: client_budget[0].budget || "",
                  client_skills: data.client_skills,
                  project_detail: data.project_detail,
    
                  hourly_rates: values,
                  hourly_rate_other: client_budget[0].hourly_rate_other || "",
                  comments: client_budget[0].comments || "",
    
                  client_location: Object.values(data.client_location)[0],
                  client_location_other: data.client_location_other || "",
                  client_location_comments: data.client_location_comments || "",
    
                  client_project_duration: Object.values(client_availibility.client_project_duration)[0],
                  client_project_duration_other: client_availibility.client_project_duration_other || "",
                  client_project_duration_comments:
                  client_availibility.client_project_duration_comments || "",
    
                  hours_of_freelancer_required: client_availibility.hours_of_freelancer_required || "",
                  hours_of_freelancer_required_comments: client_availibility.hours_of_freelancer_required_comments || "",
    
                  client_schedule: Object.values(client_availibility.client_schedule)[0],
                  // client_schedule_specific_hrs: data.client_schedule_specific_hrs.toString(),
                  // client_schedule_other:
                  //   client_availibility.client_schedule_other || "",
                  // client_schedule_comments: client_availibility.client_schedule_comments || "",
                  
                  freelancer_availability_weekend: Object.values(client_availibility.freelancer_availability_weekend)[0],
                  freelancer_availability_weekend_other:
                    client_availibility.freelancer_availability_weekend_other || "",
                  freelancer_availability_weekend_comments:
                    client_availibility.freelancer_availability_weekend_comments || "",
                    
                  freelancer_availability_call: Object.values(client_availibility.freelancer_availability_call)[0],
                  freelancer_availability_call_other:
                    client_availibility.freelancer_availability_call_other || "",
                  freelancer_availability_call_comments:
                    client_availibility.freelancer_availability_call_comments || "",
                    
                  quickly_project_completion: Object.values(client_preference.quickly_project_completion)[0],
                  quickly_project_completion_other:
                    client_preference.quickly_project_completion_other || "",
                  quickly_project_completion_comments:
                    client_preference.quickly_project_completion_comments || "",
    
                  introduction_to_freelancer: Object.values(client_preference.introduction_to_freelancer)[0],
                  introduction_to_freelancer_other:
                    client_preference.introduction_to_freelancer_other || "",
                  introduction_to_freelancer_comments:
                    client_preference.introduction_to_freelancer_comments || "",
                });
					 
              }
            //   setIsLoading(false);
            } catch (err) {
            //   setIsLoading(false);
              console.log("async error: =>", err);
            }
          })();
        }
      }, []);
    
    return(
        <TabPanel value={props.value} index={props.index} dir={props.dir}>
            <Card>
            <CardHeader>
                <div className="row">
                <div className="col-md-6 col-sm-12 pb-2 ">
                    <h3>Job Request Details</h3>
                </div>

                <div className=" col-md-3 col-sm-12 pb-2 text-center">
                    <Button
                    variant="contained"
                    style={{ backgroundColor: "#2dced4", color: "white" }}
                    //onClick={toggleModal}
                    onClick={() => push(`/clients-submitrequests?id=${props.id}`)}
                    name="editRequest"
                    >
                    Edit Request
                    </Button>
                </div>

                <div className="col-md-3 col-sm-12 pb-2 text-center ">
                    <Button
                    variant="contained"
                    style={{ backgroundColor: "#2dced4", color: "white" }}
                    onClick={props.closeRequestTogglModal}
                    name="closeRequest"
                    >
                    Close Request
                    </Button>
                </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="text-muted border-bottom py-3">
                <p className="text-size">
	 					Submitted on {getFormatedDate(data.created_at)} 
						  {/* {data2.created_at} */}
                </p>
                <p className="text-size text-capitalize">{data.status} - Ticket #33605</p>
                <p className="text-size">Location preferred: { data.client_location ? data.client_location : data.client_location_other }</p>
                <p className="text-size">Location Comments: { data.client_location_comments}</p>
                </div>
                <div className="border-bottom py-3">
                <p className="text-size pb-3">{data.project_detail}
                </p>

                </div>
					<div className="border-bottom py-3">
					<p className="text-size">
						<strong>Fixed budget</strong>
					</p>
					<p className="text-size">{data.budget}</p>
					<p className="text-size">
						<strong>Desired budget</strong>
					</p>
					{data.hourly_rates.map(rate=>{
						return(
							<p key={rate} className="text-size">{rate}</p>
						)
					})}
					<p className="text-size">
						{data.hourly_rate_other}
					</p>
					<p className="text-size">
						<strong>Comments</strong> {data.comments}
					</p>
               </div>
					<div className="border-bottom py-3">
                <p className="text-size">
                    <strong> Project type:</strong> {data.client_project_duration}
                </p>
                <p className="text-size">
                    <strong> Hours needed per week:</strong> {data.hours_of_freelancer_required}
                </p>
                <p className="text-size">
                    <strong> Availability required:</strong>{data.client_schedule}
                </p>
                <p className="text-size">
                    <strong> Availability Comment:</strong>{data.client_schedule_comments}
                </p>
                <p className="text-size">
                    <strong> Weekends needed: </strong> {data.freelancer_availability_weekend ? data.freelancer_availability_weekend : data.freelancer_availability_weekend_other}
                </p>
					 <p className="text-size">
                    <strong> Weekends needed Comment: </strong> {data.freelancer_availability_weekend_comments}
                </p>
                </div>
                <div className="text-muted border-bottom py-3">
                <p className="text-size">Urgency: {data.quickly_project_completion ? data.quickly_project_completion :data.quickly_project_completion_other}</p>
                <p className="text-size">Introduction on {data.introduction_to_freelancer ? data.introduction_to_freelancer : data.introduction_to_freelancer_other}</p>
                <p className="text-size">Introduction Comments: {data.introduction_to_freelancer_comments}</p>
                </div>
            </CardBody>
            </Card>
        </TabPanel>
    )
}

export default EditJobRequestTab;