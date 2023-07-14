import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
       
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0
    z-50">
        <header className="flex justify-between items-center 
        px-3 max-w-6xl mx-auto">

            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" 
                className="h-5 cursor-pointer"
                onClick={()=>navigate("/")}
                />
            </div>
            <dir>
                <ul className= "flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                    ${pathMathRoute("/") ? "text-zinc-900 border-b-4 border-red-500":"border-b-[3px] border-b-transparent"}`}
                    onClick={()=>navigate("/")}
                    >Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                    
                    ${pathMathRoute("/offers") ? "text-zinc-900 border-b-4 border-red-500":"border-b-[3px] border-b-transparent"}`}
                    onClick={()=>navigate("/offers")}
                    >Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                    ${pathMathRoute("/sign-in") ? "text-zinc-900 border-b-4 border-red-500":"border-b-[3px] border-b-transparent"}`}
                    onClick={()=>navigate("/sign-in")}
                    >Sign in</li>
                </ul>
            </dir>
        </header>
    </div>
  )
}
