import { createSlice } from '@reduxjs/toolkit'

let cols = [
  { id: 1, text: 'MIL No.', index: 'materialIntakeLogNo', isVisible: true },
  { id: 2, text: 'Date', index: 'date', isVisible: true },
  { id: 3, text: 'Dispatch', index: 'dispatch', isVisible: true },
  { id: 4, text: 'Ship Code', index: 'shipCode', isVisible: true },
  { id: 5, text: 'Order No.', index: 'orderNo', isVisible: true },
  { id: 6, text: 'ASN', index: 'asn', isVisible: true },
  { id: 7, text: 'Gate Pass', index: 'gatePass', isVisible: true },
  { id: 8, text: 'Gatepass Date', index: 'gatePassDate', isVisible: true },
  { id: 9, text: 'Vehicle No.', index: 'vehicleNo', isVisible: true },
]

const getInitialColumnsState = () => {
  return JSON.parse(localStorage.getItem('logColumns')) || cols
}

getInitialColumnsState()

const initialState = {
  columns: getInitialColumnsState(),
}

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    updateColumns: (state, action) => {
      const payload = action.payload
      state.columns = state.columns.map((col) => {
        return {
          ...col,
          isVisible: payload[col.index],
        }
      })
      localStorage.setItem('logColumns', JSON.stringify(state.columns))
    },
  },
})

export const { updateColumns } = logsSlice.actions

export default logsSlice.reducer
