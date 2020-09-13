import React from 'react'

export default function ShowServiceMenu({
    isShowData,formData,serviceMenu,categories,sub_categories,Service_type_options,contactTogglModal,EditProp,frquency_options
}){
    return(
        <>
{isShowData===true && formData.service_name && serviceMenu.length>0?
      <>
          <div className="row">
          <div className="col-md-12 pt-2">
            <h5>{formData.service_name}</h5>
          </div>
       
        </div>
          <div className="col-md-12">
              <div className="table-responsive service_menu">
                <table className="table table-sm">
                  <thead>
                    <tr>
                    <th scope="col">Category</th>
                        <th scope="col">Service</th>
                      
                        <th scope="col">Fixed Price Fee</th>
                      
                        <th scope="col">Hourly Fee</th>
                  
                        <th scope="col">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
              {serviceMenu ? serviceMenu.map(menu=>(
                 <tr key={menu}>
                 <div>
                                <p>
                                  {categories.map(data2 => {
                                    if (data2.id === menu.service_category)
                                      return data2.name
                                  })}
                                </p>
                                <p>
                                  {sub_categories.map(data2 => {
                                    if (data2.id === menu.service_subcategory)
                                      return data2.name
                                  })}
                                </p>
                              </div>
                 <td>
                   {menu.service_title} <br />
                   <small>{menu.description}</small>
                 </td>
            
                 <td>{menu.fixed_price?menu.fixed_price:"---"}</td>
               
                 <td>{menu.hourly_fee}</td>
          
                 <td> {frquency_options.map(data2 => {
                              if (data2.value === menu.service_frequency.toString())
                                return data2.label
                            })}</td>
            
           
               </tr>
              )):""}
              </tbody></table></div></div>
              </>
              :""  
          }
        </>
    )
}