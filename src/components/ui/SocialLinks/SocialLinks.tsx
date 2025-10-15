import Image from "next/image";

interface SocialLink {
    name: string;
    href: string;
    icon: string;
    alt: string;
}

interface SocialLinksProps {
    links: SocialLink[];
    className?: string;
}

export default function SocialLinks({
    links,
    className = "",
}: SocialLinksProps) {
    return (
        <div className={`flex items-center justify-center gap-5 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className="transition-opacity hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={link.icon}
                        alt={link.alt}
                        width={24}
                        height={24}
                        priority
                    />
                </a>
            ))}
        </div>
    );
}
