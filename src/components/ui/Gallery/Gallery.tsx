"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GalleryImage {
    src: string;
    alt: string;
    title?: string;
    type?: 'image' | 'video';
}

interface GalleryProps {
    images: GalleryImage[];
    autoplay?: boolean;
    effect?: 'slide' | 'coverflow';
}

export default function Gallery({
    images,
    autoplay = true,
    effect = 'coverflow'
}: GalleryProps) {
    return (
        <div className="gallery-container w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={autoplay ? {
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                } : false}
                effect="slide"
                loop={true}
                centeredSlides={false}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {images.map((image, index) => {
                    const isVideo = image.type === 'video' || image.src.endsWith('.mp4') || image.src.endsWith('.webm');

                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                                {isVideo ? (
                                    <video
                                        src={image.src}
                                        className="w-full h-full object-contain"
                                        controls
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={image.src} type="video/mp4" />
                                        Ваш браузер не поддерживает видео.
                                    </video>
                                ) : (
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <style jsx global>{`
                .gallery-container .swiper {
                    width: 100%;
                    padding: 0 0 0px 0;
                }

                .gallery-container .swiper-slide {
                    background-position: center;
                    background-size: cover;
                    transition: all 0.3s ease;
                }

                .gallery-container .swiper-slide-active {
                    transform: scale(1.05);
                }

                .gallery-container .swiper-button-next,
                .gallery-container .swiper-button-prev {
                    width: 44px !important;
                    height: 44px !important;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(154, 138, 136, 0.15);
                }

                .gallery-container .swiper-button-next:hover,
                .gallery-container .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 1);
                    transform: scale(1.08);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
                    border-color: rgba(154, 138, 136, 0.3);
                }


                .swiper-navigation-icon{
                display: none;
                }
                .gallery-container .swiper-button-next::after,
                .gallery-container .swiper-button-prev::after {
                    display: none;
                }
                .gallery-container .swiper-button-next::before,
                .gallery-container .swiper-button-prev::before {
                    content: '';
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border-top: 2px solid #2C2C2C;
                    border-right: 2px solid #2C2C2C;
                    top: 50%;
                    left: 50%;
                    transition: all 0.3s ease;
                }

                .gallery-container .swiper-button-next::before {
                    transform: translate(-55%, -50%) rotate(45deg);
                }

                .gallery-container .swiper-button-prev::before {
                    transform: translate(-45%, -50%) rotate(-135deg);
                }


                .gallery-container .swiper-button-next:hover::before,
                .gallery-container .swiper-button-prev:hover::before {
                    border-color: #9A8A88;
                }

                .gallery-container .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #9A8A88;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .gallery-container .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #2C2C2C;
                    width: 30px;
                    border-radius: 6px;
                }

                .gallery-container .swiper-pagination {
                    bottom: 20px;
                }

                /* Стили для видео */
                .gallery-container video {
                    border-radius: 12px;
                }

                .gallery-container video::-webkit-media-controls-panel {
                    background: rgba(255, 255, 255, 0.95);
                }

                /* Мобильные стили */
                @media (max-width: 768px) {
                    .gallery-container .swiper-button-next,
                    .gallery-container .swiper-button-prev {
                        width: 38px !important;
                        height: 38px !important;
                    }

                    .gallery-container .swiper-button-next::before,
                    .gallery-container .swiper-button-prev::before {
                        width: 9px;
                        height: 9px;
                        border-width: 1.5px;
                    }

                    .gallery-container .swiper {
                        padding: 30px 0 60px 0;
                    }
                }

                @media (max-width: 480px) {
                    .gallery-container .swiper-button-next,
                    .gallery-container .swiper-button-prev {
                        width: 34px !important;
                        height: 34px !important;
                    }

                    .gallery-container .swiper-button-next::before,
                    .gallery-container .swiper-button-prev::before {
                        width: 8px;
                        height: 8px;
                        border-width: 1.5px;
                    }
                }
            `}</style>
        </div>
    );
}
