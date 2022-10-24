const crud = require("../../crud");
const tableName = "Users";

async function userRegister(data = {
    CPF: "",
    Name: "",
    Password: ""
}) {
    if (!data.CPF) {
        return { error: "0001", message: "Its necessary fill all requisition parameters!", necessaryFields: ["CPF"] }
    }

    if (!data.Name) {
        return { error: "0001", message: "Its necessary fill all requisition parameters!", necessaryFields: ["Name"] }
    }

    if (!data.Password) {
        return { error: "0001", message: "Its necessary fill all requisition parameters!", necessaryFields: ["Password"] }
    }

    const user = await crud.save(tableName, undefined, data);
    return (user);
}

async function getUsers() {
    return await crud.get("Users");
}

async function userLogin(data = {
    CPF: "",
    Password: ""
}) {
    if (!data.CPF) {
        return { error: "0001", message: "Its necessary fill all requisition parameters!", necessaryFields: ["CPF"] }
    }

    if (!data.Password) {
        return { error: "0001", message: "Its necessary fill all requisition parameters!", necessaryFields: ["Password"] }
    }

    const user = await crud.getWithFilter(tableName, "CPF", "==", data.CPF);
    if (user.length > 0) {
        if (user[0].Password === data.Password) {
            const userForReturn = {
                ...user[0],
                Password: undefined
            }
            console.log(userForReturn);
            return {"user": userForReturn, "message":"User logged!"};
        } else {
            return { error: "0002", message: "Password is incorrect!" }
        }
    } else {
        return { error: "0003", message: "User not found!" }
    }
}

module.exports = {
    userRegister,
    getUsers,
    userLogin
}