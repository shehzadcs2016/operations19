import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { getFormatedDate } from '../../../../../utils'
import { Button } from "@material-ui/core";

const ReviewCard = ({
  review, 
  withReplyButton=false, 
  ismodalStatus,
  onReplyClick=()=>{},
  onViewRepliesClick=()=>{}
}) => {
  console.log("review is ", review)
  const {
    id, 
    rate_by_star, 
    text, 
    created_at,
    client_review_replies,
    freelancer:{user_profile: {first_name, last_name, country: {name}}},
  } = review;
  return (
    <div className={ "border-bottom py-2"}> 
        <h4 style={{display:'inline', marginRight:'10px'}}>{`${first_name} ${last_name}`}</h4>
        <FontAwesomeIcon icon={faStar}/>
        <h5 style={{marginLeft:'10px', display:'inline'}}>{rate_by_star}</h5>
        <h5 style={{color:'gray'}}>{name}</h5>
        <p className={ "py-3"}>{text}</p>
        <p style={{color:'gray'}}>Published: {`${getFormatedDate(created_at)}`}</p>
       
        <Button
        variant="contained"
        style={{ backgroundColor: "#2dced4", color: "white" }}
        onClick={() => {onReplyClick(id)}}
      >
        Reply
      </Button>
        
        {
          client_review_replies.length > 0 && <Button
          variant="contained"
          style={{ backgroundColor: "#2dced4", color: "white", marginLeft: '10px' }}
          onClick={() => {onViewRepliesClick(client_review_replies)}}
        >
          <span
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "red",
            borderRadius: "50%",
            marginRight: '10px'
          }}
          >{client_review_replies.length}</span> 
          {`  View Replies`} 
        </Button>
        }
    </div>
  )
}

export default ReviewCard;