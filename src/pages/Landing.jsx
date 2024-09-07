import { NavLink } from 'react-router-dom'

const appsList = [
  {
    id: 1,
    path: '/adjustment-orders',
    text: 'Adjustment orders',
  },
  {
    id: 2,
    path: '/chargable-issues',
    text: 'Chargable issues',
  },
  {
    id: 3,
    path: '/cost-peg-transfers',
    text: 'Cost peg transfers',
  },
  {
    id: 4,
    path: '/exception-handling',
    text: 'Exception handling',
  },
  {
    id: 5,
    path: '/items-shelf-life',
    text: 'items shelf life',
  },
  {
    id: 6,
    path: '/material-intake-logs',
    text: 'Material Intake logs',
  },
  {
    id: 7,
    path: '/project-issues',
    text: 'Project issues',
  },
  {
    id: 8,
    path: '/project-returns',
    text: 'Project returns',
  },
  {
    id: 9,
    path: '/quality-inspections',
    text: 'quality inspections',
  },
  {
    id: 10,
    path: '/quality-returns',
    text: 'quality returns',
  },
  {
    id: 11,
    path: '/royality-slips',
    text: 'royality slips',
  },
  {
    id: 12,
    path: '/sub-con-vault',
    text: 'sub con vault',
  },
  {
    id: 13,
    path: '/surplus-material',
    text: 'surplus material',
  },
  {
    id: 14,
    path: '/transfer-orders',
    text: 'transfer orders',
  },
  {
    id: 15,
    path: '/warehouse-reciepts',
    text: 'warehouse reciepts',
  },
]

const Landing = () => {
  return (
    <div>
      <div className='pt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
        {appsList.map(({ id, text, path }) => {
          return (
            <NavLink
              className='card bg-base-100 border-base-300 w-full shadow-xl hover:shadow-2xl  transition duration-300'
              to={path}
              key={id}
            >
              <figure>
                <img
                  src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title capitalize'>{text}</h2>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
export default Landing
