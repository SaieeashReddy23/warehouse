import { useEffect, useRef, useState } from 'react'
import { formatDateWithSuffix } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const fetchMoreData = (page) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 20 }, (_, index) => ({
        serialNo: page * 20 + index + 1,
        materialIntakeLogNo: `MIL00k${page * 20 + index + 1}`,
        date: '2024-09-01',
        dispatch: 'Yes',
        shipCode: 'SC001',
        orderNo: 'ORD67890',
        asn: 'ASN56789',
        gatePass: 'GP12345',
        gatePassDate: '2024-09-02',
        vehicleNo: 'AB12CD3456',
        status: 'Delivered',
      }))
      resolve(data)
    }, 1000)
  })
}

const InfiniteScrollTable = ({ className }) => {
  const navigate = useNavigate()
  const { columns } = useSelector((state) => state.logsState)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const tableEndRef = useRef(null)

  const loadMoreData = async () => {
    if (loading) {
      return
    }
    setLoading(true)
    const newData = await fetchMoreData(page)
    setData([...data, ...newData])
    setPage(page + 1)
    setLoading(false)
  }

  const openMaterialIntakeLogRecord = (logNo) => {
    navigate(`/material-intake-logs/${logNo}`)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreData()
        }
      },
      {
        threshold: 1.0,
      }
    )

    if (tableEndRef.current) {
      observer.observe(tableEndRef.current)
    }

    return () => {
      if (tableEndRef.current) {
        observer.unobserve(tableEndRef.current)
      }
    }
  }, [page])

  // useEffect(() => {
  //   // Initial data load
  //   loadMoreData()
  // }, [])

  let updatedColumns = columns.filter(({ isVisible }) => isVisible)

  return (
    <div className={`overflow-auto ${className}`}>
      <table className='table table-pin-rows table-pin-cols  '>
        {/* head */}
        <thead className='rounded-2xl overflow-x-auto'>
          <tr className='bg-base-200 border-b-0 rounded-2xl'>
            {updatedColumns.map(({ id, text, index }) => {
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
                <th key={id} className=' capitalize bg-base-200'>
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
                {updatedColumns.map(({ id, index }) => {
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
      <div ref={tableEndRef} className='h-2'></div>
      {loading && (
        <div className='text-center py-4'>
          <button className='btn btn-outline btn-orange-500 loading'>
            Loading...
          </button>
        </div>
      )}
    </div>
  )
}
export default InfiniteScrollTable
