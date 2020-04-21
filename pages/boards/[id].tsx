import { useRouter } from 'next/router'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { useState } from 'react'

import CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION from '../../constants/graphql/changeInStockItemsInCart.mutation'
import BOARD_QUERY from '../../constants/graphql/board.query'

import Layout from '../../components/Layout'
import ReviewBox from '../../components/ReviewBox'
import PrimaryButton from '../../components/PrimaryButton'
import Toast from '../../components/Toast'

export default function Board () {
  const router = useRouter()

  const [quantity, setQuantity] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('INFORMATIONAL')

  const { data, loading, error } = useQuery(BOARD_QUERY, {
    variables: {
      board_id: router.query.id
    }
  })
  const [changeInStockItemsInCart] = useMutation(CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION)

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (data) {
    const board = data.board

    const reviewBoxes = board.reviews.map(review => (
      <ReviewBox key={review.id} {...review}></ReviewBox>
    ))

    const changeInStockItemsInCartOnClick = () => {
      changeInStockItemsInCart({
        variables: { userId: 1, boardId: board.id, quantity: quantity }
      })
        .then(() => {
          setToastMessage('Success! Item was added to the cart')
          setIsVisible(true)
          setToastType('SUCCESS')
        })
        .catch(error => {
          console.error('addToCartClick -> error', error)
          setToastMessage('error ☹️, item was not added to the cart')
          setIsVisible(true)
          setToastType('ERROR')
        })
        .then(() => {
          delay(5000).then(() => {
            setToastMessage('')
            setIsVisible(false)
            setToastType('INFORMATIONAL')
          })
        })
    }

    return (
      <Layout>
        <div className='flex mb-10'>
          <div className='w-2/3 flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-2xl'>
            <img src={board.picture_url}></img>
          </div>
          <div className='w-1/3 flex flex-col items-center'>
            <div className='flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg'>
              <div className='w-full flex justify-between'>
                <h3 className='text-4xl font-bold text-indigo-500'>$50 CAD</h3>
                <h3 className='text-4xl font-bold text-indigo-500'>
                  {board.wood.name}
                </h3>
              </div>
              <div className='w-full'>
                <span className='float-right'>
                  {board.width_in_cm}cm x {board.length_in_cm}cm x{' '}
                  {board.thickness_in_cm}cm
                </span>
              </div>
              <div className='w-full mb-4'>
                <span className='float-right'>{board.stain.name}</span>
              </div>
              <span>{board.description}</span>
              <span className='mt-4'>
                We have <span className='text-indigo-500'>{board.stock}</span>{' '}
                in stock
              </span>
              <div>
                <PrimaryButton
                  buttonText={'-'}
                  onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
                />
                <span>{quantity}</span>
                <PrimaryButton
                  buttonText={'+'}
                  onClick={() => quantity < board.stock ? setQuantity(quantity + 1) : null}
                />

                <PrimaryButton
                  onClick={changeInStockItemsInCartOnClick}
                  buttonText={'Add to Cart'}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className='text-4xl font-bold text-indigo-500'>Reviews</h3>
        <div className='flex flex-wrap mb-8'>{reviewBoxes}</div>
        <Toast
          isVisible={isVisible}
          toastMessage={toastMessage}
          toastType={toastType}
        />
      </Layout>
    )
  }
}
