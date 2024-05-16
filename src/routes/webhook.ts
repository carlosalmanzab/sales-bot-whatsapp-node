import express, { text } from "express";
import morgan from "morgan";
import { chatflow } from '../services/flowService';

import { WhatsappMessage } from '../types/receivedMessage.type';
import { extractContacts, extractData, extractMessage } from "../util/extractors/extractMessage";

const router = express.Router();

router.use(morgan("dev"));

const TOKEN = process.env.TOKEN || "";
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN || "";
const WHATSAPP_URL = process.env.WHATSAPP_URL || "";

router.get("/", (req, res) => {
    try {
        const token = req.body("hub.verify_token");
        const challenge = req.body("hub.challenge")
        
        if (token !== TOKEN || challenge == undefined) {
            return res.status(403).send("Incorrect Token");
        } 
        return res.status(200).send(challenge)

    } catch (error) {
        return res.status(403).send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const messageData = extractData(req.body);

        if (messageData instanceof Error) throw messageData.message;
        
        const {text, phoneNumber, messageId, name} = messageData;

        await chatflow(text, phoneNumber, messageId, name).forEach(element => {
            sentMessage(element)
                .then(sent => {
                    if (sent.ok) res.status(200).send(sent);
                })
                .catch(error => {
                    console.error(`Error sending message ${error}`);
                })
        });

    } catch (error) {
        res.status(500).send(`Internal server error`);
    }
})

const sentMessage = async (data: Object) => {
      return await fetch(WHATSAPP_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WHATSAPP_TOKEN}`
          },
        body: JSON.stringify(data)
      });
}

export default router;


