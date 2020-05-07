import { useQuery } from '@apollo/react-hooks'

import ORDERS_QUERY from '../graphql/queries/order.query'

import Layout from '../components/Layout'
import CartBox from '../components/CartBox'
import CheckoutBox from '../components/CheckoutBox'
import { sumArrayProperties } from '../helpers/mathHelpers'

const Cart = () => {
  const { data, loading, error, refetch } = useQuery(ORDERS_QUERY, {
    variables: {
      appUserId: 1,
      getPlacedOrders: false
    }
  })

  if (loading) {
    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Cart</h1>
        <div className=' w-full flex items- justify-center'>
          <div className='flex flex-col w-3/5 mr-4 items-center'>
            <p>Loading...</p>
          </div>
          <CheckoutBox
            totalItemNumber={0}
            subTotal={0}
            taxRate={0}
            shipping={0}
          />
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Cart</h1>
        <div className=' w-full flex items- justify-center'>
          <p>Error: {JSON.stringify(error)}</p>
        </div>
      </Layout>
    )
  }

  if (data) {
    // TODO make a mutation if user requires a new cart order, if data.Order = undefined or null

    const inStockBoxes = data.orders[0].in_stock_order_items.map(
      inStockOrderItem => (
        <CartBox
          key={inStockOrderItem.id}
          refetch={refetch}
          {...inStockOrderItem}
        />
      )
    )

    const customBoxes = data.orders[0].custom_order_items.map(
      customOrderItem => (
        <CartBox
          key={customOrderItem.id}
          refetch={refetch}
          {...customOrderItem}
        />
      ))

    const totalItemNumber: number = sumArrayProperties(data.orders[0].in_stock_order_items, 'quantity') +
    sumArrayProperties(data.orders[0].custom_order_items, 'quantity')

    const subTotal: number = sumArrayProperties(data.orders[0].custom_order_items, 'price_in_cad') +
      data.orders[0].in_stock_order_items ? data.orders[0].in_stock_order_items.reduce(
        (accumulator, inStockOrderItem) =>
          accumulator + inStockOrderItem.quantity * inStockOrderItem.board.price_in_cad
        , 0
      ) : 0

    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Cart</h1>
        <div className=' w-full flex items- justify-center'>
          <div className='flex flex-col w-3/5 mr-4 items-center'>
            {inStockBoxes}
            {customBoxes}
          </div>
          <CheckoutBox
            totalItemNumber={totalItemNumber}
            subTotal={subTotal}
            taxRate={0.15}
            shipping={15}
          />
        </div>
      </Layout>
    )
  }
}

export default Cart
