import { Button } from "antd";
import Image from "next/image";
import herosection4 from "../../../public/assets/herosection4.png";
export default function HeroSection() {
  return (
    <section className="bg-[#31323C] relative flex  justify-between h-auto md:h-[664px]  ">
      
      {/* Content */}
      <div className="relative container justify-between  gap-4 md:gap-0 py-5 md:py-0  flex-col md:flex-row flex items-center mx-auto px-6 z-10">
        <div className="w-auto md:w-[50%]">
          <h1 className="text-[64px] md:text-[70px] leading-[80px] font-bold text-white mb-6">
            Your Journey <br />
            Your Car <br />
            Your Way
          </h1>

          <p className="text-gray-200 mb-8 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, deleniti in. Suscipit, sit quam perferendis dignissimos obcaecati magnam, vero at velit dolores, quaerat quibusdam dolorum officiis exercitationem aliquam quas nostrum.
          </p>
<Button type="primary" className="!px-5 !py-5 !text-[20px] !font-[500]" danger>Subscribe</Button>
         
        </div>
        <div className="flex justify-end items-center "   >
            <Image src={herosection4} alt="Car" className="w-[500px]"  />
        </div>
      </div>
    </section>
  );
}
