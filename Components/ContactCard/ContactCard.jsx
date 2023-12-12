import Image from "next/image";
import React from "react";

export default function ContactCard() {
  return (
    <div className="card w-full mt-[30px] rounded-lg p-4 flex flex-wrap gap-[20px]">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden relative">
        <Image
          src={"/images/1.jpg"}
          fill
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-xl text-white">Maleesha Nayanahan</h1>
        <p className="text-sm text-[#797878]">A full stack web developer</p>
        <div className="flex flex-wrap gap-[15px] mt-[15px]">
          <div className="flex items-center rounded-md gap-[15px]">
            <div className="card p-2 rounded-md">
              <Image src={"/icons/email.svg"} width={20} height={20} alt="" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#797878]">EMAIL</p>
              <p className="text-sm font-semibold text-[#aeadad]">
                maleeshathegreat@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="card p-2 rounded-md">
              <Image src={"/icons/phone.svg"} width={20} height={20} alt="" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#797878]">PHONE</p>
              <p className="text-sm font-semibold text-[#aeadad]">
                +94778365546
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
