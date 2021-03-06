import React, { useEffect } from "react";
import { fetchFaqs, deleteFaq } from "../actions";
import { makeSelectFaqs } from "../selectors";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"
import { Avatar } from "@material-ui/core"
import ServiceButton from "../../../shared/serviceButton"
import AvailableProjectsLoader from "../loaders"

export const ShowAddedFaqs = (props) => {
    const {
        dispatchDeleteFaq,
        allFaqsData,
        dispatchFetchFaqs,tempFaqData,settempFaqData,
        editFaqProject
    } = props;
    const [isDisable, setIsDisable] = React.useState(false)
    useEffect(() => {
        dispatchFetchFaqs()
    }, [])

    useEffect(() => {
        setIsDisable(false)
    }, [allFaqsData])

    const handleDeleteProject = (id)=>{
        
        dispatchDeleteFaq({
            id:id,
        })
    }
    const handleDeleteFaq=(index)=>{
        const array = [...tempFaqData]
        array.splice(index, 1);
        settempFaqData(array)
    }
    const handleEditProject = (id) => {
        editFaqProject(id)
    }
    return (
        <div className="col-md-12 mt-5">
            <h4 className="mb-4">Recently Added FAQ'S</h4>
            {tempFaqData ?
                tempFaqData.map((data,index) => {
                    return(
                    <div key={`faq-${index}`} className="row mt-3">
                        <div className="col-md-8">
                            <div className="w-100">
                                <h5><strong>{data.question}</strong></h5>
                            </div>
                            <div className="w-100 text-muted">
                                <h5>{data.answer}</h5>
                            </div>
                        </div>
                    
                        <div className="col-md-4 text-right">
                        {/* <button
                                    className="murchant_reviews_del"
                                    value={"Edit"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleEditProject(data.id)
                                    }}
                                    disabled={isDisable}
                                >
                                    Edit
                            </button> */}
                            <button 
                                className="murchant_reviews_del"
                                onClick={()=>{
                                    setIsDisable(true)
                                    handleDeleteFaq(index)
                                }} 
                                disabled={isDisable}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    )
                })
                : <AvailableProjectsLoader/>}
            {allFaqsData ?
                allFaqsData.map((data) => {
                    return(
                    <div key={`faq-${data.id}`} className="row mt-3">
                        <div className="col-md-8">
                            <div className="w-100">
                                <h5><strong>{data.question}</strong></h5>
                            </div>
                            <div className="w-100 text-muted">
                                <h5>{data.answer}</h5>
                            </div>
                        </div>
                    
                        <div className="col-md-4 text-right">
                      
                            <button 
                                className="murchant_reviews_del"
                                onClick={()=>{
                                    setIsDisable(true)
                                    handleDeleteProject(data.id)
                                }} 
                                disabled={isDisable}
                            >
                                Delete
                            </button>
                            <button
                                    className="service_add_btn"
                                    value={"Edit"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleEditProject(data.id)
                                    }}
                                    disabled={isDisable}
                                >
                                    Edit
                            </button>
                        </div>
                    </div>
                    )
                })
                : <AvailableProjectsLoader/>}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    allFaqsData: makeSelectFaqs(),
  });
  

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeleteFaq: (payload) => dispatch(deleteFaq(payload)),
        dispatchFetchFaqs: () => dispatch(fetchFaqs()),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ShowAddedFaqs));