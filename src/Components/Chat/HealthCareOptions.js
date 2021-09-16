import React from "react";

import "./HealthCareOptions.css";

const HealthcareOptions = (props) => {
  const options = [
    {
      text: "Coughs",
      handler: props.actionProvider.handlecoughList,
      id: 1,
    },
    { text: "Chest Pain", handler: () => {}, id: 2 },
    { text: "Sore throat", handler: () => {}, id: 3 },
    { text: "Runny Nose", handler: () => {}, id: 4 },
    { text: "Initiate a Consult", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="health-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="health-options-container">{optionsMarkup}</div>;
};

export default HealthcareOptions;