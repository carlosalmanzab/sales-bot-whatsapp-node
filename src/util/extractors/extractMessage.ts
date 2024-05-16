import { Contact, Message, WhatsappMessage, } from "../../types/receivedMessage.type";

export const extractData = (body: WhatsappMessage): {text: string, phoneNumber: string, messageId: string, name: string} | Error => {
    const text: string | undefined = extractMessage(body)?.[0].text?.body;
    const phoneNumber: string | undefined = extractMessage(body)?.[0].from;
    const messageId: string | undefined = extractMessage(body)?.[0].id;
    const name: string | undefined = extractContacts(body)?.[0].profile.name;

    if (!phoneNumber || !name || !text || !messageId){
        return Error("Error missing fields in message and contacts, from and name");
    }

    return {text, phoneNumber, messageId, name};
}


export const extractMessage = (message: WhatsappMessage): Message[] | undefined =>{
    if (message.entry && message.entry[0].changes) {
      const changes = message.entry[0].changes;
      for (const change of changes) {
          if (change.field === 'messages') {
            const value = change.value
            return value.messages;
          }
        }        
    }
    return undefined;
}

  export const extractContacts = (message: WhatsappMessage): Contact[] | undefined => {
    if (message.entry && message.entry[0].changes) {
        const changes = message.entry[0].changes;
        for (const change of changes) {
          if (change.field === 'messages') {
            const value = change.value;
            return value.contacts;
          }
        }
      }
      return undefined; 
  }