import React from 'react';
import CustomModal from "../../../../shared/modal";
import { Textfield } from "../../../../shared/formComponents";
import { Button } from "@material-ui/core";

const ReviewReplyModal = (props) => {
    return (
      <CustomModal {...props} title="Leave a reply to the review">
        <div>
          <p className="pb-2">
            Please type reply in field below
          </p>
          <Textfield
            required
            value={props.reply}
            name="reviewReply"
            label="Please leave a reply"
            multiline
            rows="4"
            onChange={(e) => {props.handleChange(e)}}
            onBlur={props.validateReply}
            error={props.ReplyErr ? true : false}
            helperText={props.ReplyErr}
          />
  
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
            className="mx-auto"
            onClick={props.onPostReply}
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default ReviewReplyModal;