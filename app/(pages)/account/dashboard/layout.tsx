import DashboardHeader from "@/components/DashboardHeader"
import DashboardSidebar from "@/components/DashboardSidebar"

const AccountDashboardLayout = () => {
  return (
    <div className="flex bg-gray-50 h-screen gap-6">
        <div className='min-w-[270px]'>
            <DashboardSidebar/>
        </div>
<div className="bg-white flex-1">
    <DashboardHeader/>

    <div className="flex">

    </div>
</div>
    </div>
  )
}

export default AccountDashboardLayout