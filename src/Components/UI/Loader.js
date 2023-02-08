import React from "react";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loading-dots">
        <div>Loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </div>
  );
}
