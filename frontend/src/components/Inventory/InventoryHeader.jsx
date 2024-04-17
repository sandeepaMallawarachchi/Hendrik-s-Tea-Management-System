import { Navbar } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import SearchBar from "./inventorySearchBar";
import logo from "../../images/logo.png"

export default function Header(){

  
    return (
        <div className="fixed top-0 right-0 z-50 w-full" >
            <Navbar fluid rounded  style={{ backgroundColor: "#E5E5E5"}} >
                <div className='ml-10'>
                    <img src={logo} id='logo' alt="logo"  />
                </div>
                <SearchBar />

                <div className="flex md:order-2  mr-20 items-start">
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    <div className="ml-4 flex flex-col">
                        <span className='text-green-500 font-bold'></span>
                        <span className='text-green-400 '></span>
                    </div>
                    <Navbar.Toggle />
                </div>
            </Navbar>
        </div>
    )

    
}