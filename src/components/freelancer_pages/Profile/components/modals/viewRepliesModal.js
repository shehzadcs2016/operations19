import React from 'react';
import CustomModal from "../../../../shared/modal";

const ViewRepliesModal = (props) => {
    if(!props.selectedReplies || props.selectedReplies.length === 0) 
    return <CustomModal {...props} title="Review Replies">
    <div style={{textAlign:'center'}}>
      <p>No replies for this review</p>
    </div>
  </CustomModal>;
    console.log("replies are ", props.selectedReplies)
    return (
      <CustomModal {...props} title="Review Replies">
        <div>
          {
            props.selectedReplies.map((reply) => 
            <div className="border-bottom py-2 clearfix">
            <h4 className="text-color h5 font-weight-bold">
              {reply.user.user_profile.full_name}
            </h4>
            <p key={reply.id}>{reply.reply}</p>
            </div>
            )
          }
        </div>
      </CustomModal>
    );
  };

export default ViewRepliesModal;