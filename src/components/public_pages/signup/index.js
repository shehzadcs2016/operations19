// export * from "./clientSignUp";
import React from "react";
import BodyPostJobOffline from "./postJobOffline";
import Header from "../../public_pages/shared/Header";
import { Footer } from "../../public_pages/shared/Footer";
import FlashMessage from "../../shared/FlashMessagesList";

export const PostJobOffline = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <BodyPostJobOffline />
      <FlashMessage />
      {/* <Footer />  */}
    </React.Fragment>
  );
};

export default PostJobOffline;
