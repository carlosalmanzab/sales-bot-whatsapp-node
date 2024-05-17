
export const markRead = (messageId: string) => ({
    messaging_product: "whatsapp",
    status:  "read",
    messageId
})