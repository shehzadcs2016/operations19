import React from "react";
import { CustomTextfield } from "../../../shared/formComponents";
import ServiceButton from "../../../shared/serviceButton";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import ShowAddedFaqs from "./showAddedFaqs";
import {createFaq} from "../actions";


const Faq = (props) => {
    const {
        setFaqData,
        faqData,
        faqErr,
        setFaqErr,
        dispatchCreateFaq,
        checkFaqForm,
    } = props;
    const blankData = {
        question:"",
        answer:""
    }
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
    const handleAddFaq = () =>{
        const isValid = checkFaqForm()
        if (isValid===true){
            const form_data = new FormData()
            form_data.append("question", faqData.question)
            form_data.append("answer", faqData.answer)
            setFaqData(blankData)
            setFaqErr(blankData)
            dispatchCreateFaq(form_data)
        }
	}
    
    return (
      <div className="w-100 pb-5 mx-auto form_control_divs row">
        <div className="col-md-12">
          <div className="w-100 pt-3 ">
            <h2 className="h2 titles__main-title">
              Frequently Asked Questions
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

        <div className="col-md-12">
          <div className="d-flex">
            <div className="w-50">
              <label>Answer For Your Client*</label>
            </div>
            <div className="w-50">
              <p className="small text-muted pull-right">
                {200 - faqData.answer.length}
                {200 - faqData.answer.length < 2 ? " word" : " words"} remaining
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
        <ShowAddedFaqs/>
      </div>
    )
  }

 
function mapDispatchToProps(dispatch) {
    return {
        dispatchCreateFaq: (payload) => dispatch(createFaq(payload)),
    };
}
 
 export default (connect(null, mapDispatchToProps)(Faq));