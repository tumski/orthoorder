import { ServiceProto } from "tsrpc-proto";
import type { ReqHello, ResHello } from "./Hello.js";

// The service protocol
export const serviceProto: ServiceProto<any> = {
  services: [
    {
      id: "Hello",
      type: "api",
      conf: {},
      // Need to use null for the schema since we're passing interfaces
      req: null as any,
      res: null as any,
    },
  ],
};
