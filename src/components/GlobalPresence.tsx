export default function GlobalPresence() {
    const countries = [
        { name: 'Japan', code: 'jp' },
        { name: 'USA', code: 'us' },
        { name: 'UK', code: 'gb' },
        { name: 'Germany', code: 'de' },
        { name: 'Singapore', code: 'sg' },
        { name: 'Australia', code: 'au' },
        { name: 'UAE', code: 'ae' },
        { name: 'India', code: 'in' },
    ];

    return (
        <div className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        WE SERVE CLIENTS FROM
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 hover:transform hover:scale-110 transition duration-300"
                        >
                            <img 
                                src={`https://flagcdn.com/${country.code}.svg`}
                                alt={`${country.name} flag`}
                                className="w-16 h-12 rounded-md object-cover shadow-md"
                            />
                            <p className="text-gray-600 font-medium text-sm">{country.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
