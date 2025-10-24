import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/constants/socialLinks";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto! mt-6! px-6 sm:px-8 py-10 flex flex-col items-center gap-6 text-center">
                <div className="text-2xl font-bold text-[#2C2C2C]">
                    Lyudmila <br /> Chipizubova
                </div>
                <SocialLinks links={socialLinks} />
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Lyudmila Chipizubova. Все
                        права защищены.
                    </p>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <Link
                        href="/privacy"
                        className="text-sm text-gray-600 hover:text-[#2C2C2C] transition-colors underline"
                    >
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </footer>
    );
}
