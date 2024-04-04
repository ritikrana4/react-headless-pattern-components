import useAccordion from "../../core/useAccordion";
import React from "react";

export default function Accordion() {
  const { expanded, getTogglerProps } = useAccordion();
  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
  };
  const accordionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #61c8f3",
    alignItems: "center",
    height: "33px",
  };
  const accordionContainerStyle = {
    width: "300px",
  };
  return (
    <div style={accordionContainerStyle}>
      <div style={accordionHeaderStyle}>
        <p>Accordion</p>
        <button
          style={buttonStyle}
          {...getTogglerProps({
            'data-testid':'toggle-button', 
            'aria-label':'accordion',
            onClick: () => {
              alert("Do you want to continue?");
            },
          })}
        >
          {expanded ? "⬇️" : "⬆️"}
        </button>
      </div>
      {expanded ? (
        <div
          style={{
            padding: "5px",
            border: "1px solid #61c8f3",
            borderTop: "none",
            height: "100px",
          }}
        >
          Hello, how are you. This is an accordion. It is expanded. Between how
          are you?
        </div>
      ) : null}
    </div>
  );
}
