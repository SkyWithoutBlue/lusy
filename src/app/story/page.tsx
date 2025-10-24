import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import DecorativeElements from "@/components/ui/DecorativeElements";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Gallery from "@/components/ui/Gallery";
import StorySwiper from "@/components/ui/StorySwiper";

export const metadata: Metadata = {
    title: "Моя история | Людмила Чипизубова - Персональный тренер",
    description:
        "Узнайте историю Людмилы Чипизубовой - путь от мечты к реальности. Как страсть к фитнесу превратилась в миссию помогать людям становиться лучше.",
    openGraph: {
        title: "Моя история | Людмила Чипизубова",
        description:
            "Путь от мечты к реальности. История о том, как страсть к спорту превратилась в миссию помогать людям становиться лучше.",
        images: ["/lusy.jpg"],
    },
};

const storyDecorativeElements = [
    {
        type: "square" as const,
        position: "top-left" as const,
        size: "6rem",
        animation: "pulse" as const,
        className: "top-20 left-20 rotate-12",
    },
    {
        type: "square" as const,
        position: "top-right" as const,
        size: "4rem",
        animation: "spin" as const,
        animationDuration: "25s",
        className: "top-40 right-32 -rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "5rem",
        animation: "bounce" as const,
        className: "bottom-32 left-1/4 rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-right" as const,
        size: "3rem",
        animation: "pulse" as const,
        animationDelay: "1s",
        className: "bottom-20 right-20 -rotate-12",
    },
];

const galleryImages = [
    {
        src: "/lusy.jpg",
        alt: "Людмила Чипизубова - тренировка",
    },
    {
        src: "/lusy_2.jpg",
        alt: "Людмила Чипизубова - персональная тренировка",
    },
    {
        src: "/lusy-no-bg-preview.png",
        alt: "Людмила Чипизубова - персональный тренер",
    },
    {
        src: "/lusy_gym.jpg",
        alt: "Людмила Чипизубова - персональный тренер",
    },
    {
        src: "/lusy_video.mp4",
        alt: "Людмила Чипизубова - персональный тренер",
    },
];

const storyData = {
    title: "Начало пути",
    content: [
        "Мой путь в спорте начался не с желания стать тренером, а с личной трансформации. Я столкнулась с теми же сомнениями и страхами, что и многие сегодня.",
        "Первые шаги были непростыми. Каждая тренировка была вызовом, каждое упражнение — маленькой победой. Но именно эти трудности научили меня понимать своих подопечных на глубоком уровне.",
        "Я поняла, что тренировки — это не только про красивое тело. Это про уверенность, дисциплину и любовь к себе.",
    ],
    images: [
        {
            src: "/lusy-transformation.jpg",
            alt: "Трансформация Людмилы",
        },
        {
            src: "/lusy-domra.jpg",
            alt: "Людмила Чипизубова с гитарой",
        },
        {
            src: "/lusy-thin.jpg",
            alt: "Людмила Чипизубова с гитарой",
        },
        {
            src: "/lusy-study.jpg",
            alt: "Людмила Чипизубова с гитарой",
        },

        {
            src: "/lusy-training.jpg",
            alt: "Людмила после тренировки",
        },
    ],
};

const educationData = {
    title: "Образование",
    content: [
        "Мой путь начался в мире искусства.",
        "Я получила образование концертного исполнителя, преподавателя. Опыт работы на сцене научил меня дисциплине, контролю над телом и умению достигать гармонии между физикой и внутренним состоянием.",
        "Со временем я поняла, что хочу помогать людям развивать тело и дух через движение.",
    ],
    images: [
        {
            src: "/lusy-5345.jpg",
            alt: "Людмила раньше",
        },
        {
            src: "/lusy-4321.jpg",
            alt: "Людмила раньше",
        },
        {
            src: "/lusy-2351.jpg",
           alt: "Людмила раньше",
        },
        {
            src: "/lusy-2377.jpg",
            alt: "Людмила раньше",
        },
    ],
};

const achievementsData = {
    title: "Достижения",
    achievements: [
        "Чемпионка Забайкальского края по функциональному многоборью",
        "Чемпионка Забайкальского края по дуатлон-кроссу",
        "Победительница многочисленных соревнований по функциональному многоборью в Забайкальском крае",
        'Победительница отбора на II Открытый кубок Дальнего Востока "Игры ГТО" — в личном и командном первенстве',
    ],
    images: [
        {
            src: "/lusy-mask.jpg",
            alt: "Людмила на фотосессии",
        },
        {
            src: "/lusy-photosession.jpg",
            alt: "Людмила на фотосессии",
        },
        {
            src: "/lusy_gym.jpg",
            alt: "Людмида в зале",
        },
        {
            src: "/lusy-with-pistol.jpg",
            alt: "Людмила на фотосессии",
        },
        {
            src: "/lusy-dress.jpg",
            alt: "Людмила на фотосессии",
        },


    ],
};

export default function StoryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <DecorativeElements elements={storyDecorativeElements} />

            {/* Hero секция */}
            <section className="relative pt-32! pb-1! overflow-hidden">
                <div className="mx-auto! max-w-7xl px-6! lg:px-8!">
                    <div className="text-center mb-16!">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6!">
                            Моя история
                        </h1>
                        <div className="w-full h-1 bg-gradient-to-r-from-[#2C2C2C] to-gray-400 rounded-full mx-auto! mb-6!"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto!">
                            Путь от мечты к реальности. История о том, как
                            страсть к фитнесу превратилась в миссию помогать
                            людям становиться лучше.
                        </p>
                    </div>
                </div>
            </section>

            {/* Основной контент */}
            <section className="relative">
                <div className="mx-auto! max-w-5xl px-6! lg:px-8!">
                    {/* История - текст статичный, фото в слайдере */}
                    <div className="mb-10!">
                        <StorySwiper
                            title={storyData.title}
                            content={storyData.content}
                            images={storyData.images}
                            autoplay={true}
                        />
                    </div>

                    {/* Образование - текст статичный, фото в слайдере */}
                    <div className="mb-20!">
                        <StorySwiper
                            title={educationData.title}
                            content={educationData.content}
                            images={educationData.images}
                            autoplay={true}
                            imagePosition="left"
                        />
                    </div>
                    {/* Достижения - текст статичный (список), фото в слайдере */}
                    <div className="mb-10!">
                        <StorySwiper
                            title={achievementsData.title}
                            achievements={achievementsData.achievements}
                            images={achievementsData.images}
                            autoplay={true}
                        />
                    </div>
                    {/* Философия тренировок */}
                    <div className="mb-20!">
                        <div className="glass rounded-2xl p-12! shadow-xl text-center">
                            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6!">
                                Моя философия
                            </h2>
                            <div className="max-w-3xl mx-auto!">
                                <p className="text-lg text-gray-700 leading-relaxed mb-6!">
                                    Я верю, что каждый человек уникален, и не
                                    существует универсального подхода к
                                    тренировкам. Моя задача — найти тот путь,
                                    который подходит именно вам.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6!">
                                    Тренировки должны приносить радость, а не
                                    быть наказанием. Я создаю программы, которые
                                    мотивируют, вдохновляют и помогают влюбиться
                                    в процесс.
                                </p>
                                <p className="text-lg font-semibold text-[#2C2C2C]">
                                    "Сильное тело, уверенный дух, ваша лучшая
                                    версия"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Галерея */}
                    <div className="mb-20!">
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6! text-center">
                            Моменты из моей работы
                        </h2>
                        <p className="text-center text-gray-600 mb-12! max-w-2xl mx-auto!">
                            Каждая тренировка — это шаг к вашей цели.
                            Посмотрите, как проходят мои занятия и результаты
                            моих клиентов.
                        </p>
                        <Gallery images={galleryImages} autoplay={true} />
                    </div>

                    {/* Призыв к действию */}
                    <div className="text-center mb-10!">
                        <div className="glass rounded-2xl p-12! shadow-xl">
                            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6!">
                                Готовы начать свою историю?
                            </h2>
                            <p className="text-lg text-gray-700 mb-8! max-w-2xl mx-auto!">
                                Каждая великая история начинается с первого
                                шага. Давайте вместе создадим вашу историю
                                успеха.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#services">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="group relative overflow-hidden"
                                    >
                                        <span className="relative z-10">
                                            Выбрать программу
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
