import React from "react";
import { connect } from "react-redux";
import FlashMessage from "./FlashMessages";
import { deleteFlashMessage } from "../../Redux/actions/flashMessages";

const FlashMessagesList = (props) => {
  const messages = props.messages.map((message) => (
    <FlashMessage
      key={message.id}
      message={message}
      deleteFlashMessage={props.deleteFlashMessage}
    />
  ));
  return (
    <div style={{ color: "#fff", fontSize: "0px", lineHeight: 0 }}>
      {messages}
    </div>
  );
};

// FlashMessagesList.prototype = {
//     messages: React.PropTypes.array.isRequired
// }

function mapStateTopProps(state) {
  console.log("state of flash message mapstattoprops", state);
  return {
    messages: state.flashMessages,
  };
}

export default connect(mapStateTopProps, { deleteFlashMessage })(
  FlashMessagesList
);
