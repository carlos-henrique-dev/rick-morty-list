import { IHttpClient } from '@/interfaces'

export class HttpClient implements IHttpClient {
  async get<T>(url: string, params: any): Promise<T> {
    const _url = url + '?' + new URLSearchParams(params)

    const apiResponse = await fetch(_url)
    const data = await apiResponse.json()

    return data
  }
}
