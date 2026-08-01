export type HttpClientOptions = {
  baseUrl: string;
};

export class HttpClient {
  constructor(private readonly options: HttpClientOptions) {}

  async get<TResponse>(path: string): Promise<TResponse> {
    const response = await fetch(`${this.options.baseUrl}${path}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    return response.json() as Promise<TResponse>;
  }
}
