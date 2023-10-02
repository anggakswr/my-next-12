import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

export interface ICenterPopupObj {
  img: string;
  sTitle: string;
  sDesc: string;
  sZIndex?: string;
}

type CenterPopupType = ICenterPopupObj | null;

// Define a type for the slice state
interface ICenterPopupState {
  value: CenterPopupType;
}

// Define the initial state using that type
const initialState: ICenterPopupState = {
  value: null,
  // value: { type: "error", text: "Sorry bos" },
};

export const centerPopupSlice = createSlice({
  name: "centerPopup",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCenterPopup: (state, action: PayloadAction<CenterPopupType>) => {
      state.value = action.payload;
    },
  },
});

export const { setCenterPopup } = centerPopupSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentCenterPopup = (state: RootState) => state.centerPopup.value;

export default centerPopupSlice.reducer;
