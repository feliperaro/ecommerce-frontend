export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              {`Copyright © ${currentYear} Created by`}
              <a
                href="https://felipe-roque.netlify.app"
                className="text-dark ms-1"
                target="_blank"
              >
                Felipe Roque
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="/home" className="nav-link text-sm text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/products" className="nav-link text-sm text-muted">
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
