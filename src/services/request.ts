interface ApiFetchParams {
  url: string;
  options?: RequestInit;
}

type Func<T> = () => Promise<T>;

function handleResponse<R>(
  response: Response,
  contentType: string,
): Promise<R> {
  if (contentType.includes("text/html")) {
    return Promise.resolve<R>(response.text() as unknown as R);
  }
  return Promise.resolve<R>(response.json());
}

export async function apiFetch<T>({
  url,
  options = {},
}: ApiFetchParams): Promise<T> {
  const headers: HeadersInit = new Headers({
    ...options?.headers,
  });
  const response: Response = await fetch(url, {
    ...options,
    headers: headers,
  });
  const contentType: string | null = response.headers.get("content-type");

  if (
    !contentType?.includes("application/json") &&
    !contentType?.includes("text/html")
  ) {
    throw "Error: not json or html";
  }
  if (!response.ok) {
    const data = await response.json();
    if (data) throw data;
    else throw "Error request";
  }

  return handleResponse<T>(response, contentType);
}

export async function callApiFn<T>(func: Func<T>): Promise<T> {
  try {
    return await func();
  } catch (e) {
    throw e;
  }
}
