import type { ReqHello, ResHello } from "./protocols/Hello.js";

export interface ApiCallResult<T> {
  isSucc: boolean;
  res?: T;
  err?: {
    message: string;
    code?: string | number;
  };
}

export interface ApiDefinitions {
  Hello: {
    req: ReqHello;
    res: ResHello;
  };
}

export type ApiName = keyof ApiDefinitions;
