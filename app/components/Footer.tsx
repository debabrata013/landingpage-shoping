"use client";
export default function Footer() {
    return (
        <footer id="contact" className="px-6 lg:px-12 py-16 bg-[#1a1a1a] text-white border-t-4 border-[var(--indian-saffron)]">

            <div className="grid md:grid-cols-4 gap-12">

                <div className="space-y-4">
                    <div className="font-bold text-2xl text-[var(--indian-saffron)]">BGS</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Elevating Indian homes with premium, sustainable essentials.
                        Celebrating craftsmanship and modern living.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 text-[var(--indian-gold)]">Shop</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#shop" className="hover:text-white cursor-pointer">Kitchen & Dining</a></li>
                        <li><a href="#shop" className="hover:text-white cursor-pointer">Storage & Organization</a></li>
                        <li><a href="#shop" className="hover:text-white cursor-pointer">Home Decor</a></li>
                        <li><a href="#shop" className="hover:text-white cursor-pointer">Eco-Friendly</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 text-[var(--indian-gold)]">Company</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#about" className="hover:text-white cursor-pointer">Our Story</a></li>
                        <li><a href="#about" className="hover:text-white cursor-pointer">Sustainability</a></li>
                        <li><a href="#contact" className="hover:text-white cursor-pointer">Careers</a></li>
                        <li><a href="#contact" className="hover:text-white cursor-pointer">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4 text-[var(--indian-gold)]">Contact</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>support@bgs-india.com</li>
                        <li>+91 98765 43210</li>
                        <li>Mumbai, Maharashtra</li>
                    </ul>
                    <div className="flex gap-4 mt-4">
                        {/* Social Placeholders */}
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[var(--indian-saffron)] transition-colors"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[var(--indian-saffron)] transition-colors"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[var(--indian-saffron)] transition-colors"></div>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>© 2025 BGS Home Essentials. All Rights Reserved.</p>
                <p className="flex items-center gap-1 mt-2 md:mt-0">
                    Made with <span className="text-red-500">❤️</span> in India
                </p>
            </div>

        </footer>
    );
}
