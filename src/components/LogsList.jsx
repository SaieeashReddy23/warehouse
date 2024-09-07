import { useState } from 'react'
import { columns, data, formatDateWithSuffix } from '../utils'
import { ArrowDownIcon, ArrowUpAndDown, ArrowUpIcon } from '../utils/icons'
import { useNavigate } from 'react-router-dom'

const LogsList = () => {
  const navigate = useNavigate()
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }

    // const sortedData = [...data].sort((a, b) => {
    //   if (a[key] < b[key]) {
    //     return direction === 'ascending' ? -1 : 1
    //   }
    //   if (a[key] > b[key]) {
    //     return direction === 'ascending' ? 1 : -1
    //   }
    //   return 0
    // })

    setSortConfig({ key, direction })
  }

  const getArrow = (key) => {
    if (sortConfig.key !== key) {
      return <ArrowUpAndDown className='h-3 w-3' /> // No sort or default arrow
    }
    return sortConfig.direction === 'ascending' ? (
      <ArrowUpIcon className='h-3 w-3' />
    ) : (
      <ArrowDownIcon className='h-3 w-3' />
    )
  }

  const openMaterialIntakeLogRecord = (logNo) => {
    navigate(`/material-intake-logs/${logNo}`)
  }

  return (
    <div>
      <div className=' text-xs font-semibold text-gray-500 my-1'>
        248 record found
      </div>
      <div className='overflow-x-auto'>
        <table className='table table-pin-rows table-pin-cols  '>
          {/* head */}
          <thead className='rounded-2xl overflow-x-auto'>
            <tr className='bg-base-200 border-b-0 rounded-2xl'>
              {columns.map(({ id, text, index }) => {
                if (index === 'serialNo') {
                  return (
                    <th
                      key={id}
                      className='bg-base-200 z-10 rounded-tl-2xl rounded-bl-2xl'
                    ></th>
                  )
                }

                if (index === 'vehicleNo') {
                  return (
                    <th
                      key={id}
                      className=' capitalize bg-base-200 rounded-tr-2xl rounded-br-2xl'
                      onClick={() => handleSort(text)}
                    >
                      <div
                        className={` text-[0.7rem]   flex items-center gap-x-1 cursor-pointer  ${
                          sortConfig.key === text && 'text-base-content'
                        } `}
                      >
                        <span>{text}</span>
                        {/* <span>{getArrow(text)}</span> */}
                      </div>
                    </th>
                  )
                }

                return (
                  <th
                    key={id}
                    className=' capitalize bg-base-200'
                    onClick={() => handleSort(text)}
                  >
                    <div
                      className={` text-[0.7rem] flex items-center gap-x-1 cursor-pointer ${
                        sortConfig.key === text && 'text-base-content'
                      } `}
                    >
                      <span>{text}</span>
                      {/* <span>{getArrow(text)}</span> */}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr
                  key={row.serialNo}
                  onClick={() =>
                    openMaterialIntakeLogRecord(row.materialIntakeLogNo)
                  }
                  className=' cursor-pointer'
                >
                  {columns.map(({ id, index }) => {
                    if (index === 'serialNo') {
                      return <th key={id}> {row[index]}</th>
                    }

                    if (index === 'vehicleNo') {
                      return (
                        <th
                          key={id}
                          className=' font-normal text-xs tracking-wide'
                        >
                          {' '}
                          {row[index]}
                        </th>
                      )
                    }

                    if (index === 'date' || index === 'gatePassDate') {
                      const date = formatDateWithSuffix(row[index])
                      return (
                        <td key={id} className='text-xs min-w-32'>
                          {date}
                        </td>
                      )
                    }

                    // if (index === 'status') {
                    //   let status = row[index].toLowerCase().replace(/\s+/g, '')
                    //   console.log(status)
                    //   return (
                    //     <th key={id} className='text-xs'>
                    //       <div
                    //         className={`badge badge-sm text-[0.6rem] tracking-wider  py-2 px-2 ${statusColors[status]}`}
                    //       >
                    //         {row[index].toUpperCase()}
                    //       </div>
                    //     </th>
                    //   )
                    // }
                    return (
                      <td key={id} className='text-xs '>
                        {row[index]}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default LogsList
