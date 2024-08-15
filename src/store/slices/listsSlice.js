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
    updateList: (state, action) => {
      const { cardId, listId, newTitle } = action.payload;

      const card = state.card.find((item) => item.id === cardId);
      if (card) {
        const listItem = card.list.find((item) => item.id === listId);
        if (listItem) {
          listItem.title = newTitle;
        }
      }
    },
    updateTitle: (state, action) => {
      const { newTitle, cardId } = action.payload;
      console.log("cardId: ", cardId);
      console.log("newTitle: ", newTitle);
      const card = state.card.find((item) => item.id === cardId);
      if (card) {
        card.title = newTitle;
      }
    },
    addCopyCard: (state, action) => {
      const originalCard = state.card.find(
        (item) => item.id === action.payload
      );
      if (originalCard) {
        const newCard = {
          ...originalCard,
          id: Date.now(),
          title: `${originalCard.title} Copy`,
          list: originalCard.list.map((listItem) => ({
            ...listItem,
            id: Date.now() + Math.random(),
          })),
        };
        state.card.push(newCard);
      }
    },
  },
});

export const {
  addCard,
  addLists,
  handleOpenCard,
  handleCloseCard,
  deleteCard,
  updateList,
  updateTitle,
  addCopyCard,
} = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
