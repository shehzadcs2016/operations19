import React from "react";
import { CustomTextfield } from "../../../shared/formComponents";
import ServiceButton from "../../../shared/serviceButton";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import ShowAddedFaqs from "./showAddedFaqs";
import { createFaq, fetchSingleFaqs, LoadUPDATEFaq } from "../actions";
import FaqForm from './FaqForm'
import { makeSelectEditFaq } from "../selectors";
import { createStructuredSelector } from 'reselect';
const Faq = (props) => {
  const {
    setFaqData,
    faqData,
    faqErr,
    setFaqErr,
    dispatchCreateFaq, dispatchupdateFaq,
    checkFaqForm, dispatchEditFaq, setIsbuttonLoading, isbuttonLoading, EditFaqData
  } = props;
  const blankData = {
    question: "",
    answer: ""
  }
  const [flag, setflag] = React.useState(false)
  const [tempFaqData, settempFaqData] = React.useState([])


  const handleChange = (e) => {
    const value = e.target.value
    setFaqData({ ...faqData, [e.target.name]: value })
  }
  const isEmpty = (e) => {
    if (!e.target.value) {
      setFaqErr({ ...faqErr, [e.target.name]: "Required" })
    } else {
      setFaqErr({ ...faqErr, [e.target.name]: "" })
    }
  }
  const handleAddFaq = () => {
    setIsbuttonLoading(true)

    const isValid = checkFaqForm()
    if (isValid === true) {
      const form_data = new FormData()
      form_data.append("question", faqData.question)
      form_data.append("answer", faqData.answer)
      setFaqData(blankData)
      setFaqErr(blankData)
      setIsbuttonLoading(false)
      dispatchCreateFaq({ form_data: form_data })
      if (faqData.question && faqData.answer ){
        settempFaqData([...tempFaqData, {
          question:faqData.question,
          answer: faqData.answer,
        }])
      }
    }
    else {
      setIsbuttonLoading(false)

    }
  }
  const editFaqProject = (id) => {

    setflag(!flag)
    dispatchEditFaq({ id: id })
  }
  const handleupdateFaq = (id) => {
    setIsbuttonLoading(true)
    const isValid = checkFaqForm()
    if (isValid === true) {
      const form_data = new FormData()
      form_data.append("question", faqData.question)
      form_data.append("answer", faqData.answer)
      setFaqData(blankData)
      setFaqErr(blankData)
      setIsbuttonLoading(false)
      dispatchupdateFaq({ id: id, form_data: form_data })
    }
    else {
      setIsbuttonLoading(false)

    }
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto account_setting_body_color p-3">
          <div className="w-100 pb-5 mx-auto form_control_divs row">
            <div className="col-md-12">
              <div className="w-100 pt-3 ">
                <h2 className="h2 titles__main-title">
                  <strong>Frequently Asked Questions</strong>
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <p className="personelinfo_1">
                Explanation paragraph, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
            </div>
            <div className="col-md-12">
              <hr />
            </div>
            {flag === false ?
              <>
                <div className="col-md-12 ">
                  <label>Question For Your Client*</label>
                  <CustomTextfield
                    required
                    name="question"
                    value={faqData.question}
                    onChange={handleChange}
                    onBlur={isEmpty}
                    error={faqErr.question ? true : false}
                    helperText={faqErr.question}
                  />
                </div>

                <div className="col-md-12 text_area_back_color">
                  <div className="d-flex">
                    <div className="w-50">
                      <label>Answer For Your Client*</label>
                    </div>
                    <div className="w-50">
                      <p className="small text-muted pull-right">
                        {200 - faqData.answer.length}
                        {200 - faqData.answer.length < 2 ? " word" : " words"}
                      </p>
                    </div>
                  </div>
                  <CustomTextfield
                    name="answer"
                    value={faqData.answer}
                    onChange={handleChange}
                    className="w-100"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    multiline
                    onBlur={isEmpty}
                    error={faqErr.answer ? true : false}
                    helperText={faqErr.answer}
                    inputProps={{
                      maxLength: "200",
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <div className="pull-right ">
                    <ServiceButton value={"Add"} onClick={handleAddFaq} />
                  </div>
                </div>
              </>

              :
              <FaqForm
                setFaqData={setFaqData}
                faqData={faqData}
                EditFaqData={EditFaqData}
                faqErr={faqErr}
                setFaqErr={setFaqErr}
                dispatchCreateFaq={dispatchCreateFaq}
                checkFaqForm={checkFaqForm} setIsbuttonLoading={setIsbuttonLoading}
                isbuttonLoading={isbuttonLoading}
                handleChange={handleChange}
                isEmpty={isEmpty}
                handleupdateFaq={handleupdateFaq}
              />
            }
            <ShowAddedFaqs
              editFaqProject={editFaqProject}
              tempFaqData={tempFaqData}
              settempFaqData={settempFaqData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({

  EditFaqData: makeSelectEditFaq(),

});


function mapDispatchToProps(dispatch) {
  return {
    dispatchCreateFaq: (payload) => dispatch(createFaq(payload)),
    dispatchEditFaq: (payload) => dispatch(fetchSingleFaqs(payload)),
    dispatchupdateFaq: (payload) => dispatch(LoadUPDATEFaq(payload)),

  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Faq));