import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Advantages from "@/components/Advantages/Advantages";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/ui/Cart";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Advantages />
            <About />
            <Footer />
            <Cart />
        </div>
    );
}
