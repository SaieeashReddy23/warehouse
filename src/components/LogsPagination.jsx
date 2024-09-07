const LogsPagination = () => {
  let pageCount = 5
  let page = 1

  const handlePageChange = () => {}

  return (
    <div className=' border-t border-t-base-300'>
      <div className='mt-4 flex justify-end'>
        <div className='join'>
          <button
            className='btn btn-sm join-item'
            onClick={() => {
              let prevPage = page - 1
              if (prevPage < 1) prevPage = pageCount
              handlePageChange(prevPage)
            }}
          >
            Prev
          </button>
          {/* {renderPageButtons()} */}
          <input
            className='join-item btn btn-sm btn-square'
            type='radio'
            name='options'
            aria-label='1'
            defaultChecked
          />
          <input
            className='join-item btn btn-sm  btn-square '
            type='radio'
            name='options'
            aria-label='2'
          />
          <input
            className='join-item btn btn-sm  btn-square'
            type='radio'
            name='options'
            aria-label='3'
          />
          <input
            className='join-item btn btn-sm  btn-square'
            type='radio'
            name='options'
            aria-label='4'
          />
          <button
            className='btn btn-sm join-item'
            onClick={() => {
              let nextPage = page + 1
              if (nextPage > pageCount) nextPage = 1
              handlePageChange(nextPage)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
export default LogsPagination
