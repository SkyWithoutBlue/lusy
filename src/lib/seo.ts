import { Metadata } from "next";

const baseUrl = "https://chipizubova.online/";

export const defaultMetadata: Metadata = {
    title: {
        default:
            "Людмила Чипизубова | Онлайн марафоны и тренировки | Персональный тренер по похудению",
        template: "%s | Людмила Чипизубова - мотиватор | ЗОЖ",
    },
    description:
        "Персональный тренер Людмила Чипизубова. Онлайн марафоны для похудения, персональные тренировки, кросс-тренинг, full-body тренировки. 8+ лет опыта, Сотни довольных клиентов. Здоровый образ жизни 24/7.",
    keywords: [
        "персональный тренер",
        "тренер по похудению",
        "онлайн марафоны похудения",
        "онлайн марафон похудения",
        "онлайн марафон",
        "персональные тренировки онлайн",
        "кросс-тренинг",
        "фулл-бади",
        "full-body",
        "фитнес тренер",
        "похудение",
        "здоровый образ жизни",
        "тренировки для похудения",
        "онлайн тренировки",
        "фитнес онлайн",
        "похудение онлайн",
        "марафон похудения",
        "индивидуальные тренировки",
        "групповые тренировки",
        "планы питания",
        "контроль веса",
        "фитнес коучинг",
        "тренировка",
        "Людмила Чипизубова",
    ],
    authors: [{ name: "Людмила Чипизубова" }],
    creator: "Людмила Чипизубова",
    publisher: "Людмила Чипизубова",
    metadataBase: new URL(baseUrl),
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: baseUrl,
        siteName: "Людмила Чипизубова - Тренировки онлайн",
        title: "Людмила Чипизубова | Онлайн марафоны и тренировки | Персональный тренер по похудению",
        description:
            "Персональный тренер Людмила Чипизубова. Онлайн марафоны для похудения, персональные тренировки, кросс-тренинг, онлайн курс. 8+ лет опыта, Сотни довольных клиентов.",
        images: [
            {
                url: "/lusy-no-bg-preview.png",
                width: 1200,
                height: 630,
                alt: "Людмила Чипизубова - Персональный тренер по похудению",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Людмила Чипизубова | Персональный тренер по похудению",
        description:
            "Онлайн марафоны для похудения, персональные тренировки, кросс-тренинг. 8+ лет опыта, Сотни довольных клиентов.",
        images: ["/lusy-no-bg-preview.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "G-4LVZ7PCMZW",
        yandex: "104778739",
    },
    category: "fitness",
    classification:
        "Персональный тренер, фитнес, похудение, здоровый образ жизни, онлайн марафоны похудения, кросс-тренинг, онлайн курс",
};

export function generatePageMetadata({
    title,
    description,
    keywords = [],
    path = "",
}: {
    title: string;
    description: string;
    keywords?: string[];
    path?: string;
}): Metadata {
    return {
        ...defaultMetadata,
        title,
        description,
        keywords: [...defaultMetadata.keywords!, ...keywords],
        openGraph: {
            ...defaultMetadata.openGraph,
            title,
            description,
            url: `${baseUrl}${path}`,
        },
        twitter: {
            ...defaultMetadata.twitter,
            title,
            description,
        },
        alternates: {
            canonical: `${baseUrl}${path}`,
        },
    };
}

export const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Людмила Чипизубова",
    jobTitle: "Персональный тренер",
    description:
        "Персональный тренер с 8-летним стажем в области кросс-тренинга и фитнеса. Специализируется на онлайн марафонах для похудения и персональных тренировках.",
    url: baseUrl,
    image: `${baseUrl}/lusy-no-bg-preview.png`,
    sameAs: [
        "https://www.instagram.com/ludmila_cipizubova_/",
        "https://t.me/Chipizubova_Lyudmila",
        "https://vk.com/lyudmila_chipizubova",
    ],
    knowsAbout: [
        "Кросс-тренинг",
        "Похудение",
        "Фитнес",
        "Здоровый образ жизни",
        "Персональные тренировки",
        "Онлайн тренировки",
        "Планы питания",
    ],
    hasOccupation: {
        "@type": "Occupation",
        name: "Персональный тренер",
        occupationLocation: {
            "@type": "Country",
            name: "Россия",
        },
        skills: "Кросс-тренинг, фитнес, похудение, здоровый образ жизни",
    },
    offers: [
        {
            "@type": "Service",
            name: "Персональные тренировки",
            description:
                "Индивидуальные занятия для достижения ваших целей: сила, рельеф, выносливость.",
            provider: {
                "@type": "Person",
                name: "Людмила Чипизубова",
            },
            offers: {
                "@type": "Offer",
                price: "2500",
                priceCurrency: "RUB",
            },
        },
        {
            "@type": "Service",
            name: "Онлайн-сопровождение",
            description:
                "План тренировок и питания, контроль прогресса и обратная связь каждую неделю.",
            provider: {
                "@type": "Person",
                name: "Людмила Чипизубова",
            },
            offers: {
                "@type": "Offer",
                price: "3500",
                priceCurrency: "RUB",
            },
        },
        {
            "@type": "Service",
            name: "Групповые занятия",
            description:
                "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
            provider: {
                "@type": "Person",
                name: "Людмила Чипизубова",
            },
            offers: {
                "@type": "Offer",
                price: "900",
                priceCurrency: "RUB",
            },
        },
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
    },
};
