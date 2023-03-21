import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import OneUserProfile from '../components/OneUserProfile/OneUserProfile'

export default function Profile() {
    const { state } = useLocation()
    const [userData,setUserData]=useState(state)
    useEffect(()=>{
        setUserData(state)
    },[state])
  return (
    <OneUserProfile userData={userData}/>
  )
}
