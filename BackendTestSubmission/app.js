const express = require("express");
const axios = require("axios");
const shorturlRoutes = require("./routes/shorturlRoutes");

const { log, setAuthToken } = require("../LoggingMiddleware/logger"); 

const app = express();
app.use(express.json());


const CREDENTIALS = {
    "email" : "kumar398593@gmail.com",
    "name" : "ram Krishna",
    "rollNo" : "aa1bb",
    "accessCode" : "CZypQK",
    "clientID" : "e410e76e-a9c0-4a7b-8d05-d95a7e1d114b",
    "clientSecret" : "BMADbjmcVGXUBFMw"

};


async function authenticateAndStartServer() {
    try {
        const response = await axios.post(
            "http://20.244.56.144/evaluation-service/auth",
            {
                email: CREDENTIALS.email,
                name: CREDENTIALS.name,
                rollNo: CREDENTIALS.rollNo,
                accessCode: CREDENTIALS.accessCode,
                clientID: CREDENTIALS.clientID,
                clientSecret: CREDENTIALS.clientSecret
            }
        );

        const token = response.data["access_token"];
        setAuthToken(token); 
        console.log("Auth Sucesful.");

       
        await log("backend", "info", "config", "servr authenticating and starting");

        startServer();
    } catch (error) {
        console.error("auth fAil:", error.response?.data || error.message);
    }
}


function startServer() {
    
    app.get("/", async (req, res) => {
        await log("backend", "info", "route", "Health check ping received");
        res.send("url shrtner bckend is Running");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`srvr runnin in http://localhost:${PORT}`);
    });
}


authenticateAndStartServer();





app.use("/", shorturlRoutes);
