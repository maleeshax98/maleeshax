import React from "react";
import ModalImage from "react-modal-image";
const awards = [
  {
    title: "Notemex - 2022 (ADA newspaper)",
    desc: "A note sharing platform",
    image: "/awards/1.jpeg",
  },
  {
    title: "Udawalmariya - 2022",
    desc: "A website for shaing goods amoung people. We made this during covid 19 for help to people",
    image: "/awards/3.jpg",
  },
  {
    title: "Udawalmariya - 2022",
    desc: "A website for shaing goods amoung people. We made this during covid 19 for help to people",
    image: "/awards/4.jpg",
  },
  {
    title: "Udawalmariya - 2022 (V - FM)",
    desc: "A website for shaing goods amoung people. We made this during covid 19 for help to people",
    image: "/awards/1.jpg",
  },
];
export default function Images() {
  return (
    <div>
      <div className="flex flex-wrap gap-[20px] items-start ">
        {awards.map((a) => (
          <div key={a.image}>
            <ModalImage
              small={a.image}
              large={a.image}
              alt={a.title}
              className="w-[350px] max-w-[80vw] rounded-xl"
              hideDownload={true}
            />
            <div className="max-w-[340px]">
              <p className="text-[#929292] font-semibold mt-[10px]">
                {a.title}
              </p>
              <p className="text-[#929292] font-light text-sm mt-[10px]">
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
