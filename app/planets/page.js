import React from "react";

export default async function PlanetsPage(props) {
  const res = await fetch(
    `https://www.swapi.tech/api/planets/${props.params.slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch planet");
  }
  const json = await res.json();
  return (
    <>
      <h1>{json.result.properties.name}</h1>
    </>
  );
}
