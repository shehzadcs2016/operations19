import React from "react"
import ContentLoader from "react-content-loader"

const chatLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="18" cy="30" r="16" /> 
    <rect x="40" y="18" rx="5" ry="5" width="436" height="20" /> 
    <circle cx="18" cy="80" r="16" /> 
    <rect x="40" y="65" rx="5" ry="5" width="277" height="20" /> 
    <circle cx="18" cy="130" r="16" /> 
    <rect x="40" y="115" rx="5" ry="5" width="477" height="20" /> 
    
  </ContentLoader>
)

export default chatLoader;