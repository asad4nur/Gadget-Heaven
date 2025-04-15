
const CartDetails = ({ gadget }) => {
    const { product_title, product_image, price, description } = gadget;
    return (
        <div>
            <div className="max-w-7xl mx-auto h-52 flex bg-white my-5 rounded-2xl">

                <img className="w-50 m-3 object-cover" src={product_image} alt="Product Image" />

                <div className="space-y-3 flex flex-col justify-center">
                    <h2 className="font-bold text-2xl">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold text-1xl"> Price: {price}</p>
                </div>

            </div>
        </div>
    );
};

export default CartDetails;