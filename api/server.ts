import express from "express";
import ViteExpress from "vite-express";

const API_URL = process.env.GOOGLE_SHEETS_API_URL ?? "https://NON_EXISTANT/";

const app = express();

app.use(express.json());

app.post("/submitFormData", async (req, res) => {
  const requestData = req.body;
  const data = {
    id: "INCREMENT",
    date: "DATETIME",
    ...requestData,
  };
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: data,
    }),
  });
  res.status(response.status).json(await response.json());
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
