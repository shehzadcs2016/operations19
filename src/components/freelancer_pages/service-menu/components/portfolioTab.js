import React, { useState, useEffect } from "react";
import { CustomTextfield, UploadFiles } from "../../../shared/formComponents"
import ServiceButton from "../../../shared/serviceButton"
import {addPortfolio} from "../actions";
import { connect } from "react-redux"
import ShowAddedPortfolios from "./showAddedPortfolios";

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
		dispatchAddPortfolio, //saga
		setIsPortfolioDataExist,
        isPortfolioDataExist,
	} = props;

	const handleChange = (e) => {
		const value = e.target.value
		setPortfolioData({ ...portfolioData, [e.target.name]: value })
	}

	const isEmpty = (e) => {
		if (!e.target.value) {
			setPortfolioErr({ ...portfolioErr, [e.target.name]: "Required" })
		} else {
			setPortfolioErr({ ...portfolioErr, [e.target.name]: "" })
		}
	}
	
	const handleAddPortfolio = () =>{
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

			dispatchAddPortfolio(form_data)
			setPortfolioThumbnail("")
			setPortfolioFiles([])
			setPortfolioData({
				project_title:"",
				project_overview: "",
			})
		}
	}

	return (
		<div className="w-100  pb-5 mx-auto form_control_divs row">
			<div className="col-md-12">
				<div className="w-100 pt-3 ">
					<h2 className="h2 titles__main-title">
						 Portfolio 
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
						accept={".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"}
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
			<ShowAddedPortfolios
				setIsPortfolioDataExist={setIsPortfolioDataExist}
				isPortfolioDataExist={isPortfolioDataExist}
			/>
		</div>
	)
}
 
 function mapDispatchToProps(dispatch) {
	return {
	  dispatchAddPortfolio: (payload) => dispatch(addPortfolio(payload)),
	};
 }
 
 export default (connect(null, mapDispatchToProps)(Portfolio));