import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/constants/socialLinks";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto! mt-6! px-6 sm:px-8 py-10 flex flex-col items-center gap-6 text-center">
                <div className="text-2xl font-bold text-[#2C2C2C]">Ludmila <br/> Chipizubova</div>
                <SocialLinks links={socialLinks} />
                <p className="text-sm text-gray-600 text-center">
                    © {new Date().getFullYear()} Ludmila Chipizubova. Все права защищены.
                </p>
            </div>
        </footer>
    );
}
