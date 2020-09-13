import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import EditClient from './editClient';
import DeleteAccount from './deleteAccount';


const ClientTable = () => {
  const [modalEditClient, setModalEditClient] = useState(false);
  const editClientToggleModalHandler = () => {
    setModalEditClient(!modalEditClient);
  };
  const [modalDeleteAccount, setModalDeleteAccount] = useState(false);
  const deleteAccountToggleModalHandler = () => {
    setModalDeleteAccount(!modalDeleteAccount);
  };

  return(
    <>
      <EditClient 
        modal={modalEditClient}
        toggleModal={editClientToggleModalHandler}
      />
      <DeleteAccount 
        modal={modalDeleteAccount}
        toggleModal={deleteAccountToggleModalHandler}
      />
      <section className="padding_80 pb-0">
        <div class="container project_list">
        <div className="col-md-12 mb-3 pl-5 pr-5">
            <h2 className="inlign">Manage Users</h2>
            <p className="inlign float-right pt-1">Admin</p>
          </div>
          <div class="card"> 
              <div class="db-table table-responsive">
              <h5>Client Details</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Full Name</th>   
                      <th>Company</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pading_top t_col1">Username</td>
                      <td className="pading_top t_col2">Full Name</td>
                      <td className="pading_top">Company Name</td>  
                      <td className="t_colL">
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>View</Button>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>Edit</Button>
                        <Button class="fm_custom_btn_del" onClick={setModalDeleteAccount}>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Full Name</td> 
                      <td className="pading_top">Company Name</td> 
                      <td>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>View</Button>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>Edit</Button>
                        <Button class="fm_custom_btn_del" onClick={setModalDeleteAccount}>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Full Name</td> 
                      <td className="pading_top">Company Name</td> 
                      <td>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>View</Button>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>Edit</Button>
                        <Button class="fm_custom_btn_del" onClick={setModalDeleteAccount}>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Full Name</td> 
                      <td className="pading_top">Company Name</td> 
                      <td>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>View</Button>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>Edit</Button>
                        <Button class="fm_custom_btn_del" onClick={setModalDeleteAccount}>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Full Name</td> 
                      <td className="pading_top">Company Name</td> 
                      <td>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>View</Button>
                        <Button class="fm_custom_btn mr-2" onClick={editClientToggleModalHandler}>Edit</Button>
                        <Button class="fm_custom_btn_del" onClick={setModalDeleteAccount}>Delete</Button>
                      </td>
                    </tr>
                  </tbody>
                </table> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientTable;