import { store } from "../redux/store";

export type CardType = {
  card_id: string;
  card_name: string;
};

export type ListType = {
  list_id: string;
  list_name: string;
  cards: CardType[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
