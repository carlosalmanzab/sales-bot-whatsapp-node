import express from "express"
import morgan from "morgan"
import HelloRouter from "./routes/hello"
import WebhookRouter from "./routes/webhook"

const app = express()

app.use(express.json()) // transform request.body to json
app.use(morgan("common"))

const PORT = 3000


app.use("/webhook", WebhookRouter)

app.use("/hello", HelloRouter)

app.listen(PORT, () => {
    console.log(`bot is running on port ${PORT}`)
})