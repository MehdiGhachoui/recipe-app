import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/home_page"
import Auth from "./pages/authentication/auth_page"
import RequireAuth from "./hoc/requireAuth"
import AuthProvider from "./context/auth/AuthProvider"
import { QueryClient, QueryClientProvider } from "react-query"


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
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
