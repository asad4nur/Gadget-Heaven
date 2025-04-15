import { useLoaderData } from "react-router";
import { getCart } from "../utility/addToDb";
import { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";
import { MdSort } from "react-icons/md";
import PurchaseModal from "../PuchaseModal/PurchaseModal";

const CartList = () => {
    const [cartData, setCartData] = useState([]);
    const allGadgets = useLoaderData();
    const [cartPrice, setCartPrice] = useState(0);
    const [sort, setSort] = useState('')
    const [showModal, setShowModal] = useState(false);

    const handlePurchase = () => {
        setShowModal(false);
    }

    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === 'price') {
            const sortedPrice = [...cartData].sort((a, b) => b.price - a.price);
            setCartData(sortedPrice);
        }

        if (sortType === 'rating') {
            const sortedPrice = [...cartData].sort((a, b) => b.rating - a.rating);
            setCartData(sortedPrice);
        }
    }


    useEffect(() => {
        const cartItems = getCart();

        const filteredCart = allGadgets.filter(gadget =>
            cartItems.includes(gadget.product_id)
        );

        const totalPrice = filteredCart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        setCartPrice(totalPrice);

        setCartData(filteredCart);
    }, [allGadgets]);


    return (
        <div className="max-w-7xl mx-auto">

            <div className=" max-w-6xl mx-auto my-5 flex justify-between">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex items-center justify-center space-x-10">
                    <p className="font-bold text-2xl">Total Cost: {cartPrice}</p>
                    <details className="dropdown cursor-pointer font-bold text-purple-600">
                        <summary className="btn m-1">
                            {
                                sort ? `Sort By: ${sort}` : 'Sort'
                            }
                            <MdSort className=" ml-2 text-2xl" /> </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleSort('price')}><a>Price</a></li>
                            <li onClick={() => handleSort('rating')}><a>Rating</a></li>
                        </ul>
                    </details>
                    <button onClick={() => setShowModal(true)} className="cursor-pointer font-bold flex rounded-3xl bg-green-700 text-white py-3 px-3">Purchase </button>
                </div>
            </div>
            <PurchaseModal isOpen={showModal} onClose={()=> setShowModal(false)} onConfirm={handlePurchase}></PurchaseModal>

            {cartData.length > 0 ?
                <div className=" max-w-6xl mx-auto">
                    {
                        cartData.map((gadget, idx) => <CartDetails key={idx} gadget={gadget}></CartDetails>)
                    }
                </div> : <p>Items Not yet selected</p>
            }
        </div>
    );
};

export default CartList;
