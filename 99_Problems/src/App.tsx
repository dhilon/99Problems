import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
