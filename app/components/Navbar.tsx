"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between py-4 px-6 lg:px-12">
            <div className="font-bold text-xl">BGS</div>

            <div className="hidden md:flex gap-8 text-gray-600">
                <a href="#shop" className="hover:text-[var(--indian-saffron)] transition-colors">Shop</a>
                <a href="#about" className="hover:text-[var(--indian-saffron)] transition-colors">About</a>
                <a href="#journal" className="hover:text-[var(--indian-saffron)] transition-colors">Journal</a>
                <a href="#contact" className="hover:text-[var(--indian-saffron)] transition-colors">Contact</a>
            </div>

            <button className="px-5 py-2 rounded-full border">
                Sign In
            </button>
        </nav>
    );
}
