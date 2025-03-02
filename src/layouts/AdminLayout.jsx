import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/common/AdminHeader";
import AdminSideBar from "../components/common/AdminSideBar";
import AdminFooter from "../components/common/AdminFooter";

function AdminLayout() {
  return (
    <>
      <div className="bg-[#FAFAFA] min-h-screen w-full">
      <div className="flex h-screen overflow-hidden ">
       <AdminSideBar />
       <div className="flex  flex-col w-full overflow-auto justify-between">
       <div>
       <AdminHeader />
       <div className="py-4 px-10">
       <Outlet />
       </div>
       </div>
       <AdminFooter />
       </div>
      </div>
        
      </div>
    </>
  );
}

export default AdminLayout;
