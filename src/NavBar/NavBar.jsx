import { NavLink, useLoaderData, useLocation } from "react-router";
// import './NavBar.css';
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { getCart, getWish } from "../utility/addToDb";

const NavBar = () => {

    useLoaderData();

    const cartItems = getCart();

    const wishItems = getWish();


    const location = useLocation();

    const isHome = location.pathname === '/'

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Statistics", path: "/statistics" },
        { id: 3, name: "Dashboard", path: "/dashboard" },
    ];

    return (
        <div className="">
            <div className={`max-w-[90rem] mx-auto navbar rounded-t-2xl pt-10 justify-between ${isHome ? 'bg-purple-800' : ''}`}>
                <h2 className={`pl-5 font-bold text-2xl ${isHome ? 'text-white' : 'text-black'}`}>Gadget Heaven</h2>

                <ul className="flex gap-3">
                    {
                        routes.map(route => <NavLink key={route.id} to={route.path} className={({ isActive }) => `p-3 rounded-2xl font-medium ${isActive ? isHome ? 'text-white underline' : 'text-black underline' : isHome ? 'text-white' : 'text-black'}`}>{route.name}</NavLink>)
                    }
                </ul>

                <div className="flex gap-3">
                    <div className="relative">
                        <button className="cursor-pointer p-2 w-12 h-12 flex items-center justify-center bg-white rounded-full">
                            <BsCart className="text-3xl" />
                        </button>
                        {
                            cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartItems.length}</span>
                            )
                        }
                    </div>

                    <div className="relative">
                        <button className="cursor-pointer p-2 w-12 h-12 flex items-center justify-center bg-white rounded-full"><CiHeart className="text-3xl" /></button>
                        {
                            wishItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">{wishItems.length}</span>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;