export default function Footer() {


  return (
    <div className="bg-primary-300" style={{backgroundColor:'red'}}>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="avps-footer.png"
              alt="avps-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Find a Patner
                </a>
                <a className="footer-link" href="#">
                  Become a Patner
                </a>
                <a className="footer-link" href="#">
                  Affiliates
                </a>
                <a className="footer-link" href="#">
                  Patner Offers
                </a>
                <a className="footer-link" href="#">
                  Store Examples
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Leaders
                </a>
                <a className="footer-link" href="#">
                  About Us
                </a>
                <a className="footer-link" href="#">
                  Careers
                </a>
                <a className="footer-link" href="#">
                  Press
                </a>
                <a className="footer-link" href="#">
                  Awards
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Overview
                </a>
                <a className="footer-link" href="#">
                  Articles
                </a>
                <a className="footer-link" href="#">
                  Webinars
                </a>
                <a className="footer-link" href="#">
                  Events
                </a>
                <a className="footer-link" href="#">
                  Ecommerce
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  avps Company
                </a>
                <a className="footer-link" href="#">
                  Knowledge Base
                </a>
                <a className="footer-link" href="#">
                  Videos Contact
                </a>
                <a className="footer-link" href="#">
                  Tech Support
                </a>
                <a className="footer-link" href="#">
                  API Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a
                href="https://www.instagram.com/bethup97/?next=%2F"
                target="_blank"
              >
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/berthutapea" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="https://t.me/bethup97" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gilberthutapea/"
                target="_blank"
              >
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2022 avps by{" "}
              <a
                className="italic underline"
                href="https://berthutapea.vercel.app/"
                target="_blank"
              >
                Gilbert Hutapea
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
