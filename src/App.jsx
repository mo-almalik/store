import { Provider } from "react-redux";
import store from "./store/store";
import { AppProvider } from "./context/AppContext";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider>
          <AppProvider>
            <RouterProvider router={Routers} />
          </AppProvider>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
