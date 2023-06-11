import React from "react";
import "./boxIcon.css";

export function BoxIcon({ icon, title, description }) {
  //const [description, setDescription] = useState(items[0].description);
  return (
    <div className="text-center">
      <img className="iconImg" src={icon} alt={icon}></img>
      <p className="iconTitle">{title}</p>
    </div>
  );
}
