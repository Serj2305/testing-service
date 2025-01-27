import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Tests } from './pages/Tests/index.tsx'
import { Test } from './pages/Test/index.tsx'
import { Paths } from './paths.ts'
import { Admin } from './pages/Admin/index.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Tests/>
  },
  {
    path: `${Paths.test}/:id`,
    element: <Test/>
  },
  {
    path: Paths.admin,
    element: <Admin/>
  }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore()

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
