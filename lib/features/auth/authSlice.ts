import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action: PayloadAction<AuthUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    signOut(state) {
      state.user = null;
    },
    signUpStart(state) {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess(state, action: PayloadAction<AuthUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOut,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} = authSlice.actions;

export default authSlice.reducer;
