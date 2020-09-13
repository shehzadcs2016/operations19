import React, { useEffect } from "react"

import { fetchPauseFreelancer } from "../actions"
import { makeSelectFreelancerPause } from "../selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import SinglePause from "./SinglePause"
import AvailableProjectsLoader from "../loaders"

function PauseFreelancer({ pauseFreelancer, value, DispatchPauseFreelancers }) {
  useEffect(() => {
    DispatchPauseFreelancers()
  }, [value])

  return (
    <>
      {pauseFreelancer.length > 0 ? (
        pauseFreelancer.map((pause) => <SinglePause pause={pause} />)
      ) : (
        <AvailableProjectsLoader />
      )}
    </>
  )
}
const mapStateToProps = createStructuredSelector({
  pauseFreelancer: makeSelectFreelancerPause(),
})

const mapDispatchToProps = (dispatch) => ({
  DispatchPauseFreelancers: () => {
    dispatch(fetchPauseFreelancer())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PauseFreelancer)
