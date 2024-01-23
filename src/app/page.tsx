"use client";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Footer from "./components/Footer";

import data from "../../public/data.json";


export default function Home() {
  return (
    <body className="font-sans">
      <Header />
      <main >
        <div className="flex justify-center">
          <h3 className="font-bold text-lg">{"Product Lists"}</h3>
        </div>
        <div className="mt-5">
          {data.products.map((product, index) => {
            return (
              <div key={index} className="border rounded-lg mb-3">
                <ProductItem product={product} href={`/product/${product.id}`} />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </body>
  );
}
