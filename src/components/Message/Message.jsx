import React, { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { RxCross1 } from 'react-icons/rx'

export default function Message({ user ,setShowMessage}) {
  const [openMessage, setOpenMessage] = useState(true);
  return (
    <div className="fixed md:right-80 right-0 md:mr-10  bottom-20 md:bottom-0 bg-white shadow-md shadow-gray-400  rounded-t-xl w-full  md:w-64">
      <div
        className="bg-blue-600 rounded-t-xl py-3 px-5 font-bold text-white flex gap-2 justify-between w-full"
      >
        <div onClick={() => setOpenMessage(!openMessage)} className="flex gap-3 items-center cursor-pointer">
          <div>
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={user.profilepicture}
              alt="profileImg"
            />
          </div>
          <div className="text-xs">

            <p>{user.name}</p>
          </div>
        </div>
            <div onClick={() => setOpenMessage(!openMessage)} className="flex">

          <div className="hover:shadow-inner   shadow-gray-600 px-1 py-1 rounded-full cursor-pointer ">
            {!openMessage
              ? React.createElement(IoIosArrowDown, { size: "25" })
              : React.createElement(IoIosArrowUp, { size: "25" })}
          </div>
            </div>
          <div onClick={()=>setShowMessage(false)} className="hover:shadow-inner  shadow-gray-600 px-1 py-1 rounded-full cursor-pointer ">
            {React.createElement(RxCross1, { size: "25" })}
          </div>
      </div>
      {openMessage && (
        <>
          <div className="p-7 pb-12 text-[#6d6d6d] px-5 h-60 grid gap-2 overflow-y-scroll">
            <div className="bg-[#f1f1f1] py-5 px-2 mr-10 rounded-md">
              Lorem ipsum dolor
            </div>
            <div className="bg-[#f1f1f1]  py-5   px-2 mr-10 rounded-md">
              Lorem ipsum dolor
            </div>
            <div className="flex mt-2 justify-center items-center">
              <p>9:16 PM</p>
            </div>
            <div className="bg-[#f1f1f1]  py-5 px-2 ml-10 rounded-md">
              Lorem ipsum dolor
            </div>
            <div className="bg-[#f1f1f1]  py-5  px-2 ml-10 rounded-md">
              Lorem ipsu
            </div>
          </div>
          <div className="flex w-full bg-white border-t-2 px-2 bottom-20  md:bottom-0 border-opacity-20  h-8 border-black md:w-64 fixed overflow-hidden  ">
            <div className="w-full ">
              <input className=" outline-none w-full" />
            </div>
            <div className="text-blue-700 ">
              {React.createElement(IoIosArrowForward, { size: "25" })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
