const PurchaseModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h3 className="text-xl font-bold mb-4">Confirm Purchase</h3>
                <p className="mb-6">Are you sure you want to purchase these items?</p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
