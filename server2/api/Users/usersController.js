const express = require("express");
const routes = express.Router();

const usersHandler = require("./usersHandler");

routes.post("/register", async (req, res) => {
    const data = req.body;
    res.json(await usersHandler.userRegister(data));
});

routes.get("/", async (req, res) => {
    res.json(await usersHandler.getUsers());
})

routes.post("/login", async (req, res) => {
    const data = req.body;
    res.json(await usersHandler.userLogin(data));
});



module.exports = routes;