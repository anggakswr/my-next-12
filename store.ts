import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "slices/snackbarSlice";
import centerPopupReducer from "slices/centerPopupSlice";
import globalLoadingReducer from "slices/globalLoadingSlice";
import commentsReducer from "slices/commentsSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    centerPopup: centerPopupReducer,
    globalLoading: globalLoadingReducer,
    comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
