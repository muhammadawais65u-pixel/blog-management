"use client";
import Image from "next/image";


interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  image?: string;
  highlighted?: boolean;
}

const latestBlog: Blog = {
  id: 1,
  title: "Lorem ipsum dolor sit amet, consectetur aising elit, sed do eiusmod tempor.",
  author: "John Doe",
  date: "March 12, 2024",
  image: "/assets/car.webp", // replace with your image path
};

const trendingBlogs: Blog[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    author: "John Doe",
    date: "Aug 23, 2023",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    author: "John Doe",
    date: "Aug 23, 2023",
    highlighted: true,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    author: "John Doe",
    date: "Aug 23, 2023",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    author: "John Doe",
    date: "Aug 23, 2023",
  },
];

export default function LatestBlogSection() {
  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Latest</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <Image
            src={latestBlog.image || "/assets/placeholder.webp"}
            alt="Latest blog"
            width={600}
            height={400}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">
              By <span className="text-red-500 font-medium">{latestBlog.author}</span> |{" "}
              {latestBlog.date}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {latestBlog.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
              Read more
            </button>
          </div>
        </div>
      </div>    
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Blogs</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            See all
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {trendingBlogs.map((blog) => (
            <div
              key={blog.id}
              className={`p-4 rounded-md ${
                blog.highlighted
                  ? "bg-red-500 text-white"
                  : "bg-transparent hover:bg-gray-50"
              } transition`}
            >
              <p
                className={`text-sm mb-1 ${
                  blog.highlighted ? "text-white" : "text-gray-500"
                }`}
              >
                By <span className="font-medium">{blog.author}</span> |{" "}
                {blog.date}
              </p>
              <h4
                className={`font-semibold ${
                  blog.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {blog.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
