import { faStar, faStarHalfStroke, faShareAlt, faExpand } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


function Breadcrumb({icon, title}) {


  return (
    <div className="border-b-[0.5px] border-gray-300 py-2 px-5 w-full flex justify-between h-12">
            <div className="flex gap-3">
                <FontAwesomeIcon icon={icon} fontSize={20} className="my-auto"/>
                <h1 className="my-auto font-bold text-xl">{title}</h1>
            </div>

            <div className="flex gap-7">
                <button className="flex gap-2 border-2 border-gray-200 rounded-2xl px-2 py-1">
                <FontAwesomeIcon icon={faShareAlt} fontSize={12} color="" className="my-auto"/>
                    <p className="font-semibold text-sm my-auto">Share</p>
                </button>


                <FontAwesomeIcon icon={faStarHalfStroke} fontSize={15} className="my-auto"/>
                <FontAwesomeIcon icon={faExpand} fontSize={15} className="my-auto"/>
            
            </div>
    </div>
  )
}

export default Breadcrumb