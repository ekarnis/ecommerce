import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'
import ORDERS_QUERY from '../graphql/queries/order.query'

import Layout from '../components/Layout'
import CompletedOrderBox from '../components/CompletedOrderBox'
import OrderDetailView from '../components/OrderDetailView'

const OrderHistory = () => {
  const { data, loading, error, refetch } = useQuery(ORDERS_QUERY, {
    variables: {
      appUserId: 1,
      getPlacedOrders: true
    }
  })
  const [isOrderFullViewVisible, setIsOrderFullViewVisible] = useState(false)
  const [fullOrderProps, setFullOrderProps] = useState({ isOrderFullViewVisible })

  const showOrderFullView = propsToSet => {
    setFullOrderProps(propsToSet)
    setIsOrderFullViewVisible(true)
  }

  const closeOrderFullView = () => {
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
            showFullView={showOrderFullView}
          />
        ))

    return (
      <Layout>
        <div className='relative w-full'>
          <h1 className='text-6xl mb-16'>Your Order History</h1>
          <div className='w-100 flex-column items-center'>
            {completedOrderBoxes}
          </div>
          <div className={`absolute w-full left-0 top-0 z-10 ${isOrderFullViewVisible ? 'visible' : 'hidden'}`}>
            <OrderDetailView
              {...fullOrderProps}
              closeFullView={closeOrderFullView}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default OrderHistory
