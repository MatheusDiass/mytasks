import axios, { AxiosInstance } from 'axios';
import { IHttpClient } from './http-client.interface';

export class HttpClientAdapter implements IHttpClient {
  private static _instance: HttpClientAdapter;

  private constructor() {}

  public static instance(): HttpClientAdapter {
    if (!HttpClientAdapter._instance) {
      HttpClientAdapter._instance = new HttpClientAdapter();
    }
    return HttpClientAdapter._instance;
  }

  private getClient(): AxiosInstance {
    return axios.create({
      baseURL: `${process.env.USER_SERVICE_URL}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async post<D, R>(url: string, data: D): Promise<R> {
    const client = this.getClient();
    const res = await client.post(url, data);
    return res.data;
  }

  async get<R, D>(url: string): Promise<R> {
    const client = this.getClient();
    const res = await client.get<R>(url);
    return res.data;
  }

  async put<D, R>(url: string, data: D, config?: object): Promise<R> {
    const client = this.getClient();
    const res = await client.put(url, data, config);
    return res.data;
  }

  async delete<R>(url: string): Promise<R> {
    const client = this.getClient();
    const res = await client.delete(url);
    return res.data;
  }
}
