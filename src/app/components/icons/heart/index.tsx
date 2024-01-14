import React from "react";

import icon from "../../../../../public/icons/heart.png";
import Image from "next/image";

interface Props {
  height: number;
  width: number;
}

const HeartIcon = (props: Props) => {
  return (
    <Image
      alt="Heart Icon"
      src={icon}
      height={props.height}
      width={props.width}
    />
  );
};

export default HeartIcon;
