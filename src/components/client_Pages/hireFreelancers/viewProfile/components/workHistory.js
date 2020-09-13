import React from 'react';

const WorkHistory = ({
  project, length
}) => {
  const {
    project_name = "", project_description=""
  } = project && project;
  return (
    <>
      <div className={length !== 1 ? "border-bottom py-2":""}>
          <h4 className="h5 font-weight-bold">{project_name}</h4>
          <p>
            {project_description}
          </p>
              </div>
    </>
  )
}

export default WorkHistory;