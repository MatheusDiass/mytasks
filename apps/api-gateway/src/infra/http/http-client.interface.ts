export interface IHttpClient {
  post<D, R>(serviceName: string, url: string, data: D): Promise<R>;
  get<R, D>(serviceName: string, url: string): Promise<R>;
  put<D, R>(
    serviceName: string,
    url: string,
    data: D,
    config?: object
  ): Promise<R>;
  delete<R>(serviceName: string, url: string): Promise<R>;
}
