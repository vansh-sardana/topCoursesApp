import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify'

const Card = ({course}) => {
  const [like, setLike]= useState(true);
  function clickHandler(){
    like? toast.warning("Like removed") : toast.success("Liked successfully");
    setLike(!like);
  }
  
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden text-white bg-opacity-80">
      <div className="relative">
        <img src={course?.image?.url} alt="" srcset="" />
        <button className= " bg-white absolute w-[40px] h-[40px] rounded-full right-2 -bottom-3 grid place-content-center transition-all duration-300" onClick={clickHandler}> 
          {like? <FcLike fontSize="1.75rem"/>: <FcLikePlaceholder fontSize="1.75rem"/>}
          
        </button>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold text-lg leading-6">{course?.title}</h4>
        <p className="mt-2 text-white">
          {course?.description.length>100? (course?.description.substr(0,100)+'...'):(course?.description)}</p>
      </div>
    </div>
  )
}

export default Card
