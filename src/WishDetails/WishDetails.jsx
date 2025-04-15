
import { BsCart3 } from "react-icons/bs";
const WishDetails = ({ gadget }) => {

    const { product_id, product_title, product_image, price, description,  } = gadget;

    const getCart = () => {
        const getCartItems = localStorage.getItem('add-cart');
        if (getCartItems) {
            const result = JSON.parse(getCartItems);
            return result;
        }
        else {
            return [];
        };

    };

    const addCart = (product_id) => {
        const cart = getCart();
        if (cart.includes(product_id)) {
            alert('Already Exist');
        }
        else {
            cart.push(product_id)
            const cartStr = JSON.stringify(cart)
            localStorage.setItem('add-cart', cartStr);
        }
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto h-52 flex bg-white my-5 rounded-2xl ">

                <img className="w-50 m-3 object-cover" src={product_image} alt="Product Image" />

                <div className="space-y-3 flex flex-col items-start justify-center  ">
                    <h2 className="font-bold text-2xl">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold text-1xl"> Price: {price}</p>
                    <button onClick={() => addCart(product_id)} className="btn bg-purple-800 text-white font-bold rounded-3xl text-xl">Add to Cart <BsCart3 className="text-xl" /></button>
                </div>

            </div>
        </div>
    );
};

export default WishDetails;