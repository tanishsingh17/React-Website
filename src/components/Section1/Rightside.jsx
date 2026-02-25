import React from 'react'
import Rightmain from './Rightmain'

const Rightside = (props) => {
    console.log(props.users);
  return (
    <div id='right'  className='h-full overflow-x-auto rounded-4xl w-2/3 p-6 flex flex-nowrap gap-10'>
        {props.users.map(function(elem, idx){
            return <Rightmain key={idx} id={idx} img = {elem.img} tag = {elem.tag} color= {elem.color} arrowcolor={elem.arrowcolor}/>
        })}
        
    </div>
  )
}

export default Rightside