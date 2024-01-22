import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number | string;
  thumbSrc: StaticImageData;
  thumbAlt: string;
}
