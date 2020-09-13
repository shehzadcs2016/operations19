import React from 'react';
import TabPanel from '../tabPanel';
import CandidatePreview from '../candidatePreview';
import CandidateProfileLoader from '../../loader';

const hiredTab = (props) => {
  const {
    contactTogglModal,
    negotiateRateTogglModal,
    passOptionTogglModal,
    hourlyRateTogglModal,
    candidates
  } = props;
  const ModalBools ={
      showNegotiateRateModal : false,
    showPassOnThisModal: false,
    showHireAtHourlyRateModal: false,
    }
  if(candidates === null) return <>
    <CandidateProfileLoader />
    <CandidateProfileLoader />
  </>
  return (
    <TabPanel value={props.value} index={props.index} dir={props.dir}>
      {
                candidates.length > 0 ? candidates.map((candidate, key) => 
                <CandidatePreview 
                contactTogglModal={contactTogglModal}
                negotiateRateTogglModal={negotiateRateTogglModal}
                passOptionTogglModal={passOptionTogglModal}
                hourlyRateTogglModal={hourlyRateTogglModal}
                data={candidate}
                modals={ModalBools}
                key={`candidatePreview${key}`}
            />
                ) : <div style={{textAlign:"center", height:'500px'}}>
                <p>No candidates have been hired for this project</p>
            </div>
            }
  </TabPanel>
)}

export default hiredTab;