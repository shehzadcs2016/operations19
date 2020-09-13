import React from 'react';
import CustomModal from "../../../../../shared/modal";

const ContactModal = (props) => {
  console.log("selected candidate is ", props.selectedCandidate)
  if(!props.selectedCandidate) return null;
  const { user: {
    email, user_profile:{phone_number, full_name, skype_id}
  }
}= props.selectedCandidate;
    return (
      <CustomModal {...props} title="Contact Information">
        <div>
          <p className="pb-2">
            {`Get in touch with ${full_name} through one of the following
            contact methods.`}
          </p>
          <p className="pb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="pb-2">
            <strong>Phone:</strong> {phone_number}
          </p>
          <p className="pb-2">
            <strong>Skype:</strong> {skype_id}
          </p>
          <p className="pb-2">
            If you have any issues getting in touch with a candidate, let us know
            and we'll be glad to help!
          </p>
        </div>
      </CustomModal>
    );
  };

export default ContactModal;