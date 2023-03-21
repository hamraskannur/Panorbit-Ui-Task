import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { CgProfile  } from "react-icons/cg"
import { RiCalendarTodoFill  } from "react-icons/ri"
import { GrGallery  } from "react-icons/gr"
import { BsFillSignpostSplitFill  } from "react-icons/bs"
import classes from "./LeftBar.module.css"
import { Link, useLocation } from "react-router-dom";

export default function LeftBar() {
    const {state, pathname}=useLocation()
  const sectionNames = [
    { name: "Profile", link: "/profile" ,icon:CgProfile},
    { name: "Posts", link: "/Posts" ,icon: BsFillSignpostSplitFill},
    { name: "Gallery", link: "/Gallery" ,icon:GrGallery},
    { name: "ToDo", link: "/ToDo",icon: RiCalendarTodoFill},
  ];
  
  return (
    <div className='w-full  md:w-96  md:h-full static'>
    <div className="flex md:h-full  align-middle md:pl-7">
      <nav className={classes.main}>
        <ul className={classes.ulClass}>
          {sectionNames.map((item, index) => (
            <Link to={item.link} state={state} key={index} >
                <>
                <div className="hidden md:block">
              <li style={{borderRadius:" 20px 0 0 20px"}} className={classes.barItem }>
                {pathname === item?.link && (
                  <div className={classes.rightCurve}>
                    <span className="pl-4">
                      <AiOutlineRight />
                    </span>
                  </div>
                )}
                <h1
                  className={` text-xl ml-8 hover:text-white ${
                    pathname === item?.link
                      ? "text-white font-semibold"
                      : "text-white opacity-60"
                  }`}
                >
                  {item.name}
                </h1>
              </li>
              {index !== sectionNames.length - 1 && (
                <hr className="hidden md:block my-2 border-gray-300 w-3/4 mx-auto ml-8" />
              )}
              </div>

               <div className={`${pathname === item?.link? "bg-[#bbc0c7]":"bg-white" } md:hidden p-2 hover:bg-[#bbc0c7]  text-black rounded-md `}>
               {React.createElement(item.icon, { size: "30" })}
               </div>
              </>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
    </div>
  );
}
