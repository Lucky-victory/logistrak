import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex bg-gray-300 h-screen gap-6">
        <div className='min-w-[250px]'>
            <DashboardSidebar/>
        </div>
<div className="bg-white">
    <DashboardHeader/>

    <div className="flex">

    </div>
</div>
    </div>
  )
}

export default Dashboard