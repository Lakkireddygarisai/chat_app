const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r= await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, firstname: username},
        {headers: {"private-key" : "83e820a8-4b2e-448c-8d3d-4814109dab98"}}

    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }

  
});

app.listen(3001);