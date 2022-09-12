import "../../styles/globals.css";
import Layout from "../../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../app/store";
import store from "../app/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
