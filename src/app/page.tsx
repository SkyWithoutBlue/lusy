import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Advantages from "@/components/Advantages/Advantages";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Advantages />
            <Footer />
        </div>
    );
}
