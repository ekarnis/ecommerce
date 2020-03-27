import { useQuery } from '@apollo/react-hooks'
import STAINS_QUERY from '../constants/graphql/stains.query'

import OptionBox from './OptionBox'

const Stains = () => {
  const { data, loading, error } = useQuery(STAINS_QUERY)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <div className="flex items-center justify-start flex-wrap">
      {data.stains.map(stain =>
        <OptionBox key={stain.id} {...stain}></OptionBox>
      )}
    </div>
  )
}

export default Stains
