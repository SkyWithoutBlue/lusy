"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface StoryImage {
    src: string;
    alt: string;
}

interface StorySwiperProps {
    title: string;
    content?: string[];
    achievements?: string[];
    images: StoryImage[];
    autoplay?: boolean;
    imagePosition?: "left" | "right";
}

export default function StorySwiper({
    title,
    content,
    achievements,
    images,
    autoplay = false,
    imagePosition = "right",
}: StorySwiperProps) {
    // Определяем порядок отображения
    const textOrder =
        imagePosition === "left" ? "order-2 lg:order-2" : "order-2 lg:order-1";
    const imageOrder =
        imagePosition === "left" ? "order-1 lg:order-1" : "order-1 lg:order-2";

    return (
        <div className="story-swiper-container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                {/* Текстовый блок - статичный */}
                <div className={textOrder}>
                    <div className="glass rounded-2xl p-8! shadow-xl h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6!">
                            {title}
                        </h2>

                        {/* Если передан content - отображаем параграфы */}
                        {content &&
                            content.map((paragraph, pIndex) => (
                                <p
                                    key={pIndex}
                                    className={`text-gray-700 leading-relaxed ${
                                        pIndex < content.length - 1
                                            ? "mb-4!"
                                            : ""
                                    }`}
                                >
                                    {paragraph}
                                </p>
                            ))}

                        {/* Если переданы achievements - отображаем список */}
                        {achievements && (
                            <ul className="space-y-3! text-gray-700">
                                {achievements.map((achievement, aIndex) => (
                                    <li
                                        key={aIndex}
                                        className="flex items-start"
                                    >
                                        <span className="text-[#2C2C2C] mr-2! mt-1!">
                                            •
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Swiper для изображений */}
                <div className={imageOrder}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={
                            autoplay
                                ? {
                                      delay: 5000,
                                      disableOnInteraction: false,
                                      pauseOnMouseEnter: true,
                                  }
                                : false
                        }
                        loop={true}
                        className="storyImageSwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-full min-h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .story-swiper-container .swiper {
                    width: 100%;
                    padding: 0 0 60px 0;
                }

                .story-swiper-container .swiper-slide {
                    background-position: center;
                    background-size: cover;
                }

                .story-swiper-container .swiper-button-next,
                .story-swiper-container .swiper-button-prev {
                    width: 44px !important;
                    height: 44px !important;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(154, 138, 136, 0.15);
                }

                .story-swiper-container .swiper-button-next:hover,
                .story-swiper-container .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 1);
                    transform: scale(1.08);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
                    border-color: rgba(154, 138, 136, 0.3);
                }

                .story-swiper-container .swiper-button-next::after,
                .story-swiper-container .swiper-button-prev::after {
                    display: none;
                }

                .story-swiper-container .swiper-button-next::before,
                .story-swiper-container .swiper-button-prev::before {
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-top: 2px solid #2c2c2c;
                    border-right: 2px solid #2c2c2c;
                    top: 50%;
                    left: 50%;
                    transition: all 0.3s ease;
                }

                .story-swiper-container .swiper-button-next::before {
                    transform: translate(-55%, -50%) rotate(45deg);
                }

                .story-swiper-container .swiper-button-prev::before {
                    transform: translate(-45%, -50%) rotate(-135deg);
                }

                .story-swiper-container .swiper-button-next:hover::before,
                .story-swiper-container .swiper-button-prev:hover::before {
                    border-color: #9a8a88;
                }

                .story-swiper-container .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #9a8a88;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .story-swiper-container .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #2c2c2c;
                    width: 30px;
                    border-radius: 6px;
                }

                .story-swiper-container .swiper-pagination {
                    bottom: 20px;
                }

                /* Мобильные стили */
                @media (max-width: 768px) {
                    .story-swiper-container .swiper-button-next,
                    .story-swiper-container .swiper-button-prev {
                        width: 38px !important;
                        height: 38px !important;
                    }

                    .story-swiper-container .swiper-button-next::before,
                    .story-swiper-container .swiper-button-prev::before {
                        width: 9px;
                        height: 9px;
                        border-width: 1.5px;
                    }

                    .story-swiper-container .swiper {
                        padding: 0 0 50px 0;
                    }
                }

                @media (max-width: 480px) {
                    .story-swiper-container .swiper-button-next,
                    .story-swiper-container .swiper-button-prev {
                        width: 34px !important;
                        height: 34px !important;
                    }

                    .story-swiper-container .swiper-button-next::before,
                    .story-swiper-container .swiper-button-prev::before {
                        width: 8px;
                        height: 8px;
                        border-width: 1.5px;
                    }
                }
            `}</style>
        </div>
    );
}
