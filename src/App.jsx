import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    { 
      img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '', 
      color: 'blue',
      tag:'Satisfied',
      arrowcolor: 'blue'
    },
    {
      img: 'https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '', 
      color: 'grey',
      tag:'Underserved',
      arrowcolor: 'grey'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675713553725-e0fc8f253d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '', 
      color: 'royalblue',
      tag:'Underbanked',
      arrowcolor: 'royalblue'
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '', 
      color: 'lightgreen',
      tag:'Understress',
      arrowcolor: 'lightgreen'
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
    </div>
  )
}

export default App