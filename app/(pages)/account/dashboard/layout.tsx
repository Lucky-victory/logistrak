import DashboardHeader from "@/components/DashboardHeader"
import DashboardSidebar from "@/components/DashboardSidebar"
import React from "react"

const AccountDashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex bg-gray-50 h-screen gap-6">
        <div className='min-w-[270px]'>
            <DashboardSidebar/>
        </div>
<div className="bg-white flex-1 flex flex-col">
    <DashboardHeader/>

    <div className="flex flex-1">
{children}
    </div>
</div>
    </div>
  )
}

export default AccountDashboardLayout