import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutBrand from "./components/AboutBrand";
import DesignInspiration from "./components/DesignInspiration";
import CustomerReviews from "./components/CustomerReviews";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <AboutBrand />
      <DesignInspiration />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
