import { ColumnsIcon } from '../../utils/icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateColumns } from '../../features/logsTable/logsSlice'

const ColumnDropDown = () => {
  const dispatch = useDispatch()
  const { columns } = useSelector((state) => state.logsState)

  const handleSave = (e) => {
    e.preventDefault()
    let elements = e.target.elements
    const el = Object.keys(elements)
      .filter((key) => isNaN(key))
      .reduce((acc, curr) => {
        acc[curr] = elements[curr].checked
        return acc
      }, {})
    dispatch(updateColumns(el))
  }

  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-sm bg-white text-[0.8rem] hover:bg-base-200 hover:border-transparent ease-in-out duration-300 mt-1  '
      >
        <ColumnsIcon className='h-4 w-4' />
        Columns
      </div>
      <form
        tabIndex='0'
        className='dropdown-content z-50 bg-base-100 p-4 rounded-box min-w-52  max-w-60 shadow-lg'
        onSubmit={handleSave}
      >
        <div className='max-h-64 overflow-y-auto'>
          {columns.map(({ id, text, index, isVisible }) => (
            <div className='form-control' key={id}>
              <label className='label cursor-pointer justify-start gap-x-4'>
                <input
                  type='checkbox'
                  className='checkbox input-xs'
                  // checked={isVisible}
                  defaultChecked={isVisible}
                  name={index}
                />
                <span className='label-text'>{text}</span>
              </label>
            </div>
          ))}
        </div>
        <div className='sticky bottom-0 bg-base-100 p-2'>
          <button type='submit' className='btn btn-sm btn-primary w-full'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
export default ColumnDropDown
