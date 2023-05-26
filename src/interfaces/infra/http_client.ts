import { IApiResponse } from "./api_response";

export interface IHttpClient {
  get<T, P =  Record<string, any>>(url: string, params?: P): Promise<IApiResponse<T>>
}
