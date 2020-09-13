import React from "react"
export const UploadSingleFile = (props) => {
  return (
    // <div className="submit-info bg-white p-0 pb-2 w-100">
    //   <div className="file-upload-btn clearfix">
    <div className="file-upload ">
      <label className="file-upload__label" htmlFor={props.name}>
        <span
          style={{ backgroundColor: "#f1f1f1" }}
          type="button"
          className="btn btn-block"
        >
          <i className="fas fa-plus"></i> {props.label}
        </span>
      </label>
      <input
        // accept="image/*"
        accept={
          props.accept
            ? props.accept
            : ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/*"
        }
        id={props.name}
        name={props.name}
        type="file"
        onChange={props.onChange}
      />
      <span className="pl-2">{props.fileName}</span>
    </div>
    // {/* <p>{props.label}</p> */}
    //   </div>
    // {/* </div> */}
  )
}

export default UploadSingleFile
