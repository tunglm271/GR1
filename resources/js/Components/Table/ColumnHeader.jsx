function ColumnHeader({children}) {
  return (
    <button className="flex gap-2 w-1/4 group p-2 hover:bg-gray-100  leading-loose">
        {children}
        <FontAwesomeIcon fontSize={10} icon={faSort} className='my-auto p-1 rounded hover:bg-gray-300 hidden group-hover:block'/>
    </button>
  )
}

export default ColumnHeader