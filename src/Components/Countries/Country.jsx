import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
const Country = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-blush-zeta.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-2"><Typewriter
                words={['Countries Section']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            /></h1>
            <p className="lg:mx-40 font-medium mb-8">Embark on a virtual voyage through six enchanting countries with our country section. From the iconic landmarks of France to the artistic treasures of Italy, each country offers a unique blend of culture, history,br and natural beauty. Explore the charming streets of Spain, uncover the secrets of England past, wander through the picturesque landscapes of the Netherlands, and discover the breathtaking vistas of Switzerland. Whether you are a seasoned traveler or an armchair explorer, our country section promises to inspire your next adventure.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    countries.map(country => (
                        <div key={country._id}>
                            <div className="mx-4">
                                <div>
                                    <div className="mb-4">
                                        <div className="card border bg-base-100 shadow-xl">
                                            <figure>
                                                <img src={country.image} className='h-60' />
                                            </figure>
                                            <div className="card-body text-left">
                                                <div className="text-center mr-2">
                                                    <h2 className="font-bold text-xl">{country.name}</h2>
                                                </div>
                                                <p>{country.description}</p>
                                                <Link className="btn btn-info"
                                                 to={`/country/${country.name}`}>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default Country;