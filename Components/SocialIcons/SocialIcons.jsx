import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
export default function SocialIcons() {
  return (
    <div>
      <SocialIcon url="https://www.youtube.com/maleeshaxlive" fgColor="gray" bgColor="transparent" />
      <SocialIcon
        url="https://web.facebook.com/xmaleesha/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.instagram.com/maleeshaxm/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.tiktok.com/maleeshaxm/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.twitter.com/maleeshaxm/"
        fgColor="gray"
        bgColor="transparent"
        className="w-[20px] h-[20px]"
      />
    </div>
  );
}
