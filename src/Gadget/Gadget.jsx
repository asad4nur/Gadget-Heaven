import { Link } from "react-router";

const Gadget = ({ gadget }) => {
    const {product_id, product_title, product_image, price } = gadget;
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 justify-items-center ">
            <img className="h-50 " src={product_image} alt="" />
            <div>
                <h3 className="font-bold text-2xl">{product_title}</h3>
                <p className="font-bold text-gray-500 mt-3">Price: {price}</p>
            </div>
            <Link to={`/Gadgets/${product_id}`} className="cursor-pointer text-purple-600 font-bold text-1xl mt-5" >View Details</Link>
        </div>
    );
};

export default Gadget;