import { TsrpcServer } from "tsrpc";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { serviceProto } from "./src/shared/protocols/serviceProto.js";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the server
const server = new TsrpcServer(serviceProto, {
  port: 3001,
  // Remove this in production
  cors: true,
  json: true,
});

// Initialize before server start
async function init() {
  // Auto implement APIs
  await server.autoImplementApi(path.resolve(__dirname, "src/server/api"));

  // TODO: Custom initialization, e.g. database connection

  // Server start
  await server.start();

  console.log(
    `TSRPC Server started at http://localhost:${server.options.port}`
  );
}

// Entry function
init().catch((e) => {
  console.error(e);
  process.exit(1);
});
