import React from "react";
import Accordion from "./components/Accordion/Accordion";

export default function App() {
  const appStyle= {
    display:"flex",
    width:"100vw",
    justifyContent:"center",
  }
  return (
    <div style={appStyle}>
      <Accordion />
    </div>
  );
}
