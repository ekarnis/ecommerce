import PrimaryButton from './PrimaryButton'

export default props => {
  const tax: number = props.taxRate * props.subTotal
  const total: number = props.subTotal + tax + props.shipping

  return (
    <div>

      <div
        className="w-64 flex flex-col justify-between items-center px-4 pt-4 pb-2 m-2 mb-4 border border-gray-200 bg-white rounded-lg shadow-md"
      >
        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500">
            Number of Boards
          </span>
          <span>{props.totalItemNumber}</span>
        </div>

        <hr className="border-gray-300 m-2 w-full"/>

        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500">
            Subtotal
          </span>
          <span>${props.subTotal}</span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500 mr-1">
              Tax @ {props.taxRate * 100}%
          </span>
          <span>${tax}</span>
        </div>
        <div className='flex justify-between items-center w-full'>
          <span className="text-lg font-bold text-indigo-500">
          Shipping
          </span>
          <span>{props.shipping > 0 ? '$' + props.shipping : 'Free!'}</span>
        </div>

        <hr className="border-gray-300 m-2 w-full"/>

        <div className='flex justify-between items-center w-full'>
          <span className="text-2xl font-bold text-indigo-500">
            Total
          </span>
          <span>${total}</span>
        </div>

        <PrimaryButton
          onClick={() => {}}
          buttonText={'Checkout'}
        />
      </div>

      <div
        className="w-64 flex flex-col justify-between items-center p-4  m-2 border border-gray-200 bg-white rounded-lg shadow-md"
      >
        <div className="text-3xl font-bold text-indigo-500">
          Need Help?
        </div>
        <div className='text-center'>
          Reach out any time at <br />
          123-456-7890 <br />
          questions@boards.ca
        </div>
      </div>

    </div>

  )
}
