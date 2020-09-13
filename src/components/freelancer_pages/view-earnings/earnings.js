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
import { Popover, Textfield } from "../../shared/formComponents";
import HelpIcon from "@material-ui/icons/Help";
import { Card, CardHeader, CardBody } from "reactstrap";
import CustomModal from "../../shared/modal";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Divider } from "@material-ui/core";

const AdjustmentModal = (props) => {
  const [age, setAge] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <CustomModal {...props} title="Request an adjustment">
      <div>
        <h5>
          Use the Submit an adjustment feature when you completed work and
          forgot to start time for a client.
        </h5>
        <h5 className="mt-2">
          For example, you worked for a client for 1 hour and forgot to start
          the time. You can submit an adjustment for 1 hour to make up for your
          mistake.
        </h5>
        <FormControl required className="w-100">
          <InputLabel id="demo-simple-select-label">
            Select Adjustment Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            required
            format="MM/dd/yyyy"
            margin="normal"
            id="adjustment-date-picker"
            label="Select Date"
            value={selectedDate}
            className="w-100"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <FormControl required className="w-100">
          <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            required
            id="adjustment-time-picker"
            label="Select Time"
            className="w-100"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <Textfield
          label="Add a comment for the hours worked"
          name="job Description"
          onChange={() => { }}
          multiline
          rows="4"
          required
        />
        <Button
          variant="contained"
          className="mx-auto w-100 bg-info mt-2 text-white"
        >
          Submit the adjustment
        </Button>
      </div>
    </CustomModal>
  );
};

const DeleteAdjustmentModal = (props) => {
  return (
    <CustomModal
      {...props}
      title="Are you sure you want to delete this adjustment?"
    >
      <div>
        <h5>
          By clicking the button below, this adjustment will be removed from
          your account and the client's account.
        </h5>
        <Button
          variant="contained"
          className="mx-auto w-100 bg-info mt-2 text-white"
        >
          Yes, delete adjustment
        </Button>
      </div>
    </CustomModal>
  );
};

export const Earnings = () => {
  const [adjustmentModal, setAdjustmentModal] = useState(false);
  const [deleteAdjustmentModal, setDeleteAdjustmentModal] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState("");
  const [client, setClient] = useState("");
  const adjustmentModalToggle = () => {
    setAdjustmentModal(!adjustmentModal);
  };
  const deleteAdjustmentModalToggle = () => {
    setDeleteAdjustmentModal(!deleteAdjustmentModal);
  };

  const handleBillingPeriodChange = (event) => {
    setBillingPeriod(event.target.value);
  };
  const handleClientChange = (event) => {
    setClient(event.target.value);
  };
  return (
    <section id="Earnings" className="dashboard_color">
      <AdjustmentModal
        modal={adjustmentModal}
        toggleModal={adjustmentModalToggle}
      />
      <DeleteAdjustmentModal
        modal={deleteAdjustmentModal}
        toggleModal={deleteAdjustmentModalToggle}
      />

      <Popover target="Popover1" title="How does billing work?">
        FreeeUp billing periods run from Wednesday through Tuesday of each week.
        On each Thursday, clients will be charged for the hours you've billed
        them. You will then be paid for those hours on the following Thursday.
      </Popover>
      <Popover target="Popover2" title="What are adjustments?">
        If you forget to start or end your timer while working for a client, you
        can submit an adjustment from your dashboard to bill that time to the
        client's account. View all adjustments that you've sent to the client
        below.
      </Popover>

      <div className="container p-5  ">
        <div className="row mx-0">
          <div className="col-xl-6 dashboard_heading px-0 ">
            {/* <h2 className="h4 text_grey">Earnings</h2>  */}
            <h2 className="col-xl-6 dashboard_heading earning_info_btn px-0">
              Earnings
                <Button id="Popover1">
                <HelpIcon />
              </Button>
            </h2>
          </div>

          <div className="col-xl-6 col-md-6 px-0">
            {/* <Button
              className="font-weight-bold w-100"
              variant="contained"
              color="primary"
              onClick={adjustmentModalToggle}
            >
              Submit an Adjustment
            </Button> */}
            <button className="perposal_color2 float-right ml-2">Submit an Adjustment</button>
            <button className="perposal_color2 float-right ml-2">Start at Custom Time</button>
            <button className="perposal_color2 float-right">Start Time</button>
          </div>
        </div>

        <div className="mt-4">
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="d-flex text-color">
              <h3 className="h4 m-0 main_h">
                <strong>Total Net Earnings</strong> (Fixed Price & Hourly)
                </h3>
            </CardHeader>
            <CardBody>
              <div className="row earning_detail ">
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Week</h5>
                  <h3>$1,600</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className=" mb-3">Total Net Earnings This Month</h5>
                  <h3>$5,000</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings Year To Date</h5>
                  <h3>$30,00</h3>
                </div>
                <div className="col-md-3 mt-2 ">
                  <h5 className="mb-3">Total Net Earnings Last Year - 2019</h5>
                  <h3>$85,00</h3>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="d-flex text-color">
              <h3 className="h4 m-0 main_h">
                <strong>Hourly Billing</strong>
              </h3>
            </CardHeader>
            <CardBody className="pb-0">
              <div className="row earning_detail border_bottom pb-3">
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Week</h5>
                  <h3>$1,600</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className=" mb-3">Total Hrs This Week</h5>
                  <h3>44:00</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Month</h5>
                  <h3>$5,000</h3>
                </div>
                <div className="col-md-3 mt-2 text-center">
                  <h5 className="mb-3">Total Hrs This Month</h5>
                  <h3>92:00</h3>
                </div>
              </div>
              <div className="row earning_detail pb-3 pt-3">
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Week</h5>
                  <h3>$1,600</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className=" mb-3">Total Hrs This Week</h5>
                  <h3>44:00</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Month</h5>
                  <h3>$5,000</h3>
                </div>
                <div className="col-md-3 mt-2 text-center">
                  <h5 className="mb-3">Total Hrs This Month</h5>
                  <h3>92:00</h3>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="row mx-0">
              <h3 className="h4 col-md-6 col-lg-6 m-0 pl-0 main_h">
                <strong>Hourly Billing Breakdown</strong>
                <Button id="Popover1">
                  <HelpIcon />
                </Button>
              </h3>
              <div class=" col-md-6 col-lg-6 px-2">
                <button class="btn btn-sm dropdown-toggle float-right ml-2 horlybiling_button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Clients
                  </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
                <button class="btn btn-sm dropdown-toggle float-right horlybiling_button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="far fa-calendar mr-1"></i>  This Week
                  </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              {/* <FormControl className="col-md-4 col-lg-3 px-2 ">
                <InputLabel id="demo-simple-select-label" className="px-2">
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
              <FormControl className="col-md-4 col-lg-3 px-2 ">
                <InputLabel id="demo-simple-select-label" className="px-2">
                  Choose a client
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  onChange={handleClientChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
            </CardHeader>
            <CardBody className=" p-0 box_shadow_table">
              <TableContainer component={Paper}>
                <Table className="dashboard_headingg" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Client</TableCell>
                      <TableCell >Service</TableCell>
                      <TableCell >Jul 22</TableCell>
                      <TableCell >Jul 22</TableCell>
                      <TableCell >Jul 22</TableCell>
                      <TableCell >Jul 22 </TableCell>
                      <TableCell >Jul 22</TableCell>
                      <TableCell >Jul 22 </TableCell>
                      <TableCell >Jul 22 </TableCell>
                      <TableCell className="total_week">Weekly Total </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="hourly_table_td">
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="width_fist_cild">Customer Service <small class="text-muted small">Maintanence</small></TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#">$140.00</Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="width_fist_cild">Customer Service <small class="text-muted small">Maintanence</small></TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#">$140.00</Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="width_fist_cild">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="width_fist_cild">Customer Service <small class="text-muted small">Maintanence</small></TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> 4 Hours
                                    $20.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#">$140.00</Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              {/* <Link to="#" className="pt-3 h5 text-primary">
                Click here to visit the old timecard
              </Link> */}
            </CardBody>
          </Card>
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="d-flex text-color">
              <h3 className="h4 m-0 main_h">
                <strong>Fixed Price Billing</strong>
              </h3>
            </CardHeader>
            <CardBody>
              <div className="row earning_detail ">
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings This Week</h5>
                  <h3>$1,600</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className=" mb-3">Total Net Earnings This Month</h5>
                  <h3>$5,000</h3>
                </div>
                <div className="col-md-3 mt-2 border_right">
                  <h5 className="mb-3">Total Net Earnings Year To Date</h5>
                  <h3>$30,00</h3>
                </div>
                <div className="col-md-3 mt-2 ">
                  <h5 className="mb-3">Total Net Earnings Last Year - 2019</h5>
                  <h3>$85,00</h3>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="my-3 w-100 card_heading_dash">
            <CardHeader className="row mx-0">
              <h3 className="h4 col-md-6 col-lg-6 px-0 pl-0 m-0 main_h">
                <strong>Fixed Price Billing Breakdown</strong>
                <Button id="Popover1">
                  <HelpIcon />
                </Button>
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
                  <i class="far fa-calendar mr-1"></i>  Date Range
                  </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              {/* <FormControl className="col-md-4 col-lg-3 px-2 ">
                <InputLabel id="demo-simple-select-label" className="px-2">
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
              <FormControl className="col-md-4 col-lg-3 px-2 ">
                <InputLabel id="demo-simple-select-label" className="px-2">
                  Choose a client
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  onChange={handleClientChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
            </CardHeader>
            <CardBody className=" p-0 box_shadow_table">
              <TableContainer component={Paper}>
                <Table className="dashboard_headingg" aria-label="simple table ">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell >Client</TableCell>
                      <TableCell >Service</TableCell>
                      <TableCell >Price</TableCell>
                      <TableCell >Frequency</TableCell>
                      <TableCell >Total </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="hourly_table_td">
                    <TableRow>
                      <TableCell >
                        <Link to="#"> Jul 22, 20</Link>
                      </TableCell>
                      <TableCell className="">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="">Customer Service<br></br> <small class="text-muted small">Maintanence</small></TableCell>

                      <TableCell >
                        <Link to="#"> $200.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> Weekly</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#">$800.00</Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell >
                        <Link to="#"> Jul 22, 20</Link>
                      </TableCell>
                      <TableCell className="">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="">Customer Service<br></br> <small class="text-muted small">Maintanence</small></TableCell>

                      <TableCell >
                        <Link to="#"> $200.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> Weekly</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#">$800.00</Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell >
                        <Link to="#"> Jul 22, 20</Link>
                      </TableCell>
                      <TableCell className="">
                        Gravity Payments<br></br>
                        <small class="text-muted small">Cody Fisher</small>
                        {/* <Divider className="my-3" />
                        <Link to="#">Recalculate</Link> */}
                      </TableCell>
                      <TableCell className="">Customer Service<br></br> <small class="text-muted small">Maintanence</small></TableCell>

                      <TableCell >
                        <Link to="#"> $200.00</Link>
                      </TableCell>
                      <TableCell  >
                        <Link to="#"> Weekly</Link>
                      </TableCell>
                      <TableCell >
                        <Link to="#">$800.00</Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              {/* <Link to="#" className="pt-3 h5 text-primary">
                Click here to visit the old timecard
              </Link> */}
            </CardBody>
          </Card>
          <Card className="my-3 w-100">
            <CardHeader className="d-flex text-color">
              <h3 className="h4">
                Adjustments
                <Button id="Popover2">
                  <HelpIcon />
                </Button>
              </h3>
            </CardHeader>
            <CardBody className="d-flex align-items-center">
              <h5>
                For<span className="text-info"> Malka Kubersky</span> on April
                3, 2020 |<span className="text-info"> 3h 18m </span>| Requested
                on: April 3, 2020
              </h5>
              <Link
                to="#"
                onClick={deleteAdjustmentModalToggle}
                className="ml-3 mb-1"
              >
                <Button variant="outlined" size="small" color="primary">
                  delete
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
