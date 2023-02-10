import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./Loader";
export default function Modal({ onClose, children }) {
  return (
    <div>
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <Backdrop onClose={onClose} />
            <div className="modal">
              <div className="content">{children}</div>
              <button onClick={onClose}>X</button>
            </div>
          </Fragment>,
          document.getElementById("modal-root")
        )}
      </Fragment>
    </div>
  );
}
