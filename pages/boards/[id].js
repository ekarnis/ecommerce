import { useRouter } from 'next/router'

import { useQuery } from '@apollo/react-hooks'
import BOARD_QUERY from '../../constants/graphql/board.query'

import Layout from '../../components/Layout'
import ReviewBox from '../../components/ReviewBox'
import PrimaryButton from '../../components/PrimaryButton'

export default function Board () {
  const router = useRouter()

  const { data, loading, error } = useQuery(
    BOARD_QUERY, {
      variables: {
        board_id: router.query.id
      }
    }
  )

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

    return (
      <Layout>
        <div className="flex mb-10">
          <div className="w-2/3 flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-2xl">
            <img src={board.picture_url}></img>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <div className="flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-lg">
              <div className="w-full flex justify-between">
                <h3 className="text-4xl font-bold text-indigo-500">$50 CAD</h3>
                <h3 className="text-4xl font-bold text-indigo-500">{board.wood.name}</h3>
              </div>
              <div className="w-full">
                <span className="float-right">
                  {board.width_in_cm}cm x {board.length_in_cm}cm x {board.thickness_in_cm}cm
                </span>
              </div>
              <div className="w-full mb-4">
                <span className="float-right">{board.stain.name}</span>
              </div>
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <span className="mt-4">
              We have <span className="text-indigo-500">{board.stock}</span> in stock
              </span>
              <div>
                <PrimaryButton buttonText={'-'} />
                <span>1</span>
                <PrimaryButton buttonText={'+'} />

                <PrimaryButton buttonText={'Add to Cart'} />
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-indigo-500">Reviews</h3>
        <div className="flex flex-wrap">{reviewBoxes}</div>
      </Layout>
    )
  }
}
