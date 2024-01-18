"use client";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import { Product } from "./types/product";

import image from "../../public/images/black-tshirt.png";
import Footer from "./components/Footer";

const products: Array<Product> = [
  {
    id: 1,
    name: "Camisa",
    price: 100,
    imgSrc: image,
  },
  {
    id: 2,
    name: "Camiseta Confortável",
    price: 50,
    imgSrc: image,
  },
];

export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <div className="flex gap-10">
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                onClick={() => alert("click!")}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </body>
  );
}
