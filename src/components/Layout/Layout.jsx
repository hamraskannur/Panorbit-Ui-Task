import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Chat from '../chat/Chat'
import LeftBar from '../leftBar/LeftBar'
import Message from '../Message/Message'
import NavBar from '../NavBar/NavBar'

export default function Profile(props) {
    const { state } = useLocation()
  const [userData,setUserData] = useState(state)
  const [user,setUser] = useState()
  const [showMessage,setShowMessage]=useState(false)
  useEffect(()=>{
    setUserData(state)
  },[state])
  return (
    <div className='md:py-5 md:px-5'>
    <div className='h-[100vh] rounded-3xl md:flex  '>
        <LeftBar/>
      <div className=' md:w-10/12 h-full px-10  py-2  '>
          <NavBar userData={userData} />
          {props.children}
          <Chat setUser={setUser} setShowMessage={setShowMessage}/>
         {user && showMessage && <Message user={user} setShowMessage={setShowMessage}/>}
      </div>
    </div>
  </div>
  )
}
