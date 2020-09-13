import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HelpIcon from "@material-ui/icons/Help";
import { Card, CardHeader, CardBody } from "reactstrap";
import CustomModal from "../../shared/modal";
import "date-fns";



export const Earnings = () => {
  return (
    <section id="WithDraw" className="dashboard_color">

      <div className="container p-5">
        <div className="row mx-0">
          <div className="col-xl-6 dashboard_heading px-0 ">
            <h2 className="col-xl-6 dashboard_heading earning_info_btn px-0">
              Withdraw
            </h2>
          </div>

          <div className="col-xl-6 col-md-6 px-0">
          <button className="paypal_payoneer_btn float-right ml-2"><img src="img/dispute/payoneer.png" className="mr-1" alt=""/> Payoneer Account</button>
            <button className="paypal_payoneer_btn float-right ml-2"><img src="img/dispute/paypal.png" className="mr-1" alt=""/> Paypal Account</button>
          </div>
        </div>

        <div className="mt-4">
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="d-flex text-color">
              <h3 className="h4 m-0 main_h">
                <strong>Lifetime Earnings / Earning Overview</strong>
              </h3>
            </CardHeader>
            <CardBody>
              <div className="row earning_detail ">
                <div className="col-md-2 mt-2 border_right">
                  <h5 className="mb-3">Net Earnings</h5>
                  <h3>$1,600</h3>
                </div>
                <div className="col-md-2 mt-2 border_right">
                  <h5 className=" mb-3">Withdrawn</h5>
                  <h3>$5,000</h3>
                </div>
                <div className="col-md-2 mt-2 border_right">
                  <h5 className="mb-3">Used For Purchased</h5>
                  <h3>$30,00</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Available for Withdrawl</h5>
                  <h3>$85,00</h3>
                </div>
                <div className="col-md-3 mt-2 ">
                  <h5 className="mb-3">Pending Clearance</h5>
                  <h3>$85,00</h3>
                </div>
                
              </div>
            </CardBody>
          </Card>
         <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="row mx-0">
              <h3 className="h4 col-md-6 col-lg-6 px-0 m-0 main_h">
                <strong>Earning Details</strong>
              </h3>
              <div class=" col-md-6 col-lg-6 px-2">
                <button class="btn btn-sm dropdown-toggle float-right ml-2 horlybiling_button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  By Clients
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
                <button class="btn btn-sm dropdown-toggle float-right horlybiling_button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="far fa-calendar mr-2"></i>Date Range
                  </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </CardHeader>
            <CardBody className=" p-0 box_shadow_table">
              <TableContainer component={Paper}>
                <Table className="dashboard_headingg" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Client</TableCell>
                      <TableCell >Service</TableCell>
                      <TableCell >Status</TableCell>
                      <TableCell >Frequency</TableCell>
                      <TableCell >Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="hourly_table_td">
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Jul 22, 20
                      </TableCell>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Client Name</small>
                        </TableCell>
                      <TableCell >
                        Customer Service<br></br>
                        <small class="text-muted small">Maintenance</small>
                      </TableCell>
                      <TableCell >
                       <span className="panding_span1"> Pending Clearance</span>
                      </TableCell>
                      <TableCell  >
                        Weekly
                      </TableCell>
                      <TableCell >
                        $20.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Jul 22, 20
                      </TableCell>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Client Name</small>
                        </TableCell>
                      <TableCell >
                        Customer Service<br></br>
                        <small class="text-muted small">Maintenance</small>
                      </TableCell>
                      <TableCell >
                       <span className="panding_span2"> Available To Withdraw</span>
                      </TableCell>
                      <TableCell  >
                        Weekly
                      </TableCell>
                      <TableCell >
                        $20.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Jul 22, 20
                      </TableCell>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Client Name</small>
                        </TableCell>
                      <TableCell >
                        Customer Service<br></br>
                        <small class="text-muted small">Maintenance</small>
                      </TableCell>
                      <TableCell >
                       <span className="panding_span3"> Withdrawn</span>
                      </TableCell>
                      <TableCell  >
                        Weekly
                      </TableCell>
                      <TableCell >
                        $20.00
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Jul 22, 20
                      </TableCell>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Client Name</small>
                        </TableCell>
                      <TableCell >
                        Customer Service<br></br>
                        <small class="text-muted small">Maintenance</small>
                      </TableCell>
                      <TableCell >
                       <span className="panding_span4"> Cancelled</span>
                      </TableCell>
                      <TableCell  >
                        Weekly
                      </TableCell>
                      <TableCell >
                        $20.00
                      </TableCell>
                    </TableRow> 
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
            </CardBody>
          </Card>
         </div>
      </div>
    </section>
  );
};

export default Earnings;
