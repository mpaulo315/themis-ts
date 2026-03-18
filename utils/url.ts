export const parseAPIURL = (
    baseURL: string,
    path: string[],
    query?: Record<string, any>,
) => {
    const url = new URL(baseURL);
    url.pathname = ["api", "v2", ...path].join("/");

    if (query) {
        url.search = new URLSearchParams(query).toString();
    }

    return url.toString();
};
