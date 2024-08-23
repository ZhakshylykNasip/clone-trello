import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getAllRequest = createAsyncThunk(
  "lists/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/cards");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const postCardsRequest = createAsyncThunk(
  "lists/postCards",
  async (card, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post("/cards", card);
      dispatch(getAllRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const patchCardTitleRequest = createAsyncThunk(
  "lists/patchCardTitle",
  async ({ title, cardId }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/cards/${cardId}`, { title });
      dispatch(getAllRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const patchListRequest = createAsyncThunk(
  "lists/patchList",
  async ({ list, id }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/cards/${id}`, { list });
      dispatch(getAllRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);




export const patchListTitleRequest = createAsyncThunk(
  "lists/patchListTitle",
  async ({ list, id }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`/cards/${id}`, { list });
      dispatch(getAllRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteCardRequest = createAsyncThunk(
  "lists/deleteCard",
  async (cardId, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/cards/${cardId}`);
      dispatch(getAllRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
