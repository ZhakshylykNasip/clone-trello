import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    card: [],
    isOpenCard: false,
  },
  reducers: {
    addCard: (state, action) => {
      state.card.push(action.payload);
    },
    addLists: (state, action) => {
      const { listValue, id } = action.payload;

      const existingCard = state.card.find((item) => item.id === id);
      if (existingCard) {
        const newListItem = {
          id: Date.now(),
          title: listValue,
        };
        existingCard.list.push(newListItem);
      }
    },
    handleOpenCard: (state) => {
      state.isOpenCard = true;
    },
    handleCloseCard: (state) => {
      state.isOpenCard = false;
    },
    deleteCard: (state, action) => {
      state.card = state.card.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addCard,
  addLists,
  handleOpenCard,
  handleCloseCard,
  deleteCard,
} = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
