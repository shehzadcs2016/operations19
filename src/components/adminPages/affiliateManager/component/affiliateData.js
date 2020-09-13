import React from "react";
import CustomModal from "../../../shared/modal";
import { Button } from '@material-ui/core';
import {
    Textfield,
} from "../../../shared/formComponents";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const affiliateData = (props) => {

    return (
        <section className="project_list ">
            <CustomModal
                {...props}
                className="pt-4 pb-0 popup_heading"
                modalClass="modal-lg"
                toggleModal={props.toggleModal}
                title="Affiliate Data"
            >
                <div className="edit_page_centent">
                    <Textfield
                        name="affiliate_name"
                        label="Affiliate Name"
                        required
                    />
                </div>
                <div className="revenue_popup mb-5 mt-3">
                    <p className="inline_p1 float-left mb-4">Revenue</p>
                    <p className="inline_p2 float-right ">$7205</p>
                </div>
                <div className="dotedt_linb_popup"></div>
                <div>
                    <table className="table popup_affilate_table">
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th>Client</th>
                                <th>Projects</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Client name</td>
                                <td className="button_clas"><button className="td_button">Operation19 <i class="fas fa-times"></i></button><button className="td_button mr-2">Mobile App <i class="fas fa-times"></i></button><button className="td_button mr-0">Mobile App <i class="fas fa-times"></i></button><div className="text-right mt-0"><Button className="edit_buton_popup"><EditIcon /></Button>
                                    <Button className="del_buton_popup"><DeleteIcon /></Button></div> </td>
                                 
                            </tr> 
                            <tr>
                                <td>02</td>
                                <td>Client name</td>
                                <td className="button_clas"><button className="td_button">Operation19 <i class="fas fa-times"></i></button><button className="td_button mr-2">Mobile App <i class="fas fa-times"></i></button><button className="td_button mr-0">Mobile App <i class="fas fa-times"></i></button><div className="text-right mt-2"><Button className="edit_buton_popup"><EditIcon /></Button>
                                    <Button className="del_buton_popup"><DeleteIcon /></Button></div> </td>
                                 
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </CustomModal>
        </section>
    )
}

export default affiliateData;