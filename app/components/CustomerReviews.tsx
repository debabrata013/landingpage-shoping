"use client";
export default function CustomerReviews() {
    return (
        <section className="px-6 lg:px-12 py-16">

            <h2 className="text-2xl font-bold">Happy Homes</h2>

            <div className="grid md:grid-cols-3 gap-10 mt-10">

                {/* Left profile */}
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                            {/* Placeholder for user avatar if needed, or just initials */}
                            <div className="w-full h-full flex items-center justify-center bg-[var(--indian-saffron)] text-white font-bold">AS</div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-900">Ananya Sharma</h3>
                            <p className="text-gray-500 text-sm">Home Decor Enthusiast, Bangalore</p>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                        "I was looking for something that blends with my traditional decor yet feels modern.
                        BGS products are perfect! The brass planter adds such a festive vibe to my living room."
                    </p>
                </div>

                {/* Middle Media */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <img src="/pics/image copy 2.png" alt="Kitchen Transformation" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Right Media */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <img src="/pics/image copy 3.png" alt="Living Room Setup" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>

            </div>

        </section>
    );
}

