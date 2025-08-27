
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/ManLayout'
import Home from './Home'
import UserCard from './pages/UserCard'
import Login from './pages/Login'
import MyBudget from './pages/Budjet'
import Transfer from './pages/Transfer'
import Message from './pages/Message'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/cards',
          element:<UserCard/>
        }, {
          path:'/login', 
          element:<Login/>
        }, 
        {
          path:'/budget',
          element:<MyBudget/>
        },
        {
          path:'/transfer',
          element:<Transfer/>
        },
        {
            path:'/chat',
            element:<Message/>
        }
      ]
    } 
  ])
  return <RouterProvider router={route}/>
}

export default App
