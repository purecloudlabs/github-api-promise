import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import _ from "lodash";
import config from "./config";
import { getLogger } from "log4js";
const log = getLogger();

class Request {
  public requestCount = 0;
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: config.host,
    });
  }

  private logRequestSucess(res: any, message?: string): void {
    if (config.debug !== true) {
      return;
    }

    log.debug(
      "[" +
        res.statusCode +
        "]" +
        "[" +
        res.req.method +
        " " +
        res.req.path +
        "] " +
        (message ? message : "")
    );
    log.debug(
      `Requests remaining: ${res.headers["x-ratelimit-remaining"]}/${
        res.headers["x-ratelimit-limit"]
      }, reset at ${new Date(res.headers["x-ratelimit-reset"] * 1000)}`
    );
  }

  public assembleQueryParams(params: any, paramNames: string[]) {
    if (!params) return "";

    let s = "";
    paramNames.forEach((paramName: string) => {
      if (params[paramName])
        s += `&${paramName}=${encodeURIComponent(params[paramName])}`;
    });

    return _.trimStart(s, "&");
  }

  // Returns only the response body
  public async standardRequest(
    url: string,
    method: string = "get",
    body: any = undefined
  ) {
    try {
      return await this.extendedRequest(url, method, body);
    } catch (err) {
      throw err;
    }
  }

  // Returns an object with additional information about the request/response
  public extendedRequest(
    url: string,
    method = "get",
    body: any = undefined
  ): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        let req: Promise<AxiosResponse>;
        switch (method.toLowerCase().trim()) {
          case "post": {
            req = this.request.post(url, body, {
              headers: {
                Authorization: `token ${config.token}`,
              },
            });
            break;
          }
          case "patch": {
            req = this.request.patch(url, body, {
              headers: {
                Authorization: `token ${config.token}`,
              },
            });
            break;
          }
          case "put": {
            req = this.request.put(url, body, {
              headers: {
                Authorization: `token ${config.token}`,
              },
            });
            break;
          }
          case "delete": {
            req = this.request.delete(url, {
              headers: {
                Authorization: `token ${config.token}`,
              },
            });
            break;
          }
          case "get": {
            req = this.request.get(url, {
              headers: {
                Authorization: `token ${config.token}`,
              },
            });
            break;
          }
          default: {
            throw new Error(`Unsupported HTTP verb: ${method}`);
          }
        }

        this.requestCount++;

        // Set standard stuff and handle response
        req
          .then((res) => {
            this.logRequestSucess(res.data);
            resolve(res.data);
          })
          .catch((err: AxiosError) => {
            // TODO: handle rate limiting (github sends a 403, not a 429)
            // https://developer.github.com/v3/#rate-limiting
            log.error(err.response.data);
            reject({
              status: err.response.status,
              errMessage: err.response.data,
            });
          });
      } catch (err) {
        log.error(err);
        reject(err);
      }
    });
  }
}

let req = new Request();

export default req;
