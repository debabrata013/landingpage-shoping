
"use client";
import { getImagePath } from '@/lib/basePath';

export default function DesignInspiration() {
    return (
        <section id="journal" className="px-6 lg:px-12 py-16">

            <h2 className="text-2xl font-bold">Design & Inspiration</h2>

            <div className="grid md:grid-cols-3 gap-12 mt-10">

                {/* Large featured story */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                        <img src={getImagePath('/pics/image copy 5.png')} alt="Sustainable Living at Home" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="mt-4 font-semibold text-lg group-hover:text-blue-600 transition-colors">Minimalist Home Organization Guide</p>
                    <p className="text-gray-500 mt-2 text-sm">Discover the art of decluttering and creating a serene living space with our expert tips.</p>
                </div>

                {/* Right small story list */}
                <div className="flex flex-col gap-6">
                    {[
                        { title: '5 Ways to Style Your Coffee Table', img: '/pics/image copy 6.png' },
                        { title: 'Sustainable Materials 101', img: '/pics/image copy 5.png' },
                        { title: 'Creating a Cozy Reading Nook', img: '/pics/image copy 3.png' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 group cursor-pointer">
                            <div className="aspect-square w-24 relative overflow-hidden rounded-xl bg-gray-100">
                                <img src={getImagePath('/pics/image copy 6.png')} alt="5 Ways to Style Your Coffee Table" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div>
                                <p className="font-medium group-hover:text-blue-600 transition-colors">{item.title}</p>
                                <p className="text-gray-500 text-sm mt-1">Read more...</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional right panel */}
                <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="font-bold text-xl mb-2">Sustainable Living Guide</p>
                    <p className="text-gray-500 text-sm mb-4">Eco-friendly choices for your home that make a difference.</p>
                    <button className="text-blue-600 font-semibold text-sm hover:underline">Download Guide &rarr;</button>
                </div>

            </div>

        </section>
    );
}

