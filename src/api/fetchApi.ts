export type ApiEndpoint = "infomations/getAll" | "users" | "memo/getAll"; // 必要に応じて追加可能

export class FetchApi {
  private _baseUrl: string;

  constructor() {
    this._baseUrl = import.meta.env.VITE_API_PATH;
  }

  async fetchApi<T>(endpoint: ApiEndpoint): Promise<T> {
    const res = await fetch(`${this._baseUrl}/${endpoint}`);
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    const value = await res.json()

    return value as T;
  }
}
