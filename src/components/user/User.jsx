import React from "react";
import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <>
      <Link
        to={"/profile"}
        state={user}
        className="flex gap-3 p-4 align-middle font-semibold md:text-xl text-gray-600 px-14 cursor-pointer"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user.profilepicture}
          alt="profile pic "
        />
        <p className="my-auto">{user.name}</p>
      </Link>
      <hr className=" w-5/6 mx-auto text-gray-600" />
    </>
  );
}
