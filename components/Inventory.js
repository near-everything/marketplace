import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import ThingGrid from "./ThingGrid";
import { PulseLoader } from "react-spinners";

function Inventory() {
  const { data, isLoading, isError, error } = useQuery(
    ["inventory"],
    async () => {
      const { tokens } = await request(
        "https://api.thegraph.com/subgraphs/name/near-everything/inventory",
        gql`
          query inventory {
            tokens {
              id
              owner {
                id
              }
              tokenId
            }
          }
        `
      );
      return tokens;
    }
  );

  if (isLoading) {
    return (
      <>
        <PulseLoader
          size={10}
          color={"#e5e7eb"}
          loading={true}
          speedMultiplier={1.5}
        />
      </>
    );
  }
  if (isError) {
    return (
      <>
        <p>Error... {JSON.stringify(error)}</p>
      </>
    );
  }
  return (
    <>
      <div className="pt-8">
        <ThingGrid things={data} />
      </div>
    </>
  );
}

export default Inventory;
