import { TextMessageType } from "../../types/sendMessage.types";

/**
 * Construye un mensaje de texto para enviar.
 * @param to El destinatario del mensaje.
 * @param body El cuerpo del mensaje de texto.
 * @returns TextMessageType Un objeto que representa un mensaje de texto.
 */
export const buildTextMessage = (to: string, body: string): TextMessageType => ({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to,
    type: "text",
    text: { preview_url: false, body }
});




