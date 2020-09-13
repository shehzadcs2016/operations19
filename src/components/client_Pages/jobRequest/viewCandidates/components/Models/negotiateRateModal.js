import React from 'react';
import shortid from "shortid";
import CustomModal from "../../../../../shared/modal";
import { Textfield, SelectMenu } from "../../../../../shared/formComponents";
import { Button } from "@material-ui/core";

const NegotiateRateModal = (props) => {
    const options = [
      { id: shortid.generate(), value: "Hourly" },
      { id: shortid.generate(), value: "Fixed" },
    ];
    return (
      <CustomModal {...props} title="Negotiate rate">
        <div>
          <p className="pb-2">
            Submit the hourly or fixed rate below that you'd like to propose
          </p>
          <Textfield required label="Enter Rate" name="rate" />
          <SelectMenu
            label="Select Hourly or Fixed"
            required
            labelWidth={160}
            options={options}
          />
          <Textfield
            label="Comments (optional)"
            name="rateComment"
            multiline
            rows="4"
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4" }}
            className="mx-auto text-white"
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default NegotiateRateModal;