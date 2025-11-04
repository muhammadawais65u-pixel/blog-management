"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testiomnolgy() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);

    const items = [
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Jonathan Vallem",
            location: "New York, USA",
            avatar: "https://i.pravatar.cc/64?img=1",
        },
        {
            quote:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            name: "Sarah Lin",
            location: "Austin, USA",
            avatar: "https://i.pravatar.cc/64?img=2",
        },
        {
            quote:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
            name: "Marco Ruiz",
            location: "Madrid, Spain",
            avatar: "https://i.pravatar.cc/64?img=3",
        },
        {
            quote:
                "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            name: "Aisha Khan",
            location: "Lahore, Pakistan",
            avatar: "https://i.pravatar.cc/64?img=4",
        },
        {
            quote:
                "Donec id elit non mi porta gravida at eget metus.",
            name: "Tom Becker",
            location: "Berlin, Germany",
            avatar: "https://i.pravatar.cc/64?img=5",
        },
    ];

    useEffect(() => {
        if (!swiperRef.current || !prevRef.current || !nextRef.current) return;
        const swiper = swiperRef.current;
        // Attach external navigation elements and initialize
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current;
        // Some versions require setting el array too
        // @ts-ignore
        if (swiper.navigation && typeof swiper.navigation.init === "function") {
            try {
                swiper.navigation.init();
                swiper.navigation.update();
            } catch (_) {
                // no-op
            }
        }
    }, [prevRef.current, nextRef.current, swiperRef.current]);
    return (
        <section className="py-20 bg-[#191C24]">
            <div className="container px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <p className="uppercase tracking-[0.2em] text-xs text-white/60">Testimonials</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">What people say about our blog</h2>
                        <p className="text-sm md:text-base text-white/60 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-[-24px] top-0 bottom-0 w-px bg-white/10" />
                        <div className="md:pl-12 relative">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                spaceBetween={0}
                                autoHeight
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {items.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="">
                                            <p className="text-white text-lg md:text-2xl font-semibold leading-snug">
                                                {item.quote}
                                            </p>
                                            <div className="mt-8 flex items-center justify-between pr-28">
                                                <div className="flex items-center gap-4">
                                                    <img src={item.avatar} alt="Avatar" className="h-10 w-10 rounded-full object-cover" />
                                                    <div>
                                                        <p className="text-white font-semibold">{item.name}</p>
                                                        <p className="text-white/60 text-sm">{item.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="absolute bottom-0 right-0 flex items-center z-10 gap-3">
                                <button
                                    ref={prevRef}
                                    type="button"
                                    className="h-10 w-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-white/90 transition"
                                    aria-label="Previous testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    ref={nextRef}
                                    type="button"
                                    className="h-10 w-10 rounded-full bg-[#EF4444] text-white flex items-center justify-center hover:bg-[#f05b5b] transition"
                                    aria-label="Next testimonial"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 111.06-1.06l7.25 7.25c.3.3.3.77 0 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}