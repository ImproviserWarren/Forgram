const express = require('express');
const cors = require('cors');
const connectDatabase = require('./utils/connectToDb.js');
const postRoute = require('./routes/postRoute.js');
const userRoute = require('./routes/userRoute.js');
const commentRoute = require("./routes/commentRoute.js");
const likePost = require("./routes/likeRoute.js");

const app = express();
const port = process.env.PORT || 8080; // Use PORT from environment or fallback to 8080

app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(likePost);

connectDatabase();

app.listen(port, () => {
    console.log(`Your backend server is running on port ${port}`);
});
