import React from "react";

const ExpandableImage = ({ path, alt, caption, zoomImage, expandTitle }) => {
  return (
    <div className="img-wrapper">
      <img
        src={path}
        alt={alt}
        title={expandTitle}
        onClick={() => zoomImage(path, caption)}
      />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default ExpandableImage;
