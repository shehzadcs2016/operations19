import React, { useState, useEffect } from "react";
import { CustomTextfield } from "../../../shared/formComponents";
import ServiceButton from "../../../shared/serviceButton";
import { CircularProgress } from "@material-ui/core";


export default function FaqForm(props) {
    const {
        setFaqData,
        faqData,
        EditFaqData,
        faqErr,
        setFaqErr,
        dispatchCreateFaq, handleupdateFaq,
        checkFaqForm, setIsbuttonLoading, isbuttonLoading, handleChange, isEmpty
    }=props
    const [EditId, setEditId] = React.useState("")
    useEffect(() => {
        if (EditFaqData && EditFaqData) {
            const { id, question, answer } = EditFaqData
            // console.log(EditFaqData,"EditFaqData")
            setEditId(id)
            setFaqData({
                question: question,
                answer: answer
            })
        }
    },[props.EditFaqData])

    const handleAddFaq = () => {
        handleupdateFaq(EditId)
    }

    return (
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

            <div className="col-md-12">
                <div className="d-flex">
                    <div className="w-50">
                        <label>Answer For Your Client*</label>
                    </div>
                    <div className="w-50">
                        <p className="small text-muted pull-right">
                            {200 - faqData.answer}
                            {200 - faqData.answer ? " word" : " words"}
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
                    <ServiceButton value={"Update"} onClick={handleAddFaq} />
                </div>
            </div>
        </>
    )
}