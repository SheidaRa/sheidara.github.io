import React, { forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";

const InfoModal = forwardRef(
  ({ expandedItem, setExpandedItem, title, content, codeLink }, ref) => {
    return (
      <div
        className={`infoModal ${expandedItem === 0 ? "hideModal" : "showModal"
          }`}
      >
        <div className="cardContentHeader">
          {(title === "Exploring Emotions in VR") ? (
            <a className="headerLink" href={codeLink} target="blank">
              Medium Article
            </a>
          ) : <a className="headerLink" href={codeLink} target="blank">
            Figma File
          </a>}
          <RxCross2 onClick={() => setExpandedItem(0)} className="closeIcon" />
        </div>
        <div className="infoModal-content" ref={ref}>
          <h2>{title}</h2>
          {content}
        </div>
      </div>
    );
  }
);

export default InfoModal;
