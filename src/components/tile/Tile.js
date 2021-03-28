import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map( (value, index) => {
        let classProp = "tile"
        if (index === 0) classProp += "-title"
        return <p className={classProp}>{value}</p>
      })}
    </div>
  );
};
