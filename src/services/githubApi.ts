import {createApi, fetchBaseQuery} from  '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
    reducerPath: "githubApi",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        searchRepositories: builder.query({
            query: (searchTerm) => `search/repositories?q=${encodeURIComponent(searchTerm)}`,
        })
    })

})

export const {useSearchRepositoriesQuery} = githubApi;