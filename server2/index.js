const express = require("express");
const App = express();
const route = express.Router();
const routes = require("./api/routes");
const port = process.env.PORT || 3000;

App.use(express.json());
App.use(route);

route.get("/", (req, res) => {
    res.send("Learning Docker")
});

route.use("/api", routes);

App.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);