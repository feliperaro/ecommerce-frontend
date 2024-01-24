import { Product } from "@/app/types/product";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface Props {
  product: Product;
}

function ProductItem(props: Props) {
  const { product } = props;
  console.log("thumb_src", product.thumb_src);
  
  return (
    <div className="border rounded-lg flex flex-col items-center lg:w-1/5 md:w-1/3 sm:w-4/6">
      <a className="" href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">
        <div className="p-3 flex justify-center h-auto w-auto">
          <Image
            alt={product.thumb_alt}
            src={product.thumb_src}
            height={250}
            width={200}
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
