import { HttpClient } from "tsrpc-browser";
import { serviceProto } from "../shared/protocols/serviceProto.js";

// Create client
export const client = new HttpClient(serviceProto, {
  server: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  json: true,
});
