import { Form, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const Filters = () => {
  return (
    <Form className=' my-4 bg-gray-100 rounded-xl px-6 py-4 grid gap-x-4  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end'>
      <FormInput
        type='search'
        label='search MIL'
        name='materialIntakeLogNo'
        size='input-sm'
      />
      <FormSelect
        label='dispatch'
        name='dispatch'
        list={['all', 'yes', 'no']}
        size='select-sm'
        defaultValue='all'
      />
      <FormInput
        type='search'
        label='Ship Code'
        name='shipCode'
        size='input-sm'
      />
      <FormInput
        type='search'
        label='Order No'
        name='orderNo'
        size='input-sm'
      />
      <FormInput type='search' label='ASN' name='asn' size='input-sm' />
      <FormInput
        type='search'
        label='Gate Pass'
        name='gatePass'
        size='input-sm'
      />
      <FormInput
        type='search'
        label='Vehicle No'
        name='vehicleNo'
        size='input-sm'
      />
      <FormSelect
        label='Status'
        name='status'
        list={['all', 'Delivered', 'Pending', 'Dispatched', 'In Transit']}
        size='select-sm'
        defaultValue='all'
      />

      {/* BUTTONS */}
      <button
        type='submit'
        className='btn btn-primary btn-sm capitalize tracking-wider text-white'
      >
        search
      </button>
      <Link
        to='/material-intake-logs'
        className='btn btn-primary btn-sm capitalize tracking-wider text-white'
      >
        reset
      </Link>
    </Form>
  )
}
export default Filters
