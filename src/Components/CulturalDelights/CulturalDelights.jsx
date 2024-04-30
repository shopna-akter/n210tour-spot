/* eslint-disable react/no-unescaped-entities */


const CulturalDelights = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Success Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://via.placeholder.com/400x250" alt="Users" className="mt-4 w-full h-auto" />
                        <h3 className="text-xl font-semibold mb-4">Users</h3>
                        <p className="text-gray-700">Total Users: 2000</p>
                        <p className="text-gray-700">Active Users: 1500</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://via.placeholder.com/400x250" alt="Deliveries" className="mt-4 w-full h-auto" />
                        <h3 className="text-xl font-semibold mb-4">Deliveries</h3>
                        <p className="text-gray-700">Total Deliveries: 1500</p>
                        <p className="text-gray-700">Successful Deliveries: 1000</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://via.placeholder.com/400x250" alt="Revenue" className="mt-4 w-full h-auto" />
                        <h3 className="text-xl font-semibold mb-4">Revenue</h3>
                        <p className="text-gray-700">Total Revenue: €5000</p>
                        <p className="text-gray-700">Monthly Revenue: €1000</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://via.placeholder.com/400x250" alt="Growth" className="mt-4 w-full h-auto" />
                        <h3 className="text-xl font-semibold mb-4">Growth</h3>
                        <p className="text-gray-700">Monthly Growth: 10%</p>
                        <p className="text-gray-700">Annual Growth: 50%</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CulturalDelights;
