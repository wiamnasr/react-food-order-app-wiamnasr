// Style
import classes from "./Modal.module.css";

import { Fragment } from "react";
import ReactDOM from "react-dom";

// I want to use react portal for both my backdrop (the thing behind the modal overlay which blocks interaction with the rest of the page)
// & I also want to render the MOdal overlay itself with react portal
// in the public folder, in the index.html file above the root div, added another div with an id of overlays, I want to portal my Modal and backdrop to that div

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    //   I need backdrop and overlay side by side, for that importing Fragment from React
    <Fragment>
      {/* using a portal to make sure that my html is not all over the place in the end app */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
