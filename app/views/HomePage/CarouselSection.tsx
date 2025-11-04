'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Card from '@/app/components/Card';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A Review Of Cars With Advanced Infotainment Systems',
    date: 'Jan 10, 2024',
    readTime: '3 Min Read',
    image: '/assets/car1.jpg',
    author: 'Dasteen',
  },
  {
    id: 2,
    title: 'A Deep Dive Into Sports Cars',
    date: 'Jan 10, 2024',
    readTime: '3 Min Read',
    image: '/assets/car2.jpg',
    author: 'Dasteen',
  },
  {
    id: 3,
    title: 'Reviewing Cars With The Best Resale Value',
    date: 'Jan 10, 2024',
    readTime: '3 Min Read',
    image: '/assets/car3.jpg',
    author: 'Dasteen',
  },
  {
    id: 4,
    title: 'Reviewing Cars With The Best Resale Value',
    date: 'Jan 10, 2024',
    readTime: '3 Min Read',
    image: '/assets/car4.jpg',
    author: 'Emma Wilson',
  },
  {
    id: 5,
    title: 'Web Development Trends 2023',
    date: 'Aug 15, 2023',
    readTime: '9 min read',
    image: '/assets/blog5.jpg',
    author: 'David Kim',
  },
];

const CarouselSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-[26px] font-bold text-gray-900">New Technology</h2>
            <span className="hidden md:block w-16 h-[3px] bg-gray-900 rounded"></span>
          </div>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">See All</Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="py-2"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <Card
                  variant="blog"
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
