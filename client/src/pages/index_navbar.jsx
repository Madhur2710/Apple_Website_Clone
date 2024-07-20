
import { DiApple } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { HiBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { BsGearWideConnected } from "react-icons/bs";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export default function IndexNavbar(){
    document.title='Apple Clone'
    function MS(){
        return(<div>
            <header className="flex text-gray-600 justify-between mx-auto py-2.5 items-center text-sml max-w-5xl">
                <DiApple size={20} className="flex mx-2 cursor-pointer" />
                <span className="medium:hidden grow"></span>

                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Store</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Mac</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">iPad</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">iPhone</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Watch</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">AirPods</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">TV & Home</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Entertainment</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Accessories</a>
                <a href="#" className="hidden medium:flex cursor-pointer hover:text-black transition-all">Support</a>
                <IoIosSearch size={20} className="mx-2 cursor-pointer"/>
                <AiOutlineShopping size={20} className=" mx-2 cursor-pointer" onClick={()=>{setCart()}}/>
                <HiBars2 className="medium:hidden mx-2 cursor-pointer" onClick={()=>{setShowMenu(true)}}/>
            </header>
        </div>);
    } 
    
    function SS(){
        return(<div className="z-10 flex-col space-y-3 font-semibold text-gray-800 justify-between bold text-3xl ml-12 ">
                        <a className="flex block ">
                            <span className="grow"></span>
                            <RxCross1 size={20} className="cursor-pointer mr-4 mt-4 "onClick={()=>{setShowMenu(false)}} />
                        </a>
                        <a href="#" className="cursor-pointer block">Store</a>
                        <a href="#" className="cursor-pointer block">Mac</a>
                        <a href="#" className="cursor-pointer block">iPad</a>
                        <a href="#" className="cursor-pointer block">iPhone</a>
                        <a href="#" className="cursor-pointer block">Watch</a>
                        <a href="#" className="cursor-pointer block">AirPods</a>
                        <a href="#" className="cursor-pointer block">TV & Home</a>
                        <a href="#" className="cursor-pointer block">Entertainment</a>
                        <a href="#" className="cursor-pointer block">Accessories</a>
                        <a href="#" className="cursor-pointer block">Support</a>
                    </div>
        );
    };

    const navigate = useNavigate();


    function SS2(){
        return(
            <div className="mx-auto max-w-5xl px-3 pt-5 text-sm text-gray-600 space-y-3">
                <div className="cursor-default">My Profile</div>
                <a className="hover:text-black cursor-pointer block">
                    <BsBoxSeam size={12} className="inline mr-3"/>
                    <span>Orders</span>
                </a>
                <a className="hover:text-black cursor-pointer block">
                    <CiBookmark size={12} className="inline mr-3"/>
                    <span>Your Saves</span>
                </a>
                <a className="hover:text-black cursor-pointer block">
                    <BsGearWideConnected size={12} className="inline mr-3"/>
                    <span>Account</span>
                </a>
                <a className="hover:text-black cursor-pointer block">
                    <PiUserCircleFill size={12} className="inline mr-3"/>
                    <span onClick={()=>{navigate("/login")}}>Sign in</span>
                </a>
            </div>
        );
    }

    const [showMenu,setShowMenu] = useState(false);
    const [showCart,setShowCart] = useState(false);

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.screen.width>=834){
                setShowMenu(false);
            }
            if(window.screen.width==835){
                setShowCart(false);
            }
        })
    })

     function setCart(){
        if(showCart==true){
            setShowCart(false);
        }else{
            setShowCart(true);
        }
     }



    if(showMenu){
        return(
           <SS />
        );
    }
    else if(showCart){
        return(
            <div>
                <MS />
                <SS2 />
            </div>
        );
    }
    else{
        return (
            <MS />
        );
    }
}