import React from 'react';
import CustomModal from "../../../../../shared/modal";
import { Textfield } from "../../../../../shared/formComponents";
import { Button } from "@material-ui/core";

const PassOptionModal = (props) => {
    return (
      <CustomModal {...props} title="Want to pass on this candidate?">
        <div>
          <p className="pb-2">
            By clicking this button, you will pass on Julien Dabucol.
          </p>
          <p className="pb-2">
            The candidate will be politely notified and your request will be
            re-opened.
          </p>
          <p className="pb-2">
            You will be introduced to a new candidate from the network ASAP.
          </p>
          <p className="pb-2">
            Please provide feedback on why this candidate was not a good fit so we
            can introduce you to a better option.
          </p>
          <Textfield
            required
            name="passComment"
            label="Please leave comment"
            multiline
            rows="4"
          />
  
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
            className="mx-auto"
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default PassOptionModal;