import ReactDOM from "react-dom";

export const Backdrop = (props) => {
  const handelClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };
  return <div onClick={handelClick} className="loader-overlay"></div>;
};

export default function Loader() {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <div className="loading-dots">
        <div>Loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  );
}
