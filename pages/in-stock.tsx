import { useQuery } from '@apollo/react-hooks'
import BOARDS_QUERY from '../graphql/queries/boards.query'

import Layout from '../components/Layout'
import InStockBox from '../components/InStockBox'

const InStock = () => {
  const { data, loading, error } = useQuery(BOARDS_QUERY)
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <Layout>
      <h1 className="text-6xl mb-16">Boards in Stock</h1>

      <div className="flex items-center justify-start flex-wrap">
        {data.boards.map(board =>
          <InStockBox key={board.id} {...board}></InStockBox>
        )}
      </div>
    </Layout>
  )
}

export default InStock
