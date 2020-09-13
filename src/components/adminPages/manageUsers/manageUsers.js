import React from 'react';
import Header from "../../public_pages/shared/Header";
import Footer from "../../public_pages/shared/Footer";
import ClientTable from "./components/clientTable";
import FreelancerTable from "./components/freelancerTable";

const ManageUsers = () => {
  return (
    <>
      <Header/>
        <ClientTable />
        <FreelancerTable />
      <Footer />
    </>
  )
}

export default ManageUsers;