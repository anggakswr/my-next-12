import { setSnackbar } from "slices/snackbarSlice";
import store from "store";

const vCopy = (sString: string) => {
  void (async () => await navigator.clipboard.writeText(sString))();

  store.dispatch(setSnackbar({ type: "success", text: "Berhasil disalin" }));
};

export default vCopy;
