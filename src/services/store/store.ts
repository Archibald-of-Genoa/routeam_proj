import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { githubApi } from "../githubApi";
import commentsReducer from '../slices/commentsSlice'


const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  comments: commentsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(githubApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']