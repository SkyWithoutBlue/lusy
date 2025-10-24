import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/ui/Cart";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <FAQ />
            </main>
            <Footer />
            <Cart />
        </div>
    );
}
