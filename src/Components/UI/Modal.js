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
              <button type="close" onClick={onClose}>
                X
              </button>

              <div className="content">{children}</div>
            </div>
          </Fragment>,
          document.getElementById("modal-root")
        )}
      </Fragment>
    </div>
  );
}
