import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { BreadCrumb, Loading } from '../components/common'
const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className=' bg-gray-50 min-h-[calc(100vh-4rem)]'>
          <div className=' align-element py-4'>
            <Outlet />
          </div>
          {/* <BreadCrumb /> */}
        </section>
      )}
    </>
  )
}
export default HomeLayout
