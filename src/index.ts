import express from "express"
import WebhookRouter from "./routes/webhook"

const app = express()

app.use(express.json()) // transform request.body to json

const PORT = 3000

app.use("/webhook", WebhookRouter)

app.listen(PORT, () => {
    console.log(`bot is running on port ${PORT}`)
})