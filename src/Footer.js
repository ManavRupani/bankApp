import React from 'react'
const Footer = () => {
  return (
    <div>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="my-5 bg-muted">
      <div className="marquee">
            <div>
              <span>Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</span>
              <span>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</span>
            </div>
          </div>
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-muted"
          style={{backgroundColor: "#C1E1C1"}}
        >
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Links */}
            <section className="">
              {/*Grid row*/}
              <div className="row">
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a className="text-muted">MDBootstrap</a>
                  </p>
                  <p>
                    <a className="text-muted">MDWordPress</a>
                  </p>
                  <p>
                    <a className="text-muted">BrandFlow</a>
                  </p>
                  <p>
                    <a className="text-muted">Bootstrap Angular</a>
                  </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-muted">Your Account</a>
                  </p>
                  <p>
                    <a className="text-muted">Become an Affiliate</a>
                  </p>
                  <p>
                    <a className="text-muted">Shipping Rates</a>
                  </p>
                  <p>
                    <a className="text-muted">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
              </div>
              {/*Grid row*/}
            </section>
            {/* Section: Links */}
            <hr className="my-3" />
            {/* Section: Copyright */}
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                {/* Grid column */}
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  {/* Copyright */}
                  <div className="p-3">
                    © 2020 Copyright:
                    <a className="text-muted" href="https://mdbootstrap.com/"
                      >MDBootstrap.com</a
                    >
                  </div>
                  {/* Copyright */}
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  {/* Facebook */}
                
                </div>
                {/* Grid column */}
              </div>
            </section>
            {/* Section: Copyright */}
          </div>
          {/* Grid container */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </div>
  )
}

export default Footer
