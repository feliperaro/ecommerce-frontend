"use client";

import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Footer from "./components/Footer";

import data from "../../public/data.json";

export default function Home() {
  return (
    <body className="font-sans h-full w-screen">
      <Header />
      <main>
        <div className="flex justify-center mt-10">
          <h3 className="font-bold text-lg">{"Product Lists"}</h3>
        </div>
        <div className="mt-5 flex flex-row justify-center w-full">
          <div className="flex flex-wrap gap-10 justify-center w-11/12">
            {data.products.map((product, index) => {
              console.log(product);
              return <ProductItem product={product} key={index} />;
              // return (
              // <div className="border h-auto w-auto" key={index}>
              //   PRODUCT
              // </div>
              // );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
