export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500">About us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Building clean, fast and modern experiences for content creators
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We focus on performance, accessibility and delightful design. Our
            goal is to make publishing simple while keeping code scalable and easy
            to maintain.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" clipRule="evenodd"/></svg>
              </span>
              <div>
                <p className="font-semibold text-gray-900">Performance first</p>
                <p className="text-gray-600 text-sm">Optimized assets, modern tooling and best practices.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" clipRule="evenodd"/></svg>
              </span>
              <div>
                <p className="font-semibold text-gray-900">Accessible by default</p>
                <p className="text-gray-600 text-sm">Keyboard-friendly UI and semantic HTML.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" clipRule="evenodd"/></svg>
              </span>
              <div>
                <p className="font-semibold text-gray-900">Designed for creators</p>
                <p className="text-gray-600 text-sm">Simple authoring workflow with beautiful presentation.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Monthly readers</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">250+</p>
                <p className="text-sm text-gray-500">Articles</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-500">Contributors</p>
              </div>
            </div>
            <div className="mt-6 h-40 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
              Media / Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
