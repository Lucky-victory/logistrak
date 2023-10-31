import Image from 'next/image'
import React from 'react'
import { MdOutlineNotifications } from 'react-icons/md'

const DashboardHeader = () => {
  return (
    <div className="  min-h-[70px] px-2 py-2">
<div className="flex justify-between bg-gray-200 rounded-md h-full py-2 px-3">
<div className="flex"></div>
<div className="flex items-center gap-5">
<button className="text-2xl">
  <MdOutlineNotifications />

</button>
<div className="w-[45px] h-[45px] rounded-md overflow-hidden bg-gray-500">
  <img className='object-cover' width={'100%'} height={'100%'} alt='' src='https://randomuser.me/api/portraits/women/8.jpg'/>
</div>
</div>
</div>
    </div>
  )
}

export default DashboardHeader