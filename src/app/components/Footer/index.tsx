export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="h-auto pt-3 mb-10">
        <div className="mb-10">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="text-center text-sm">
              {`Copyright © ${currentYear} Created by`}
              <a
                href="https://felipe-roque.netlify.app"
                className="font-medium ms-1"
                target="_blank"
              >
                Felipe Roque
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <ul className="flex gap-10 justify-center">
              <li className="">
                <a href="/home" className="text-sm hover:font-semibold">
                  Home
                </a>
              </li>
              <li className="">
                <a href="/products" className="text-sm hover:font-semibold">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
