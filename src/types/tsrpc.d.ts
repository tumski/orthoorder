declare module "tsrpc" {
  export interface ApiCall<Req, Res> {
    req: Req;
    succ(res: Res): void;
    error(message: string): void;
  }

  export class TsrpcServer {
    constructor(proto: any, options: any);
    autoImplementApi(path: string): Promise<void>;
    start(): Promise<void>;
    options: {
      port: number;
    };
  }
}

declare module "tsrpc-browser" {
  export class HttpClient {
    constructor(proto: any, options: any);
    callApi<Req, Res>(
      apiName: string,
      req: Req
    ): Promise<{
      isSucc: boolean;
      res: Res;
      err: { message: string };
    }>;
  }
}

declare module "tsrpc-proto" {
  export interface ServiceProto<T> {
    services: {
      id: string;
      type: string;
      conf: any;
      req: any;
      res: any;
    }[];
  }
}
