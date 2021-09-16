import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './Chat.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function Chat() {
  return (
    <div className="chat">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}
export default Chat;