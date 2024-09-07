import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length < 1) {
    return null
  }

  return (
    <div className='breadcrumbs text-lg pb-4'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`

          return (
            <li key={to}>
              <Link to={to}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default BreadCrumb
