import PrimaryButton from './PrimaryButton'

import { sumArrayProperties } from '../utils/mathUtils'

// TODO rename to CompletedOrderBox
export default props => {
  const totalItemNumber = sumArrayProperties(props.inStockOrderItems, 'quantity') +
  sumArrayProperties(props.customOrderItems, 'quantity')

  return (

    <div
      className="w-full flex justify-between items-center py-1 px-4 m-2 border border-gray-200 bg-white rounded-lg shadow-md"
    >
      <div className="flex-column mt-2 mb-2">
        <div className='inline-flex items-center w-full'>
          <span className="text-lg font-bold text-indigo-500 mr-2">
            Number of Boards
          </span>
          <span>{totalItemNumber}</span>
        </div>
        <div className='inline-flex items-center w-full'>
          <span className="text-lg font-bold text-indigo-500 mr-2">
            Total
          </span>
          <span>${props.finalCost}</span>
        </div>
        <div className='inline-flex items-center w-full'>
          <span className="text-lg font-bold text-indigo-500 mr-2">
            Date Ordered
          </span>
          <span>{ props.placed ? new Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(props.placed)) : 'this is a bug'}</span>
        </div>
      </div>

      <div className="inset-y-0 right-0">
        <PrimaryButton
          onClick={() => { props.showFullView(props) }}
          buttonText={'View Order Details'}
        />
      </div>
    </div>
  )
}
