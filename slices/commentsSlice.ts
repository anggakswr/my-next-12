import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

export interface IComment {
  _id: string;
  sName: string;
  sComment: string;
}

type CommentsType = [] | IComment[];

// Define a type for the slice state
interface ICommentsState {
  value: CommentsType;
}

// Define the initial state using that type
const initialState: ICommentsState = {
  value: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setComments: (state, action: PayloadAction<CommentsType>) => {
      state.value = action.payload;
    },
    setNewComments: (state, action: PayloadAction<IComment>) => {
      state.value = [action.payload, ...state.value];
    },
    setOldComments: (state, action: PayloadAction<CommentsType>) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setComments, setNewComments, setOldComments } =
  commentsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentComments = (state: RootState) => state.comments.value;

export default commentsSlice.reducer;
