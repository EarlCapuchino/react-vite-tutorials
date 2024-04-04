import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import FlightsPage from './pages/FlightsPage'
import AddFlightPage from './pages/AddFlightPage'
import EditFlightPage from './pages/EditFlightPage'
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path = '/' element = {<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path = '/flights' element = {<FlightsPage/>}/>
      <Route path = '/add-flight' element = {<AddFlightPage/>}/>
      <Route path = '/edit-flight/:flightNo' element = {<EditFlightPage/>}/>
   </Route>
  )

)
const App = () => {
 return <RouterProvider router = {router}/>
}

export default App
