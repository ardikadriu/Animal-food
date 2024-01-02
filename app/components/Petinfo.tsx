import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import Paw from "@/public/paw.png";

const Petinfo = () => {
  return (
    <div className=" flex mt-[45px] items-center">
      <div className="flex items-center mr-[52px] ">
        <div className="bg-black w-[59px] h-[59px] flex justify-center items-center rounded-[12px] mr-[5px]">
          <Image src={Paw} width={44} height={44} alt="pawanimal" />
        </div>
        <h1 className="uppercase font-black text-[24px]">happy pet</h1>
      </div>
      <div className="flex w-[677px] justify-between">
        <h2 className="hover:font-bold hover:cursor-pointer text-[16px]">
          Home
        </h2>
        <h2 className="hover:font-bold hover:cursor-pointer">Friends</h2>
        <h2 className="hover:font-bold hover:cursor-pointer">
          About the service
        </h2>
        <h2 className="hover:font-bold hover:cursor-pointer">Contacts</h2>
        <FiPhone size="23px" />
        <h2 className="hover:font-bold hover:cursor-pointer">
          +7 989 513-43-14
        </h2>
      </div>
      <div className="flex items-center ml-[70px]">
        <div className="bg-black w-[47px] h-[45px] rounded-full flex justify-center items-center mr-[10px] ">
          <CgShoppingCart color="white" size="21px" />
        </div>{" "}
        <h1>8 756 р.</h1>
      </div>
    </div>
  );
};

export default Petinfo;
