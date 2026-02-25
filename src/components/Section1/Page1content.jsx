import React from 'react'
import Leftside from './leftside'
import Rightside from './rightside'

const Page1content = (props) => {
  return (
    <div className='h-[90vh] flex gap-10 px-10 py-10 items-center pb-20'>
        <Leftside/>
        <Rightside users = {props.users}/>
    </div>
  )
}

export default Page1content