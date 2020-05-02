import { useQuery } from '@apollo/react-hooks'

import ORDER_QUERY from '../graphql/queries/order.query'

import Layout from '../components/Layout'
import OrderBox from '../components/OrderBox'

const OrderHistory = () => {
  const { data, loading, error, refetch } = useQuery(ORDER_QUERY, {
    variables: {
      appUserId: 1,
      getPlacedOrders: true
    }
  })

  if (loading) {
    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Order History</h1>
        <div className=' w-full flex items- justify-center'>
          <div className='flex flex-col w-3/5 mr-4 items-center'>
            <p>Loading...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Order History</h1>
        <div className=' w-full flex items- justify-center'>
          <p>Error: {JSON.stringify(error)}</p>
        </div>
      </Layout>
    )
  }

  if (data) {
    const completedOrderBoxes = data.order ? data.order.map(
      completedOrder => {
        return (<OrderBox
          key={completedOrder.id}
          orderDate={completedOrder.placed}
          finalCost={completedOrder.final_cost}
          trackingCode={completedOrder.tracking_code}
          customOrderItems={completedOrder.custom_order_items}
          inStockOrderItems={completedOrder.in_stock_order_items}
        />
        )
      })
      : null

    return (
      <Layout>
        <h1 className='text-6xl mb-16'>Your Order History</h1>
        <div className=' w-full flex items- justify-center'>
          <div className='flex flex-col w-3/5 mr-4 items-center'>
            {completedOrderBoxes}
          </div>
        </div>
      </Layout>
    )
  }
}

export default OrderHistory
