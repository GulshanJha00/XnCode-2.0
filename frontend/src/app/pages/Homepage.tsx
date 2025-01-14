import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
const Homepage = () => {
  /* <TypewriterEffectSmooth words={words} /> */
  const words = [
    {
      text: "COMPETE.",
      className: "text-blue-500 inline text-5xl lg:text-9xl dark:text-blue-500",  
    },
  ];
  return (
    <div className="px-8  lg:block  md:px-[100px] w-screen md:pt-[50px] h-screen bg-gradient-to-b from-[#0F0420] to-[#3F1186]">
      <div
        className="h-full w-full flex flex-col justify-center md:flex-col text-5xl lg:text-9xl"
        style={{
          fontFamily: "Itim",
        }}
      >
        <h1>CODE.</h1>
        <h1>CREATE.</h1>
        <h1>
          <TypewriterEffectSmooth words={words} />
        </h1>
        <div>

  <Link href='/home' className="py-1 lg:py-5 absolute px-10 lg:px-36 rounded-2xl text-center font-bold bg-[#00C4E8] text-lg lg:text-3xl">Get Started</Link>
</div>
        <h1 className="text-2xl md:text-5xl text-center mt-14 lg:mt-36">Trusted By</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Homepage;
