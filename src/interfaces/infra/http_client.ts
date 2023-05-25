import { IApiResponse } from "./api_response";

export interface IHttpClient {
  get<T, P = any>(url: string, params?: P): Promise<IApiResponse<T>>
}
