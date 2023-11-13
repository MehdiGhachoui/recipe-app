import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/home_page"
import Auth from "./pages/authentication/auth_page"
import RequireAuth from "./hoc/requireAuth"
import AuthProvider from "./context/auth/AuthProvider"


const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element:
      <RequireAuth>
        <Home />
      </RequireAuth>
  }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  )
}

export default App
