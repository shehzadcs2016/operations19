import React, { useState, useEffect } from "react"
import DropDownMenu from "../../../shared/dropdownMenu"
import ServiceButton from "../../../shared/serviceButton"
import {
  CustomTextfield,
} from "../../../shared/formComponents"
import CloseIcon from '@material-ui/icons/Close';
import AvailableProjectsLoader from "./loaders"


function AddCertificate(props) {
  const {
    yearofgraduation_options,
    setCertificateData,
    certificateData,
    certificateErr,
    setCertificateErr,responseData,handleDeleteCertificate
  } = props

  const blankData = {
    certificate: "",
    certified_from: "",
    year: "",
  }

  const [certificate, setCertificate] = useState(blankData)

  const isEmpty = (e) => {
    if (!e.target.value) {
      setCertificateErr({ ...certificateErr, [e.target.name]: "Required" })
    } else {
      setCertificateErr({ ...certificateErr, [e.target.name]: "" })
    }
  }
  const setEmptyValuesReq = () => {
    let obj = {}
      Object.keys(certificate).map((key) => {
        if (certificate[key].toString().trim() === "") {
          obj[key] = "Required"
        }
        return obj
      });
      setCertificateErr(obj)
  } 

  const handleCertificateAdd = () => {
    setEmptyValuesReq()
    if (certificate.certificate && certificate.certified_from &&
      certificate.year) {
      const found = certificateData.some(el => el.certificate === certificate.certificate);
      if(!found){
        setCertificateData([...certificateData, {
          certificate: certificate.certificate,
          certified_from: certificate.certified_from,
          year: certificate.year
        }])
        setCertificate(blankData)
      }
      else{
        setCertificateErr({...certificateErr, ["certificate"]: "Already Exist"})
      }
    } else {
      setEmptyValuesReq()
    }
  }

  const handleCertificateMenu = (e) => {
    const value = e.target.value;
    setCertificate({ ...certificate, [e.target.name]: value })
  }

  const handleDelete = (id) => {
    
    setCertificateData(certificateData.filter(el => el.certificate !== id))
  }
  const handleCertificateDelete = (id) => {
    handleDeleteCertificate(id)
  }
  return (
    <>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12 mt-3">
            <label>Certificate or Award*</label>

            <CustomTextfield
              required
              name="certificate"
              value={certificate.certificate}
              onChange={handleCertificateMenu}
              onBlur={isEmpty}
              error={certificateErr.certificate ? true : false}
              helperText={certificateErr.certificate}
            />
          </div>
          <div className="col-md-6 ">
            <label>Certificate From (E.G. Adobe)*</label>

            <CustomTextfield
              required
              name="certified_from"
              value={certificate.certified_from}
              onChange={handleCertificateMenu}
              onBlur={isEmpty}
              error={certificateErr.certified_from ? true : false}
              helperText={certificateErr.certified_from}
            />
          </div>
          <div className="col-md-6">
            <label>Year*</label>

            <DropDownMenu
              required
              name="year"
              value={certificate.year}
              onChange={handleCertificateMenu}
              onBlur={isEmpty}
              error={certificateErr.year}
              options={yearofgraduation_options}
            // cr={true}
            />
          </div>
        </div>
      </div>
      <div className="col-md-9">
      <div className="col-md-12 li_marker">
      <ul>
          {certificateData.map((data, index) => {
            return (
              <li key={"certificate-" + index} >
                <div className="d-flex">
                 <strong>
                 <p>{data.certificate}</p>
                 </strong>
                </div>
                <CloseIcon className="pull-right text-muted cursor-pointer" onClick={() => handleDelete(data.certificate)} />
                <ul className="d-flex text-muted li_marker_chlid">
                  <li className="">{data.certified_from}</li>
                  
                  <li className="ml-2">
                    {yearofgraduation_options.map(data2 => {
                      if (data2.value === data.year)
                        return (" " + data2.label)
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
        <ServiceButton value={"Add Certificate"} onClick={handleCertificateAdd} />
      </div>
    </>
  )
}
export default AddCertificate;
