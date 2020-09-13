import React from "react";
// import classnames from 'classnames';
import { Button } from "@material-ui/core";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp(props) {
  const { id, type, text } = props.message;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const variant =
  //   type === "error" || type === "danger"
  //     ? "error"
  //     : type === "info"
  //     ? "info"
  //     : type === "warning"
  //     ? "warning"
  //     : "success";
  let variant = type === "error" || type === "danger" ? "error" : type;
  // variant = ['error', 'info', 'warning', 'success'].indexOf(s)
  // : type === "info"
  // ? "info"
  // : type === "warning"
  // ? "warning"
  // : "success";
  //   const vertical = type === "error" || type === "success" ? "bottom" : "top";
  //   const horizontal = type === "error" || type === "success" ? "right" : "left";

  const vertical = "bottom";
  const horizontal = "right";

  const action = (key) => (
    <Button
      onClick={() => {
        closeSnackbar(key);
        props.deleteMsg(id);
      }}
    >
      Dismiss
    </Button>
  );
  // enqueueSnackbar(text, {
  //     variant: variant,
  //     autoHideDuration: 9000,
  //     action,
  //     anchorOrigin: {
  //         vertical: vertical,
  //         horizontal: horizontal,
  //     },
  // });
  setTimeout(() => {
    props.deleteMsg(id);
  }, 5000);

  return (
    <div>
      {enqueueSnackbar(text, {
        variant: variant,
        autoHideDuration: 5000,
        action,
        anchorOrigin: {
          vertical: vertical,
          horizontal: horizontal,
        },
      })}
    </div>
  );
}

const FlashMessage = (props) => (
  <SnackbarProvider maxSnack={1}>
    <MyApp message={props.message} deleteMsg={props.deleteFlashMessage} />
  </SnackbarProvider>
);

// const action = key => (
//     <React.Fragment>
//         <Button onClick={() => { alert(`I belong to snackbar with key ${key}`); }}>
//             'Alert'
//         </Button>
//         <Button onClick={() => { this.props.closeSnackbar(key) }}>
//             'Dismiss'
//         </Button>
//     </React.Fragment>
// );

// const FlashMessage = (props) => {
//     const { id, type, text } = props.message;

//     const deleteMessage = () => {
//         console.log('deleting message id:', id);
//         props.deleteFlashMessage(id);
//     }

//     return (
//         <div className={classnames('alert', {
//             'alert-success': type === 'success',
//             'alert-danger': type === 'error',
//         })}>
//             <button onClick={deleteMessage} className="close" style={{ cursor: 'hand' }}><span>&times;</span></button>
//             {text}
//         </div>
//     )
// }
// FlashMessage.prototype = {
//     message: React.PropTypes.object.isRequired,
//     deleteFlashMessage: React.PropTypes.func.isRequired
// }

export default FlashMessage;
