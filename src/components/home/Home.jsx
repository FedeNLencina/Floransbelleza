import React from "react";
import { Hero } from "../hero/Hero";
import { AboutHome } from "../aboutHome/AboutHome";
import { ServiceHome } from "../serviceHome/ServiceHome";
import { ServiceHomeProvider } from "../../context/ServiceHomeIconContext";

export function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ServiceHomeProvider>
        <ServiceHome />
      </ServiceHomeProvider>
    </>
  );
}
