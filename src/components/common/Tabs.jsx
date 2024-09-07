import { useState } from 'react'
import LogsContainer from '../LogsContainer'

const states = [
  {
    id: 1,
    text: 'created',
  },
  {
    id: 2,
    text: 'Converted',
  },
  {
    id: 3,
    text: 'Exception',
  },
  {
    id: 4,
    text: ' Under Exception',
  },
  {
    id: 5,
    text: 'Exception Resolved',
  },
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className=' py-4'>
      <div className='flex border-b'>
        {states.map(({ id, text }) => {
          return (
            <button
              key={id}
              className={`py-2 px-4 tracking-wider capitalize  ${
                activeTab === id ? 'border-b-2  border-orange-500 ' : ''
              }`}
              onClick={() => setActiveTab(id)}
            >
              {text}
            </button>
          )
        })}
      </div>

      <div className=' mt-4 '>
        {activeTab === 1 && <LogsContainer />}
        {activeTab === 2 && <LogsContainer />}
        {activeTab === 3 && <LogsContainer />}
        {activeTab === 4 && <LogsContainer />}
        {activeTab === 5 && <LogsContainer />}
      </div>
    </div>
  )
}
export default Tabs
