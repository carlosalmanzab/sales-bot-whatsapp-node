import { markRead } from "../util/actions/actionMessage";
import { buildTextMessage } from "../util/builders/sendMessageBuilders";

export const chatflow = (message: string, phoneNumber: string , messageId: string , name: string) => {
    const list = [];
    
    list.push(markRead(messageId));

    if (/hola/i.test(message)) {
        const textMessage = buildTextMessage(phoneNumber, "hola el bot esta funcionando");
        list.push(textMessage);
    }
    return list;
}