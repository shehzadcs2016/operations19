import React, { useEffect } from "react"
import { createStructuredSelector } from "reselect"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { Popover } from "../../shared/formComponents"
import HelpIcon from "@material-ui/icons/Help"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import PaymentIcon from "@material-ui/icons/Payment"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import { Card, CardHeader, CardBody } from "reactstrap"
import { makeSelectRequests } from "./selectors"
import { connect } from "react-redux"
import { loadRequests } from "./actions"
import RequestLsting from "../../shared/requestListing"

export const Dashboard = ({ requests, dispatchLoadRequests }) => {
  useEffect(() => {
    dispatchLoadRequests()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section id="Dashboard">
      <Popover target="Popover1" title="What are your requests?">
        You can submit a request to get started hiring with FreeeUp. You'll be
        introduced to 1 candidate at a time until you've found the right fit for
        your work.
      </Popover>
      <Popover target="Popover2" title="How do payments work?">
        Billing periods run from Wednesday through Tuesday. You'll be billed on
        each Thursday and be emailed an invoice. You can securely set up ACH,
        credit card, or a retainer on your account.
      </Popover>
      <Popover target="Popover3" title="How do I manage my hires?">
        Easily view hours billed, pause hires, set weekly limits, give bonuses,
        and find contact information.
      </Popover>
      <Popover target="Popover4" title="How does it work?">
        Refer clients to FreeeUp and earn $0.50 for every hour they bill
        forever. Share your unique Referral link on social media, through email,
        and at conferences to start earning. Find your URLs in the Referrals
        page of your account.
      </Popover>
      <Popover target="Popover5" title="We value communication.">
        Get in touch with the FreeeUp Team with any questions, concerns, or
        feedback that you have. We LOVE hearing from our users and have built
        the company entirely for you.
      </Popover>

      <div className="container my-5 ">
        <div className="row">
          <div className="col-xl-8 col-lg-12 col-md-12">
            <h4>Welcome, Josh !</h4>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 pt-3 pt-xl-0">
            <div className="float-right">
              <Link to="/clients-submitrequests">
                <Button
                  className="bg-primary text-white mr-2"
                  variant="contained"
                  color="primary"
                >
                  Submit Request
                </Button>
              </Link>
              <Button className="bg-white" variant="contained" color="default">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 mb-3">
            <RequestLsting requests={requests} />
            <Card>
              <CardHeader className="d-flex flex-column flex-md-row">
                <h3 className="h4">How to Find Quality Talent Quickly</h3>
                <Link className="ml-auto" to="#">
                  View Help Center <ArrowRightAltIcon />
                </Link>
              </CardHeader>

              <Card className="m-3">
                <CardBody>
                  <h5 className="font-weight-bold">
                    1. Submit a request for free
                  </h5>
                  <p className="my-3">
                    Share key details about who you're looking to hire with us
                    so we can find you the best possible person for the job.
                  </p>
                  <Link to="#">View tips on submitting your request</Link>
                </CardBody>
              </Card>
              <Card className="m-3">
                <CardBody>
                  <h5 className="font-weight-bold">
                    2. Interview one match a time
                  </h5>
                  <p className="my-3">
                    Within 1 business day, we'll introduce you to 1 qualified
                    candidate for your request. Interview them, ask for
                    additional options, and hire the best.
                  </p>
                  <Link to="#">Review suggested interview questions</Link>
                </CardBody>
              </Card>
              <Card className="m-3">
                <CardBody>
                  <h5 className="font-weight-bold">
                    3. Hire and get work done
                  </h5>
                  <p className="my-3">
                    Get started working with your hire. Set clear communication
                    channels and expectations for the job.
                  </p>
                  <Link to="#">
                    Access a guide on getting started with a new hire
                  </Link>
                </CardBody>
              </Card>
              <Card className="m-3">
                <CardBody>
                  <h5 className="font-weight-bold">
                    4. Pay securely through FreeeUp
                  </h5>
                  <p className="my-3">
                    FreeeUp billing periods run from Wednesday through Tuesday
                    of each week. View hours billed to you in your account and
                    receive a detailed invoice every Thursday.
                  </p>
                  <Link to="#">Set up a payment method</Link>
                </CardBody>
              </Card>
            </Card>
          </div>

          <div className="col-md-4 mt-3 mt-md-0">
            <Card className="mb-3">
              <CardHeader className="d-flex">
                <PaymentIcon className="text-primary mr-1 mt-1" />
                <h3 className="h4"> Your Billing</h3>
                <Button id="Popover2">
                  <HelpIcon />
                </Button>
              </CardHeader>
              <CardBody>
                <Link className="h6 text-primary" to="#">
                  Manage payment methods and view invoices
                </Link>
              </CardBody>
            </Card>
            <Card className="mb-3">
              <CardHeader className="d-flex">
                <SupervisorAccountIcon className="text-primary mt-1 mr-1" />
                <h3 className="h4"> Your Hires</h3>
                <Button id="Popover3">
                  <HelpIcon />
                </Button>
              </CardHeader>
              <CardBody>
                <Link className="h6 text-primary" to="/clients-hireFreelancer">
                  Manage your hires - pause, set limits, and give bonuses
                </Link>
                <br />
                <Link className="h6 text-primary" to="#">
                  View weekly billing chart
                </Link>
              </CardBody>
            </Card>
            <Card className="mb-3">
              <CardHeader className="d-flex">
                <h3 className="h4"> Resources</h3>
              </CardHeader>
              <CardBody>
                <Link className="h6 text-primary " to="#">
                  Getting started checklist
                </Link>
                <br />
                <Link className="h6 text-primary " to="#">
                  How to add a payment method
                </Link>
                <br />
                <Link className="h6 text-primary " to="#">
                  Skills available from FreeeUp
                </Link>
                <br />
                <Link className="h6 text-primary " to="#">
                  How fixed pricing works
                </Link>
                <br />
                <Link className="h6 text-primary " to="#">
                  Learn about the FreeeUp Referral Program
                </Link>
              </CardBody>
            </Card>

            <Card className="mb-3">
              <CardHeader className="d-flex">
                <h3 className="h4"> Referral Program</h3>
                <Button id="Popover4">
                  <HelpIcon />
                </Button>
              </CardHeader>
              <CardBody>
                <h5 className="mb-3" to="#">
                  Refer businesses, entrepreneurs, and influencers to FreeeUp
                  and earn
                  <span className="text-primary"> $0.50 for every hour </span>
                  they bill.
                </h5>
                <Link className="h6 text-primary" to="#">
                  Get your affiliate links
                </Link>
              </CardBody>
            </Card>
            <Card className="mb-3">
              <CardHeader className="d-flex">
                <h3 className="h4"> Contact Us</h3>
                <Button id="Popover5">
                  <HelpIcon />
                </Button>
              </CardHeader>
              <CardBody>
                <Link className="mb-4 h6 text-primary" to="#">
                  Schedule a meeting
                </Link>
                <h5 className="mb-2">
                  Do you have a Skype account? To help us better serve you, add
                  us at
                  <span className="text-primary"> Skype ID: FreeeUp.com.</span>
                </h5>
                <h5 className="mb-2">
                  Email us at <Link to="#">Support@FreeeUp.com.</Link>
                </h5>
                <h5 className="mb-2">
                  Start a<span className="text-primary"> Live Chat </span>9 to 5
                  pm EST!
                </h5>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  requests: makeSelectRequests(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadRequests: () => dispatch(loadRequests()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)