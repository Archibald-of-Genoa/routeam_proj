import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    searchRepositories: builder.query({
      query: ({ searchTerm, perPage = 10, page = 1 }) =>
        `search/repositories?q=${encodeURIComponent(
          searchTerm
        )}&per_page=${perPage}&page=${page}`,
    }),
  }),
});

export const { useSearchRepositoriesQuery } = githubApi;
