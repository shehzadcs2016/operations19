import React,{useEffect, useState} from 'react';
import { CustomTextfield, UploadFiles } from "../../../shared/formComponents"
import ServiceButton from "../../../shared/serviceButton"
import { addsinglePortfolio } from "../actions";
import { connect } from "react-redux"
import { fetchallPortfolios, deletePortfolio, FetchSinglePortfolio } from "../actions";
import { makeSelectPortfolios, makeSelecteditPortfolio } from "../selectors";
import { createStructuredSelector } from 'reselect';
export default function PortfolioForm(props) {
    const {
        setPortfolioErr,
        portfolioErr,
        setPortfolioData,
        portfolioData,
        setPortfolioFiles,
        portfolioFiles,
        portfolioThumbnail,
        portfolioFilesErr,
        setPortfolioThumbnail,
        validatePortfolioThumbnail,
        portfolioThumbnailErr,
        validatePortfolioFiles,
        checkPortfolioForm,
        setIsPortfolioDataExist,
        isPortfolioDataExist, handleChange, isEmpty,
        isbuttonLoading, setIsbuttonLoading,EditPortfolioData,handleupdatePortfolio,
    }=props
	const [EditId, setEditId] = React.useState("")

useEffect(()=>{
    if(EditPortfolioData && EditPortfolioData){
        const {id,project_title,project_overview}=EditPortfolioData
        // console.log(EditPortfolioData,"EditPortfolioData")
        setEditId(id)
    setPortfolioData({
        project_title:project_title ,
        project_overview: project_overview, 
    })
}
},[props.EditPortfolioData])
const handleAddPortfolio=()=>{
    handleupdatePortfolio(EditId)
}
    return (
        <>
            <div className="col-md-12 ">
                <label>Project Title*</label>
                <CustomTextfield
                    required
                    name="project_title"
                    value={portfolioData.project_title}
                    onChange={handleChange}
                    onBlur={isEmpty}
                    error={portfolioErr.project_title ? true : false}
                    helperText={portfolioErr.project_title}
                />
            </div>
            <div className="col-md-12">
                <div className="w-100 d-flex">
                    <div className="w-50">
                        <label>Project Overview*</label>
                    </div>
                    <div className="w-50">
                        <p className="text-muted pull-right small">
                            {4000 - portfolioData.project_overview}{" "}
                            {4000 - portfolioData.project_overview  ? "word" : "words"} Remaining
						</p>
                    </div>
                </div>
                <CustomTextfield
                    name="project_overview"
                    value={portfolioData.project_overview}
                    onChange={handleChange}
                    className="w-100"
                    rows="5"
                    multiline
                    inputProps={{
                        maxLength: 4000,
                    }}
                    onBlur={isEmpty}
                    error={portfolioErr.project_overview ? true : false}
                    helperText={portfolioErr.project_overview}
                />
            </div>
            <div className="col-md-6 background_color_choose_file">
                <div className="w-50">
                    <label>Thumbnail Image*</label>
                </div>
                <UploadFiles
                    name="thumbnail_image"
                    single={true}
                    accept={"image/*"}
                    onChange={(e) => {
                        const file = e.target.files[0]
                        setPortfolioThumbnail(file)
                    }}
                />
                {portfolioThumbnailErr ? <p className="text-danger small">{portfolioThumbnailErr}</p> : null}
                {portfolioThumbnail ? <p>{portfolioThumbnail.name} </p> : null}
            </div>
            <div className="col-md-6 background_color_choose_file">
                <div className="w-50">
                    <label>Project Files*</label>
                </div>
                <UploadFiles
                    name="project_files"
                    onChange={(e) => {
                        const files = Array.from(e.target.files)
                        if (files.length > 0) {
                            setPortfolioFiles([...portfolioFiles, ...files])
                        }
                    }}
                />
                {portfolioFilesErr ? <p className="text-danger small">{portfolioFilesErr}</p> : null}
                <div className="w-100">
                    {portfolioFiles.length > 0
                        ? portfolioFiles.map((file, index) => {
                            let name_separator = ", "
                            if (index === 0) {
                                name_separator = ""
                            }
                            console.log(file.name)
                            console.log(file)

                            return (
                                <p
                                    className="fa-pull-left"
                                    key={file.name + index.toString()}
                                >
                                    {name_separator}
                                    {file.name}
                                </p>
                            )
                        })
                        : null}
                </div>
            </div>
            {isbuttonLoading===true?
            <ServiceButton value={"Loading....."}  />
        :

			<ServiceButton value={"Update Project"} onClick={handleAddPortfolio} />

        }
        </>
    )
}
