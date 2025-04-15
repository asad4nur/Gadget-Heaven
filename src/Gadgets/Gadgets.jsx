import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import SideMenu from "../SideMenu/SideMenu";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState('All Products');

    const handleFilteredGadgets = (category) => {
        setFilteredGadgets(category);
    }

    useEffect(() => {
        fetch('../../public/gadgetData.json')
            .then(res => res.json())
            .then(data => {
                if(filteredGadgets === 'All Products'){
                    setGadgets(data)
                }else{
                    setGadgets(data.filter(data => data.category === filteredGadgets))
                }
            })
    }, [filteredGadgets])

    return (

        <div className="conatiner">
            <h2 className="mt-10 text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>

            <div className="flex max-w-7xl mx-auto gap-5">

                <div className="h-screen w-[200px] bg-white my-10 p-5 rounded-2xl text-center">

                    <SideMenu handleFilteredGadgets={handleFilteredGadgets} filteredGadgets={filteredGadgets} />

                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 my-10">
                    {
                        gadgets.map((gadget, idx) => <Gadget key={idx} gadget={gadget}></Gadget>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Gadgets;