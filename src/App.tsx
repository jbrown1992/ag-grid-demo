import CashflowGrid from './pages/cashflow'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

const App = () => {
  return <CashflowGrid />
}

export default App
