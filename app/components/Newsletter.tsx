"use client";
export default function Newsletter() {
    return (
        <section className="px-6 lg:px-12 py-20 bg-gray-100 text-center">

            <h2 className="text-2xl font-bold">
                Join Our Community for Home Tips & Exclusive Offers
            </h2>

            <div className="mt-6 flex justify-center">
                <input
                    className="px-4 py-3 rounded-l-full border w-72"
                    placeholder="Enter your email"
                />
                <button className="px-6 py-3 bg-black text-white rounded-r-full">
                    Subscribe
                </button>
            </div>

        </section>
    );
}
