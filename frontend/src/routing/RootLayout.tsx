import { NavLink, Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className="flex gap-10">
      <div>Sidebar
        <div className="flex flex-col gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/order_queue">Order Queue</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/notifications">Notifications</NavLink>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
