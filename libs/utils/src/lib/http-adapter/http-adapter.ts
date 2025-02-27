import { HttpMethod, RequestOptions } from './types';

export class HttpAdapter {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    method: HttpMethod,
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const { headers = {}, body } = options;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error during fetch operation:', error);
      throw error;
    }
  }
  public async post<T>(
    endpoint: string,
    body: any,
    options: RequestOptions = {}
  ): Promise<T> {
    console.log('POST', endpoint, body, options);
    return this.request<T>('POST', endpoint, { ...options, body });
  }
}

export default HttpAdapter;
