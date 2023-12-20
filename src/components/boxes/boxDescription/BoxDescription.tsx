import React from "react";

type BoxDescriptionProps = {
  description: string;
};

export function BoxDescription({ description }: BoxDescriptionProps) {
  return (
    <div className="container">
      <p>{description}</p>
    </div>
  );
}
