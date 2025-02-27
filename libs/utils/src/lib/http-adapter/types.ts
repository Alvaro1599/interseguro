export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RequestOptions {
  headers?: Record<string, string>;
  body?: any;
}
