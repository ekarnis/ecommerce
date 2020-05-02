import PrimaryButton from './PrimaryButton'

import { sumArrayProperties } from '../helpers/mathHelpers'

// TODO rename to CompletedOrderBox
export default props => {
  const totalItemNumber = sumArrayProperties(props.inStockOrderItems, 'quantity') +
  sumArrayProperties(props.customOrderItems, 'quantity')

  return (
    <div>

      <div
        className="w-64 flex flex-col justify-between items-center px-4 pt-4 pb-2 m-2 mb-4 border border-gray-200 bg-white rounded-lg shadow-md"
      >
        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500">
            Number of Boards
          </span>
          <span>{totalItemNumber}</span>
        </div>

        <hr className="border-gray-300 m-2 w-full"/>

        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500">
            Total
          </span>
          <span>${props.finalCost}</span>
        </div>

        <PrimaryButton
          onClick={() => {}}
          buttonText={'View Order Details'}
        />
      </div>
    </div>

  )
}
