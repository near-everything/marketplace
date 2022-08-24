import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";

function Characteristic({ char }) {
  const {
    data: attr,
    isLoading: attributeIsLoading,
    isError: attributeIsError,
  } = useQuery(
    ["attributeById", char.attributeId],
    async () => {
      const attribute = await request(
        process.env.NEXT_PUBLIC_EVERYTHING_API_URL,
        gql`
          query attributeById($attributeId: Int!) {
            attribute(id: $attributeId) {
              name
              relationships {
                edges {
                  node {
                    option {
                      id
                      value
                    }
                  }
                }
              }
            }
          }
        `,
        { attributeId: char.attributeId }
      );
      return attribute;
    },
    options
  );
  const {
    data: opt,
    isLoading: optionIsLoading,
    isError: optionIsError,
  } = useQuery(["optionById", char.optionId], async () => {
    const option = await request(
      process.env.NEXT_PUBLIC_EVERYTHING_API_URL,
      gql`
        query optionById($optionId: Int!) {
          option(id: $optionId) {
            value
          }
        }
      `,
      { optionId: char.optionId }
    );
    return option;
  });

  return (
    <>
      <div className="badge badge-outline">
        {attr.name} : {opt.value}
      </div>
    </>
  );
}

export default Characteristic;
