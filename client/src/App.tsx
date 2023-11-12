import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/home_page"
import Auth from "./pages/authentication/auth_page"


const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
