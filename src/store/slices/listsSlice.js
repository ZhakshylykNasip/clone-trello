import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCardRequest,
  getAllRequest,
  patchCardTitleRequest,
  patchListRequest,
  patchListTitleRequest,
  postCardsRequest,
} from "../thunks/listsThunk";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    card: [],
    isOpenCard: false,
    isLoading: false,
  },
  reducers: {
    handleOpenCard: (state) => {
      state.isOpenCard = true;
    },
    handleCloseCard: (state) => {
      state.isOpenCard = false;
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
  extraReducers: (builder) => {
    //Get Request
    builder
      .addCase(getAllRequest.fulfilled, (state, action) => {
        state.card = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRequest.rejected, (state) => {
        state.isLoading = false;
      });
    // Post Request
    builder
      .addCase(postCardsRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postCardsRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCardsRequest.rejected, (state) => {
        state.isLoading = false;
      });
    // Delete Request
    builder
      .addCase(deleteCardRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCardRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCardRequest.rejected, (state) => {
        state.isLoading = false;
      });
    // Update list Request
    builder
      .addCase(patchListRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(patchListRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchListRequest.rejected, (state) => {
        state.isLoading = false;
      });
    // Update Card title Request
    builder
      .addCase(patchCardTitleRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(patchCardTitleRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchCardTitleRequest.rejected, (state) => {
        state.isLoading = false;
      });
    // Update CardList title Request
    builder
      .addCase(patchListTitleRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(patchListTitleRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchListTitleRequest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  handleOpenCard,
  handleCloseCard,
  updateList,
  updateTitle,
  addCopyCard,
} = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
