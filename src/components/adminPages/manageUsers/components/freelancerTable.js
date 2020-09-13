import React from "react";
import { Button } from '@material-ui/core';


const freelancerTable = () => {
  return(
    <>
      <section className="padding_80 pt-5">
        <div class="container project_list"> 
          <div class="card"> 
              <div class="db-table table-responsive">
              <h5>Freelancer Details</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Country</th>   
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pading_top t_col1">Username</td>
                      <td className="pading_top t_col2">Country</td>
                      <td className="pading_top">xyz@gmail.com</td>  
                      <td className="t_colL">
                        <Button class="fm_custom_btn mr-2" onClick="">View</Button>
                        <Button class="fm_custom_btn mr-2" onClick="">Edit</Button>
                        <Button class="fm_custom_btn_del" honClick="">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Country</td> 
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td>
                      <Button class="fm_custom_btn mr-2" onClick="">View</Button>
                        <Button class="fm_custom_btn mr-2" onClick="">Edit</Button>
                        <Button class="fm_custom_btn_del" honClick="">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Country</td> 
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td>
                      <Button class="fm_custom_btn mr-2" onClick="">View</Button>
                        <Button class="fm_custom_btn mr-2" onClick="">Edit</Button>
                        <Button class="fm_custom_btn_del" honClick="">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Country</td> 
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td>
                      <Button class="fm_custom_btn mr-2" onClick="">View</Button>
                        <Button class="fm_custom_btn mr-2" onClick="">Edit</Button>
                        <Button class="fm_custom_btn_del" honClick="">Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Username</td>
                      <td className="pading_top">Country</td> 
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td>
                      <Button class="fm_custom_btn mr-2" onClick="">View</Button>
                        <Button class="fm_custom_btn mr-2" onClick="">Edit</Button>
                        <Button class="fm_custom_btn_del" honClick="">Delete</Button>
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

export default freelancerTable;