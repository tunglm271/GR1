import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

function MenuTab({activeUrl,icon, text}) {
  
  const {url, component} = usePage()
  return (
    <Link className={url==activeUrl?
    "flex gap-3 py-2 group bg-sky-200 px-3 rounded-lg menu-tab":
    "flex gap-3 py-2 group hover:bg-gray-200 px-3 rounded-lg menu-tab"}
    href={activeUrl}
    method='get'>
        <FontAwesomeIcon
          icon={icon} 
          fontSize={15} 
          color='#6F7378'
          className={url==activeUrl?'my-auto text-[#40A2E3] w-1/5':'my-auto text-gray-600 w-1/5'}
        />
        <h2 className={url==activeUrl?'text-sm text-[#40A2E3]':'text-sm text-gray-600'}>{text}</h2>
    </Link>
  )
}

export default MenuTab