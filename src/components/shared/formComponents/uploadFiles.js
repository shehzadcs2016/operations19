import React from "react"

export const UploadFiles = (props) => {
  return (
    <div className="submit-info  bg-white uploadfile_potfolio p-0 pb-2 w-100">
      <div className="file-upload-btn clearfix text-center">
        <div className="file-upload">
         <p className="m-0 upload_file_potfolio">
         <label className="file-upload__label" htmlFor={props.name}>
            {/* <i className="fas fa-plus"></i> */}
             Browse Files
          </label>
         </p>
          <input
            accept={props.accept ? props.accept : "image/*"}
            id={props.name}
            name={props.name}
            multiple={props.single === true ? false : true}
            type="file"
            onChange={props.onChange}
          />
        </div>
        <p>{props.label}</p>
      </div>
    </div>
  )
}

export default UploadFiles
