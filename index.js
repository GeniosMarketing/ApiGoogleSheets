const { urlencoded } = require("express");
const express = require("express");
const {google} = require("googleapis");
//const keys = require('./keys.json');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index");
  });

app.post("/", async (req, res)=>{
  const { nombre, telefono, correo, metros, precio, total, constancia, empresa, rtn, pago, saldo, destinatario, estado1, responsable} = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

   // Create client instance for auth
   const client = await auth.getClient();


   // Instance of Google Sheets API
   const googleSheets = google.sheets({ version: "v4", auth: client });
   const spreadsheetId = "1qr606M1U3pD_wqujj00Q95-uscmV4iA6sPcyPSnuUTQ";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

   // Get Rows from spreadcheets
   const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Registro!A:N",
   });

   // Escribir en las Filas de la hoja de calculo
   await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Registro!A:N",
    valueInputOption: "USER_ENTERED",
    resource: {
        values: [
            [nombre, telefono, correo, metros, precio, total, constancia, empresa, rtn, pago, saldo, destinatario, estado1, responsable]],
    },
   });



   res.sendFile(__dirname + '/respuesta.html');
});

app.listen(3000, (req, res) => console.log("Escuchando en el puerto 3000"));