import serverless from "serverless-http";
import api from "@/api/server.ts";


export const handler = serverless(api);