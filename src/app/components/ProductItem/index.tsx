import { Product } from "@/app/types/product";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

interface Props {
  product: Product;
  onClick?: MouseEventHandler | undefined;
}

function ProductItem(props: Props) {
  const { product } = props;
  return (
    <div
      className="h-auto w-auto border flex flex-col"
      onClick={props.onClick}
    >
      <div className="flex align-middle">
        <Image
          alt={`image ${product.name}`}
          src={product.imgSrc}
          height={200}
          width={200}
        />
      </div>
      <div className="p-5 justify-center">{product.name}</div>
      <div>{`R$ ${product.price}`}</div>
    </div>
  );
}

export default ProductItem;
