import React from 'react'

function DashboardCard({header, children}) {
  return (
        <div className='w-full border-[1px] rounded-lg shadow pt-2 pb-4 px-4 h-fit shadow-gray-300/30 hover:shadow-gray-500/30'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-[16px]'>{header}</h1>

          </div>
            <div className='flex-col items-center text-center justify-center mt-4'>
                {children}
            </div>
        </div>
  )
}

export default DashboardCard