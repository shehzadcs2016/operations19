import React, { useEffect ,useState} from "react";
import { fetchallPortfolios, deletePortfolio, FetchSinglePortfolio } from "../actions";
import { makeSelectPortfolios, makeSelecteditPortfolio } from "../selectors";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux"
import { Avatar } from "@material-ui/core"
import ServiceButton from "../../../shared/serviceButton"
import AvailableProjectsLoader from "../loaders"

export const ShowAddedPortfolios = (props) => {
    const {
        dispatchDeletePortfolio,
        allPortfolioData,
        dispatchFetchPortfolios,
        setIsPortfolioDataExist,
        editPortfolio,tempPortfoliodata,settempPortfoliodata
    } = props;
    const [isDisable, setIsDisable] = React.useState(false)
    
    // console.log(profilePreview,"profilePreview")

    useEffect(() => {
        dispatchFetchPortfolios()
    }, [])

    useEffect(() => {
        if (allPortfolioData) {
            setIsPortfolioDataExist(true)
        } else {
            setIsPortfolioDataExist(false)
        }
        setIsDisable(false)
    }, [allPortfolioData])
    const handleDeletePortfolio = (index) => {
        const array = [...tempPortfoliodata]
        array.splice(index, 1);
        settempPortfoliodata(array)
    }
    const handleDeleteProject = (id) => {
        dispatchDeletePortfolio({
            id: id,
        })
    }
    const handleEditProject = (id) => {
        editPortfolio(id)
    }
    return (
        <div className="col-md-12 mt-5 recently_added_project">
            <h4 className="mb-4">Recently Added Projects</h4>
            {tempPortfoliodata ?
                tempPortfoliodata.map((data,index) => {
                    return (
                        <div key={`portfolio-${index}`} className="row mt-3">
                            <div className="col-md-2">
                                <img className="img-fluid rounded" alt="portfolio_thumbnail" src={data.profile} />
                            </div>
                            <div className="col-md-7">
                                <div className="w-100">
                                    <h5>{data.project_title}</h5>
                                </div>
                                <div className="w-100 text-muted mt-1">
                                    <p>{data.project_overview}</p>
                                </div>
                            </div>
                            <div class="col-md-3 text-right">
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
                                    value={"Delete"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleDeletePortfolio(index)
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
            {allPortfolioData ?
                allPortfolioData.profile_projects.map((data) => {
                    return (
                        <div key={`portfolio-${data.id}`} className="row mt-3">
                            <div className="col-md-2">
                                <img className="img-fluid rounded" alt="portfolio_thumbnail" src={`http://3.211.37.133/uploads/users/portfolios/${data.thumbnail_image}`} />
                            </div>
                            <div className="col-md-7">
                                <div className="w-100">
                                    <h5>{data.project_title}</h5>
                                </div>
                                <div className="w-100 text-muted mt-1">
                                    <p>{data.project_overview}</p>
                                </div>
                            </div>
                            <div class="col-md-3 text-right">
                            
                            <button
                                    className="murchant_reviews_del"
                                    value={"Delete"}
                                    onClick={() => {
                                        setIsDisable(true)
                                        handleDeleteProject(data.id)
                                    }}
                                    disabled={isDisable}
                                >
                                    Delete
                            </button>
                            <button
                                    className="service_add_btn "
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
    allPortfolioData: makeSelectPortfolios(),


});


function mapDispatchToProps(dispatch) {
    return {
        dispatchDeletePortfolio: (payload) => dispatch(deletePortfolio(payload)),
        dispatchFetchPortfolios: () => dispatch(fetchallPortfolios()),


    };
}

export default (connect(mapStateToProps, mapDispatchToProps)(ShowAddedPortfolios));