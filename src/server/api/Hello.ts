import { ApiCall } from "tsrpc";
import { ReqHello, ResHello } from "../../shared/protocols/Hello.js";

export async function Hello(call: ApiCall<ReqHello, ResHello>) {
  const name = call.req.name || "World";

  call.succ({
    message: `Hello, ${name}!`,
    time: new Date(),
  });
}
