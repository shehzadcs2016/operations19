import React, { useEffect } from "react";
import { fetchReviews, deleteReview } from "../actions";
import { makeSelectReviews } from "../selectors";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"
import { Avatar } from "@material-ui/core"
import ServiceButton from "../../../shared/serviceButton"

export const ShowAddedReviews = (props) => {
    const {
        dispatchDeleteReview,
        allReviewsData,
        dispatchFetchReviews,
        // setIsPortfolioDataExist,
    } = props;
    const [isDisable, setIsDisable] = React.useState(false)
    useEffect(() => {
        dispatchFetchReviews()
    }, [])

    useEffect(() => {
        // if(allReviewsData.length>0){
        //     setIsPortfolioDataExist(true)
        // }else{
        //     setIsPortfolioDataExist(false)
        // }
        setIsDisable(false)
    }, [allReviewsData])

    const handleDeleteReview = (id)=>{
        dispatchDeleteReview({
            id:id,
        })
    }

    return (
        <div className="col-md-12 mt-5 recently_added_project">
            <h4 className="mb-4">Saved Reviews</h4>
            {allReviewsData.length > 0 ?
                allReviewsData.map((data) => {
                    return(
                    <div key={`review-${data.id}`} className="row mt-3">
                        <div className="col-md-8">
                            <div className="w-100">
                                <h5>{data.name}</h5>
                            </div>
                            <div className="w-100 text-muted mt-1">
                                <p>"{data.comment}"</p>
                            </div>
                        </div>
                        <div className="col-md-2 pt-2">
                            <button 
                                className="murchant_reviews_del" 
                                value={"Delete"} 
                                onClick={()=>{
                                    setIsDisable(true)
                                    handleDeleteReview(data.id)
                                }} 
                                disabled={isDisable}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    )
                })
                : null}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    allReviewsData: makeSelectReviews(),
  });
  

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeleteReview: (payload) => dispatch(deleteReview(payload)),
        dispatchFetchReviews: () => dispatch(fetchReviews()),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ShowAddedReviews));