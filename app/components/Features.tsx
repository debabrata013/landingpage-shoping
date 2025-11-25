"use client";

export default function Features() {
    return (
        <section className="px-6 lg:px-12 py-16 bg-gray-50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[var(--indian-saffron)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">Crafted with the finest materials to ensure durability and elegance in every detail.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[var(--indian-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Sustainable Design</h3>
                    <p className="text-gray-600">Eco-friendly production processes that respect the planet without compromising style.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[var(--indian-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Modern Aesthetic</h3>
                    <p className="text-gray-600">Timeless designs that seamlessly blend with contemporary home interiors.</p>
                </div>
            </div>
        </section>
    );
}
