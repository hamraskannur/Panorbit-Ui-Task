import React from "react";

export default function OneUserProfile({ userData }) {
  return (
    <div className="lg:flex   w-full   mt-10 grid-cols-2  ">
      <div className="h-full  lg:w-4/12 grid ">
        <div className="w-full  flex justify-center">
          <div>
            <img
              className="h-44 w-44 rounded-full object-cover"
              src={userData?.profilepicture}
              alt=""
            />
            <h4 className="text-center text-gray-600 font-bold my-2 text-xl">
              {userData?.name}
            </h4>
          </div>
        </div>
        <div>
          <div className="w-full py-1 text-center pb-5">
            <ul className="grid gap-2">
              <p className="text-gray-400 font- text-xl">
                username :
                <span className="text-gray-600 font-bold">
                  
                  {userData?.username}
                </span>
              </p>
              <p className="text-gray-400 font- text-xl">
                E-mail:
                <span className="text-gray-600 font-bold">
                  
                  {userData?.email}
                </span>
              </p>
              <p className="text-gray-400 font- text-xl">
                Phone :
                <span className="text-gray-600 font-bold">
                  
                  {userData?.phone}
                </span>
              </p>
              <p className="text-gray-400 font- text-xl">
                Website :
                <span className="text-gray-600 font-bold">
                  
                  {userData?.website}
                </span>
              </p>
            </ul>
          </div>
          <hr className="mx-5 my-2" />
          <h5 className="text-center text-gray-400  text-xl">company</h5>
          <div className="w-full py-1 text-center grid gap-5">
            <p className="text-gray-400 font- text-xl">
              Name :
              <span className="text-gray-600 font-bold">
                {userData?.company?.name}
              </span>
            </p>
            <p className="text-gray-400 font- text-xl">
              Catchphrase:
              <span className="text-gray-600 font-bold">
                {userData?.company?.Catchphrase}
              </span>
            </p>
            <p className="text-gray-400 font- text-xl">
              bs :
              <span className="text-gray-600 font-bold">
                {userData?.company?.bs}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:border-l-2 px-2 border-gray-400 lg:w-8/12 flex justify-center ">
        <div>
          <span className="flex justify-center ">
            <div className="grid gap-2 pl-10 mb-40 lg:mb-16">
              <p className=" text-gray-400 text-xl">Address :</p>
              <div className="w-full py-1 px-10 grid gap-2">
                <p className="text-gray-400 font- text-xl">
                  Street :
                  <span className="text-gray-600 font-bold">
                    {userData?.address?.street}
                  </span>
                </p>
                <p className="text-gray-400 font- text-xl">
                  Suite:
                  <span className="text-gray-600 font-bold">
                    {userData?.address?.suite}
                  </span>
                </p>
                <p className="text-gray-400 font- text-xl">
                  City :
                  <span className="text-gray-600 font-bold">
                    
                    {userData?.address?.city}
                  </span>
                </p>
                <p className="text-gray-400 font- text-xl">
                  Zipcode :
                  <span className="text-gray-600 font-bold">
                    
                    {userData?.address?.zipcode}
                  </span>
                </p>
              </div>
              <div className="p-2">
                <div>
                <div >
                <iframe className="w-[50vh]  lg:w-[80vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647100.4087135384!2d76.3767635606899!3d11.52009531156279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1679390787229!5m2!1sen!2sin" width="660" height="350" style={{border:"0;"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className="flex justify-end gap-5 text-xs">
                  <p className="text-gray-400 ">
                    Lat:
                    <span className="text-gray-600 font-bold">
                      {userData?.address?.geo?.lat}
                    </span>
                  </p>
                  <p className="text-gray-400 ">
                    Long:
                    <span className="text-gray-600 font-bold">
                      {userData?.address?.geo?.lng}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
