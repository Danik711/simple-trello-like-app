import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UIState {
  focusedListName: string;
  focusedCardName: string;
  focusedCardIndex: string;
  focusedListIndex: string;
  showAddListPopup: boolean;
  showAddCardPopup: boolean;
  showEditListPopup: boolean;
  showEditCardPopup: boolean;
}

const initialState: UIState = {
  focusedListName: "",
  focusedCardName: "",
  focusedCardIndex: "",
  focusedListIndex: "",
  showAddListPopup: false,
  showAddCardPopup: false,
  showEditListPopup: false,
  showEditCardPopup: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    displayListPopup: (state) => {
      state.showAddListPopup = !state.showAddListPopup;
    },
    displayCardPopup: (state, action: PayloadAction<string[]>) => {
      state.focusedListName = action.payload[0];
      state.focusedListIndex = action.payload[1];
      state.showAddCardPopup = !state.showAddCardPopup;
    },
    displayEditListdPopup: (state, action: PayloadAction<string[]>) => {
      state.focusedListName = action.payload[0];
      state.focusedListIndex = action.payload[1];
      state.showEditListPopup = !state.showEditListPopup;
    },
    displayEditCardPopup: (state, action: PayloadAction<string[]>) => {
      state.focusedCardName = action.payload[0];
      state.focusedCardIndex = action.payload[1];
      state.focusedListIndex = action.payload[2];
      state.showEditCardPopup = !state.showEditCardPopup;
    },
    hidePopups: (state) => {
      state.focusedListName = "";
      state.focusedCardName = "";
      state.focusedCardIndex = "";
      state.focusedListIndex = "";
      state.showAddCardPopup = false;
      state.showAddListPopup = false;
      state.showEditListPopup = false;
      state.showEditCardPopup = false;
    },
    default: (state) => state,
  },
});

export const {
  displayCardPopup,
  displayListPopup,
  hidePopups,
  displayEditListdPopup,
  displayEditCardPopup,
} = uiSlice.actions;
export default uiSlice.reducer;
