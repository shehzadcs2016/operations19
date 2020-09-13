// export * from "./clientSignUp";
import React from "react";
import BodyClientSignUp from "./clientSignUp";
// import Header from "../../public_pages/shared/Header";
// import { Footer } from "../../public_pages/shared/Footer";
import FlashMessage from "../../shared/FlashMessagesList";

export const ClientSignUp = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <BodyClientSignUp />
      <FlashMessage />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default ClientSignUp;
