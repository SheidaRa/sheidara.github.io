import React, { forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";

const InfoModal = forwardRef(
  ({ expandedItem, setExpandedItem, title, content, codeLink, buttonName = "Figma File" }, ref) => {
    return (
      <div className={`infoModalContainer ${expandedItem === 0 ? "hideModal" : "showModal"}`}>
        <div className="infoModal">
          <div className="cardContentHeader">
            <a className="headerLink" href={codeLink} target="blank">
              {buttonName}
            </a>
            <RxCross2 onClick={() => setExpandedItem(0)} className="closeIcon" />
          </div>
          <div className="infoModal-content" ref={ref}>
            <h2>{title}</h2>
            {content}
          </div>
        </div>
      </div>
    );
  }
);

export default InfoModal;
