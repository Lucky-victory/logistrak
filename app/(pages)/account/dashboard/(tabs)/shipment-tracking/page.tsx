'use client'
import { ChangeEvent, FormEvent, useState } from "react"

const ShipmentTrackingPage = () => {
  const [trackingId,setTrackingId]=useState('');
const handleTrackingFormSubmit=(evt:FormEvent<HTMLFormElement>)=>{
evt.preventDefault();
console.log(trackingId);

setTrackingId('')
}
const handleInputChange=(evt:ChangeEvent<HTMLInputElement>)=>{
setTrackingId(evt.target.value)
}
  return (
    
      <div  className="flex items-center justify-center h-full w-full">
        <div className="shadow-md bg-gray-100 text-center py-8 px-6 rounded-md min-w-[450px] max-w-full min-h-[300px]">

          <h2 className="font-bold text-3xl mb-2">Track your Shipment</h2>
          <span className="text-gray-400">Enter your tracking ID below</span>
          <form className="mt-8" onSubmit={handleTrackingFormSubmit}>

          <input type="text" name="trackingId" onChange={handleInputChange} value={trackingId} className="border-2 uppercase border-gray-200 focus:border-black rounded-md py-3 px-5 " placeholder="Eg: 1432-BD56-54DE-43DE"/>
          <div className="mt-4">
            <button type='submit' className="bg-black hover:bg-gray-500 font-bold px-10 py-2.5 text-white rounded-md text-lg">
              Continue
            </button>
          </div>
          </form>
        </div>
      </div>
    
  )
}

export default ShipmentTrackingPage