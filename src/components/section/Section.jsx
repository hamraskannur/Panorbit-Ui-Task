import React, { useEffect, useState } from "react";
import User from "../user/User";

export default function Section() {
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    (
      async()=>{
        const response = await fetch('https://panorbit.in/api/users.json');
        const data = await response.json();
        setUsers(data.users)
        return data.users;
      }
    )().catch((error) => {
		  console.error(error);
		});
    
  },[])

  return (


    <div className="border-2 shadow-lg  rounded-3xl w-[580px] h-[550px] bg-white ">
      <div className="top text-center  rounded-t-3xl bg-slate-200 pt-5 pb-1 br-t-inherit">
        <h1 className='m-6 md:m-7 text-2xl font-semibold text-gray-600'>Select an account</h1>
      </div>
      <div className="rounded-b-lg  h-[380px] overflow-y-scroll">
      {users.length>0 && users.map((user)=>(<User key={user.id} user={user}/>))}
      </div>
    </div>
  );
}
 