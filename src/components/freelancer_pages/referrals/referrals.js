import React, { useState } from "react";
import { Link } from "react-router-dom";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Avatar } from "@material-ui/core"
import CustomTextfield from '../../shared/formComponents/customTextfield'
import {
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

export const ReferralsBody = () => {
  const [billingPeriod, setBillingPeriod] = useState("");
  const handleBillingPeriodChange = (event) => {
    setBillingPeriod(event.target.value);
  };
  return (
    <section id="ReferralsBody">
      <div className="container p-5">
        <div className="row mx-0">
          <div className="col-xl-6 dashboard_heading px-0 ">
            <h2 className="col-xl-6 dashboard_heading earning_info_btn px-0">
              Referral
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Card className="my-3 w-100 referral_page_heading">
              <CardBody>
                <h2 className="">Invite Friends & You Both Get Up To $100</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                <a href="#">Learn More About Referral Program</a>
              </CardBody>
              <CardBody className="pt-0">
                <div className="row">
                  <div className="col-md-8">
                    <label>E-mail Address (Separate e-mails with commas)</label>
                    <CustomTextfield />
                  </div>
                  <div className="col-md-4">
                    <button
                      className="fm_custom_btn_Referral" >
                      Send Invite
                        </button>
                  </div>
                </div>
                <div className="row">
                  <div className="ok_color_refrel"></div>
                  <p className="ok_content_refrel">OR</p>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <label>Your Invite Link</label>
                    <CustomTextfield />
                  </div>
                  <div className="col-md-4">
                    <button
                      className="fm_custom_btn_Referral" >
                      Copy Link
                        </button>
                  </div>
                </div>
                <div className="row">
                  <div className="ok_color_refrel"></div>
                  <p className="ok_content_refrel">OR</p>
                </div>
                <div className="row">
                  <div className="col-md-12 raferrals_social_btn">
                    <label>Share Via Social</label>
                    <button
                      className="fm_custom_btn_Referral_social mr-3" >
                      Facebook <span><i class="fab fa-facebook"></i></span>
                    </button>
                    <button
                      className="fm_custom_btn_Referral_social mr-3" >
                      Twitter <span className="rafrels_twetter"><i class="fab fa-twitter"></i></span>
                    </button>
                    <button
                      className="fm_custom_btn_Referral_social" >
                      LinkedIn <span><i class="fab fa-linkedin"></i></span>
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="my-3 w-100 referral_page_heading">
              <CardBody>
                <h2 className="">Earned Reward</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              </CardBody>
              <CardBody
                className="border_bottom right_sidesection pt-0 refrals_side_bar"
              >
                <div className="col-md-12 p-0">
                  <label>People Accepted Your Invitation</label>
                  <div className="row mt-3">
                    <div className="col-md-2 pb-4">
                      <Avatar
                        alt="Profile"
                        src=""
                        className="mx-auto mx-0"
                      />
                    </div>
                    <div className="col-md-9" style={{ cursor: "pointer" }}>
                      <p><strong>Spark Creative Agency</strong></p>
                      <p className="content2 small text-muted">Cody Fisher • New York, USA</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2 pb-4">
                      <Avatar
                        alt="Profile"
                        src=""
                        className="mx-auto mx-0"
                      />
                    </div>
                    <div className="col-md-9" style={{ cursor: "pointer" }}>
                      <p><strong>Spark Creative Agency</strong></p>
                      <p className="content2 small text-muted">Cody Fisher • New York, USA</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-2 pb-4">
                      <Avatar
                        alt="Profile"
                        src=""
                        className="mx-auto mx-0"
                      />
                    </div>
                    <div className="col-md-9" style={{ cursor: "pointer" }}>
                      <p><strong>Spark Creative Agency</strong></p>
                      <p className="content2 small text-muted">Cody Fisher • New York, USA</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>












      {/* <div className="container my-5">
        <h4 className="h4 text-color">
          Refer FreeeUp and make referral earnings
        </h4>
        <Card className="my-3 w-100">
          <CardHeader className=" text-color">
            <h3 className="h4 d-flex justify-content-center justify-content-md-start pl-0">
              The FreeeUp Referral Program
            </h3>
          </CardHeader>
          <CardBody className="row mx-0">
            <MonetizationOnIcon
              className="col-md-1 h-100 w-100 text-color"
              fontSize="large"
            />
            <div className="col-md-11">
              <h5>
                Refer business owners to FreeeUp and earn
                <span className="text-info">$0.50</span> for every hour they
                bill forever.
              </h5>
              <br />
              <h5>
                To learn more about the program, click here:
                <Link to="#"> FreeeUp Referral Program.</Link>
              </h5>
            </div>
          </CardBody>
        </Card>
        <Card className="my-3 w-100">
          <CardHeader className=" text-color">
            <h3 className="h4 d-flex justify-content-center justify-content-md-start pl-0">
              Your Client Referral URLs
            </h3>
          </CardHeader>
          <CardBody>
            <h5>
              Use these links to refer business owners in eCommerce, Amazon, and
              marketing to join the FreeeUp Marketplace.
            </h5>
            <br />
            <h5>
              <Link to="#">
                https://timeclock.freeeup.com/public/signup?a=bb7e447a-d677-419a-9b41-493e902d4cc9
              </Link>
              --> goes to FreeeUp home page.
            </h5>
            <br />
            <h5>
              <Link to="#">
                https://timeclock.freeeup.com/public/signup?a=bb7e447a-d677-419a-9b41-493e902d4cc9&r=s
              </Link>
              --> goes to FreeeUp Sign Up page.
            </h5>
          </CardBody>
        </Card>
        <h4 className="h4 text-color">View your FreeeUp Referral Earnings</h4>
        <Card className="my-3 w-100">
          <CardHeader className=" text-color">
            <h3 className="pl-0 h4 d-flex justify-content-center justify-content-md-start">
              Client Referrals
            </h3>
          </CardHeader>
          <CardBody>
            <h5 className="text-info">Client Name & Rate</h5>
          </CardBody>
        </Card>

        <div className="row  ">
          <div className="col-lg-3 col-md-6 my-2 text-center">
            <Card>
              <CardHeader className="text-color">
                <h4 className="h4">Total Earnings This Period</h4>
              </CardHeader>
              <CardBody>
                <h2 className="text-info">$0.00</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 my-2 text-center">
            <Card>
              <CardHeader className="text-color">
                <h4 className="h4">Affiliate Hours This Period</h4>
              </CardHeader>
              <CardBody>
                <h2 className="text-info">0h 00m</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 my-2 text-center">
            <Card>
              <CardHeader className="text-color">
                <h4 className="h4">Lifetime Affiliate Hours</h4>
              </CardHeader>
              <CardBody>
                <h2 className="text-info">0h 00m</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 my-2 text-center">
            <Card>
              <CardHeader className="text-color">
                <h4 className="h4">Lifetime Affiliate Earnings</h4>
              </CardHeader>
              <CardBody>
                <h2 className="text-info">$0.00</h2>
              </CardBody>
            </Card>
          </div>
          <div className="my-3 w-100 col-lg-12">
            <Card>
              <CardHeader className="row mx-0 text-color">
                <h3 className="h4 col-lg-9 col-md-8 pl-0 ">
                  Affiliate Earnings breakdown
                </h3>
                <FormControl className="col-lg-3 col-md-4  mx-auto">
                  <InputLabel id="demo-simple-select-label">
                    Choose a billing period
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={billingPeriod}
                    onChange={handleBillingPeriodChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </CardHeader>
              <CardBody>
                <TableContainer component={Paper} className="my-2">
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Freelancer</TableCell>
                        <TableCell align="center"> 1 Apr</TableCell>
                        <TableCell align="center"> 2 Apr</TableCell>
                        <TableCell align="center">3 Apr</TableCell>
                        <TableCell align="center"> 4 Apr </TableCell>
                        <TableCell align="center"> 5 Apr </TableCell>
                        <TableCell align="center">6 Apr</TableCell>
                        <TableCell align="center">7 Apr </TableCell>
                        <TableCell align="center">Total </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow></TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper} className="my-2">
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Client</TableCell>
                        <TableCell align="center"> 1 Apr</TableCell>
                        <TableCell align="center"> 2 Apr</TableCell>
                        <TableCell align="center">3 Apr</TableCell>
                        <TableCell align="center"> 4 Apr </TableCell>
                        <TableCell align="center"> 5 Apr </TableCell>
                        <TableCell align="center">6 Apr</TableCell>
                        <TableCell align="center">7 Apr </TableCell>
                        <TableCell align="center">Total </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow></TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ReferralsBody;
