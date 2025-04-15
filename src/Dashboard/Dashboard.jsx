import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";
import { useState } from "react";

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState('cart');

    return (
        <div className="bg-gray-100">
            <div className="hero bg-purple-800 py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="space-x-3">
                            <button onClick={() => setActiveTab('cart')} className={`border border-white rounded-3xl text-xl px-8 py-2 font-semibold cursor-pointer ${activeTab === 'cart' ? 'bg-white text-black' : 'text-white'}`}> Cart </button>
                            <button onClick={() => setActiveTab('wishlist')} className={`border border-white font-semibold rounded-3xl text-xl px-8 py-2 cursor-pointer ${activeTab === 'wishlist' ? 'bg-white text-black' : 'text-white'}`}> Wishlist </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                {activeTab === 'cart' && <CartList></CartList>}
                {activeTab === 'wishlist' && <WishList></WishList>}
            </div>

        </div>
    );
};

export default Dashboard;