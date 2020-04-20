import { useQuery } from '@apollo/react-hooks'
import ORDER_QUERY from '../constants/graphql/order.query'

import Layout from '../components/Layout'
import CartBox from '../components/CartBox'
import CheckoutBox from '../components/CheckoutBox'

const Cart = () => {
  const { data, loading, error } = useQuery(ORDER_QUERY, {
    variables: {
      order_id: 1
    }
  })
  console.log('Cart -> data', data)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (data) {
    const inStockBoxes = data.order.in_stock_order_items.map(
      inStockOrderItem => (
        <CartBox key={inStockOrderItem.id} {...inStockOrderItem}></CartBox>
      )
    )

    const customBoxes = data.order.custom_order_items.map(customOrderItem => (
      <CartBox key={customOrderItem.id} {...customOrderItem}></CartBox>
    ))

    const subTotal = data.order.in_stock_order_items
      ? data.order.in_stock_order_items.reduce(
          (accumulator, inStockOrderItem) => {
            return accumulator + inStockOrderItem.board.price_in_cad
          },
          0
        )
      : 0 + data.order.custom_order_items
      ? data.order.custom_order_items.reduce((accumulator, customOrderItem) => {
          return accumulator + customOrderItem.price_in_cad
        }, 0)
      : 0

    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Cart</h1>
        <div className=' w-full flex items- justify-center'>
          <div className='flex flex-col w-3/5 mr-4 items-center'>
            {inStockBoxes}
            {customBoxes}
          </div>
          <CheckoutBox subTotal={subTotal} taxRate={0.15} shipping={15} />
        </div>
      </Layout>
    )
  }
}

export default Cart
