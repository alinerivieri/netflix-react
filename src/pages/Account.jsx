import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
  return (
    <>
        <div className='w-full text-white'>
            <img
            className="w-full h-[400px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/61216e4c-b2b3-40e1-85d6-2b13eb86ef2b/BR-pt-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt=""
            />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
            </div>
        </div>
        <SavedShow />
    </>
  )
}

export default Account