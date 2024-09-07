import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Error,
  Landing,
  Login,
  Notifications,
  Adjustmentorders,
  ChargableIssues,
  CostPegTransfers,
  ExceptionHandling,
  ItemsShelfLife,
  MaterialIntakeLogs,
  ProjectIssues,
  ProjectReturns,
  QualityInspections,
  QualityReturns,
  RoyalitySlips,
  SubConVault,
  SurplusMaterial,
  TransferOrders,
  WarehouseReciepts,
  Profile,
  SingleMaterialIntakeLog,
} from './pages'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'adjustment-orders',
        element: <Adjustmentorders />,
      },
      {
        path: 'chargable-issues',
        element: <ChargableIssues />,
      },
      {
        path: 'cost-peg-transfers',
        element: <CostPegTransfers />,
      },
      {
        path: 'exception-handling',
        element: <ExceptionHandling />,
      },
      {
        path: 'items-shelf-life',
        element: <ItemsShelfLife />,
      },
      {
        path: 'material-intake-logs',
        element: <MaterialIntakeLogs />,
        // children: [
        //   {
        //     index: true,
        //     element
        //   }
        // ]
      },
      {
        path: 'material-intake-logs/:id',
        element: <SingleMaterialIntakeLog />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'project-issues',
        element: <ProjectIssues />,
      },
      {
        path: 'project-returns',
        element: <ProjectReturns />,
      },
      {
        path: 'quality-inspections',
        element: <QualityInspections />,
      },
      {
        path: 'quality-returns',
        element: <QualityReturns />,
      },
      {
        path: 'royality-slips',
        element: <RoyalitySlips />,
      },
      {
        path: 'sub-con-vault',
        element: <SubConVault />,
      },
      {
        path: 'surplus-material',
        element: <SurplusMaterial />,
      },
      {
        path: 'transfer-orders',
        element: <TransferOrders />,
      },
      {
        path: 'warehouse-reciepts',
        element: <WarehouseReciepts />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
])

const App = () => {
  return <RouterProvider router={browserRouter} />
}
export default App
