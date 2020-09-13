import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const projectManagement = (props) => {
   return(<Card>
      <CardHeader className="d-flex flex-column flex-md-row service_req_dash">
         <h3 className="h4 mb-0">
         Project Management
         </h3>
         {props.hideViewAll? null :<Link className="ml-auto arrow_width" to="/freelancer-projectManagement" > View All </Link>}
      </CardHeader>
      <CardBody className="p-0">
         <div className="table-responsive">
         <table className="table dashboard_heading">
            <thead>
               <tr>
               <th>Start Date</th>
               <th>Client</th>
               <th>Total Hours</th>
               <th>Service</th>
               <th>Service Type</th>
               <th>Delivery Date</th>
               <th>Status</th>
               </tr>
            </thead>
            <tbody>
               <tr>
               <td>Jul 22, 20</td>
               <td>Gravity Payments<br /><span className="text-muted small">Cody fisher</span></td>
               <td>25</td>
               <td>Native ios</td>
               <td>Once</td>
               <td>jul 22</td>
               <td><button className="perposal_color float-left">Pending</button></td>
               </tr>
               <tr>
               <td>Jul 22, 20</td>
               <td>Gravity Payments<br /><span className="text-muted small">Cody fisher</span></td>
               <td>25</td>
               <td>Native ios</td>
               <td>Once</td>
               <td>jul 22</td>
               <td><button className="perposal_color float-left">Pending</button></td>
               </tr>
            </tbody>
         </table>
         </div>
      </CardBody>
   </Card>
   )
}

export default projectManagement;