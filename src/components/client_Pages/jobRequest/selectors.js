import { createSelector } from 'reselect';

const connectionKey = 'jobRequests';

const selectJobRequestsDomain = (state) => state[connectionKey];

export const makeSelectTicketId = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => globalState.get('ticketId')
  );

export const makeSelectNotHiredCandidated = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => {
      const candidates = globalState.get('candidates');
      if(candidates !== null){
        const notHiredCandiates = candidates.filter((candidate) => 
      Object.values(candidate.status)[0] === "pending"
      )
      return notHiredCandiates;
      }
      return null
    }
  );

  export const makeSelectHiredCandidated = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => {
      const candidates = globalState.get('candidates');
      if(candidates !== null){
        const hiredCandiates = candidates.filter((candidate) => 
        Object.values(candidate.status)[0] === 'hired'
      )
      return hiredCandiates;
      }
      return null
    }
  );
  export const makeSelectDidNotHireCandidated = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => {
      const candidates = globalState.get('candidates');
      if(candidates !== null){
        const hiredCandiates = candidates.filter((candidate) => 
        Object.values(candidate.status)[0] === 'rejected'
      )
      return hiredCandiates;
      }
      return null;
    }
  );
  export const makeSelectCandidateById = (id) => createSelector(
    selectJobRequestsDomain,
    (globalState) => {
      const candidates = globalState.get('candidates');
      let selectedCandidate = null;
      candidates.forEach((candidate)=>{
        if(candidate.user.id === id){
          selectedCandidate = candidate;
        }
      })
      return selectedCandidate;
    }
  );
  export const makeSelectCandidates = () => createSelector(
    selectJobRequestsDomain,
    (globalState) => globalState.get('candidates')
  );
