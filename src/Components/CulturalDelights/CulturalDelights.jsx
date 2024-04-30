/* eslint-disable react/no-unescaped-entities */


const CulturalDelights = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Success Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://i.ibb.co/yWR8BCV/user.png" alt="Users" className="mt-4 h-[300px] md:w-full mb-4 w-96 md:h-[200px]" />
                        <h3 className="text-xl font-semibold mb-4">Users</h3>
                        <p className="text-gray-700">Total Users: 2000</p>
                        <p className="text-gray-700">Active Users: 1500</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://i.ibb.co/HHrv3VV/istockphoto-185006396-1024x1024.webp" alt="Deliveries" className="mt-4 md:w-full mb-4 h-[300px] w-96 md:h-[200px]" />
                        <h3 className="text-xl font-semibold mb-4">Deliveries</h3>
                        <p className="text-gray-700">Total Deliveries: 1500</p>
                        <p className="text-gray-700">Successful Deliveries: 1000</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://i.ibb.co/BgSfxXP/istockphoto-1463624487-1024x1024.webp" alt="Revenue" className="mt-4 w-full h-[200px]" />
                        <h3 className="text-xl font-semibold mb-4">Revenue</h3>
                        <p className="text-gray-700">Total Revenue: €5000</p>
                        <p className="text-gray-700">Monthly Revenue: €1000</p>
                    </div>
                    <div className="bg-white rounded-lg text-center shadow-md p-6">
                        <img src="https://i.ibb.co/B3cJssj/istockphoto-117247268-1024x1024.webp" alt="Growth" className="mt-4 w-full h-[200px]" />
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
