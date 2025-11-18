import { Outlet } from "react-router-dom";
import Aheader from "./Aheader"; 
import './AdminLayout.css'
// import Afooter from "./Footer";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Aheader />
      <div className="admin-main">
         <Outlet /> 
      </div>
       {/* <-- this is where Home/About/etc will render */}
            {/* <Afooter /> */}
    </div>
  )
}

export default AdminLayout 
