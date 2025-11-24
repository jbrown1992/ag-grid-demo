
import { createBrowserRouter, RouterProvider } from 'react-router';
import CashflowGrid from './pages/cashflow'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import Summary from './pages/summary';
import { TickerContext, TickerProvider } from './context/tickerContext';
ModuleRegistry.registerModules([AllCommunityModule]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Summary />,
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
  return <TickerProvider>
    <RouterProvider router={router} />
  </TickerProvider>
}

export default App