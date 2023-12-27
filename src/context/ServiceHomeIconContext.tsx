import React from "react";
import { createContext, useState } from "react";

export interface ServiceHomeIconContextType {
  descriptionItem: string | undefined;
  descriptionHandler: (description: string) => void;
}

export interface ServiceHomeIconContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ServiceHomeIconContext =
  createContext<ServiceHomeIconContextType | null>(null);

export const ServiceHomeProvider = ({
  children,
}: ServiceHomeIconContextProviderProps) => {
  const [descriptionItem, setDescriptionItem] = useState<string>();

  const descriptionHandler = (description: string) => {
    setDescriptionItem(description);
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
