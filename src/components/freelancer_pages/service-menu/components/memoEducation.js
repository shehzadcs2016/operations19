import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import ServiceButton from "../../../shared/serviceButton"
import {
  CustomSelect,
  CustomTextfield,
} from "../../../shared/formComponents"
import CloseIcon from '@material-ui/icons/Close';

import AvailableProjectsLoader from "./loaders"

function AddEducation(props) {
  const {
    setEducationData,
    educationData,
    educationErr, 
    setEducationErr,
    countries,
    title_options,
    yearofgraduation_options,responseData,handleEducationDelete
  } = props

  const blankData = {
    institute_country: "",
    institute_name: "",
    title: "",
    major: "",
    year: "",
  }
  const [memoEducation, setmemoEducation] = useState(blankData)

  const handleDelete = (id) => {
    setEducationData(educationData.filter(el=>el.title !== id))
  }

  const setEmptyValuesReq = () => {
    let obj = {}
    Object.keys(memoEducation).map((key) => {
      if (memoEducation[key].toString().trim() === ""){
        obj[key]="Required"
      }
      return obj
    });
    return setEducationErr(obj)
  }

  const handleEducationAdd = () =>{
    setEmptyValuesReq()
    if (memoEducation.institute_country && memoEducation.institute_name && 
      memoEducation.title && memoEducation.major && memoEducation.year){
      const found = educationData.some(el => el.title === memoEducation.title);
      if(!found){
        setEducationData([...educationData, {
            institute_country:memoEducation.institute_country,
            institute_name: memoEducation.institute_name, title:memoEducation.title,
            major: memoEducation.major, year: memoEducation.year
          }])
          setmemoEducation(blankData)
        }else{
          setEducationErr({...educationErr, ["title"]:"Already Exist"})
        }
    }else{
      setEmptyValuesReq()
    }
  }

  const isEmpty = (e) => {
    if (!e.target.value){
      setEducationErr({...educationErr,[e.target.name]:"Required"})
    }else{
      setEducationErr({...educationErr,[e.target.name]:""})
    }
  }
  const handleEducationMenu = (e) => {
    let value = e.target.value
    setmemoEducation({ ...memoEducation, [e.target.name]: value })
  }
const handleDeleteEducation=(id)=>{
  handleEducationDelete(id)
}
    return (
      <>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 text-capitalize">
              <label>Country of College/University*</label>
              <CustomSelect
                required
                name="institute_country"
                value={memoEducation.institute_country}
                onChange={handleEducationMenu}
                options={countries}
                cr={true}
                onBlur={isEmpty}
                error={educationErr.institute_country}
              />
              {
                <p>{educationErr.institute_country}</p>
              }
            </div>
            <div className="col-md-6">
              <label>Name of College/University*</label>
              <CustomTextfield
                required
                name="institute_name"
                value={memoEducation.institute_name}
                onChange={handleEducationMenu}
                onBlur={isEmpty}
                error={educationErr.institute_name ? true : false}
                helperText={educationErr.institute_name}
              />
            </div>
            <div className="col-md-4 text-capitalize">
              <label>Title*</label>
              <DropDownMenu
                required
                name="title"
                value={memoEducation.title}
                onChange={handleEducationMenu}
                onBlur={isEmpty}
                error={educationErr.title}
                options={title_options}
                cr={true}
              />
            </div>
            <div className="col-md-4">
              <label>Major*</label>
              <CustomTextfield
                required
                name="major"
                value={memoEducation.major}
                onChange={handleEducationMenu}
                onBlur={isEmpty}
                error={educationErr.major ? true : false}
                helperText={educationErr.major}
              />
            </div>
            <div className="col-md-4 text-capitalize">
              <label>Year of Graduation*</label>
              <DropDownMenu
                required
                name="year"
                value={memoEducation.year}
                onChange={handleEducationMenu}
                onBlur={isEmpty}
                error={educationErr.year}
                options={yearofgraduation_options}
                cr={true}
              />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="col-md-12 li_marker">
          <ul>
              {educationData.map((data, index)=>{
                return(
                  <li key={"education-"+index} >
                    <div className="d-flex">
                      <strong>
                      <p>{
                          title_options.map(data2 => {
                            if (data2.value === data.title)
                            return  (" "+data2.label)
                          })
                      }
                        {` - ${data.major}`}</p>
                      </strong>
                    </div>
                    <CloseIcon className="pull-right text-muted cursor-pointer" onClick={()=>handleDelete(data.title)}/>
                    <ul className="d-flex text-muted li_marker_chlid">
                      <li className="">{data.institute_name}</li>
                      <li className="ml-2">
                        {countries.map(data2 => {
                            if (data2.id === data.institute_country)
                            return  (" "+data2.name)
                        })}
                      </li>
                      <li className="ml-2">
                        {yearofgraduation_options.map(data2 => {
                            if (data2.value === data.year)
                            return  (" "+data2.label)
                        })}
                      </li>
                    </ul>
                  </li>
                )
              })}
          </ul>
          </div>
        </div>
        <div className="col-md-3 text-right ">
          <ServiceButton value={"Add Education"} onClick={handleEducationAdd} />
        </div>
      </>
    )
  
}
export default AddEducation;
