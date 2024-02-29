import express from "express"
import cors from "cors"
import { connectDatabase } from "./src/database/db.js"
import routes from "./routes.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routes)

connectDatabase().then(() => {
  app.listen(port, () => 
    console.log(`🌐 Server and database are running on http://localhost:${port}`))
}).catch(e => console.log(e))