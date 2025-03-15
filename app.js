//Pacchetti da importare
import express from "express"

//Impostazione di express e la porta del server
const app = express();
const port = process.env.SERVER_PORT || 3000;

//Attivazione del server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });