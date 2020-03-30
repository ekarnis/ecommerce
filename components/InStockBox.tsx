import Link from 'next/link'
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import ADD_TO_CART_QUERY from '../constants/graphql/cart.query'

import Toast from '../components/Toast'
import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const [isAdded, setIsAdded] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [addToCart, { data }] = useMutation(ADD_TO_CART_QUERY);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  let onCartClick = function() {
    addToCart({ variables: { boardId: props.id, quantity: 1 } })
    .then(function(response){
      setToastMsg('Success! Item was added to the cart');
      setIsAdded(true);
      console.log(response)
    })
    .catch(function(err) {
      setToastMsg('error ☹️, item was not able to be added to the cart');
      setIsAdded(true);
      console.log(err)
    })
    .then(function() {
      delay(1000).then(function(){
        setToastMsg('');
        setIsAdded(false);
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
          <h3 className="text-3xl font-bold text-indigo-500">{props.wood.name}</h3>
          <span>
            {props.width_in_cm}cm x {props.length_in_cm}cm x {props.thickness_in_cm}cm
          </span>
          <span className="mb-4">{props.stain.name}</span>
          <img src={props.picture_url}></img>
        </Link>
        <PrimaryButton onClick={e => onCartClick() } buttonText={'Add to Cart'} />
        <Toast isAdded={isAdded} toastMsg={toastMsg}/>
      </a>
  )
}
