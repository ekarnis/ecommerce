import Layout from '../components/Layout'
import Woods from '../components/Woods'
import Stains from '../components/Stains'

const Index = () => {
  return (
    <Layout>
      <div className="flex items-center ">
        <div className="flex items-center justify-start flex-wrap">
          <Woods />
          <Stains />

        </div>
        <button
          className="fixed right-0 rounded-full h-16 w-16 flex items-center justify-center inline-block text-md px-4 py-2 leading-none border text-indigo-500 border-indigo-500 bg-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4"
          style={{ top: '50%' }}
        >
          <span className="text-2xl">></span>
        </button>
      </div>
    </Layout>
  )
}

export default Index
