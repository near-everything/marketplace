import React from "react";
import ThingCard from "./ThingCard";

function ThingGrid({ things }) {
  return (
    <>
      <div className="grid gap-4 grid-flow-col-dense">
        {things &&
          things.map((thing) => {
            return <ThingCard key={thing.id} thingId={thing.id} />;
          })}
      </div>
    </>
  );
}

export default ThingGrid;
