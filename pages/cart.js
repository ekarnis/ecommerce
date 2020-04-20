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
          (accumulator, inStockOrderItem) =>
            accumulator + inStockOrderItem.board.price_in_cad
        )
      : 0 + data.order.custom_order_items
      ? data.order.custom_order_items.reduce(
          (accumulator, customOrderItem) =>
            accumulator + customOrderItem.price_in_cad
        )
      : 0

    data.order.in_stock_order_items.reduce((accumulator, inStockOrderItem) => {
      const x = accumulator + inStockOrderItem.board.price_in_cad
      console.log(x)
      console.log(inStockOrderItem.board.price_in_cad)
      return x
    })

    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Cart</h1>
        <div className=' w-full flex items-start'>
          <div className='flex flex-col w-full items-center'>
            {inStockBoxes}
            {customBoxes}
          </div>
          <CheckoutBox subTotal={subTotal} />
        </div>
      </Layout>
    )
  }
}

export default Cart
