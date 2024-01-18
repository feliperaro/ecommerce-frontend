import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number | string;
  imgSrc: StaticImageData;
}
