import React from 'react'

export default function ShowServiceProposal({
    isShowData,formData,serviceMenu,categories,sub_categories,Service_type_options,contactTogglModal,EditProp,frquency_options
}){
    return(
        <>
{isShowData===true && formData.serviceproposal_name && serviceMenu.length>0?
      <>
          <div className="row">
          <div className="col-md-12 pt-2">
            <h5>{formData.serviceproposal_name}</h5>
          </div>
       
        </div>
          <div className="col-md-12">
              <div className="table-responsive service_menu">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Service</th>
                      <th scope="col">Service Type</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Fixed Price Fee</th>
                      <th scope="col">Milestones</th>
                      <th scope="col">Hourly Fee</th>
                      <th scope="col">Weekly Limit</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Delivery Time</th>
                      <th scope="col">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
              {serviceMenu ? serviceMenu.map(menu=>(
                 <tr key={menu}>
                 <div>
                                <p>
                                  {categories.map(data2 => {
                                    if (data2.id === menu.category_id)
                                      return data2.name
                                  })}
                                </p>
                                <p>
                                  {sub_categories.map(data2 => {
                                    if (data2.id === menu.subcategory_id)
                                      return data2.name
                                  })}
                                </p>
                              </div>
                 <td>
                   {menu.service_title} <br />
                   <small>{menu.description}</small>
                 </td>
                 <td>{Service_type_options.map(data2 => {
                              if (data2.value === menu.service_type.toString())
                                return data2.label
                            })}</td>
                 <td>{menu.quantity}</td>
                 <td>{menu.fixed_price?menu.fixed_price:"---"}</td>
                 <td>
                   <button
                     onClick={() => contactTogglModal(menu.id)}
                     type="button"
                     class="btn btn-outline-primary"
                   >
                     {EditProp === true ? "Edit" : "View"}
                   </button>
                 </td>
                 <td>{menu.hourly_fee}</td>
                 <td>{menu.weekly_limit}</td>
                 <td> {frquency_options.map(data2 => {
                              if (data2.value === menu.frequency.toString())
                                return data2.label
                            })}</td>
                 <td>{menu.delivery_time}</td>
                 <td>{menu.total}</td>
           
               </tr>
              )):""}
              </tbody></table></div></div>
              </>
              :""  
          }
        </>
    )
}