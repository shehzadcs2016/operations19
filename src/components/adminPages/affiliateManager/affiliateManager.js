import React, {useState} from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import AffiliateData from "./component/affiliateData"
import { Button } from '@material-ui/core';


const AffiliateManager = () => {
  const [modalAffiliateData, setModalAffiliateData] = useState(false);
  const affiliateDataToggleModalHandler = () => {
    setModalAffiliateData(!modalAffiliateData);
  };
  return (
    <>
    <AffiliateData
      modal={modalAffiliateData}
      toggleModal={affiliateDataToggleModalHandler}
    />
      <Header/>
      <section className="padding_80">
        <div class="container project_list">
          <div className="col-md-12 mb-3 pl-5 pr-5">
            <h2 className="inlign">Affiliates Manager</h2>
            <p className="inlign float-right pt-1">Admin</p>
          </div>
          <div class="card"> 
              <div class="db-table table-responsive">
              <h5>Merchant’s List</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Affiliate Name</th>
                      <th>No# of Projects</th>   
                      <th>No# of Clients</th>
                      <th>Earned Revenue</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pading_top ">Affiliate Name</td>
                      <td className="pading_top ">3</td>
                      <td className="pading_top">1</td> 
                      <td className="pading_top">$2440</td>  

                      <td className="">
                        <Button className="fm_custom_btn mr-2" onClick={affiliateDataToggleModalHandler}>View</Button> 
                        <Button className="fm_custom_btn_del" onClick={affiliateDataToggleModalHandler}>Suspend</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Affiliate Name</td>
                      <td className="pading_top">3</td> 
                      <td className="pading_top">1</td> 
                      <td className="pading_top">$2440</td> 

                      <td>
                        <Button className="fm_custom_btn mr-2" onClick={affiliateDataToggleModalHandler}>View</Button> 
                        <Button className="fm_custom_btn_del" onClick={affiliateDataToggleModalHandler}>Suspend</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Affiliate Name</td>
                      <td className="pading_top">3</td> 
                      <td className="pading_top">1</td> 
                      <td className="pading_top">$2440</td> 

                      <td>
                        <Button className="fm_custom_btn mr-2" onClick={affiliateDataToggleModalHandler}>View</Button> 
                        <Button className="fm_custom_btn_del" onClick={affiliateDataToggleModalHandler}>Suspend</Button>
                      </td>
                    </tr>  
                  </tbody>
                </table> 
            </div>
          </div> 
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default AffiliateManager;