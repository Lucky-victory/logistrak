'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { MdDashboard,MdSettings,MdLocalShipping,MdListAlt} from 'react-icons/md'
const DashboardSidebar = () => {
  // const router=useRouter();
  const pathname=usePathname();
const basePath='/account/dashboard'
    const links=[{icon:MdDashboard,title:'Overview',url:basePath},{icon:MdListAlt, 'title':'Orders',url:`${basePath}/orders`},{icon:MdLocalShipping,'title':'Shipment Tracking',url:`${basePath}/shipment-tracking`},{'title':'Settings',url:`${basePath}/settings`,icon:MdSettings}]
  return (
   <div className="flex flex-col">

    <nav className="flex flex-col mt-20 py-6 pl-4 gap-4">
        {links.map((link,i)=> { 
          const isActive=link.url===pathname
          // const isActive=false
          return <Link  href={`${link.url}`} key={'dashlink'+i} className={clsx("hover:bg-gray-200 w-full py-3 px-3 rounded-md flex items-center gap-4 decoration-transparent ",isActive?'bg-gray-200':'')}>
          <span className="text-xl">

           <link.icon/> 
          </span>
           {link.title}</Link>
 } )}
     
    </nav>
   </div>
  )
}

export default DashboardSidebar