import Layout from '../components/Layout'

import React from 'react'

const ContactUs = () => {
  return (
    <Layout>
      <div className="flex w-full">

        <div className="w-1/2 flex flex-col items-center p-8 m-4 border border-gray-200 bg-white rounded-lg shadow-xl">
          <h1 className="text-6xl">Reach Out</h1>
          <h2 className="text-3xl mb-8">We love to talk shop</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-1/2 flex flex-col items-center p-4 m-4 border border-gray-200 bg-white rounded-lg shadow-xl">
          <img src={'/board.jpg'}></img>
        </div>

      </div>

      <div className="w-1/2 flex flex-col items-center p-8 m-4 border border-gray-200 bg-white rounded-lg shadow-xl">
        <h1 className="text-6xl">Contact Info</h1>
        <p>questions@boards.ca</p>
        <p className='mb-4'>123-456-7890</p>
        <p>Phone hours:</p>
        <ul>
          <li>Weekdays: 9am-9pm</li>
          <li>Weekends: 12pm-5pm</li>
        </ul>
      </div>

    </Layout>
  )
}

export default ContactUs
