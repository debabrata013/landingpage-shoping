"use client";
import SplitText from "./animation/SplitText";
export default function Hero() {
    return (
        <section className="px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12">

            {/* Left Content */}
            <div className="flex flex-col justify-center">
                <div className="text-[var(--indian-saffron)] font-bold text-xl mb-2 tracking-wide uppercase">Namaste & Welcome</div>
                <h1 className="text-4xl md:text-8xl font-bold leading-tight text-gray-900">
                    <SplitText
                        text="Elevate Your Everyday Living"
                        className="font-semibold text-left"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />


                </h1>

                <p className="text-gray-600 mt-4 max-w-md text-lg">
                    Discover premium household essentials designed for modern Indian homes.
                </p>

                <button className="mt-8 px-8 py-4 rounded-full bg-[var(--indian-terracotta)] text-white w-fit font-semibold hover:bg-[var(--indian-saffron)] transition-colors shadow-lg">
                    Shop Collection
                </button>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[3/4] mt-12 relative overflow-hidden rounded-xl">
                    <img src="/pics/image.png" alt="Modern Living Room" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/3] relative overflow-hidden rounded-xl">
                    <img src="/pics/image copy.png" alt="Elegant Decor" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                    <img src="/pics/image copy 2.png" alt="Stylish Furniture" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="aspect-[3/3] relative overflow-hidden rounded-xl">
                    <img src="/pics/image copy 3.png" alt="Cozy Corner" className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                </div>

            </div>

        </section>
    );
}

