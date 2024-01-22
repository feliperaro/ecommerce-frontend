"use client";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import { Product } from "./types/product";

import image from "../../public/images/black-tshirt.png";
import Footer from "./components/Footer";

const products: Array<Product> = [
  {
    id: 1,
    title: "Camisa",
    description: "camisa description",
    price: 100,
    thumbSrc: image,
    thumbAlt: "ALt image",
  },
  {
    id: 2,
    title: "Camiseta Confortável",
    description: "camisa description",
    price: 50,
    thumbSrc: image,
    thumbAlt: "ALt image",
  },
];

export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <div className="mt-5">
          {products.map((product, index) => {
            return (
              <div key={index} className="border rounded-lg mb-3">
                <ProductItem
                  product={product}
                  href={"#"}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </body>
  );
}
