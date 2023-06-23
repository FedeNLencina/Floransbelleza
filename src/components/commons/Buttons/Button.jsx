import React from "react";

export const Button = (value, handlerAction) => {
  return (
    <div>
      <input
        class="btn btn-primary"
        type="button"
        value={value}
        onClick={() => handlerAction(...parameters)}
      ></input>
    </div>
  );
};
