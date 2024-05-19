import React from "react";
import { RxCross2 } from "react-icons/rx";

const InfoModal = ({
  infoRef,
  expandedItem,
  setExpandedItem,
  title,
  content,
  codeLink,
}) => {
  return (
    <div
      ref={infoRef}
      className={`infoModal ${expandedItem === 0 ? "hideModal" : "showModal"}`}
    >
      <div className="cardContentHeader">
        <a className="codeButton" href={codeLink} target="blank">
          Get the code
        </a>
        <RxCross2 onClick={() => setExpandedItem(0)} className="closeIcon" />
      </div>
      <h2>{title}</h2>
      {content}
    </div>
  );
};

export default InfoModal;
