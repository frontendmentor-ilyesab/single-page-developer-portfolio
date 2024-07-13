import express, {Router} from "express";
import serverless from "serverless-http";

const API_URL = process.env.GOOGLE_SHEETS_API_URL ?? "";
const API_ENDPOINT = process.env.API_ENDPOINT ?? ""

const api = express();

const router = Router();

api.use(express.json());

router.post(API_ENDPOINT, async (req, res) => {
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

api.use("/api/", router);


export const handler = serverless(api);
export default api;