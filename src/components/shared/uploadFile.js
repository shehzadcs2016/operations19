import React from "react"

export const UploadFiles = (props) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="submit-info service_uploadfile bg-white p-0 pb-2 w-100">
      <div className="file-upload-btn clearfix">
        <div className="file-upload">
          <button type="button" className="file-upload__label btn service_add_btn " onClick={handleClick} htmlFor={props.name}>
            {props.text ? props.text : "Upload"}
          </button>
          <input
            accept={props.accept ? props.accept : "image/*"}
            id={props.name}
            name={props.name}
            multiple
            type="file"
            onChange={props.onChange}
            ref={hiddenFileInput}
          />
        </div>
        <p>{props.label}</p>
      </div>
    </div>
  )
}

export default UploadFiles
