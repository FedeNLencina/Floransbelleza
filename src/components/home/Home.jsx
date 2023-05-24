import React from "react";
import { Hero } from "../hero/Hero";
import { AboutHome } from "../aboutHome/AboutHome";
import { ServiceHome } from "../serviceHome/ServiceHome";

export function Home() {
  return (
    <>
      <Hero />
      <AboutHome />
      <ServiceHome />
    </>
  );
}
