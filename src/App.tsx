
import { createBrowserRouter, RouterProvider } from 'react-router';
import CashflowGrid from './pages/cashflow'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import Summary from './pages/summary';
import { TickerProvider } from './context/TickerContext';
import { pages } from './routes/pages';
import IncomeStatemnt from './pages/incomeStatement';
ModuleRegistry.registerModules([AllCommunityModule]);

const router = createBrowserRouter([
  {
    path: pages.home,
    element: <Summary />,
  },
  {
    path: pages.incomeStatement,
    element: <IncomeStatemnt />
  },
  {
    path: pages.balanceSheet,
    element: <CashflowGrid />
  },
  {
    path: pages.cashFlow,
    element: <CashflowGrid />
  },
]);




const App = () => {
  return <TickerProvider>
    <RouterProvider router={router} />
  </TickerProvider>
}

export default App