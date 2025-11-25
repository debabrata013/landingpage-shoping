"use client";
import { getImagePath } from '@/lib/basePath';

export default function FeaturedProducts() {
    return (
        <section id="shop" className="px-6 lg:px-12 py-12 bg-white">

            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Best Sellers</h2>
                <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-[var(--indian-saffron)] hover:text-[var(--indian-saffron)] transition-colors">
                    View All Products
                </button>
            </div>

            <p className="text-gray-500 mt-2">Curated for your Indian home</p>

            <div className="flex gap-6 mt-6 overflow-x-auto pb-4 scrollbar-hide">
                {[
                    { name: 'Modern Kitchen Set', category: 'Kitchen', img: getImagePath('/pics/image copy 4.png'), price: '₹2,999' },
                    { name: 'Bamboo Storage', category: 'Storage', img: getImagePath('/pics/image copy 8.png'), price: '₹899' },
                    { name: 'Eco Cleaning Kit', category: 'Cleaning', img: getImagePath('/pics/image copy 5.png'), price: '₹1,299' },
                    { name: 'Ceramic Vases', category: 'Decor', img: getImagePath('/pics/image copy 6.png'), price: '₹1,499' },
                    { name: 'Spice Jars Set', category: 'Kitchen', img: getImagePath('/pics/image copy 4.png'), price: '₹1,199' },
                    { name: 'Cotton Throw', category: 'Decor', img: getImagePath('/pics/image copy 3.png'), price: '₹2,499' },
                    { name: 'Brass Planter', category: 'Decor', img: getImagePath('/pics/image copy.png'), price: '₹3,299' },
                    { name: 'Jute Rug', category: 'Decor', img: getImagePath('/pics/image.png'), price: '₹4,999' }
                ].map((item, i) => (
                    <div key={i} className="min-w-[280px] group cursor-pointer">
                        <div className="aspect-[4/5] relative overflow-hidden rounded-xl bg-gray-100">
                            <img src={item.img} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="mt-3 flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-lg text-gray-900">{item.name}</p>
                                <p className="text-gray-500 text-sm">{item.category}</p>
                            </div>
                            <span className="font-medium text-[var(--indian-terracotta)]">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
