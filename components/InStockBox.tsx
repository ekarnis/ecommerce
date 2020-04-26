import Link from 'next/link'
import { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'

import CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION from '../graphql/mutations/changeInStockItemsInCart'

import Toast from '../components/Toast'
import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const [changeInStockItemsInCart] = useMutation(CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION)

  const [isVisible, setIsVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('INFORMATIONAL')

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const changeInStockItemsInCartOnClick = () => {
    changeInStockItemsInCart({ variables: { userId: 1, boardId: props.id, quantity: 1 } })
      .then(() => {
        setToastMessage('Success! Item was added to the cart')
        setIsVisible(true)
        setToastType('SUCCESS')
      })
      .catch(error => {
        console.error('onCartClick -> error', error)
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
    <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <Link
        href="/boards/[id]"
        as={
          '/boards/' +
            props.id
        }
      >
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-3xl font-bold text-indigo-500">{props.wood.name}</h3>
          <div>
            {props.width_in_cm}cm x {props.length_in_cm}cm x {props.thickness_in_cm}cm
          </div>
          <div className="mb-4">{props.stain.name}</div>
          <img src={props.picture_url}></img>
        </div>
      </Link>
      <PrimaryButton
        onClick={ changeInStockItemsInCartOnClick }
        buttonText={'Add to Cart'}
      />
      <Toast
        isVisible={isVisible}
        toastMessage={toastMessage}
        toastType={toastType}
      />
    </a>
  )
}
