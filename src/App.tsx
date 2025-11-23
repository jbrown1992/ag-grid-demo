
import { createBrowserRouter, RouterProvider } from 'react-router';
import CashflowGrid from './pages/cashflow'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/cashflow",
    element: <CashflowGrid />
  },
  {
    path: "/income",
    element: <CashflowGrid />
  },
]);


const App = () => {
  return <RouterProvider router={router} />
}

export default App