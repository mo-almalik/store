import { Provider } from "react-redux";
import store from "./store/store";
import { AppProvider } from "./context/AppContext";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/router";
import { ConfigProvider } from "antd";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider>
          <AppProvider>
            <RouterProvider router={Routers} />
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
          </AppProvider>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
