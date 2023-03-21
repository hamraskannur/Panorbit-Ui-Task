import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MyProfile({ userData }) {
    const navigate = useNavigate()
    const [twoUsers, setTwoUsers] = useState([])
    useEffect(()=>{
        (
            async()=> {
                setTwoUsers([])
                const response = await fetch('https://panorbit.in/api/users.json')
                const data = await response.json();
                let random = []
                 for (let i = 0; i < 2; i++) {
                   random.push(data.users[Math.floor(Math.random() * data.users.length -1)])
                }
                console.log(twoUsers);
                setTwoUsers(random)
            }
        )()
      },[userData])
  return (
    
    <div className='bg-white z-50 shadow px-14 md:mr-16 md:mt-5 m-5 md:m-0 rounded-3xl'>
            <div className='flex justify-center items-center  py-5'>
                <div >
                    <div className='pl-10'>
                        <img className='h-24 w-24 rounded-full object-cover' src={userData?.profilepicture} alt="" />
                    </div>
                    <div className='grid gap-2 mt-2'>
                        <p className='text-center text-1xl'>{userData?.name}</p>
                        <p className='text-center text-1xl text-gray-500'>{userData?.email}</p>
                    </div>
                </div>
            </div>
            {twoUsers.length === 2 ?
                twoUsers?.map((user) => (
                    user!==undefined && <React.Fragment key={user?.id}>
                   <hr   className='mx-5' />
                    <div className='flex justify-center items-center py-3 cursor-pointer ' onClick={() => navigate('/Profile', { state: user })}>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <img className='h-8 w-8 rounded-full object-cover' src={user?.profilepicture} alt="profile" />
                            </div>
                            <div className='text-md font-semibold text-gray-500'>
                                <p>{user?.name}</p>
                            </div>
                        </div>
                    </div>
                </React.Fragment >
                ))
                : null}

            <div className='flex justify-center py-5'>
                <Link to={'/'}>
                    <button className='bg-red-600 px-8 py-2 rounded-full font-semibold text-white'>
                        Sign out
                    </button>
                </Link>
            </div>
        </div>
  )
}
