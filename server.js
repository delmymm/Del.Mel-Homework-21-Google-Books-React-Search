const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/google-books",
);

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});