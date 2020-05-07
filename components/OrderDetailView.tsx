
import OrderDetailBox from './OrderDetailBox'
import Layout from './Layout'

const OrderDetailView = props => {
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
    <div className='static flex bg-white rounded shadow-lg'>
      <div className='absolute top-0 left-0 w-5 h-5 ml-3 mt-3 mb-2' onClick={() => props.closeFullView()}>
        <img className="fill-current" src="./close.svg" />
      </div>
      <div className='static flex-col mb-16 w-2/5 mr-1 ml-4 mt-4'>
        <h1 className='text-6xl'>Your Order</h1>
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
      <div className='static flex-col w-3/5 mr-8 ml-1 mt-12 items-end'>
        {inStockBoxes}
        {customBoxes}
      </div>
    </div>
  )
}

export default OrderDetailView
