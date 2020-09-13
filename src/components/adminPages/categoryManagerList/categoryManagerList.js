import React from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import { Link } from "react-router-dom";


const categoryManagerList = () => {
  return (
    <>
      <Header/>
      <section className="padding_80">
        <div class="container project_list">
        <div className="col-md-12 mb-3 pl-5 pr-5">
            <h2 className="inlign">Category Managers List</h2>
            <p className="inlign float-right pt-1">Admin</p>
          </div>
          <div class="card"> 
              <div class="db-table table-responsive">
              <h5>Category Managers</h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Manager Name</th>
                      <th>Manager Email</th>   
                      <th>No# of Clients</th>
                      <th>Assigned Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pading_top ">Manager Name</td>
                      <td className="pading_top ">xyz@gmail.com</td>
                      <td className="pading_top">10</td> 
                      <td className="pading_top">Category</td>  

                      <td className="">
                        <a class="fm_custom_btn mr-2" href="/clients-signup">Client List</a>
                        <a class="fm_custom_btn mr-2" href="/clients-signup">Category</a>
                        <a class="fm_custom_btn_del" href="/clients-signup">Pause</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Manager Name</td>
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td className="pading_top">10</td> 
                      <td className="pading_top">Category</td> 

                      <td>
                      <a class="fm_custom_btn mr-2" href="/clients-signup">Client List</a>
                        <a class="fm_custom_btn mr-2" href="/clients-signup">Category</a>
                        <a class="fm_custom_btn_del" href="/clients-signup">Pause</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="pading_top">Manager Name</td>
                      <td className="pading_top">xyz@gmail.com</td> 
                      <td className="pading_top">10</td> 
                      <td className="pading_top">Category</td> 

                      <td>
                      <a class="fm_custom_btn mr-2" href="/clients-signup">Client List</a>
                        <a class="fm_custom_btn mr-2" href="/clients-signup">Category</a>
                        <a class="fm_custom_btn_del" href="/clients-signup">Pause</a>
                      </td>
                    </tr>  
                  </tbody>
                </table> 
            </div>
          </div>
          <Link className="fm_custom_btn pull-right mt-5" to="/add-category-manager">
                        Add Category Manager
                    </Link>
        </div>
      </section>
      
      <div className="container">
        <div className="row mt-5 mb-5">
            <div className="col-md-10 col-sm-12 m-auto p-auto">
                <div className="row">
                    <div className="col-md-6" >
                        <h4>Category Managers List</h4>
                    </div>
                    <div className="col-md-6" >
                        <h5 className="pull-right text-muted">Admin</h5>
                    </div>
                </div>
                <div className="w-100">
                    <h5 className="mt-3 mb-3">Category Mangers</h5>
                    <div class="db-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th>Manager Name</th>
                                <th>Manger Email</th>
                                <th>No# of Clients</th>
                                <th>Assigned Category</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Manager Name</td>
                                    <td>xyz@gmail.com</td>
                                    <td>10</td>
                                    <td>Category</td>
                                    <td>
                                        <Link className="fm_custom_btn mr-2" to="#">Client List</Link>
                                        <Link className="fm_custom_btn mr-2" to="#">Category</Link>
                                        <Link className="fm_custom_btn" to="#">Pause</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manager Name</td>
                                    <td>xyz@gmail.com</td>
                                    <td>10</td>
                                    <td>Category</td>
                                    <td>
                                        <Link className="fm_custom_btn mr-2" to="#">Client List</Link>
                                        <Link className="fm_custom_btn mr-2" to="#">Category</Link>
                                        <Link className="fm_custom_btn" to="#">Pause</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manager Name</td>
                                    <td>xyz@gmail.com</td>
                                    <td>10</td>
                                    <td>Category</td>
                                    <td>
                                        <Link className="fm_custom_btn mr-2" to="#">Client List</Link>
                                        <Link className="fm_custom_btn mr-2" to="#">Category</Link>
                                        <Link className="fm_custom_btn" to="#">Pause</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    <Link className="fm_custom_btn pull-right mt-5" to="/add-category-manager">
                        Add Category Manager
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default categoryManagerList;