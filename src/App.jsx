
import { Provider } from 'react-redux'
import store from "./store/store"
import { AppProvider } from './context/AppContext'
import { RouterProvider } from 'react-router-dom'
import Routers from './router/router'

function App() {
 

  return (
    <>
   
    <Provider store={store}>
    <AppProvider>
    <RouterProvider router={Routers} />
    </AppProvider>
    </Provider>
    </>
  )
}

export default App
