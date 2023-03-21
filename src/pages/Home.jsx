import React from "react";
import Section from "../components/section/Section"
export default function Home() {
  return (
    <>
      <div className="fixed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        height="700"
      >
        <path
          fill="#5000ca"
          d="M0,160L30,186.7C60,213,120,267,180,261.3C240,256,300,192,360,160C420,128,480,128,540,149.3C600,171,660,213,720,234.7C780,256,840,256,900,250.7C960,245,1020,235,1080,224C1140,213,1200,203,1260,181.3C1320,160,1380,128,1410,112L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      </div>
      <div className="pt-20 p-4 w-full h-full flex absolute justify-center items-center">
      <Section/>
      </div>
    </>
  );
}
