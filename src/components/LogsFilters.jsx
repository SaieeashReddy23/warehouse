import { useState } from 'react'
import { ColumnsIcon, FunnelIcon, SearchIcon } from '../utils/icons'
import { ColumnDropDown, Filters } from './common'

const LogsFilters = () => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div>
      <div className='flex flex-row items-center justify-between'>
        <label className='input input-sm input-bordered flex items-center gap-2 '>
          <SearchIcon className='h-3 w-3' />
          <input type='text' className='grow' placeholder='Search' />
        </label>
        <div className='flex items-center gap-x-4 '>
          {/* <button className='btn btn-xs bg-white text-[0.8rem] hover:bg-base-200 hover:border-transparent ease-in-out duration-300  '>
            <ColumnsIcon className='h-4 w-4' />
            Columns
          </button> */}
          <ColumnDropDown />
          <button
            className='btn btn-sm bg-white text-[0.8rem] hover:bg-base-200 hover:border-transparent ease-in-out duration-300 '
            onClick={() => setShowFilters(!showFilters)}
          >
            <FunnelIcon className='h-4 w-4' />
            Filters
          </button>
        </div>
      </div>

      {showFilters && <Filters />}
    </div>
  )
}
export default LogsFilters
