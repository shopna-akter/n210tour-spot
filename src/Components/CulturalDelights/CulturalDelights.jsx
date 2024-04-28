/* eslint-disable react/no-unescaped-entities */


const CulturalDelights = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Cultural Delights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Traditional Arts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Traditional Arts</h3>
                        <p className="text-gray-700">Experience the vibrant tapestry of Southeast Asia's traditional arts, from intricate handwoven textiles to mesmerizing dance performances.</p>
                    </div>
                    {/* Festivals Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Festivals</h3>
                        <p className="text-gray-700">Celebrate the region's diverse cultural heritage at lively festivals showcasing colorful parades, music, and culinary delights.</p>
                    </div>
                    {/* Cuisine Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Cuisine</h3>
                        <p className="text-gray-700">Indulge your taste buds with a culinary journey through Southeast Asia's mouthwatering dishes, blending exotic spices and flavors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CulturalDelights;
