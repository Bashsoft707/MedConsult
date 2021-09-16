import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HealthcareOptions from "./HealthCareOptions";
import LinkList from "./LinkList";

const config = {
  botName: "MedicConsult Bot",
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What can I help you 		with?", {
      widget: "healthcareOptions",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "healthcareOptions",
    	widgetFunc: (props) => <HealthcareOptions {...props} />,
     },
     {
      widgetName: "coughLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Dry",
           
            id: 1,
          },
          {
            text: "Wet",
            
            id: 2,
          },
        ],
        },

        widgetName: "chestpainLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Centre",
           
            id: 1,
          },
          {
            text: "Left Side",
            
            id: 2,
          },
          {
            text: "Right Side",

            id: 3
          },
        ],
        },
    },
 ],

 
  botMessageBox: {
    backgroundColor: "#376B7E",
  },
  chatButton: {
    backgroundColor: "#376B7E",
  },
 
}




export default config