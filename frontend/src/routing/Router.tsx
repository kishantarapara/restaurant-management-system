import { BrowserRouter, Routes, Route} from 'react-router'
import RootLayout from './RootLayout'
import Home from '../pages/home/Home'
import Users from '../pages/users/Users'
import Login from '../pages/login/Login'
import Orders from '../pages/orders/Orders'
import OrderQueue from '../pages/order_queue/OrderQueue'
import Notifications from '../pages/notifications/Notifications'
import Reports from '../pages/reports/Reports'
import Settings from '../pages/settings/Settings'
import Menu from '../pages/menu/Menu'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/order_queue" element={<OrderQueue />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/settings" element={<Settings />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
