
const SideMenu = ({ handleFilteredGadgets, filteredGadgets }) => {

    return (
        <div className="space-y-2">
            {
                ['All Products', 'Laptop', 'Airbuds', 'Smartwatch', 'iPhone'].map(item => <button className={`btn ${filteredGadgets === item ? 'btn-active bg-purple-800 text-white' : ''} rounded-3xl`} key={item} onClick={()=> handleFilteredGadgets(item)} >{item}</button>)
            }
        </div>
    );
};

export default SideMenu;