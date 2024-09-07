import { useState } from 'react'
import LogsFilters from './LogsFilters'
import LogsList from './LogsList'
import LogsPagination from './LogsPagination'
import { InfiniteScrollTable } from './common'

const LogsContainer = () => {
  return (
    <div>
      <LogsFilters />
      <div className=' bg-white  border border-base-200  p-4 rounded-2xl my-4'>
        {/* <LogsList /> */}
        {/* <LogsPagination /> */}
        <InfiniteScrollTable className=' max-h-[calc(100vh-22rem)] ' />
      </div>
    </div>
  )
}
export default LogsContainer
