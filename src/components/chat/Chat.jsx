import React, { useEffect, useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Chat = ({ setUser ,setShowMessage}) => {
  const [openChats, setOpenChats] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      setUsers(data?.users);
    };
    fetchUsersData();
  }, []);
 const  ClickHandler=(user)=>{
    setUser(user)
    setShowMessage(true)
 }
  return (
    <div className=" fixed right-0 md:mr-14 bottom-20 md:bottom-0 bg-white  w-full shadow-md shadow-gray-400 rounded-t-xl md:w-80 ">
      <div
        className="  bg-[#0052cc] rounded-t-xl py-3 px-5 text-white flex gap-4 justify-between w-full cursor-pointer"
        onClick={() => setOpenChats(!openChats)}
      >
        <div className="flex gap-2  ">
          <span className=" mt-2">
            {React.createElement(BsChatRight, { size: "25" })}
          </span>
          <p className="text-2xl">Chats</p>
        </div>
        <div className="hover:shadow-inner  shadow-gray-600 px-1 py-1 rounded-full ">
          {!openChats
            ? React.createElement(IoIosArrowDown, { size: "25" })
            : React.createElement(IoIosArrowUp, { size: "25" })}
        </div>
      </div>
      {openChats && (
        <div className="px-2 max-h-80 grid gap-2 overflow-y-scroll ">
          {users.length !== 0
            ? users.map((user,index) => (
                <div key={user.id} className="flex justify-between mr-4">
                  <div
                    
                    onClick={() => ClickHandler(user)}
                    className="flex gap-3 items-center cursor-pointer py-1 px-2 "
                  >
                    <div>
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={user.profilepicture}
                        alt=""
                      />
                    </div>
                    <div className="text-md font-semibold text-gray-500 ">
                      <p>{user.name}</p>
                    </div>
                  </div>
                  <div className="text-md  text-gray-500 mt-2 ">
                  <span className={`${ index%3 ===0? " text-green-500" : " text-[#f1f0f0]" }    rounded-full`}> {React.createElement(GoPrimitiveDot, { size: "20" })}</span>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};
export default Chat;
