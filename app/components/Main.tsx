import Image from "next/image";
import Parrot from "@/public/parrot.png";
import Cats from "@/public/Cats.png";
import Cat from "@/public/orangecat.png";
import Dog from "@/public/Dog.png";
const Main = () => {
  return (
    <div className=" flex  mt-[45px]  gap-[75px] ml-[75px]">
      <div className="mr-[75]">
        <h1 className="max-w-[405px] text-[35px] text-left mt-[50px] font-black">
          Your new friend with home delivery
        </h1>
        <p className="text-[23px] max-w-[407px]">
          Online pet store is a convenient solution when you are too lazy to
          leave the houses
        </p>
        <button className="w-[239px] h-[64px] rounded-[40px] mt-[20px] bg-[#D71515] shadow-[0px_9px_35px_0px_rgba(238,10,10,0.63)] text-white text-[20px]">
          View friends
        </button>
        <div className="mt-[200px] flex gap-[26px]">
          <div className="w-[223px] bg-white rounded-t-[20px]">
            <h1 className="mt-6 ml-4 font-semibold">Birds</h1>
            <Image src={Parrot} width={188} height={188} alt="parrot" />
          </div>
          <div className="w-[223px] bg-white rounded-t-[20px]">
            <h1 className="mt-6 ml-4 font-semibold">Cats</h1>
            <Image src={Cats} width={183} height={207} alt="cat" />
          </div>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <div className="w-[668px] h-[668px] border-[70px] border-[#FFC061]   rounded-[668px]">
          <div className="w-[588px] h-[637px] blur-[100px] bg-[#f0e9a9c2] absolute rounded-[637px] left-[-110px] "></div>
        </div>
        <Image
          className=" absolute z-10 shrink-0   h-[702px] left-[-60px] bottom-[0px]"
          src={Dog}
          width={679}
          height={702}
          alt="dog"
        />
        <Image
          className="absolute z-0 bottom-[35px] right-[-16px]"
          src={Cat}
          width={646}
          height={380}
          alt="orangecat"
        />
      </div>
    </div>
  );
};

export default Main;
