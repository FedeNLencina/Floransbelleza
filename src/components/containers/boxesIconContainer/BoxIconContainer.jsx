import React, { useState } from "react";
import { BoxIcon } from "../../boxes/boxIcon/BoxIcon";

export function BoxIconContainer({ items }) {
  const [description, setDescription] = useState(items[0].description);

  return (
    <div className="container-fluid">
      <div className="row">
        {items.map((item) => {
          return (
            <>
              <div key={item.id}>
                <BoxIcon
                  icon={item.icon}
                  title={item.title}
                  description={description}
                ></BoxIcon>
              </div>
              <div></div>
            </>
          );
        })}
      </div>
    </div>
  );
}
