"use client";

export default function AboutBrand() {
    return (
        <section id="about" className="px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <img src="/pics/image copy 5.png" alt="About BGS" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Redefining Indian Home Essentials</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    At BGS, we fuse traditional Indian craftsmanship with modern minimalist design.
                    We believe that the objects you surround yourself with should bring joy and functionality to your daily life.
                    Founded with a passion for sustainable living, we curate a collection that celebrates our heritage.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    From our kitchenware to our storage solutions, every item is thoughtfully designed to harmonize with your home
                    and simplify your routine.
                </p>
                <button className="px-8 py-3 bg-[var(--indian-navy)] text-white rounded-full hover:bg-[var(--indian-saffron)] transition-colors shadow-md">
                    Our Story
                </button>
            </div>
        </section>
    );
}
