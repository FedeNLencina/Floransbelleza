import React, { useState } from "react";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";
import "./boxIconContainer.css";

export function BoxIconContainer({ items }) {
  const [description, setDescription] = useState(items[0].description);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {items.map((item) => {
          return (
            <div className="col-2 boxIconColumn" key={item.id}>
              <BoxIcon
                icon={item.icon}
                title={item.title}
                description={description}
              ></BoxIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
