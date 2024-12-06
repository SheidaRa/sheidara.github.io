import React from "react";

const ExpandableImage = ({
  path,
  alt,
  caption,
  zoomImage,
  expandTitle,
  width = "100%",
}) => {
  return (
    <div className="img-wrapper">
      <img
        src={path}
        alt={alt}
        title={expandTitle}
        onClick={() => zoomImage(path, caption)}
        style={{ width: width }}
      />
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default ExpandableImage;
