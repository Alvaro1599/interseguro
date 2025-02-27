import { RequestOptions } from './types';
export declare class HttpAdapter {
    private readonly baseUrl;
    constructor(baseUrl: string);
    private request;
    post<T>(endpoint: string, body: any, options?: RequestOptions): Promise<T>;
}
export default HttpAdapter;
