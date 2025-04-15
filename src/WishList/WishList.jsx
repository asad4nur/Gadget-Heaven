import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getWish } from "../utility/addToDb";
import Gadget from "../Gadget/Gadget";
import WishDetails from "../WishDetails/WishDetails";

const WishList = () => {
    const allGadget = useLoaderData();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const addWishItem = getWish();

        const filteredWishItem = allGadget.filter(gadget => addWishItem.includes(gadget.product_id))
        setWishList(filteredWishItem);

    }, [allGadget])
    console.log(allGadget);

    return (
        <div>
            {
                wishList.map((gadget, idx) => <WishDetails key={idx} gadget={gadget}></WishDetails>)
            }
        </div>
    );
};

export default WishList;