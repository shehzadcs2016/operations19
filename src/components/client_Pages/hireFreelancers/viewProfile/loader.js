import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={800}
    viewBox="0 0 1200 800"
    backgroundColor="#e5f2f3"
    foregroundColor="#31ecc8"
    {...props}
  >
    <circle cx="89" cy="89" r="73" /> 
    <rect x="256" y="36" rx="2" ry="2" width="390" height="13" /> 
    <rect x="256" y="70" rx="2" ry="2" width="390" height="13" /> 
    <rect x="10" y="175" rx="2" ry="2" width="641" height="159" /> 
    <rect x="256" y="99" rx="0" ry="0" width="390" height="13" /> 
    <rect x="7" y="367" rx="0" ry="0" width="641" height="187" /> 
    <rect x="585" y="424" rx="0" ry="0" width="0" height="1" /> 
    <rect x="9" y="582" rx="0" ry="0" width="641" height="228" /> 
    <rect x="661" y="33" rx="0" ry="0" width="274" height="353" /> 
    <rect x="659" y="421" rx="0" ry="0" width="274" height="378" />
  </ContentLoader>
)

export default MyLoader