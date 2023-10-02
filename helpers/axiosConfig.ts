import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { setGlobalLoading } from "slices/globalLoadingSlice";
import { setSnackbar } from "slices/snackbarSlice";
import store from "store";
import Cookies from "universal-cookie";
import sUpperCaseFirstLetter from "./sUpperCaseFirstLetter";

// cookie
const cookies = new Cookies();

export const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // show global loading
  store.dispatch(setGlobalLoading(true));

  return config;
};

export const onRequestError = async (
  error: AxiosError
): Promise<AxiosError> => {
  // console.error(`[request error] [${JSON.stringify(error)}]`);

  store.dispatch(
    setSnackbar({ type: "error", text: "Maaf, terjadi kesalahan" })
  );

  // hide global loading
  store.dispatch(setGlobalLoading(false));

  return await Promise.reject(error);
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);

  // hide global loading
  store.dispatch(setGlobalLoading(false));
  interface IResponseError2 {
    status: string;
    message: string;
    code: string;
  }

  const oData = response.data;
  const sDefaultError = "Maaf, terjadi kesalahan";

  if (typeof oData === "object") {
    const { status, message } = oData as IResponseError2;

    if (status === "error") {
      store.dispatch(
        setSnackbar({
          type: "error",
          text: sUpperCaseFirstLetter(message ?? sDefaultError),
        })
      );
    }
  }

  return response;
};

export const onResponseError = async (
  error: AxiosError
): Promise<AxiosError> => {
  // console.error(`[error] [${JSON.stringify(error?.response?.data)}]`);

  interface IResponseError {
    statusCode: number;
    message: string;
    error: string;
  }

  const oData = error.response?.data;
  let sDefaultError = "Maaf, terjadi kesalahan";

  if (typeof oData === "object") {
    const { statusCode, message } = oData as IResponseError;

    if (statusCode === 401) {
      cookies.set("sPIT", "", { path: "/" });

      // if (window) {
      //   window.location.href = "/login";
      // }
    } else {
      if (message) {
        if (typeof message === "string") {
          sDefaultError = message;
        } else {
          sDefaultError = message[0];
        }
      }
    }
  }

  store.dispatch(
    setSnackbar({ type: "error", text: sUpperCaseFirstLetter(sDefaultError) })
  );

  // hide global loading
  store.dispatch(setGlobalLoading(false));

  return await Promise.reject(error);
};
