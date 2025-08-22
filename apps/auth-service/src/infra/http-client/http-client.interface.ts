export interface IHttpClient {
  post<D, R>(url: string, data: D): Promise<R>;
  get<R>(url: string): Promise<R>;
  put<D, R>(url: string, data: D, config?: object): Promise<R>;
  delete<R>(url: string): Promise<R>;
}
