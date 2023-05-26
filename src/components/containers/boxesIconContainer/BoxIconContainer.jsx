import React, { useState } from "react";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";

export function BoxIconContainer({ items }) {
  const [description, setDescription] = useState("");

  const buildDescription = () => {
    items.forEach((item) => {
      const id = item.id;
      switch (id) {
        case 1:
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <BoxIcon
                icon={item.icon}
                title={item.title}
                description={item.description}
              ></BoxIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
