import React from "react";
import CustomModal from "../../../shared/modal";

export const ServiceMenuModal = (props) => {
   const { deleteWholeServiceMenu, serviceMenuId, serviceName} = props;
   const handleDelete = ()=>{
    deleteWholeServiceMenu(serviceMenuId||"none")
    props.toggleModal()
   }

   return (
      <CustomModal
         {...props}
         title="Delete Service Menu?"
      >
         <div className="container">
            <div className="row  mt-4">
               <div className="col-md-12">
                  <p>Are you sure you want to delete {serviceName} service menu?</p>
               </div>
               <div className="col-md-12 text-center">
                  <button 
                    onClick={handleDelete}
                    className="delete-service-menu-alert w-100 mt-3">
                      Delete
                  </button>
               </div>
            </div>
         </div>
      </CustomModal>
   )
}

export default ServiceMenuModal