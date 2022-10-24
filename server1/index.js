const express = require("express");
const App = express();
const port = process.env.PORT || 3000;

App.use(express.json());

App.listen(port, () => {
    console.log("Hello, World!")
}
);