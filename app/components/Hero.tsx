import { AuroraBackground } from "~/components/AuroraBackGround";

export default function Hero() {
  return (
    <AuroraBackground className="text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-6 md:px-12 py-12 md:py-24">
        <div className="flex-1 flex flex-col justify-center md:items-start text-center md:text-left">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Nice to meet you! <br />
              I'm <span className="text-orange-500">Martin Gadea</span>.
            </h1>
            <div className="border-b-4 border-orange-500 w-24 mb-4 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl mb-8">
              Based in Argentina, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center mt-8 md:mt-0">
          {/* <img src="*" alt="Martin Gadea" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </AuroraBackground>
  );
}
