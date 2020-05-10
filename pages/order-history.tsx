import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import ORDERS_QUERY from '../graphql/queries/order.query'

import Layout from '../components/Layout'
import CompletedOrderBox from '../components/CompletedOrderBox'
import OrderDetailsModal from '../components/OrderDetailModal'

const OrderHistory = () => {
  const { data, loading, error, refetch } = useQuery(ORDERS_QUERY, {
    variables: {
      appUserId: 1,
      getPlacedOrders: true
    }
  })
  const [isOrderFullViewVisible, setIsOrderFullViewVisible] = useState(false)
  const [fullOrderProps, setFullOrderProps] = useState({ isOrderFullViewVisible })

  const showOrderFullModal = propsToSet => {
    setFullOrderProps(propsToSet)
    setIsOrderFullViewVisible(true)
  }

  const closeOrderFullModal = () => {
    setFullOrderProps({ isOrderFullViewVisible })
    setIsOrderFullViewVisible(false)
  }

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
    const completedOrderBoxes = !data.orders ? null
      : data.orders.map(
        completedOrder => (
          <CompletedOrderBox
            key={completedOrder.id}
            {...completedOrder}
            showFullView={showOrderFullModal}
          />
        ))

    return (
      <Layout>
        <div className='relative w-full'>
          <h1 className='text-6xl mb-16 ml-2'>Your Order History</h1>
          <div className='w-11/12 flex-column items-center'>
            {completedOrderBoxes}
          </div>
          <div className={`absolute w-full left-0 top-0 ml-1 z-10 ${isOrderFullViewVisible ? 'visible' : 'hidden'}`}>
            <OrderDetailsModal
              {...fullOrderProps}
              closeFullView={closeOrderFullModal}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default OrderHistory
