import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={300}
    viewBox="0 0 1000 300"
    backgroundColor="#e5f2f3"
    foregroundColor="#31ecc8"
    {...props}
  >
    <circle cx="99" cy="122" r="79" /> 
    <rect x="329" y="64" rx="2" ry="2" width="202" height="21" /> 
    <rect x="330" y="113" rx="2" ry="2" width="197" height="20" /> 
    <rect x="1" y="254" rx="2" ry="2" width="735" height="28" /> 
    <rect x="329" y="157" rx="0" ry="0" width="195" height="19" />
  </ContentLoader>
)

export default MyLoader