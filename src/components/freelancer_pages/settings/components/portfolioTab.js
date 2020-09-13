import React, { useState, useEffect } from "react";
import { CustomTextfield, UploadFiles } from "../../../shared/formComponents"
import ServiceButton from "../../../shared/serviceButton"
import {addsinglePortfolio} from "../actions";
import { connect } from "react-redux"
import ShowAddedPortfolios from "./showAddedPortfolios";
import PortfolioForm from './PortfolioForm'
import { fetchallPortfolios, deletePortfolio,FetchSinglePortfolio,LoadUPDATEPortfolio } from "../actions";
import { makeSelectPortfolios ,makeSelecteditPortfolio} from "../selectors";
import { createStructuredSelector } from 'reselect';
import DefaultProfile from "../../images/avatar.png"

export const Portfolio = (props) => {
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
		dispatchAddPortfolio, 
		setIsPortfolioDataExist,EditPortfolioData,
		isPortfolioDataExist,
        dispatchEditPortfolios,isbuttonLoading,setIsbuttonLoading,
		dispatchUpdatePortfolios,
	} = props;
	const [flag, setflag] = React.useState(false)
	const [tempPortfoliodata, settempPortfoliodata] = React.useState([])
	const [profilePreview, setProfilePreview] = useState(DefaultProfile);

	const handleChange = (e) => {
		const value = e.target.value
		setPortfolioData({ ...portfolioData, [e.target.name]: value })
	}
const editPortfolio=(id)=>{
	setflag(true)
	dispatchEditPortfolios({id:id})
}
	const isEmpty = (e) => {
		if (!e.target.value) {
			setPortfolioErr({ ...portfolioErr, [e.target.name]: "Required" })
		} else {
			setPortfolioErr({ ...portfolioErr, [e.target.name]: "" })
		}
	}
	console.log(tempPortfoliodata,"tempPortfoliodata")

	const handleAddPortfolio = () =>{
	console.log(profilePreview,"profilePreview")
	// setIsbuttonLoading(true)

		const isValid = checkPortfolioForm()
		if ( isValid === true){
			alert("hello")
			const form_data = new FormData()
			form_data.append("project_title",portfolioData.project_title)
			form_data.append("project_overview",portfolioData.project_overview)
			form_data.append("thumbnail_image",portfolioThumbnail)

			for (let index = 0; index < portfolioFiles.length; index++) {
				const element = portfolioFiles[index]
				form_data.append("project_files[]", element, element.name)
			 }
			 
			dispatchAddPortfolio({form_data:form_data})
		if (portfolioData.project_title && portfolioData.project_overview ){
				settempPortfoliodata([...tempPortfoliodata, {
				  project_title:portfolioData.project_title,
				  project_overview: portfolioData.project_overview,
				  profile:profilePreview
				}])
				
			//   setPortfolioData(blankData)
			}
			setPortfolioThumbnail("")
			setPortfolioFiles([])
			setPortfolioData({
				project_title:"",
				project_overview: ""
			})
		}
		else{
			setIsbuttonLoading(false)
	
			}
	}
	const handleupdatePortfolio=(id)=>{

		setIsbuttonLoading(true)

		const isValid = checkPortfolioForm()
		if ( isValid === true){
			const form_data = new FormData()
			form_data.append("project_title",portfolioData.project_title)
			form_data.append("project_overview",portfolioData.project_overview)
			form_data.append("thumbnail_image",portfolioThumbnail)

			for (let index = 0; index < portfolioFiles.length; index++) {
				const element = portfolioFiles[index]
				form_data.append("project_files[]", element, element.name)
			 }
			 
			 dispatchUpdatePortfolios({id:id, form_data:form_data})
			setIsbuttonLoading(false)
			setflag(false)

			setPortfolioThumbnail("")
			setPortfolioFiles([])
			setPortfolioData({
				project_title:"",
				project_overview: "",
			})
		}
		else{
		setIsbuttonLoading(false)

		}
	}

	return (
		<div className="container">
      <div className="row">
        <div className="col-md-8 m-auto account_setting_body_color p-3">
		<div className="w-100  pb-5 mx-auto form_control_divs row">
			<div className="col-md-12">
				<div className="w-100 pt-3 ">
					<h2 className="h2 titles__main-title">
						<strong>Portfolio</strong>
					</h2>
				</div>
			</div>
			<div className="col-md-12 pb-4">
				<p className="personelinfo_1">
				Explanation paragraph, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
			</div>
			{/* <div className="col-md-12">
				<hr />
			</div> */}
			{flag===false?
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
			<div className="col-md-12 service_module_model">
				<div className="w-100 d-flex">
					<div className="w-50">
						<label>Project Overview*</label>
					</div>
					<div className="w-50">
						<p className="text-muted pull-right small">
							{4000 - portfolioData.project_overview.length}{" "}
							{4000 - portfolioData.project_overview.length < 2 ? "word" : "words"} Remaining
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
					single = {true}
					accept={"image/*"}
					onChange={(e) => {
						const file = e.target.files[0]
						setPortfolioThumbnail(file)
						const type = e.target.files[0].type
						console.log(e.target.files, "file")
						if (
						  type === "image/jpeg" ||
						  type === "image/jpg" ||
						  type === "image/png"
						) {
						//   setDisplaySTFNErr("")
						  setProfilePreview(URL.createObjectURL(file))
						}
					}}
				/>
				{portfolioThumbnailErr ? <p className="text-danger small">{portfolioThumbnailErr}</p> : null}
				{portfolioThumbnail ? <p>{portfolioThumbnail.name} </p>:null}
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
			<div className="col-md-12 text-right">
		
			<ServiceButton value={"Add Project"} onClick={handleAddPortfolio} />

        
			</div>
			</>
			: 
			<PortfolioForm
			setPortfolioErr={setPortfolioErr}
			portfolioErr={portfolioErr}
			setPortfolioData={setPortfolioData}
			portfolioData={portfolioData}
			EditPortfolioData={EditPortfolioData}
			setPortfolioFiles={setPortfolioFiles}
			portfolioFiles={portfolioFiles}
			portfolioThumbnail={portfolioThumbnail}
			portfolioFilesErr={portfolioFilesErr}
			setPortfolioThumbnail={setPortfolioThumbnail}
			validatePortfolioThumbnail={validatePortfolioThumbnail}
			portfolioThumbnailErr={portfolioThumbnailErr}
			validatePortfolioFiles={validatePortfolioFiles}
			checkPortfolioForm={checkPortfolioForm}
			setIsPortfolioDataExist={setIsPortfolioDataExist}
			isPortfolioDataExist={isPortfolioDataExist}
			isbuttonLoading={isbuttonLoading}
			handleChange={handleChange}
			setIsbuttonLoading={setIsbuttonLoading}
			isEmpty={isEmpty}
			handleupdatePortfolio={handleupdatePortfolio}
			/>
			}
			
			<ShowAddedPortfolios
				setIsPortfolioDataExist={setIsPortfolioDataExist}
				isPortfolioDataExist={isPortfolioDataExist}
				editPortfolio={editPortfolio}
				settempPortfoliodata={settempPortfoliodata}
				tempPortfoliodata={tempPortfoliodata}
			/>
		</div>
		</div>
		</div>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({

    EditPortfolioData: makeSelecteditPortfolio(),

  });
  
 
 function mapDispatchToProps(dispatch) {
	return {
	  dispatchAddPortfolio: (payload) => dispatch(addsinglePortfolio(payload)),
	  dispatchEditPortfolios: (payload) => dispatch(FetchSinglePortfolio(payload)),
	  dispatchUpdatePortfolios: (payload) => dispatch(LoadUPDATEPortfolio(payload)),


	};
 }
 
 export default (connect(mapStateToProps, mapDispatchToProps)(Portfolio));