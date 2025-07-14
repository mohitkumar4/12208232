const axios = require("axios");

const registerPayload = {
  email: "kumar398593@gmail.com",            
  name: "ram Krishna",                    
  mobileNo: "9999999999",                
  githubUsername: "mohitkumar4",   
  rollNo: "aa1bb",                        
  accessCode: "CZypQK"                    
};

async function register() {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/register",
      registerPayload
    );

    console.log("reg sucesfully!");
    console.log("Clint ID:", response.data.clientID);
    console.log("Clnt Secret:", response.data.clientSecret);
  } catch (error) {
    console.error("Reg fail:", error.response?.data || error.message);
  }
}

register();
