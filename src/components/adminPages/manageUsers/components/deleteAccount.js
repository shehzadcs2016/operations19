import React, {useState} from "react";
import CustomModal from "../../../shared/modal";
import { Button } from '@material-ui/core';

const deleteAccount = (props) => {

   return(
      <CustomModal
         {...props}
         className="pt-4"
         toggleModal={props.toggleModal}
         title="Delete Account"
         >
         <div className="pl-3 pr-3 pb-4">
            <div className="text-center">
                <p className="mt-3">Are you sure you wants to delete this persons account?</p>
                <Button class="fm_custom_btn_del mt-5 mb-4 pl-5 pr-5">Delete</Button>
            </div>
              
         </div>
      </CustomModal>
   )
}

export default deleteAccount;