import React from "react"
import ContentLoader from "react-content-loader"

const communicationLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={835}
    height={700}
    viewBox="0 0 835 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdcdc"
    {...props}
  >
    {/* <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />  */}
    {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />  */}
    {/* <rect x="0" y="47" rx="2" ry="2" width="920" height="77" />  */}
    <rect x="-6" y="25" rx="0" ry="0" width="880" height="257" /> 
    {/* <rect x="-6" y="320" rx="0" ry="0" width="880" height="257" /> */}
  </ContentLoader>
)

export default communicationLoader;