import Image from "next/image";
import React from "react";

import icon from "../../../../../public/icons/search-icon.png";

interface Props {
  height: number;
  width: number;
}

const SearchIcon = (props: Props) => {
  return (
    <Image
      alt="Search Icon"
      src={icon}
      height={props.height}
      width={props.width}
    />
  );
};

export default SearchIcon;
