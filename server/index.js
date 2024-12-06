const express = require('express')
const cors = require('cors')
const connectDatabase = require('./utils/connectToDb.js')
const postRoute = require('./routes/postRoute.js')
const userRoute = require('./routes/userRoute.js')
const commentRoute = require("./routes/commentRoute.js")
const likePost = require("./routes/likeRoute.js")
 
const app = express()
const port = process.env.port || 8080
app.use(express.json())
app.use(cors())
 
app.use(userRoute);
app.use(postRoute)
app.use(commentRoute)
app.use(likePost)

connectDatabase()
 
app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})
 