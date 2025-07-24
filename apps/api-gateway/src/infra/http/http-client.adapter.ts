import axios, { AxiosInstance } from 'axios';
import { IHttpClient } from './http-client.interface';
import { apiGatewayConfig } from '../../config/config';

type ServiceName = 'auth' | 'user' | 'task';

const serviceURLs: Record<ServiceName, string> = {
  auth: apiGatewayConfig.serviceURLs.auth,
  user: apiGatewayConfig.serviceURLs.user,
  task: apiGatewayConfig.serviceURLs.task,
};

export class HttpClient implements IHttpClient {
  private static _instance: HttpClient;

  private constructor() {}

  public static instance(): HttpClient {
    if (!HttpClient._instance) {
      HttpClient._instance = new HttpClient();
    }
    return HttpClient._instance;
  }

  private getClient(serviceName: ServiceName): AxiosInstance {
    return axios.create({
      baseURL: `${serviceURLs[serviceName]}/api`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async post<D, R>(serviceName: ServiceName, url: string, data: D): Promise<R> {
    const client = this.getClient(serviceName);
    const res = await client.post(url, data);
    return res.data;
  }

  async get<R, D>(serviceName: ServiceName, url: string): Promise<R> {
    const client = this.getClient(serviceName);
    const res = await client.get<R>(url);
    return res.data;
  }

  async put<D, R>(
    serviceName: ServiceName,
    url: string,
    data: D,
    config?: object
  ): Promise<R> {
    const client = this.getClient(serviceName);
    const res = await client.put(url, data, config);
    return res.data;
  }

  async delete<R>(serviceName: ServiceName, url: string): Promise<R> {
    const client = this.getClient(serviceName);
    const res = await client.delete(url);
    return res.data;
  }
}
