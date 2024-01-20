import { CardType, ListType } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TrelloState {
  listArray: ListType[];
}

const initialState: TrelloState = {
  listArray: [
    {
      cards: [
        {
          card_id: "0",
          card_name: "Set up Jira",
        },
      ],
      list_name: "To do",
      list_id: "0",
    },
  ],
};

export const trelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addNewList: (state, action: PayloadAction<ListType>) => {
      state.listArray = [...state.listArray, action.payload];
    },
    addNewCard: (state, action: PayloadAction<string[]>) => {
      // Index in the listArray to be updated
      const focusedListIndex = parseInt(action.payload[0]);

      // List to be updated
      const focusedList = state.listArray[focusedListIndex];

      const newCard: CardType = {
        card_name: action.payload[1],
        card_id: focusedList.cards.length.toString(),
      };

      focusedList.cards.push(newCard);

      state.listArray[focusedListIndex].cards = [...focusedList.cards];
    },
    updateList: (state, action: PayloadAction<string[]>) => {
      // Index in the listArray to be updated
      const focuedListIndex = parseInt(action.payload[0]);

      // New name of the list
      const newListName = action.payload[1];
      const focusedList = state.listArray[focuedListIndex];

      state.listArray[focuedListIndex] = {
        ...focusedList,
        list_name: newListName,
      };
    },
    updateCard: (state, action: PayloadAction<string[]>) => {
      // Index of the list that has a focused card
      const focuedListIndex = parseInt(action.payload[0]);

      // Index of the focused card
      const focusedCardIndex = parseInt(action.payload[1]);

      // Index of the list to move a focused card to
      const newCardPosition = action.payload[3];

      const focusedList = state.listArray[focuedListIndex];
      const focusedCard = focusedList.cards[focusedCardIndex];

      // Check if a user wants to update card name
      const newCardName = action.payload[2]
        ? action.payload[2]
        : focusedCard.card_name;

      // Check if a user wants to move a card
      if (newCardPosition !== "") {
        // Copy of the old state
        const oldStateListArray = state.listArray;

        // Parse new card position
        const newPosition = parseInt(newCardPosition);
        const listWithNewCard = state.listArray[newPosition];
        const oldCardsList = focusedList.cards;
        const newCardsList = listWithNewCard.cards;

        // Remove moved card
        oldCardsList.splice(focusedCardIndex, 1);

        // Add moved card to the new list
        newCardsList.push({
          card_id: newCardsList.length.toString(),
          card_name: newCardName,
        });

        // Update card_indexes
        oldCardsList.forEach(
          (card, index) => (card.card_id = index.toString())
        );

        // Update copies
        listWithNewCard.cards = newCardsList;
        focusedList.cards = oldCardsList;

        // Update old copy
        oldStateListArray[focuedListIndex] = focusedList;
        oldStateListArray[newPosition] = listWithNewCard;

        state.listArray = [...oldStateListArray];
      } else {
        focusedCard.card_name = newCardName;
        state.listArray[focuedListIndex].cards[focusedCardIndex] = {
          ...focusedCard,
        };
      }
    },
    default: (state) => state,
  },
});

export const { addNewList, addNewCard, updateList, updateCard } =
  trelloSlice.actions;
export default trelloSlice.reducer;
