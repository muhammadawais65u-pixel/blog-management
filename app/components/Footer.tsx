"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232536] text-white">
      <div className="container px-6">
        <div className="flex flex-col gap-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-pink-300" />
              <span className="font-bold">LOGO</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li><Link href="/" className="hover:text-white/80">Home</Link></li>
                <li><Link href="#" className="hover:text-white/80">Blog</Link></li>
                <li><Link href="#" className="hover:text-white/80">About us</Link></li>
                <li><Link href="#" className="hover:text-white/80">Contact us</Link></li>
                <li><Link href="#" className="hover:text-white/80">Privacy Policy</Link></li>
              </ul>
            </nav>
          </div>

          <div className="bg-[#1E2230] rounded-md px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h3 className="text-2xl md:text-3xl font-extrabold max-w-xl">Subscribe to our news letter to get latest updates and news</h3>
              <form className="w-full md:w-auto">
                <div className="flex w-full flex-col md:flex-row md:w-[500px] gap-3">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="flex-1 rounded-full bg-white text-black placeholder:text-gray-500 px-5 py-3 outline-none"
                  />
                  <button type="submit" className="rounded-full bg-[#EF4444] px-6 py-3 font-semibold flex items-center gap-2 hover:bg-[#f05b5b]">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M2.01 21l20.99-9L2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
            <div className="space-y-1 text-white/80 text-sm">
              <p>Finstreet 118 2561 abctown</p>
              <p>example@femail.com  001 2345 442</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Facebook" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.5-1.6.8-2.4 1-1.4-1.5-3.8-1.2-5 0-1.1 1.1-1.3 2.7-.6 4-3-.2-5.6-1.6-7.4-3.9-1 1.8-.5 4.1 1.2 5.3-.6 0-1.1-.2-1.6-.4 0 2 1.4 3.7 3.4 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 3 3.9 3-1.6 1.3-3.6 2-5.7 2h-.9c2 1.2 4.3 1.9 6.7 1.9 8.1 0 12.7-7 12.4-13.3.8-.5 1.4-1.2 1.9-2z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1012 17.8 2.8 2.8 0 0012 9.2zm5.8-2.7a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white/80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0H12v2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.8V23h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V23h-5V8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
