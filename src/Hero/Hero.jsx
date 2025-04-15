const Hero = () => {
    return (
        <div className="max-w-[90rem] mx-auto relative">
            <div className="hero bg-purple-800 pb-70 rounded-b-3xl">
                <div className="hero-content text-center text-white">
                    <div className="max-w-md max-w-7xl mx-auto rounded-2xl">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-white text-purple-800 rounded-3xl">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="-mt-65 justify-items-center ">
                <img className="w-[70rem] h-[30rem] object-cover border-5 border-white rounded-4xl p-4" src="https://i.ibb.co.com/84YV6Dmj/banner.jpg" alt="bannar" />
            </div>
        </div>
    );
};

export default Hero;