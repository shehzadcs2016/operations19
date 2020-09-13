import React from 'react';


const DegreesAndCertificates = ({
  acedemicRecord,
  length
}) => {
  const {
    school, degree, completed
  } = acedemicRecord && acedemicRecord;
  return (
    <>
      <div className={length !== 1 ? "border-bottom py-2":""}>
                <h4 className="text-color h5 font-weight-bold">
                  {school}
                </h4>
                <p>
                  <strong>{degree}</strong>
                </p>
                  <p>{`Completed: ${completed}`}</p>
              </div>
    </>
  )
}

export default DegreesAndCertificates;