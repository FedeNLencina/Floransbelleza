import { createContext, useState } from "react";

export const ServiceHomeIconContext = createContext();

export const ServiceHomeProvider = ({ children }) => {
  const [descriptionItem, setDescriptionItem] = useState();

  const descriptionHandler = (description) => {
    setDescriptionItem(description);
  };
  return (
    <ServiceHomeIconContext.Provider value={{}}>
      {children}
    </ServiceHomeIconContext.Provider>
  );
};
