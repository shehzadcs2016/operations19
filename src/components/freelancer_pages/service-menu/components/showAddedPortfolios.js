import React, { useEffect } from "react";
import { fetchPortfolios, deletePortfolio } from "../actions";
import { makeSelectPortfolios } from "../selectors";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"
import { Avatar } from "@material-ui/core"
import ServiceButton from "../../../shared/serviceButton"

export const ShowAddedPortfolios = (props) => {
    const {
        dispatchDeletePortfolio,
        allPortfolioData,
        dispatchFetchPortfolios,
        setIsPortfolioDataExist,
    } = props;
    const [isDisable, setIsDisable] = React.useState(false)
    useEffect(() => {
        dispatchFetchPortfolios()
    }, [])

    useEffect(() => {
        if(allPortfolioData.length>0){
            setIsPortfolioDataExist(true)
        }else{
            setIsPortfolioDataExist(false)
        }
        setIsDisable(false)
    }, [allPortfolioData])

    const handleDeleteProject = (id)=>{
        dispatchDeletePortfolio({
            id:id,
        })
    }

    return (
        <div className="col-md-12 mt-5 recently_added_project">
            <h4 className="mb-4">Recently Added Projects</h4>
            {allPortfolioData.length > 0 ?
                allPortfolioData.map((data) => {
                    return(
                    <div key={`portfolio-${data.id}`} className="row mt-3">
                        <div className="col-md-2">
                        <img className="img-fluid portfolio-thumbmail rounded" alt="portfolio_thumbnail" src={`http://3.211.37.133/uploads/users/portfolios/${data.thumbnail_image}`} />
                        </div>
                        <div className="col-md-8">
                            <div className="w-100">
                                <h5>{data.project_title}</h5>
                            </div>
                            <div className="w-100 text-muted mt-1">
                                <p>{data.project_overview}</p>
                            </div>
                        </div>
                        <div className="col-md-2 pt-2">
                            <button 
                                className="murchant_reviews_del" 
                                value={"Delete"} 
                                onClick={()=>{
                                    setIsDisable(true)
                                    handleDeleteProject(data.id)
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
    allPortfolioData: makeSelectPortfolios(),
  });
  

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeletePortfolio: (payload) => dispatch(deletePortfolio(payload)),
        dispatchFetchPortfolios: () => dispatch(fetchPortfolios()),
    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ShowAddedPortfolios));