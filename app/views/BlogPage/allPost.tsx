"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "antd";
import { Button } from "antd";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

function PostItem({ post }: { post: Post }) {
  return (
    <article className="flex flex-col md:flex-row gap-5 md:gap-8 py-6 border-b last:border-b-0">
      <div className="md:w-2/5 w-full">
        <div className="relative w-full h-[200px] md:h-[220px] rounded-md overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>
      <div className="md:w-3/5 w-full">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
          {post.title}
        </h3>
        <div className="mt-3 flex items-center gap-3 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-gray-300" />
            <span>{post.author}</span>
          </div>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} Read</span>
        </div>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-5">
          <Link href="#">
            <Button type="primary" danger>
              Read full article...
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function AllPosts() {
  const posts: Post[] = [
    {
      id: 1,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "2 Min",
      image: "/assets/car1.jpg",
    },
    {
      id: 2,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car2.jpg",
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car3.jpg",
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car3.jpg",
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car3.jpg",
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car3.jpg",
    },
    {
      id: 3,
      title: "A Review Of Cars With Advanced Infotainment Systems",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. Consequatur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet.",
      author: "Dantes",
      date: "Jan 1, 2024",
      readTime: "3 Min",
      image: "/assets/car3.jpg",
    },
    
  ];
  const pageSize = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return posts.slice(start, start + pageSize);
  }, [page, posts]);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  const itemRender = (pageNum: number, type: string, originalElement: React.ReactNode) => {
    const base = "px-3 py-1.5 rounded-md !border !border-gray-300 bg-white text-gray-900 hover:bg-gray-50";
    if (type === "prev") return <button className={base}>Prev</button>;
    if (type === "next") return <button className={base}>Next</button>;
    if (type === "page") {
      return (
        <button className={base} onClick={() => goTo(pageNum)}>
          {pageNum}
        </button>
      );
    }
    return originalElement;
  };

  return (
    <section className="container px-6 py-12">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">All posts</h2>
        <div className="mt-3 h-[3px] w-24 bg-[#EF4444]/70" />
      </div>

      <div className="divide-y">
        {paged.map((post) => (
          <PostItem key={`${post.id}-${post.image}-${post.readTime}`} post={post} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={posts.length}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
          itemRender={itemRender}
        />
      </div>
    </section>
  );
}
