import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "store";
import { Provider } from "react-redux";
import axios from "axios";
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "helpers/axiosConfig";

axios.defaults.baseURL = process.env.apiBaseUrl;
axios.interceptors.request.use(onRequest, onRequestError);
axios.interceptors.response.use(onResponse, onResponseError);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className="min-h-screen bg-black pt-[68px]">
        {/* <Header /> */}

        <section>
          <Component {...pageProps} />

          {/* sidebar */}
          {/* <Sidebar /> */}
        </section>

        {/* <Footer /> */}
      </main>

      {/* <GlobalLoading /> */}
      {/* <Snackbar /> */}
    </Provider>
  );
}

export default MyApp;
