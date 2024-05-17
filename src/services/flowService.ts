import { buildTextMessage } from "../util/builders/sendMessageBuilders";

export const chatflow = (message: string, phoneNumber: string , messageId: string , name: string) => {
    const list = [];
    console.log("mensaje del remitente: ", message);
    //add mark read
    //add to list
    //add time sleep
    if (/hola/i.test(message)) {
        const textMessage = buildTextMessage(phoneNumber, "hola el bot esta funcionando");
        list.push(textMessage);
    }
    return list;
}