import OrderDetailBox from './OrderDetailBox'

const OrderDetailsModal = props => {
  if (props.isOrderFullViewVisible !== undefined) return (<div>filler lol</div>)

  const inStockBoxes = props.in_stock_order_items.map(
    inStockOrderItem => (
      <OrderDetailBox
        key={inStockOrderItem.id}
        {...inStockOrderItem}
      />
    )
  )

  const customBoxes = props.custom_order_items.map(
    customOrderItem => (
      <OrderDetailBox
        key={customOrderItem.id}
        {...customOrderItem}
      />
    ))

  return (
    <div className='flex-row bg-white rounded shadow-2xl mb-5'>
      <div id='header' className='inline-flex'>
        <div className='self-start w-4 h-4 ml-3 mt-3 mb-2' onClick={() => props.closeFullView()}>
          <img className="fill-current" src="./close.svg" />
        </div>
        <div className='flex w-full ml-5'><h1 className='text-2xl'>Your Order</h1></div>
      </div>
      <div className='border'></div>
      <div className='flex'>
        <div className='flex-col mb-16 w-2/5 mr-1 ml-4 mt-4'>
          <span className="text-2xl font-bold text-indigo-500 mr-2">
            Details
          </span>
          <div className='inline-flex items-center w-full'>
            <span className="text-lg font-bold text-indigo-500 mr-2">
            Total
            </span>
            <span>${props.final_cost}</span>
          </div>
          <div className='inline-flex items-center w-full'>
            <span className="text-lg font-bold text-indigo-500 mr-2">
            Date Ordered
            </span>
            <span>{ new Intl.DateTimeFormat('en-CA', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format(props.placed)}</span>
          </div>
        </div>
        <div className='flex-col w-3/5 mr-8 ml-1 mt-4 items-end'>
          {inStockBoxes}
          {customBoxes}
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsModal
