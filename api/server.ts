import api from "../netlify/functions/api.ts";
import ViteExpress from "vite-express";

ViteExpress.listen(api, 3000, () => console.log("Server is listening..."));

