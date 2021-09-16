class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;}
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
    }
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("cough")) {
        this.actionProvider.cough()
      }
    }
  }
  
  export default MessageParser;