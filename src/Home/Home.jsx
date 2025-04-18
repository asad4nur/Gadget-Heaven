import Gadgets from "../Gadgets/Gadgets";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Hero></Hero>
            <Gadgets></Gadgets>

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

export default Home;