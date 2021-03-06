import React from "react"
import ContentLoader from "react-content-loader" 

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={700}
    height={520}
    viewBox="0 0 700 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="1" rx="0" ry="0" width="711" height="124" /> 
    <rect x="3" y="135" rx="0" ry="0" width="698" height="119" /> 
    <rect x="5" y="264" rx="0" ry="0" width="697" height="131" /> 
    <rect x="4" y="407" rx="0" ry="0" width="695" height="129" />
  </ContentLoader>
)

export default Loader