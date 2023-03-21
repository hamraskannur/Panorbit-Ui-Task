import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MyProfile from '../MyProfile/MyProfile'
import classes from "./NavBar.module.css"

const NavBar = ({ userData }) => {
    const { pathname}=useLocation()
  const [openProfile, setOpenProfile] = useState(false)
  

  const [head,setHead]=useState(pathname.substring(1))
  
  useEffect(()=>{
    setHead(pathname.substring(1))
  },[pathname])
  
 

  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <div className={classes.head}>
          <h1 className='text-black text-3xl opacity-60'>{head}</h1>
        </div>
        <div>
          <div className='flex gap-3 items-center cursor-pointer' onClick={() => setOpenProfile(!openProfile)}>
            <div>
              <img className='h-8 w-8 rounded-full object-cover' src={userData.profilepicture} alt="profileImg" />
            </div>
            <div className='text-md  text-2xl text-black hidden lg:block'>
              <p>{userData.name}</p>
            </div>
          </div>
          {openProfile &&
            <div className='fixed right-6 transition duration-300 z-50'>
               <MyProfile userData={userData}  />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar