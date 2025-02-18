import { Provider } from "react-redux";
import store from "./store/store";
import { AppProvider } from "./context/AppContext";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/router";
import { ConfigProvider } from "antd";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <Provider store={store}>
       
        <AuthProvider>
          <AppProvider>
            <RouterProvider router={Routers} />
          </AppProvider>
          </AuthProvider>
       
      </Provider>
    </>
  );
}

export default App;
