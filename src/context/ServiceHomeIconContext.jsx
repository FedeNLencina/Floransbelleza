import { createContext, useState } from "react";

export const ServiceHomeIconContext = createContext();

export const ServiceHomeProvider = ({ children }) => {
  const [descriptionItem, setDescriptionItem] = useState();

  const descriptionHandler = (description) => {
    setDescriptionItem(description);
    console.log("description setted using context", descriptionItem);
  };
  return (
    <ServiceHomeIconContext.Provider
      value={{
        descriptionHandler,
        descriptionItem,
      }}
    >
      {children}
    </ServiceHomeIconContext.Provider>
  );
};
