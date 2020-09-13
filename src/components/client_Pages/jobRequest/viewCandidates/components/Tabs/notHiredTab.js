import React from 'react';
import TabPanel from '../tabPanel';
import CandidatePreview from '../candidatePreview';
import CandidateProfileLoader from '../../loader';

const notHiredTab = (props) =>{
    const {
        contactTogglModal,
        negotiateRateTogglModal,
        passOptionTogglModal,
        hourlyRateTogglModal,
        candidates
      } = props;
      const ModalBools ={
          showNegotiateRateModal : true,
        showPassOnThisModal: false,
        showHireAtHourlyRateModal: true,
        }
      if(candidates === null) return <>
        <CandidateProfileLoader />
        <CandidateProfileLoader />
      </>
    return(
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
                <p>No candidates have been rejected</p>
            </div>
            }
    </TabPanel>
)}

export default notHiredTab;