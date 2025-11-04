import { Button } from "antd";

export default function HeroSection() {
  return (
    <section className="relative bg-[url('/assets/hero-bg.webp')] bg-cover bg-center bg-no-repeat h-[664px] flex items-center">
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-xl">
          <h1 className="text-[64px] md:text-[70px] leading-[80px] !font-[700] text-white mb-6">
            Your Journey <br />
            Your Car <br />
            Your Way
          </h1>

          <p className="text-gray-200 mb-8 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, deleniti in. Suscipit, sit quam perferendis dignissimos obcaecati magnam, vero at velit dolores, quaerat quibusdam dolorum officiis exercitationem aliquam quas nostrum.
          </p>
<Button type="primary" className="!px-5 !py-5 !text-[20px] !font-[500]" danger>Subscribe</Button>
         
        </div>
      </div>
    </section>
  );
}
