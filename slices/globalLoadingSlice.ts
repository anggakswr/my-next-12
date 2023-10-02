import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

type GlobalLoadingType = boolean;

// Define a type for the slice state
interface IGlobalLoadingState {
  value: GlobalLoadingType;
}

// Define the initial state using that type
const initialState: IGlobalLoadingState = {
  value: false,
};

export const globalLoadingSlice = createSlice({
  name: "globalLoading",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGlobalLoading: (state, action: PayloadAction<GlobalLoadingType>) => {
      state.value = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentGlobalLoading = (state: RootState) =>
  state.globalLoading.value;

export default globalLoadingSlice.reducer;
