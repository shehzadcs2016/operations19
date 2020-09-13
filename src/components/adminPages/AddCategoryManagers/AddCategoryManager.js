import React from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import { Textfield, SelectMenu } from "../../shared/formComponents";
import { Button } from '@material-ui/core';


const AddCategoryManager = () => {
    const options = [
        { name: "1", label: "option1" },
        { name: "2", label: "option1" },
        { name: "3", label: "option1" },
    ]
    return (
        <>
            <Header />
            <section className="padding_80">
                <div className="container project_list edit_page_centent">
                    <div className="row">
                        <div className="col-md-12 m-auto add_catagory">
                            <div className="row">
                                <div class="col-md-12 mb-3 pl-5 pr-5"><h2 class="inlign">Add Category Manager</h2><p class="inlign float-right pt-1">Admin</p></div>
                            </div>
                            <form className="">
                            <div className="card p-4">
                            
                                <div className="w-100">
                                    <h5 className="mb-4">Manager Details</h5>
                                    <Textfield
                                        name="user_name"
                                        label="User name"
                                        required
                                    />
                                    <Textfield
                                        name="email"
                                        label="Email"
                                        required
                                    />
                                    <Textfield
                                        name="first_name"
                                        label="First Name"
                                        required
                                    />
                                    <Textfield
                                        name="last_name"
                                        label="Last Name"
                                        required
                                    />
                                    <SelectMenu
                                        name="assigned_category"
                                        label="Assigned Category"
                                        options={options}
                                    />
                                    <SelectMenu
                                        name="assigned_clients"
                                        label="Assigned Clients"
                                        options={options}
                                    />
                                </div>
                            </div>
                            <a class="fm_custom_btn pull-right mt-5" href="/add-category-manager">Add Category Manager</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AddCategoryManager;