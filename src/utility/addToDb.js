import { toast } from "react-toastify";

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
        toast('Already Exist');
    }
    else {
        cart.push(product_id);
        const cartStr = JSON.stringify(cart);
        localStorage.setItem('add-cart', cartStr);
        toast('Succesfully added to the cart');
    }
}

const getWish = () => {
    const wishItems = localStorage.getItem('wish-list');
    if (wishItems) {
        const wishParse = JSON.parse(wishItems);
        return wishParse;
        
    }
    else {
        return [];
    }
}

const addWish = (product_id) => {
    const wishGetItems = getWish();
    if (wishGetItems.includes(product_id)) {
        toast('Already Exist');
    }
    else {
        wishGetItems.push(product_id);
        const wishStr = JSON.stringify(wishGetItems);
        localStorage.setItem('wish-list', wishStr)
        toast('Succesfully added to the wishlist');
    }
}
export { getCart, addCart, addWish,  getWish}