import { Image } from "./image";

export interface Product {
  id: number | string;
  color: string,
  colors: Array<string>;
  title: string;
  price: number | string;
  description: string;
  thumb_alt: string;
  thumb_src: string;
  images: Array<Image>;
  stock: boolean;
}
