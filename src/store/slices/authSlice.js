import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    user: null,
    status: null,
    error: null,
    role: null,
  },
  reducers: {
    isAuth: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Обработка signUpRequest
    builder
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.data.role;
        state.user = action.payload;
        state.status = "succeeded";
        state.error = null;

      })
      .addCase(signUpRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.payload;
      })
      // Обработка signInRequest
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.role = action.payload.data.role;
        state.status = "succeeded";
       
      })
      .addCase(signInRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export const { isAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
