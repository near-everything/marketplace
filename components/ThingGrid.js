import React from "react";
import ThingCard from "./ThingCard";

function ThingGrid({ things }) {
  return (
    <>
      <div className="grid grid-cols-4">
        {things &&
          things.map((thing) => {
            return <ThingCard key={thing.id} thingId={thing.id} />;
          })}
      </div>
    </>
  );
}

export default ThingGrid;
