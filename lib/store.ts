import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const logger = (storeAPI: any) => (next: any) => (action: any) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("[redux] action:", action);
  }
  const result = next(action);
  if (process.env.NODE_ENV !== "production") {
    console.log("[redux] state:", storeAPI.getState());
  }
  return result;
};

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = makeStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
