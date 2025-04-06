import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
const FreeTrialButton = ({btn1, btn2}) =>{
  return(
   <>
   <div className="hidden lg:flex lg:flex-1 lg:items-center lg:space-x-6">
    {btn1 &&
                  <Link href="/login" className="text-xl font-bold px-5 py-2 bg-white text-orange-500 border-solid border-2 border-orange-500 rounded-sm  hover:text-gray-800">
                    {btn1}
                  </Link>
             }

                  <a href="#" className=" font-bold flex gap-2 justify-items-center bg-orange-500 py-3 px-8 text-white hover:text-gray-200 ">
                  
                  <FaCalendarAlt className="text-xl"/>  <p className="text-xl">{btn2}</p>
                  </a>
                </div></>
  )
}

export default FreeTrialButton;