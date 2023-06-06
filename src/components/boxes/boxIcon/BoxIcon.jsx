import React from "react";

export function BoxIcon({ icon, title, description }) {
  //const [description, setDescription] = useState(items[0].description);
  return (
    <div className="">
      <div>
        <img src={icon} alt={icon}></img>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
