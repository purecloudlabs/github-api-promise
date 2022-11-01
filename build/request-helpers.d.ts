declare class Request {
    requestCount: number;
    private request;
    constructor();
    private logRequestSucess;
    assembleQueryParams(params: any, paramNames: string[]): any;
    standardRequest(url: string, method?: string, body?: any): Promise<unknown>;
    extendedRequest(url: string, method?: string, body?: any): Promise<unknown>;
}
declare let req: Request;
export default req;
