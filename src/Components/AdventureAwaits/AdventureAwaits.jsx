/* eslint-disable react/no-unescaped-entities */
const AdventureAwaits = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-16 text-gray-900">Embark on the EuroQuest</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-8">
                        <div className="w-full mb-6">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Welcome to Europe</h2>
                            <p className="mb-4">From the romantic streets of Paris to the ancient ruins of Athens, Europe offers an unparalleled blend of history, culture, and natural beauty.</p>
                            <p className="mb-4">Begin your journey in the majestic cities of Western Europe, where grand architecture and centuries-old traditions await. Marvel at the Eiffel Tower in Paris, stroll along the canals of Venice, or explore the historic landmarks of London.</p>
                            <p className="mb-4">As you venture eastward, immerse yourself in the rich tapestry of Central and Eastern Europe. Discover the fairy-tale castles of Germany, wander through the medieval streets of Prague, or witness the stunning landscapes of the Swiss Alps.</p>
                        </div>
                        <div className="w-full mb-6">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Culinary Delights</h2>
                            <p className="mb-4">Don't forget to indulge your taste buds with the culinary delights of Italy, sip wine in the vineyards of France, and sample traditional delicacies across the continent. Your Continental Wonders adventure awaits!</p>
                        </div>
                        <div className="w-full mb-6">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Unforgettable Experiences</h2>
                            <p className="mb-4">Whether you're a history enthusiast, a foodie, or an outdoor adventurer, Europe offers something for everyone. Explore ancient ruins, admire masterpieces of art and architecture, or simply soak in the breathtaking scenery of the European countryside.</p>
                            <p className="mb-4">Discover the charm of quaint villages, bustling cities, and idyllic coastal towns as you journey through the diverse landscapes of Europe. From the sun-kissed beaches of the Mediterranean to the snow-capped peaks of the Alps, each destination promises a unique and unforgettable experience.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-10">
                            <img src="https://i.ibb.co/10qrhBJ/slide-01.jpg" alt="European Landmarks" className="w-full h-80 object-cover object-center" />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://i.ibb.co/Xj2CzLJ/lake-tahoe.jpg" alt="European Cuisine" className="w-full h-80 object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdventureAwaits;