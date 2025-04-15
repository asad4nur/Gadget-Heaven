import { useLoaderData, useParams } from "react-router";
import { GoStarFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { addCart, addWish } from "../utility/addToDb";
import { useState } from "react";

const GadgetDetails = () => {
    const { product_id } = useParams();
    const [cartPrice, setCartPrcie] = useState(0);

    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === product_id)

    const { product_title, product_image, price, availability, Specification, rating, description } = gadget;

    const handleAddPrice = price => {
        console.log('Marked as read', price);
        const newPrice = cartPrice + price;
        setCartPrcie(newPrice);
    }


    return (


        <div className="relative bg-gray-200">

            {/*Hero Section*/}
            <div className="hero bg-purple-800 pb-60 pt-10 text-white ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Product Details</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>

            {/*Product Details*/}
            <div className="max-w-7xl mx-auto lg:flex rounded-2xl bg-white mb-20 -mt-60 shadow-xl">

                {/*Product Image*/}
                <div className=" p-10">
                    <img className="w-150 border border-gray-200 rounded-2xl" src={product_image} alt="" />
                </div>

                {/*Product Details Informations*/}
                <div className="p-10">
                    <h2 className="text-3xl font-bold mb-5">{product_title}</h2>
                    <p className="font-bold mb-3 text-2xl"> Price: $ <span className="text-red-600">{price}</span></p>

                    {
                        availability > 0 ?(<button className="btn btn-outline btn-success mb-3 rounded-3xl"> In Stock{availability}</button>) 
                        : (<button className="btn btn-outline btn-error mb-3 rounded-3xl"> Out Of Stock {availability}</button>)
                    }

                    <p className="mb-3">Description: {description}</p>

                    <div className="py-5">
                        <ol className="list-decimal list-inside text-xl">
                            <p className="font-bold mb-3">Specification</p>
                            {
                                Specification.map((item, idx) => (
                                    <li key={idx}> {item}</li>
                                ))
                            }
                        </ol>
                    </div>


                    <div className="my-3">
                        <p className="flex gap-2 items-center font-bold ">Rating <GoStarFill className="text-orange-400" /> </p>
                        <div className="flex gap-3 ">
                            <div className="rating flex items-center">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <button className="btn  rounded-3xl">{rating}</button>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button onClick={() => addCart(product_id)} className="btn bg-purple-800 text-white font-bold rounded-3xl text-xl">Add to Cart <BsCart3 className="text-xl" /></button>
                        <button onClick={() => addWish(product_id)} className="cursor-pointer"><CiHeart className="border border-gray-500 text-4xl p-1 rounded-full" /></button>
                        <button onClick={() => handleAddPrice(price)} className="btn bg-purple-800 text-white font-bold rounded-3xl text-xl">Add price <BsCart3 className="text-xl" /></button>

                    </div>
                </div>
            </div>

            {/*Gadget Heaven*/}
            <div className="hero bg-white py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Gadget Heaven</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GadgetDetails;