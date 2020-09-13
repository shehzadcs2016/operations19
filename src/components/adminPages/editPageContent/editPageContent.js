import React from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import {
  Textfield,
  UploadFiles,
} from "../../shared/formComponents";
import { Button } from '@material-ui/core';

const editPageContent = () => {
  return (
    <>
      <Header />
      <section className="padding-80">
        <div className="container project_list edit_page_centent">
          <div className="row mb-5 edit_page">
            <div className="col-md-10 m-auto p-auto col-sm-12">
              <div className="row">
                <div class="col-md-12 mb-3 pl-5 pr-5"><h2 class="inlign">Manage Users</h2><p class="inlign float-right pt-1">Admin</p></div>
              </div>
              <div className="card pb-5">
                <div className="p-4">
                  <h5 className="mb-4">Project Details</h5>
                  <div className="mb-3">
                  <Textfield
                    label="Input Field"
                    name="input_field"
                    required
                  />
                  </div>
                  <div className="mb-3">
                  <Textfield
                    label="Text Area"
                    name="text_area"
                    multiline
                    rows="4"
                    required
                  />
                  </div>
                  <div className="edit_page_small">
                    <UploadFiles
                      label="Select Image"
                    />
                    <small>Maximum Uplaod Size <strong>: 80mb</strong> </small>
                  </div>
                  
                </div>

              </div>
              <a class="fm_custom_btn pull-right mt-5" href="/add-category-manager">Save</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default editPageContent;