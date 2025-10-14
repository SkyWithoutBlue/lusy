import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto! mt-6! px-6 sm:px-8 py-10 flex flex-col items-center gap-6 text-center">
                <div className="text-2xl font-bold text-black">Lusy.</div>
                <div className="flex items-center justify-center gap-5">
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="transition-opacity hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/instagram.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                    <a
                        href="#"
                        aria-label="Telegram"
                        className="transition-opacity hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/telegram.svg"
                            alt="Telegram"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                    <a
                        href="#"
                        aria-label="WhatsApp"
                        className="transition-opacity hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/VK.svg"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                    <a
                        href="#"
                        aria-label="WhatsApp"
                        className="transition-opacity hover:opacity-80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/images/whatsapp.svg"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <p className="text-sm text-gray-600 text-center">
                    © {new Date().getFullYear()} Lusy. Все права защищены.
                </p>
            </div>
        </footer>
    );
}
