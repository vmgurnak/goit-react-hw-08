import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogoutUser,
} from './operations';

const INITIAL_STATE = {
  user: null,
  token: null, // LOCALSTORAGE PERSIST ✅
  isSignedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  // Name slice
  name: 'auth',
  // Starter state reducer
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })

      //   REFRESH
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.userData = action.payload;
        state.isSignedIn = true;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiLogoutUser.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiLogoutUser.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

// export const selectUserData = (state) => state.auth.user;
// export const selectUserToken = (state) => state.auth.token;
// export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
// export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
// export const selectUserIsLoading = (state) => state.auth.isLoading;
// export const selectUserIsError = (state) => state.auth.isError;

// Reducer
export const authReducer = authSlice.reducer;
