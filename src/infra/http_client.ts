import { IHttpClient } from '@/interfaces'

export class HttpClient implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const apiResponse = await fetch(url)
    const data = await apiResponse.json()

    return data
  }
}
