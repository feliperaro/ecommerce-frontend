import { Product } from "@/app/types/product";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface Props {
  product: Product;
  href: string;
}

function ProductItem(props: Props) {
  const { product, href } = props;
  return (
    <div className="mb-5 h-auto w-auto flex flex-col justify-center items-center ">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="h-auto">
          <Image
            alt={`image ${product.thumbAlt}`}
            src={product.thumbSrc}
            height={350}
            width={350}
          />
        </div>
        <div className="p-5 justify-center text-center">
          <h4 className="font-bold">{product.title}</h4>
          <p className="font-light">{product.description}</p>
          <h4 className="mt-1 mb-3 font-semibold">R${product.price}</h4>
        </div>
      </a>
    </div>
  );
}

export default ProductItem;
