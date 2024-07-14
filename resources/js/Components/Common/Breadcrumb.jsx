import {  faStarHalfStroke, faShareAlt, faExpand } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Breadcrumbs } from "@mui/material"
import { Link } from "@inertiajs/react"

function Breadcrumb({icon, children}) {


  return (
    <div className="border-b-[0.5px] border-gray-300 py-2 px-5 w-full flex justify-between h-12 items-center">
            <div className="flex gap-3">
                <FontAwesomeIcon icon={icon} fontSize={18} className="my-auto"/>
                {/* <h1 className="my-auto font-bold text-xl">{title}</h1> */}
                <Breadcrumbs aria-label="breadcrumb">
                    {children}
                </Breadcrumbs>
            </div>

            <div className="flex gap-7">
                <button className="flex gap-2 border-[0.5px] border-slate-400 rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faShareAlt} fontSize={12} color="#4b5563" className="my-auto"/>
                    <p className="font-semibold text-sm my-auto text-gray-600">Share</p>
                </button>


                <FontAwesomeIcon icon={faStarHalfStroke} fontSize={15} className="my-auto" color="#4b5563"/>
                <FontAwesomeIcon icon={faExpand} fontSize={15} className="my-auto" color="#4b5563"/>
            
            </div>
    </div>
  )
}

export default Breadcrumb